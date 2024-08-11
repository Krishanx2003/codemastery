"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { client, urlFor } from '../lib/createClient';
import { Course } from '../types/sanity';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Hero from '@/components/Hero';

import { LandingContainer } from '@/components/designSystem/landing/LandingContainer'
import { LandingCTA } from '../components/designSystem/landing/LandingCTA'
import LandingFAQ from '../components/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '../components/designSystem/landing/LandingFeatures'
import { LandingHowItWorks } from '../components/designSystem/landing/LandingHowItWorks'
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
        'Dive into detailed guides and resources across Programming, Data Science, Cybersecurity, and more.',
      icon: <BookOutlined />,
    },
    {
      heading: 'Latest Trends & Blogs',
      description:
        'Stay updated with regularly updated blogs on the latest in technology and science fiction.',
      icon: <ReadOutlined />,
    },
    {
      heading: 'Career Resources',
      description:
        'Access comprehensive career resources to aid your professional development.',
      icon: <TeamOutlined />,
    },
    {
      heading: 'Interactive Courses',
      description:
        'Engage with interactive courses featuring video lectures, downloadable resources, and discussion forums.',
      icon: <CodeOutlined />,
    },
    {
      heading: 'Community Support',
      description:
        'Join a vibrant community of learners and professionals to share knowledge and grow together.',
      icon: <SafetyOutlined />,
    },
    {
      heading: 'User-Friendly Navigation',
      description:
        'Easily find what you need with our intuitive navigation and search features.',
      icon: <EditOutlined />,
    },
  ]

  const testimonials = [
    {
      name: 'John Doe',
      designation: 'Software Engineer',
      content:
        'Tech Haven has been a game-changer for my career. The resources are top-notch and the community is incredibly supportive.',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: 'Jane Smith',
      designation: 'Data Scientist',
      content:
        'I love the detailed documentation and the interactive courses. Tech Haven has everything I need to stay ahead in my field.',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: 'Michael Johnson',
      designation: 'Cybersecurity Analyst',
      content:
        'The career resources on Tech Haven helped me land my dream job. Highly recommend it to anyone looking to upskill.',
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: 'Emily Davis',
      designation: 'Tech Enthusiast',
      content:
        'The blogs and forums are fantastic. I always find something new and interesting on Tech Haven.',
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      name: 'David Wilson',
      designation: 'Student',
      content:
        'Tech Haven’s courses are well-structured and easy to follow. It’s a great platform for anyone looking to learn new tech skills.',
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
    {
      name: 'Sophia Brown',
      designation: 'Web Developer',
      content:
        'The community aspect of Tech Haven is amazing. I’ve met so many like-minded individuals and learned so much from them.',
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
  ]

  

  const packages = [
    {
      title: 'Basic',
      description: 'Access to basic courses and resources.',
      monthly: 9,
      yearly: 69,
      features: ['Basic Courses', 'Community Access'],
    },
    {
      title: 'Pro',
      description: 'All-access pass to premium content and features.',
      monthly: 19,
      yearly: 149,
      features: ['All Courses', 'Premium Resources', 'Career Guidance'],
      highlight: true,
    },
    {
      title: 'Enterprise',
      description: 'Tailored solutions for businesses and teams.',
      monthly: 49,
      yearly: 499,
      features: ['Team Access', 'Custom Content', 'Dedicated Support'],
    },
  ]

  const questionAnswers = [
    {
      question: 'What is Tech Haven?',
      answer:
        'Tech Haven is a comprehensive platform offering detailed documentation, blogs, and career resources for tech enthusiasts, students, and professionals.',
    },
    {
      question: 'How can I access the courses?',
      answer:
        'You can access our courses by subscribing to one of our plans. Each plan offers different levels of access to our resources.',
    },
    {
      question: 'Is there a community aspect?',
      answer:
        'Yes, Tech Haven has a vibrant community where users can share knowledge, ask questions, and grow together.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit cards and PayPal for subscription payments.',
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: 'Sign Up',
      description: 'Create your account to get started.',
    },
    {
      heading: 'Choose a Plan',
      description: 'Select the plan that best suits your needs.',
    },
    {
      heading: 'Access Resources',
      description: 'Dive into our extensive library of courses and resources.',
    },
    {
      heading: 'Join the Community',
      description: 'Engage with other learners and professionals.',
    },
  ]

  const painPoints = [
    {
      emoji: '😕',
      title: 'Fragmented Learning Resources',
    },
    {
      emoji: '📉',
      title: 'Skill Gaps in Workforce',
    },
    {
      emoji: '🔍',
      title: 'Difficulty Finding Quality Content',
    },
  ]

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
            <Link href={`/course/${course.slug}`} className="absolute inset-0 z-10" prefetch={false}>
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
            <Button size="sm" className="w-full">
              Start Course
            </Button>
          </div>
        ))}
      </div>
      <LandingHowItWorks title="How Tech Haven Works" steps={steps} />
      <LandingFeatures
        id="features"
        title="Achieve Your Tech Dreams with Tech Haven"
        subtitle="Our platform provides everything you need to succeed in the tech world."
        features={features}
      />
      <LandingTestimonials
        title="Success Stories from Our Users"
        subtitle="Hear how Tech Haven has transformed the careers of our users."
        testimonials={testimonials}
      /> 
      <LandingFAQ
      id="faq"
      title="Frequently Asked Questions"
      subtitle="Got questions? We’ve got answers."
      questionAnswers={questionAnswers}
    />
    <LandingCTA
        title="Ready to Transform Your Tech Career?"
        subtitle="Join Tech Haven today and start your journey."
        buttonText="Get Started"
        buttonLink="/register"
      />
     </LandingContainer>
 
  );
};

export default HomePage;
