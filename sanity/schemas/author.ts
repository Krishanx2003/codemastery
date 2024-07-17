import { MdAccountCircle as icon } from 'react-icons/md';



export interface Author {
  _id: string;
  _createdAt: string;
  name: string;
  slug: { current: string };
  image: { asset: { url: string } };
  bio: string;
}

export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
} as const;
