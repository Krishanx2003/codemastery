import React from 'react';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import { CourseContentProps, Block, CodeBlock, Image } from '../types/sanity';
import { urlFor } from '../lib/createClient';
import CodeBox from './CodeBox';

const serializers: Partial<PortableTextComponents> = {
  types: {
    block: ({ value }) => {
      const style = value.style;

      switch (style) {
        case 'h1':
          return <h1 className="text-4xl font-extrabold mb-4">{value.children.map((child: any, index: number) => <span key={index}>{child.text}</span>)}</h1>;
        case 'h2':
          return <h2 className="text-3xl font-bold mb-3">{value.children.map((child: any, index: number) => <span key={index}>{child.text}</span>)}</h2>;
        case 'h3':
          return <h3 className="text-2xl font-semibold mb-2">{value.children.map((child: any, index: number) => <span key={index}>{child.text}</span>)}</h3>;
        case 'blockquote':
          return <blockquote className="border-l-4 border-gray-300 pl-4 italic text-lg">{value.children.map((child: any, index: number) => <span key={index}>{child.text}</span>)}</blockquote>;
        default:
          return <p className="text-base mb-2">{value.children.map((child: any, index: number) => <span key={index}>{child.text}</span>)}</p>;
      }
    },
    image: ({ value }) => {
      return <img src={urlFor(value.asset).url()} alt={value.alt} className="w-full rounded-lg my-4" />;
    },
    codeBlock: ({ value }) => {
      return <CodeBox code={value.code} language={value.language} name={value.name} classic={value.classic} />;
    },
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside mb-4">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-inside mb-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="ml-4 mb-2">{children}</li>,
  },
};

const CourseContent: React.FC<CourseContentProps> = ({ content, image }) => {
  const imageUrl = image && image.asset?._ref ? urlFor(image).url() : '/placeholder.png';
  const altText = content?.[0]?.children?.[0]?.text || 'Course image';

  return (
    <section className="mb-8">
      <img src={imageUrl} alt={altText} className="mb-4" />
      {content ? (
        <PortableText value={content} components={serializers} />
      ) : (
        <p>No content available</p>
      )}
    </section>
  );
};

export default CourseContent;
