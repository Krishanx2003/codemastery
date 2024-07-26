import React from 'react';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import { CourseContentProps } from '../types/sanity';
import { urlFor } from '../lib/createClient';
import CodeBlock from './CodeBlock';

const components: PortableTextComponents = {
  types: {
    code: ({ value }) => <CodeBlock code={value.code} />,
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
  const imageUrl = image && image.asset._ref ? urlFor(image).url() : '/placeholder.png';

  const altText = content?.[0]?.children?.[0]?.text || 'Course image';

  return (
    <section className="mb-8">
      <img
        src={imageUrl}
        alt={altText}
        className="mb-4"
      />
      {content ? (
        <PortableText value={content} components={components} />
      ) : (
        <p>No content available</p>
      )}
    </section>
  );
};

export default CourseContent;
