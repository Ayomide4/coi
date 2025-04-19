import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanity = createClient({
  projectId: '10esvgoa',           // your project ID
  dataset: 'production',           // your dataset
  apiVersion: '2025-04-19',        // or today’s date
  useCdn: true,
})

const builder = imageUrlBuilder(sanity)
export const urlFor = (source: any) => builder.image(source)
