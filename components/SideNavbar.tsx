import React, { useEffect, useState } from 'react';
import { client } from '../lib/createClient';
import { Course, Section } from '../types/sanity';
import Link from 'next/link';

const SideNavbar: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const fetchedCourses = await client.fetch<Course[]>(`*[_type == "course"]{
          _id,
          title,
          slug,
          "sections": *[_type == "section" && references(^._id)]{
            _id,
            title,
            slug
          }
        }`);
        setCourses(fetchedCourses);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="w-64 h-full bg-gray-800 text-white p-4 fixed">
      <h2 className="text-xl font-bold mb-4">Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course._id} className="mb-2">
            <Link href={`/courses/${course.slug.current}`} className="block py-2 px-4 rounded hover:bg-gray-700">
              {course.title}
            </Link>
            <ul className="ml-4 mt-2">
              {course.sections.map((section) => (
                <li key={section._id}>
                  <Link href={`/courses/${course.slug.current}/${section.slug.current}`} className="block py-1 px-3 rounded hover:bg-gray-600">
                    {section.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNavbar;
