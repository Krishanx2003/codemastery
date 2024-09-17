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
      options: {
        list: [
          { title: 'JavaScript', value: 'javascript' },
          { title: 'TypeScript', value: 'typescript' },
          { title: 'HTML', value: 'html' },
          { title: 'CSS', value: 'css' },
          // Add more languages as needed
        ],
        layout: 'dropdown', // Optional: layout style for the dropdown
      },
    },
    {
      name: 'code',
      title: 'Code',
      type: 'text',
      rows: 6, // Optional: Adjusts the height of the text area
    },
  ],
});
