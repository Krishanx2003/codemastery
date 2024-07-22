import React from 'react';
import { PortableText } from '@portabletext/react';
import { Lesson } from '../types/sanity';

interface LessonContentProps {
  lesson: Lesson;
}

const LessonContent: React.FC<LessonContentProps> = ({ lesson }) => {
  return (
    <div>
      <h3>{lesson.title}</h3>
      <PortableText value={lesson.content} />
    </div>
  );
};

export default LessonContent;
