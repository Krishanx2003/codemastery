import { HoverEffect } from '@/components/ui/card-hover-effect';
import { Cover } from '@/components/ui/cover';
import React from 'react';

interface Project {
  title: string;
  description: string;
  link: string;
}

const LandingHowItWorks: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        How <Cover>CodeWeb3.tech</Cover> Works
      </h1>
      <div className="max-w-6xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
};

export default LandingHowItWorks;

const projects: Project[] = [
  {
    title: 'Sign Up',
    description: 'Create your account to get started. It’s free and easy!',
    link: 'http://localhost:3000/',
  },
  {
    title: 'Explore Resources',
    description: 'Browse our extensive library of documentation, tutorials, and career resources.',
    link: 'http://localhost:3000/',
  },
  {
    title: 'Start Learning',
    description: 'Dive into our comprehensive courses and interactive examples to level up your skills.',
    link: 'http://localhost:3000/',
  },
  {
    title: 'Join the Community',
    description: 'Engage with other learners and professionals in our vibrant community forums and Q&A sections.',
    link: 'http://localhost:3000/',
  },
];
