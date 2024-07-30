"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { client, urlFor } from '../lib/createClient';
import { Course } from '../types/sanity';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Hero from '@/components/Hero';
import Testimonial from '@/components/Testimonial';

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
        console.log('Fetched courses:', fetchedCourses);
        setCourses(fetchedCourses);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <section className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <Hero />
      <div className="mb-8 flex flex-col items-center justify-between gap-4 md:mb-12 md:flex-row">
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Explore Our Documentation Courses
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed">
            Level up your skills with our comprehensive documentation courses.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Select>
            <SelectTrigger className="w-full sm:w-auto">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full sm:w-auto">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popularity">Popularity</SelectItem>
              <SelectItem value="difficulty">Difficulty</SelectItem>
              <SelectItem value="duration">Duration</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {courses.map((course) => (
          <div key={course._id} className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-lg">
            <Link href={`/course/${course.slug.current}`} className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View course</span>
            </Link>
            <div className="flex h-40 items-center justify-center bg-muted p-6">
              <img
                src={course.image ? urlFor(course.image).width(400).height(300).fit('crop').url() : '/placeholder.svg'}
                alt={course.title}
                className="max-h-full max-w-full"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
            <div className="mb-4 flex flex-wrap gap-2 text-sm font-medium">
              <div className="flex items-center gap-1.5">
                <ClockIcon className="h-4 w-4 text-muted-foreground" />
                <span>12 hours</span>
              </div>
              <div className="flex items-center gap-1.5">
                <DiffIcon className="h-4 w-4 text-muted-foreground" />
                <span>Intermediate</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ClipboardListIcon className="h-4 w-4 text-muted-foreground" />
                <span>No prerequisites</span>
              </div>
            </div>
            <Button size="sm" className="w-full">
              Start Course
            </Button>
          </div>
        ))}
      </div>
   <Testimonial  /> 
    </section>
  );
};

export default HomePage;

function ClipboardListIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4" />
      <path d="M12 16h4" />
      <path d="M8 11h.01" />
      <path d="M8 16h.01" />
    </svg>
  );
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function DiffIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v14" />
      <path d="M5 10h14" />
      <path d="M5 21h14" />
    </svg>
  );
}
