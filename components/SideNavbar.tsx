// src/components/SideNavbar.tsx
import React from 'react';
import Link from 'next/link';
import { Course, Section, Lesson } from '../types/sanity';

interface SideNavbarProps {
  course: Course;
  sections: (Section & { lessons: Lesson[] })[];
}

const SideNavbar: React.FC<SideNavbarProps> = ({ course, sections }) => {
  console.log('SideNavbar course:', course); // Log the course data
  console.log('SideNavbar sections:', sections); // Log the sections data

  if (!course || !sections || sections.length === 0) {
    return <div>No sections available</div>; // Render message if course or sections are undefined or empty
  }

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
                <Link href={`/courses/${course.slug.current}/sections/${section.slug}`}>
                  {section.title}
                </Link>
                <ul>
                  {section.lessons.map((lesson) => (
                    <li key={lesson._id}>
                      <Link href={`/courses/${course.slug.current}/sections/${section.slug}/lessons/${lesson.slug.current}`}>
                        {lesson.title}
                      </Link>
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
