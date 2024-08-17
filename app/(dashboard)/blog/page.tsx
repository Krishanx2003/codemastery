"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Post {
  _id: string;
  title: string;
  description: string;
  content: string;
  slug: string;
  image: string;
  category: string;  // Added category field
}

interface ApiResponse {
  success: boolean;
  data: Post[];
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/posts');
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data: ApiResponse = await res.json();

        if (data.success) {
          setPosts(data.data);
        } else {
          console.error('Failed to fetch posts');
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post._id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link href={`/dashboard/blog/${post.slug}`}>
              <img
                src={post.image}
                alt={post.title}
                width="400"
                height="200"
                className="w-full h-48 object-cover"
                style={{ aspectRatio: '400/200', objectFit: 'cover' }}
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="text-muted-foreground mb-4">{post.description}</p>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <span className="font-semibold">Category:</span>
                  <span className="ml-2">{post.category}</span> {/* Display category */}
                </div>
              
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
