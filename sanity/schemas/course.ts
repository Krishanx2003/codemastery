import { MdLocalMovies as icon } from 'react-icons/md';

export default {
  name: 'course',
  title: 'Course',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
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
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } },
      ],
    },
    {
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          { title: 'React', value: 'react' },
          { title: 'PHP', value: 'php' },
          { title: 'Java', value: 'java' },
          { title: 'C++', value: 'c++' },
          { title: 'C', value: 'c' },
        ],
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    },
    {
      name: 'modules',
      title: 'Modules',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'module' } }],
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'section' } }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
};
