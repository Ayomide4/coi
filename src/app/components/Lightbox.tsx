'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface LightboxProps {
  images: { id: string; src: string; alt?: string }[];
}

export function Lightbox({ images }: LightboxProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex(i => (i === 0 ? images.length - 1 : i - 1));
  const next = () =>
    setIndex(i => (i === images.length - 1 ? 0 : i + 1));

  // handle arrow keys & Escape
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          prev();
          break;
        case 'ArrowRight':
          e.preventDefault();
          next();
          break;
        case 'Escape':
          e.preventDefault();
          setOpen(false);
          break;
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, images.length]);

  // lock body scroll when lightbox is open
  useEffect(() => {
    if (open) {
      // prevent background scroll
      document.body.style.overflow = 'hidden';
    } else {
      // restore scrolling
      document.body.style.overflow = '';
    }
    // cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {/* Overlay */}
      {open && (

        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setOpen(false)}
        >
          {/* Left gradient + button */}
          <div className="hidden absolute inset-y-0 left-0 md:left-20 w-16 md:flex items-center justify-center bg-gradient-to-r from-black/60 to-transparent">
            <button
              onClick={e => { e.stopPropagation(); prev(); }}
              className="text-white text-4xl p-2"
              aria-label="Previous image"
            >‹</button>
          </div>
          <div className="relative w-[90vw] h-[80vh]">
            <Image
              src={images[index].src}
              alt={images[index].alt || ''}
              fill
              className='object-contain'
            />
          </div>
          {/* Right gradient + button */}
          <div className="hidden absolute inset-y-0 right-0 md:right-20 w-16 md:flex items-center justify-center bg-gradient-to-l from-black/60 to-transparent">
            <button
              onClick={e => { e.stopPropagation(); next(); }}
              className="text-white text-4xl p-2"
              aria-label="Next image"
            >›</button>
          </div>        </div>
      )}

      {/* Thumbnails */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((img, i) => (
          <div
            key={img.id}
            className="cursor-pointer overflow-hidden group"
            onClick={() => { setIndex(i); setOpen(true); }}
          >
            <Image
              src={img.src}
              alt={img.alt || ''}
              width={400}
              height={300}
              className="transform group-hover:scale-105 transition"
            />
          </div>
        ))}
      </div>
    </>
  );
}
