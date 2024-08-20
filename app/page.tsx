"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { client, urlFor } from '../lib/createClient';
import { Course } from '../types/sanity';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Hero from '@/components/Hero';

import { LandingContainer } from '@/components/designSystem/landing/LandingContainer'
import LandingFAQ from '../components/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '../components/designSystem/landing/LandingFeatures'


import { LandingPainPoints } from '../components/designSystem/landing/LandingPainPoints'
import { LandingTestimonials } from '../components/designSystem/landing/LandingTestimonials'

import {
  EditOutlined,
  BookOutlined,
  CodeOutlined,
  SafetyOutlined,
  ReadOutlined,
  TeamOutlined,
} from '@ant-design/icons'
import { Cover } from '@/components/ui/cover';
import LandingHowItWorks from '@/components/designSystem/landing/LandingHowItWorks';
import LandingCTA from '@/components/designSystem/landing/LandingCTA';

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
          "slug": slug.current
        }`);
        setCourses(fetchedCourses);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const features = [
    {
      heading: 'Comprehensive Documentation',
      description:
        'Dive into detailed guides and resources across Programming, Data Science, Cybersecurity, and more. Our documentation is designed to be thorough and easy to understand.',
      icon: <BookOutlined />,
    },
    {
      heading: 'Latest Trends & Blogs',
      description:
        'Stay updated with regularly updated blogs on the latest in technology, coding trends, and more. Our blog section is your go-to place for staying informed.',
      icon: <ReadOutlined />,
    },
    {
      heading: 'Career Resources',
      description:
        'Access comprehensive career resources to aid your professional development. From resume templates to interview tips, we have you covered.',
      icon: <TeamOutlined />,
    },
    {
      heading: 'Interactive Courses',
      description:
        'Engage with interactive courses featuring video lectures, downloadable resources, and discussion forums. Our courses are designed to be engaging and effective.',
      icon: <CodeOutlined />,
    },
    {
      heading: 'Community Support',
      description:
        'Join a vibrant community of learners and professionals to share knowledge and grow together. Our community forums and Q&A sections are designed to foster collaboration and support.',
      icon: <SafetyOutlined />,
    },
    {
      heading: 'User-Friendly Navigation',
      description:
        'Easily find what you need with our intuitive navigation and search features. Our platform is designed to be user-friendly and efficient.',
      icon: <EditOutlined />,
    },
  ];
  

  const testimonials = [
    {
      name: 'John Doe',
      designation: 'Software Engineer',
      content:
        'CodeWeb3.tech has been a game-changer for my career. The resources are top-notch and the community is incredibly supportive.',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: 'Jane Smith',
      designation: 'Data Scientist',
      content:
        'I love the detailed documentation and the interactive courses. CodeWeb3.tech has everything I need to stay ahead in my field.',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: 'Rahul Sharma',
      designation: 'Cybersecurity Analyst',
      content:
        'The career resources on CodeWeb3.tech helped me land my dream job. Highly recommend it to anyone looking to upskill.',
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: 'Priya Patel',
      designation: 'Tech Enthusiast',
      content:
        'The blogs and forums are fantastic. I always find something new and interesting on CodeWeb3.tech.',
      avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    },
    {
      name: 'Amit Kumar',
      designation: 'Student',
      content:
        'CodeWeb3.tech’s courses are well-structured and easy to follow. It’s a great platform for anyone looking to learn new tech skills.',
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
    {
      name: 'Neha Singh',
      designation: 'Web Developer',
      content:
        'The community aspect of CodeWeb3.tech is amazing. I’ve met so many like-minded individuals and learned so much from them.',
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
  ];
  

 

  const questionAnswers = [
    {
      question: 'What is CodeWeb3.tech?',
      answer:
        'CodeWeb3.tech is a comprehensive, free, and open-source platform offering detailed documentation, tutorials, and career resources for tech enthusiasts, students, and professionals. Our mission is to provide high-quality learning materials to help you excel in your coding journey.',
    },
    {
      question: 'How can I access the courses?',
      answer:
        'All our courses and resources are freely accessible to everyone. You can start learning immediately without any subscription or payment. Simply browse our documentation and tutorials to get started.',
    },
    {
      question: 'Is there a community aspect?',
      answer:
        'Yes, CodeWeb3.tech has a vibrant community where users can share knowledge, ask questions, and grow together. Our community forums and Q&A sections are designed to foster collaboration and support among tech enthusiasts and professionals.',
    },
    {
      question: 'Do I need to pay to access the resources?',
      answer:
        'No, CodeWeb3.tech is completely free and open source. We believe in making high-quality learning resources accessible to everyone without any cost.',
    },
  ];
  

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  
  

  const painPoints = [
    {
      emoji: '😕',
      title: 'Scattered Learning Paths',
    },
    {
      emoji: '📉',
      title: 'Outdated Skill Sets',
    },
    {
      emoji: '🔍',
      title: 'Hard to Find Quality Tutorials',
    },
  ];
  

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]


  return (
   
      <LandingContainer>
        <Hero />
       
        <LandingPainPoints
        title="The Challenges in Tech Education"
        painPoints={painPoints}
      />
 

   
 <section className="w-full py-8 md:py-12 lg:py-16">
  <div className="container px-4 md:px-6">
    <div className="mb-8 flex flex-col items-center justify-between gap-4 md:mb-12 md:flex-row">
      <div className="space-y-4 text-center md:text-left">
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
          <Link href={`/course/${course.slug}`} className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View course</span>
          </Link>
          <div className="flex h-40 items-center justify-center bg-muted p-6">
            <img
              src={course.image ? urlFor(course.image).width(400).height(300).fit("crop").url() : "/placeholder.svg"}
              alt={course.title}
              className="max-h-full max-w-full"
            />
          </div>
          <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
          <Button size="sm" className="w-full">
            Start Course
          </Button>
        </div>
      ))}
    </div>
  </div>
</section>
<main>

<LandingHowItWorks />

      <LandingFeatures
        id="features"
        title="Achieve Your Tech Dreams with CodeWeb3.tech"
        subtitle="Our platform provides everything you need to succeed in the tech world."
        features={features}
      />
      <LandingTestimonials
        title="Success Stories from Our Users"
        subtitle="Hear how CodeWeb3.tech has transformed the careers of our users."
        testimonials={testimonials}
      />
      <LandingFAQ
        id="faq"
        title="Frequently Asked Questions"
        subtitle="Got questions? We’ve got answers."
        questionAnswers={questionAnswers}
      />
    <LandingCTA />
      </main>
    </LandingContainer>
  );
};

export default HomePage;