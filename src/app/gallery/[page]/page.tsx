// src/app/gallery/[page]/page.tsx
import { sanity, urlFor } from '@/lib/sanity'
import { galleryQuery } from '@/lib/queries'
import Link from 'next/link'
import { Lightbox, LightboxImage } from '../../components/Lightbox'

const PAGE_SIZE = 8

export async function generateStaticParams() {
  const all = await sanity.fetch(galleryQuery)
  const pages = Math.ceil(all.length / PAGE_SIZE)
  return Array.from({ length: pages }, (_, i) => ({ page: String(i + 1) }))
}

export default async function GalleryPage({
  params,
}: {
  params: { page: string }
}) {
  const page = Number(params.page) || 1
  const all = await sanity.fetch(galleryQuery)

  const start = (page - 1) * PAGE_SIZE
  const images = all.slice(start, start + PAGE_SIZE)
  const totalPages = Math.ceil(all.length / PAGE_SIZE)

  // **Build both thumbnail & full‑res URLs here**
  const galleryImages: LightboxImage[] = images.map((img: any) => ({
    id: img._id,
    // full‑res for the lightbox overlay
    src: urlFor(img.image).width(1600).auto('format').fit('max').url(),
    // low‑res for the grid thumbnails
    thumbnail: urlFor(img.image)
      .width(600)
      .height(500)
      .auto('format')
      .fit('max')
      .url(),
    alt: img.alt || '',
  }))

  return (
    <div className="px-4 py-8 text-center">
      <h1 className="text-4xl md:text-5xl font-semibold mb-8 mt-24 text-white">
        Gallery — Page {page}
      </h1>

      {/* Lightbox now just works with plain URLs */}
      <Lightbox images={galleryImages} />

      <nav className="flex justify-center items-center space-x-4 mt-8">
        {page > 1 && (
          <Link href={`/gallery/${page - 1}`} className="underline hover:text-gray-700">
            ← Prev
          </Link>
        )}
        <span>Page {page} of {totalPages}</span>
        {page < totalPages && (
          <Link href={`/gallery/${page + 1}`} className="underline hover:text-gray-700">
            Next →
          </Link>
        )}
      </nav>
    </div>
  )
}
