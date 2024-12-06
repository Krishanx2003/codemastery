"use client";

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { UploadButton } from '@/utils/uploadthing';

export default function New() {
  const { data: session } = useSession();
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [cover, setCover] = useState<string | null>(null);
  const [categories, setCategories] = useState('');
  const [tags, setTags] = useState('');
  const [published, setPublished] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const router = useRouter(); // Initialize Next.js router

  const handleImageUpload = (res: { url: string }[]) => {
    if (res.length > 0) {
      setCover(res[0].url);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    if (!session || !session.user || !session.user.id) {
      setError('You must be logged in to create a post.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          summary,
          content,
          cover,
          categories: categories.split(',').map((category) => category.trim()),
          tags: tags.split(',').map((tag) => tag.trim()),
          published,
        }),
      });

      if (res.ok) {
        setTitle('');
        setSummary('');
        setContent('');
        setCover(null);
        setCategories('');
        setTags('');
        setPublished(false);
        setSuccess('Post created successfully!');
        router.push('/blog'); // Redirect to blog page after successful submission
      } else {
        const errorMessage = await res.text();
        setError(`Failed to create post: ${errorMessage}`);
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </Label>
          <div className="mt-1">
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              name="title"
              type="text"
              placeholder="Enter a title"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="summary" className="block text-sm font-medium text-gray-700">
            Summary
          </Label>
          <div className="mt-1">
            <Textarea
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              name="summary"
              rows={2}
              placeholder="Enter a brief summary"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="cover" className="block text-sm font-medium text-gray-700">
            Cover Image
          </Label>
          <div className="mt-1">
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={handleImageUpload}
              onUploadError={(error: Error) => {
                setError(`ERROR! ${error.message}`);
              }}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="categories" className="block text-sm font-medium text-gray-700">
            Categories (comma separated)
          </Label>
          <div className="mt-1">
            <Input
              value={categories}
              onChange={(e) => setCategories(e.target.value)}
              name="categories"
              type="text"
              placeholder="Enter categories"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="tags" className="block text-sm font-medium text-gray-700">
            Tags (comma separated)
          </Label>
          <div className="mt-1">
            <Input
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              name="tags"
              type="text"
              placeholder="Enter tags"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="content" className="block text-sm font-medium text-gray-700">
            Content
          </Label>
          <div className="mt-1">
            <Textarea
              id="content"
              name="content"
              rows={4}
              placeholder="Enter the content"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="published" className="block text-sm font-medium text-gray-700">
            Publish Now?
          </Label>
          <div className="mt-1">
            <Input
              type="checkbox"
              checked={published}
              onChange={() => setPublished(!published)}
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
          </div>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-500 text-sm">{success}</p>}

        <div className="flex justify-end">
          <Button
            type="submit"
            className="inline-flex items-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            disabled={loading}
          >
            {loading ? 'Creating...' : 'Create Post'}
          </Button>
        </div>
      </form>
    </div>
  );
}
