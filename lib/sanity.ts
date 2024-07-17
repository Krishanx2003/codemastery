// src/lib/createClient.ts
import { client } from './createClient';

const coursesQuery = `*[_type == "course"]{
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
}`;

export const getCourses = async () => {
  return await client.fetch(coursesQuery);
};
