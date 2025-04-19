// src/app/gallery/[page]/page.tsx
import { sanity, urlFor } from '@/lib/sanity'
import { galleryQuery } from '@/lib/queries'
import Image from 'next/image'
import Link from 'next/link'

const PAGE_SIZE = 12

export async function generateStaticParams() {
  // Fetch total count
  const all = await sanity.fetch(galleryQuery)
  const pages = Math.ceil(all.length / PAGE_SIZE)
  return Array.from({ length: pages }, (_, i) => ({ page: String(i + 1) }))
}

export default async function GalleryPage({ params }: { params: { page: string } }) {
  const page = parseInt(params.page, 10) || 1
  const all = await sanity.fetch(galleryQuery)

  // Slice out this page’s images
  const start = (page - 1) * PAGE_SIZE
  const images = all.slice(start, start + PAGE_SIZE)

  const totalPages = Math.ceil(all.length / PAGE_SIZE)

  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Gallery — Page {page}</h1>

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map(img => (
          <figure key={img._id} className="group overflow-hidden">
            <Image
              src={urlFor(img.image).width(400).height(300).url()}
              alt={img.alt || ''}
              width={400}
              height={300}
              loading="lazy"
              className="transform group-hover:scale-105 transition"
            />
            {img.alt && (
              <figcaption className="mt-2 text-sm text-center">{img.alt}</figcaption>
            )}
          </figure>
        ))}
      </div>

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
