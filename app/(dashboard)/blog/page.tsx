// app/blog/page.tsx
"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { PostResponse } from '@/types/types';

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
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">All Posts</h1>

      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6 p-2 border border-gray-300 rounded"
      />

      {loading && <p>Loading posts...</p>}
      {error && <p className="text-red-500">{error}</p>}
      
      {!loading && !error && filteredPosts.length === 0 && (
        <p className="text-gray-500">No posts available.</p>
      )}

      {!loading && !error && filteredPosts.length > 0 && (
        <ul className="space-y-6">
          {filteredPosts.map(post => (
            <li key={post._id} className="border-b last:border-none pb-4">
              <Card className="w-full rounded-lg overflow-hidden">
                <CardContent className="p-6">
                  <Link href={`/blog/${post._id}`}>
                    <h3 className="text-2xl font-bold hover:underline">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-muted-foreground mt-2">
                    {post.content.substring(0, 150)}...
                  </p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
