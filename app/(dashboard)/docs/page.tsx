import React from 'react';
import SideNavbarDocs from '@/components/docs/SideNavbarDocs';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const Docs: React.FC = () => {
  const sidebardocsItems = [
    {
      title: 'Introduction',
      href: '#introduction',
    },
    {
      title: 'Getting Started',
      href: '#getting-started',
      subItems: [
        { title: 'Installation', href: '#installation' },
        { title: 'Configuration', href: '#configuration' },
      ],
    },
    {
      title: 'Features',
      href: '#features',
      subItems: [
        { title: 'Responsive Design', href: '#responsive-design' },
        { title: 'Accessibility', href: '#accessibility' },
        { title: 'Customization', href: '#customization' },
      ],
    },
    {
      title: 'Examples',
      href: '#examples',
    },
    {
      title: 'Support',
      href: '#support',
    },
  ];

  return (
    <div className="flex min-h-screen w-full bg-background">
      <SideNavbarDocs items={sidebardocsItems} />
      <main className="flex-1 p-4 sm:pl-64">
        {/* Search Bar */}
        <div className="sticky top-0 z-10 flex h-14 items-center bg-background px-4 shadow-sm sm:px-6">
          <div className="relative flex-1">
            <div className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground">
              <SearchIcon className="h-5 w-5" />
            </div>
            <Input
              type="search"
              placeholder="Search documentation..."
              className="h-9 w-full rounded-md bg-muted pl-8 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>
        {/* Documentation Content */}
        <div className="mx-auto max-w-4xl py-8">
          {/* Introduction Section */}
          <section id="introduction" className="space-y-4">
            <h1 className="text-3xl font-bold">Introduction</h1>
            <p>
              Welcome to the documentation for our comprehensive documentation course website. Here, you'll find all the
              information you need to get started, explore the features, and make the most of our platform.
            </p>
            <p>
              Our documentation is designed to be easy to navigate, with a clear table of contents and search
              functionality to help you find the information you need quickly. We've also included plenty of code
              examples, visuals, and illustrations to enhance your learning experience.
            </p>
          </section>
          {/* Other Sections... */}
        </div>
      </main>
    </div>
  );
};

export default Docs;

function SearchIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
