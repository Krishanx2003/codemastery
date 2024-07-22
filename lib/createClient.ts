import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});


const builder = imageUrlBuilder(client);



export function urlFor(source: any) {
  if (!source || !source.asset || !source.asset._ref) {
    return {
      url: () => '/placeholder.png',
      width: () => ({
        height: () => ({
          fit: () => ({ url: () => '/placeholder.png' }),
        }),
      }),
    };
  }

  return builder.image(source);
}