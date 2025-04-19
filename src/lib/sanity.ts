import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const sanity = createClient({
  projectId: '10esvgoa',
  dataset: 'production',
  apiVersion: '2025-04-19',
  useCdn: true,
})

const builder = imageUrlBuilder(sanity)

// instead of `source: any`, use SanityImageSource
export const urlFor = (source: SanityImageSource) => builder.image(source)
