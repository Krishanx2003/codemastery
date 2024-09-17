"use client";

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PostResponse } from '../../../../types/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function PostDetail() {
  const router = useRouter();
  const { id } = useParams(); // Extract the post ID from the URL params
  const [post, setPost] = useState<PostResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return; // If no ID, return early

      try {
        const response = await fetch(`/api/posts/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch post details');
        }
        const data: PostResponse = await response.json();
        setPost(data);
      } catch (err) {
        setError('Error fetching post details. Please try again later.');
        console.error('Error fetching post:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]); // Add id as a dependency

  if (loading) {
    return <p className="text-center mt-6">Loading post details...</p>;
  }

  if (error) {
    return <p className="text-center mt-6 text-red-500">{error}</p>;
  }

  return (
    <div className="bg-background text-foreground">
      {!loading && !error && post && (
        <div className="px-4 py-6 md:px-6 lg:py-12">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]">{post.title}</h1>
            <p className="text-muted-foreground mt-2">{post.summary}</p>
            
            {post.cover && (
              <div className="mt-6">
                <img
                  src={post.cover}
                  alt={post.title}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            )}

            <article className="prose prose-gray dark:prose-invert mt-8">
              <p>{post.content}</p>
            </article>

            <aside className="bg-muted mt-8 px-4 py-6 rounded-lg">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Categories</h3>
                  <p>{post.categories}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">Tags</h3>
                  <p>{post.tags?.join(', ')}</p>
                </div>

                <div>
                  <strong>Published:</strong> {post.published ? 'Yes' : 'No'}
                </div>
              </div>
            </aside>

            <div className="mt-6">
              <Button onClick={() => router.push(`/blog/${id}/edit`)}>Edit Post</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
