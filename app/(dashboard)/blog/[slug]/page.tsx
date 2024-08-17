"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Post {
  _id: string;
  title: string;
  description: string;
  content: string;
  createdAt: string;
  date: string;
  slug: string;
  image: string;
  category: string;  // Added category field
}

export default function BlogPost() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<Post | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await fetch(`/api/posts?slug=${slug}`);
      const data = await res.json();

      if (data.success) {
        setBlog(data.data);
      } else {
        console.error('Failed to fetch blog post');
      }
    };

    fetchBlog();
  }, [slug]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
      <article className="space-y-8">
        <div>
          <img
            src={blog.image}
            alt={blog.title}
            width="800"
            height="400"
            className="rounded-lg object-cover w-full aspect-[2/1]"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            {blog.title}
          </h1>
          <p className="text-muted-foreground text-lg">
            {blog.description}
          </p>
         
          <p className="text-muted-foreground">
            <strong>Category:</strong> {blog.category} {/* Display category */}
          </p>
        </div>
        <div className="prose prose-gray max-w-none dark:prose-invert">
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      </article>
    </div>
  );
}
