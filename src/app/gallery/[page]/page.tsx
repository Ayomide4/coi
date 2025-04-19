// src/app/gallery/[page]/page.tsx
import { sanity, urlFor } from '@/lib/sanity'
import { galleryQuery } from '@/lib/queries'
import Link from 'next/link'
import { Lightbox } from "../../components/Lightbox"
const PAGE_SIZE = 12

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
  const page = parseInt(params.page, 10) || 1
  const all = await sanity.fetch(galleryQuery)

  // Slice out this page’s images
  const start = (page - 1) * PAGE_SIZE
  const images = all.slice(start, start + PAGE_SIZE)

  const totalPages = Math.ceil(all.length / PAGE_SIZE)

  // Prepare the data shape Lightbox expects
  const galleryImages = images.map((img: any) => ({
    id: img._id,
    src: urlFor(img.image).width(800).height(600).url(),
    alt: img.alt || '',
  }))

  return (
    <div className="px-4 py-8 text-center">
      <h1 className="text-white text-4xl md:text-5xl font-semibold mb-8 mt-24">
        Gallery — Page {page}
      </h1>

      {/* Lightbox + Thumbnails */}
      <Lightbox images={galleryImages} />

      {/* Pagination */}
      <nav className="flex justify-center items-center space-x-4 mt-8">
        {page > 1 && (
          <Link
            href={`/gallery/${page - 1}`}
            className="underline hover:text-gray-700"
          >
            ← Prev
          </Link>
        )}
        <span>
          Page {page} of {totalPages}
        </span>
        {page < totalPages && (
          <Link
            href={`/gallery/${page + 1}`}
            className="underline hover:text-gray-700"
          >
            Next →
          </Link>
        )}
      </nav>
    </div>
  )
}
