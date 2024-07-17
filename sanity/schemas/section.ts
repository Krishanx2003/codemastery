import { MdList as icon } from 'react-icons/md';

export default {
  name: 'section',
  title: 'Section',
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
      name: 'lessons',
      title: 'Lessons',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'lesson' } }],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
