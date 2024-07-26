// src/components/Card/Card.tsx

import React from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  excerpt: string;
  slug: string;
  image?: string;
}

const Card: React.FC<CardProps> = ({ title, excerpt, slug, image }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden">
      {image && (
        <div className="relative h-48">
          <img src={image} alt={title} className="object-cover w-full h-full" />
        </div>
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold">
          <Link href={`/courses/${slug}`} passHref>
            {title}
          </Link>
        </h2>
        <p className="mt-2 text-gray-600">{excerpt}</p>
      </div>
    </div>
  );
};

export default Card;
