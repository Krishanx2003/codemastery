"use client"
import { client, urlFor } from '../lib/createClient';
import { Course } from '../types/sanity';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const fetchedCourses = await client.fetch<Course[]>(`*[_type == "course"]{
          _id,
          title,
          description,
          content,
          image,
          slug
        }`);
        setCourses(fetchedCourses);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {courses.map((course) => (
          <Link key={course._id} href={`/courses/${course.slug.current}`} passHref legacyBehavior>
            <a className="group relative block p-4 bg-white rounded-md shadow-md hover:bg-gray-100">
              <div className="absolute inset-0 rounded-md overflow-hidden">
                <img
                  src={course.image ? urlFor(course.image).width(400).height(225).fit('crop').url() : '/placeholder.png'}
                  alt={course.title}
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <div className="relative p-4">
                <h2 className="text-lg font-semibold mb-2 group-hover:text-gray-800">{course.title}</h2>
                <p className="text-gray-600 group-hover:text-gray-800">{course.description}</p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
