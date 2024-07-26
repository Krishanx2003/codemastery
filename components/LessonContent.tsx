import React from 'react';
import { PortableText } from '@portabletext/react';
import { Lesson } from '../types/sanity';

interface LessonContentProps {
  lesson: Lesson;
}

const LessonContent: React.FC<LessonContentProps> = ({ lesson }) => {
  return (
    <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">{lesson.title}</h1>
            </div>
      <PortableText value={lesson.content} />
   </main>
  );
};

export default LessonContent;
