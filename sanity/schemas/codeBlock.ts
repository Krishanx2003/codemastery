import { defineType } from 'sanity';

export default defineType({
  name: 'codeBlock',
  title: 'Code Block',
  type: 'object',
  fields: [
    {
      name: 'language',
      title: 'Language',
      type: 'string',
    },
    {
      name: 'code',
      title: 'Code',
      type: 'text',
    },
  ],
});
