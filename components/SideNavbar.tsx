// src/components/SideNavbar.tsx

import React, { useState } from 'react';
import Link from 'next/link';
import { Course, Section, Lesson } from '../types/sanity';

interface SideNavbarProps {
  course: Course;
  sections: Section[];
}

const SideNavbar: React.FC<SideNavbarProps> = ({ course, sections }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const handleSectionClick = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <nav className="sidebar">
      <ul>
        <li key={course._id}>
          <Link href={`/courses/${course.slug.current}`}>
            {course.title}
          </Link>
          <ul>
            {sections.map((section) => (
              <li key={section._id}>
                <button onClick={() => handleSectionClick(section._id)}>
                  {section.title}
                </button>
                {expandedSection === section._id && (
                  <ul>
                    {section.lessons.map((lesson) => (
                      <li key={lesson._id}>
                        <Link href={`/courses/${course.slug.current}/sections/${section.slug.current}/lessons/${lesson.slug.current}`}>
                          {lesson.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default SideNavbar;
