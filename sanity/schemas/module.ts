import { MdPlayCircleOutline as icon } from 'react-icons/md';

export default {
  name: 'module',
  title: 'Module',
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
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
