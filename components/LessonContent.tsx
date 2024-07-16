import React from 'react';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import CodeBlock from './CodeBlock';
import { Lesson } from '../types/sanity';

interface Props {
  lesson: Lesson;
}

const components: PortableTextComponents = {
  types: {
    code: ({ value }) => <CodeBlock {...value} />,
  },
};

const LessonContent: React.FC<Props> = ({ lesson }) => {
  return (
    <div className="px-4 py-8 prose prose-lg max-w-none">
      <PortableText value={lesson.content} components={components} />
    </div>
  );
}

export default LessonContent;
