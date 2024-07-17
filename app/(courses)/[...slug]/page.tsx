"use client"

// src/app/(courses)/[...slug]/page.tsx
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { client, urlFor } from '../../../lib/createClient';
import { Course, Section, Lesson } from '../../../types/sanity';
import CourseHeader from '../../../components/CourseHeader';
import CourseContent from '../../../components/CourseContent';
import SideNavbar from '../../../components/SideNavbar';

interface Props {
  course: Course;
  sections: Section[];
  lessons: Lesson[];
}

const fetchCourseData = async (slug: string[]): Promise<Props | null> => {
  const [courseSlug] = slug;

  try {
    const courseQuery = `*[_type == "course" && slug.current == $courseSlug][0]{
      _id,
      title,
      description,
      content,
      image,
      "slug": slug.current,
      "sections": sections[]->{
        _id,
        title,
        "slug": slug.current,
        description,
        "lessons": lessons[]->{
          _id,
          title,
          description,
          content,
          image,
          "slug": slug.current
        }
      }
    }`;
    const course = await client.fetch<Course>(courseQuery, { courseSlug });
    if (!course) return null;

    console.log('Fetched Course:', course); // Log the fetched course

    return {
      course,
      sections: course.sections.map((section: Section) => ({
        ...section,
        lessons: section.lessons || [],
      })),
      lessons: course.sections.flatMap((section) => section.lessons || []),
    };
  } catch (error) {
    console.error('Error fetching course data:', error);
    return null;
  }
};


const CoursePage = () => {
  const pathname = usePathname();
  const slug = pathname.split('/').slice(2);
  const [courseData, setCourseData] = useState<Props | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (slug.length) {
        try {
          const fetchedData = await fetchCourseData(slug);
          console.log('Fetched Data:', fetchedData); // Log fetched data
          setCourseData(fetchedData);
        } catch (error) {
          console.error('Failed to fetch course data:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!courseData) {
    return <div>Course not found</div>;
  }

  const { course, sections, lessons } = courseData;

  console.log('Course Data in CoursePage:', courseData); // Log course data

  return (
    <div className="flex">
      <div className="w-64 pr-4 border-r border-gray-200">
        <SideNavbar course={course} sections={sections} /> {/* Pass course data and sections to SideNavbar */}
      </div>
      <div className="flex-1 pl-4">
        <CourseHeader title={course.title} />
        <CourseContent content={course.content} image={course.image} />
        {sections.map((section) => (
          <div key={section._id} className="mb-4">
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {section.lessons.map((lesson) => (
                <div key={lesson._id} className="group relative block p-4 bg-white rounded-md shadow-md hover:bg-gray-100">
                  <div className="absolute inset-0 rounded-md overflow-hidden">
                    <img
                      src={lesson.image ? urlFor(lesson.image).width(400).height(225).fit('crop').url() : '/placeholder.png'}
                      alt={lesson.title}
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                  <div className="relative p-4">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-gray-800">{lesson.title}</h3>
                    <p className="text-gray-600 group-hover:text-gray-800">{lesson.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursePage;
