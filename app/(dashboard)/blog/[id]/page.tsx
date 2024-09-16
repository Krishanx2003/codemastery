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

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {loading && <p>Loading post details...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && post && (
        <Card className="w-full rounded-lg overflow-hidden">
          <CardContent className="p-6 space-y-4">
            <h1 className="text-3xl font-bold">{post.title}</h1>
            {post.cover && (
              <img
                src={post.cover}
                alt={post.title}
                className="w-full h-auto mb-4 rounded"
              />
            )}
            <p className="text-muted-foreground text-sm">{post.summary}</p>
            <p className="mt-4">{post.content}</p>
            <div className="mt-4">
              <strong>Category:</strong> {post.categories}
            </div>
            <div>
              <strong>Tags:</strong> {post.tags?.join(', ')}
            </div>
            <div>
              <strong>Published:</strong> {post.published ? 'Yes' : 'No'}
            </div>
            <div className="mt-4">
              <Button onClick={() => router.push(`/blog/${id}/edit`)}>Edit Post</Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
