"use client";

import { JSX, SVGProps, useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image'; // Import Next.js Image component
import { PostResponse } from '@/types/types';
import { Input } from '@/components/ui/input';

export default function Posts() {
  const [posts, setPosts] = useState<PostResponse[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<PostResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data: PostResponse[] = await response.json();
        setPosts(data);
        setFilteredPosts(data);
      } catch (error) {
        setError('Error fetching posts. Please try again later.');
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Filter posts based on search term
  useEffect(() => {
    if (searchTerm) {
      setFilteredPosts(posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
      ));
    } else {
      setFilteredPosts(posts);
    }
  }, [searchTerm, posts]);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 md:mb-8">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Our Blog</h1>
        <div className="relative w-full max-w-md mt-4 md:mt-0">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 rounded-md bg-gray-100 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />
        </div>
      </div>

      {loading && <p className="text-center">Loading posts...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {!loading && !error && filteredPosts.length === 0 && (
        <p className="text-gray-500 text-center">No posts available.</p>
      )}

      {!loading && !error && filteredPosts.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map(post => (
            <Card key={post._id} className="bg-white shadow-md rounded-md overflow-hidden">
              <Link href={`/blog/${post._id}`} className="block">
                {post.cover && (
                  <Image
                    src={post.cover}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                    style={{ aspectRatio: "600/400" }}
                  />
                )}
                <div className="p-4">
                  <h2 className="text-lg font-bold tracking-tight mb-2">{post.title}</h2>
                  <p className="text-gray-600 text-sm">
                    {post.content.substring(0, 150)}...
                  </p>
                  <div className="flex items-center">
              <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-medium">{post.categories}</span>
            </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
  )
}

