"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { client, urlFor } from '../lib/createClient';
import { Course } from '../types/sanity';
import { GlareCard } from "../components/ui/glare-card"

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
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container grid gap-6 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Courses</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore our wide range of courses to enhance your skills and knowledge.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {courses.map((course) => (
            <Link key={course._id} href={`/courses/${course.slug.current}`} passHref legacyBehavior>
              <a className="group relative block p-4 rounded-md shadow-md hover:bg-gray-100">
                <GlareCard className="flex flex-col items-center justify-center">
                  <img
                    src={course.image ? urlFor(course.image).width(400).height(300).fit('crop').url() : '/placeholder.png'}
                    alt={course.title}
                    className="object-cover object-center w-full h-full rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/70 group-hover:opacity-90 transition-opacity flex items-end p-4">
                    <h2 className="text-white font-bold text-xl mt-4">{course.title}</h2>
                  </div>
                </GlareCard>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
