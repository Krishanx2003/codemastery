import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import groq from 'groq';

// Setup Sanity client with environment variables
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Use `true` for production to cache requests
});

// Set up the image URL builder
const builder = imageUrlBuilder(client);

// Function to generate image URLs
export const urlFor = (source: any) => {
  return builder.image(source);
};

// Fetch code snippets from Sanity
export const getCodeSnippets = async () => {
  const query = groq`*[_type == "codeBlock"]`;
  return await client.fetch(query);
};

// Fetch courses from Sanity
const coursesQuery = groq`
  *[_type == "course"]{
    _id,
    title,
    slug,
    sections[]->{
      _id,
      title,
      slug,
      lessons[]->{
        _id,
        title,
        slug
      }
    }
  }
`;

export const getCourses = async () => {
  return await client.fetch(coursesQuery);
};

// Fetch a lesson by slug
const lessonQuery = groq`
  *[_type == "lesson" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    description,
    content,
    image
  }
`;

export const getLessonBySlug = async (slug: string) => {
  return await client.fetch(lessonQuery, { slug });
};
