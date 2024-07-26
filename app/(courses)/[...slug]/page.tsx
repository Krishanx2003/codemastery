"use client"
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { client, urlFor } from '../../../lib/createClient';
import { Course, Section, Lesson } from '../../../types/sanity';
import CourseHeader from '../../../components/CourseHeader';
import CourseContent from '../../../components/CourseContent';
import SideNavbar from '../../../components/SideNavbar';
import LessonContent from '../../../components/LessonContent';
import SectionContent from '../../../components/SectionContent';

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
      image {
        _type,
        asset->{
          _ref,
          _type
        }
      },
      "slug": slug.current,
      "sections": sections[]->{
        _id,
        title,
        "slug": slug.current,
        description,
        content,
        "lessons": lessons[]->{
          _id,
          title,
          description,
          content,
          image {
            _type,
            asset->{
              _ref,
              _type
            }
          },
          "slug": slug.current
        }
      }
    }`;

    const course = await client.fetch<Course>(courseQuery, { courseSlug });
    if (!course) return null;

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

const CoursePage: React.FC = () => {
  const pathname = usePathname();
  const slug = pathname.split('/').slice(2);
  const [courseData, setCourseData] = useState<Props | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

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

  const { course, sections } = courseData;

  const handleSelectSection = (section: Section | null) => {
    setSelectedSection(section);
    setSelectedLesson(null); // Reset lesson selection when a section is selected
  };

  const handleSelectLesson = (lesson: Lesson) => {
    setSelectedLesson(lesson);
  };

  return (
    <div className="flex">
      <div className="w-64 pr-4 border-r border-gray-200">
        <SideNavbar course={course} sections={sections} onSelectSection={handleSelectSection} onSelectLesson={handleSelectLesson} />
      </div>
      <div className="flex-1 pl-4">
        <CourseHeader title={course.title} />
        <CourseContent content={course.content} image={course.image} />
        {selectedLesson ? (
          <LessonContent lesson={selectedLesson} />
        ) : selectedSection ? (
          <SectionContent section={selectedSection} />
        ) : (
          <div>Select a section or lesson to view the content</div>
        )}
      </div>
    </div>
  );
};

export default CoursePage;
