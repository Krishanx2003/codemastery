// src/components/SideNavbar.tsx

import React from 'react';
import Link from 'next/link';
import { Course, Section, Lesson } from '../types/sanity';

interface SideNavbarProps {
  course: Course;
  sections: Section[];
  onSelectSection: (section: Section) => void;
  onSelectLesson: (lesson: Lesson) => void;
}

const SideNavbar: React.FC<SideNavbarProps> = ({ course, sections, onSelectSection, onSelectLesson }) => {
  if (!course || !sections || sections.length === 0) {
    return <div>No sections available</div>;
  }

  return (
    <nav className="sidebar">
      <ul>
        <li key={course._id}>
          <button  className="text-lg font-bold" onClick={() => onSelectSection(null)}>
            {course.title}
          </button>
          <ul>
            {sections.map((section) => (
              <li key={section._id}>
                <button className="block p-2 text-green-600 bg-green-100 rounded-md" onClick={() => onSelectSection(section)}>
                  {section.title}
                </button>
                <ul>
                  {section.lessons.map((lesson) => (
                    <li key={lesson._id}>
                      <button className="block p-2" onClick={() => onSelectLesson(lesson)}>
                        {lesson.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default SideNavbar;
