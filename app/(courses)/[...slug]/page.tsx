"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { client, urlFor } from '../../../lib/createClient';
import { Course, Section, Lesson } from '../../../types/sanity';
import CourseHeader from '../../../components/CourseHeader';
import CourseModules from '../../../components/CourseModules';
import CourseContent from '../../../components/CourseContent';

interface Props {
  course: Course;
  sections: Section[];
  lessons: Lesson[];
}

const fetchCourseData = async (slug: string[]): Promise<Props | null> => {
  const [courseSlug, sectionSlug, lessonSlug] = slug;

  try {
    // Fetch course
    const courseQuery = `*[_type == "course" && slug.current == $courseSlug][0]{
      _id,
      title,
      description,
      content,
      image,
      "sections": *[_type == "section" && references(^._id)]{
        _id,
        title,
        "slug": slug.current,
        "lessons": *[_type == "lesson" && references(^._id)]{
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

    return {
      course,
      sections: course.sections || [],
      lessons: course.sections.flatMap((section) => section.lessons || []),
    };
  } catch (error) {
    console.error('Error fetching course data:', error);
    return null;
  }
};

const CoursePage = () => {
  const pathname = usePathname();
  const slug = pathname.split('/').slice(2); // Assuming the slug is after /courses/
  const [courseData, setCourseData] = useState<Props | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (slug.length) {
        try {
          const fetchedData = await fetchCourseData(slug);
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

  return (
    <div className="px-4 py-8">
      <CourseHeader title={course.title} />
      <CourseContent content={course.content} image={course.image} />
      <CourseModules course={course} />
      {sections.map((section) => (
        <div key={section._id} className="mb-4">
          <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {section.lessons.map((lesson) => (
              <Link key={lesson._id} href={`/courses/${course.slug.current}/${section.slug}/${lesson.slug}`} passHref>
                <a className="group relative block p-4 bg-white rounded-md shadow-md hover:bg-gray-100">
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
                </a>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoursePage;
