// src/components/Lightbox.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export interface LightboxImage {
  id: string;
  src: string;        // full‑res URL
  thumbnail: string;  // small URL
  alt?: string;
}

interface LightboxProps {
  images: LightboxImage[];
}

export function Lightbox({ images }: LightboxProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const prev = () => setIndex(i => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex(i => (i === images.length - 1 ? 0 : i + 1));

  // Arrow keys + Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
      if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
      if (e.key === 'Escape') { e.preventDefault(); setOpen(false); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, images.length]);

  // Lock background scroll
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setOpen(false)}
        >
          <button
            onClick={e => { e.stopPropagation(); prev(); }}
            className="hidden md:block absolute left-4 text-white text-4xl p-2"
            aria-label="Previous image"
          >
            ‹
          </button>

          <div className="relative w-[90vw] h-[80vh]">
            <Image
              src={images[index].src}
              alt={images[index].alt || ''}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          <button
            onClick={e => { e.stopPropagation(); next(); }}
            className="hidden md:block absolute right-4 text-white text-4xl p-2"
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}

      {/* Thumbnail grid */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((img, i) => (
          <div
            key={img.id}
            className="cursor-pointer overflow-hidden group"
            onClick={() => { setIndex(i); setOpen(true); }}
          >
            <Image
              src={img.thumbnail}
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
