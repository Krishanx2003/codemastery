import React from 'react';
import { PortableText } from '@portabletext/react';
import { Section } from '../types/sanity';

interface SectionContentProps {
  section: Section | null;
  lessons: any[];
  onSelectLesson: (lesson: any) => void;
}

const SectionContent: React.FC<SectionContentProps> = ({ section, lessons, onSelectLesson }) => {
  if (!section) {
    return <div>No section selected</div>;
  }

  return (
    <div>
      <h2>{section.title}</h2>
      <PortableText value={section.content} />
      {lessons.length > 0 && (
        <ul>
          {lessons.map((lesson) => (
            <li key={lesson._id} onClick={() => onSelectLesson(lesson)}>
              {lesson.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SectionContent;
