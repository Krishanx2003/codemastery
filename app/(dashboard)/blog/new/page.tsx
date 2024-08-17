"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function NewPost() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null); // Updated state for file
  const [category, setCategory] = useState('');
  const [imagePreview, setImagePreview] = useState<string>(''); // For image preview
  const router = useRouter();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file)); // Set image preview
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content || !category) {
      alert('Title, content, and category are required');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('content', content);
    formData.append('category', category);
    if (image) formData.append('image', image); // Append file if it exists

    const res = await fetch('/api/posts', {
      method: 'POST',
      body: formData, // Send formData with the file
    });

    if (res.ok) {
      router.push('/dashboard/blog');
    } else {
      alert('Failed to create post');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:px-6 md:py-12">
      <h1 className="text-3xl font-bold mb-6">Create a New Blog Post</h1>
      <form className="space-y-8" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="Enter a title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="image">Featured Image</Label>
              <div className="flex items-center gap-4">
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                />
                {imagePreview && (
                  <div className="w-24 h-16 overflow-hidden rounded-md">
                    <img
                      src={imagePreview}
                      alt="Image preview"
                      className="object-cover"
                      style={{ aspectRatio: "96/64", objectFit: "cover" }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                rows={3}
                placeholder="Enter a description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="category">Category</Label>
              <Input
                id="category"
                placeholder="Enter a category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <div>
          <Label htmlFor="content">Content</Label>
          <Textarea
            id="content"
            rows={8}
            placeholder="Enter your content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit">Publish Post</Button>
        </div>
      </form>
    </div>
  );
}
