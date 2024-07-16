import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Course, Section, Lesson } from '../types/sanity';
import { urlFor } from '../lib/createClient';

interface Props {
  course: Course;
}

const CourseModules: React.FC<Props> = ({ course }) => {
  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Course Modules</h2>
      {course.sections.map((section: Section) => (
        <div key={section._id} className="mb-4">
          <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {section.lessons.map((lesson: Lesson) => (
              <Link
                key={lesson._id}
                href={`/courses/${course.slug.current}/${section.slug}/${lesson.slug}`}
                passHref
              >
                <a className="group relative block p-4 bg-white rounded-md shadow-md hover:bg-gray-100">
                  <div className="absolute inset-0 rounded-md overflow-hidden">
                    <Image
                      src={urlFor(lesson.image).width(400).height(225).fit('crop').url()}
                      alt={lesson.title}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                  <div className="relative p-4">
                    <h4 className="text-lg font-semibold mb-2 group-hover:text-gray-800">{lesson.title}</h4>
                    <p className="text-gray-600 group-hover:text-gray-800">{lesson.description}</p>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CourseModules;
