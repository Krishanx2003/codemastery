import React from 'react';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import CodeBox from './CodeBox';
import { Lesson, Block, CodeBlock, Image } from '../types/sanity';
import { urlFor } from '@/lib/createClient';

// Define serializers for custom rendering
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
      // Pass a theme prop or use default
      return <CodeBox code={value.code} language={value.language} name={value.name} theme={value.theme || 'solarizedDark'} />;
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

interface LessonContentProps {
  lesson: Lesson;
}

const LessonContent: React.FC<LessonContentProps> = ({ lesson }) => {
  return (
    <main className="flex-1 p-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">{lesson.title}</h1>
      </div>
      <PortableText value={lesson.content} components={serializers} />
    </main>
  );
};

export default LessonContent;
