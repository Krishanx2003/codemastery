import React from 'react';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import { CourseContentProps } from '../types/sanity';
import { urlFor } from '../lib/createClient';

const components: PortableTextComponents = {
  types: {
    code: ({ value }) => <pre>{value.code}</pre>,
  },
  marks: {
    link: ({ children, value }) => (
      <a href={value.href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
};

const CourseContent: React.FC<CourseContentProps> = ({ content, image }) => {
  return (
    <section className="mb-8">
      <img
        src={urlFor(image).url()}
        alt={content[0]?.children[0]?.text || 'Course image'}
        className="mb-4"
      />
      <PortableText value={content} components={components} />
    </section>
  );
};

export default CourseContent;
