"use client";

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

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
    // Static content for the specific slug
    const staticBlogPost: Post = {
      _id: "unique_id_for_static_post",
      title: "Mastering the Art of Technical Documentation",
      description: "Discover the essential techniques and best practices for creating high-quality technical documentation that engages and informs your audience.",
      content: `
        <p>
          Technical documentation is a crucial aspect of any software or hardware product, as it helps users
          understand how to effectively use and maintain the product. However, creating engaging and informative
          technical documentation can be a challenging task.
        </p>
        <p>
          In this blog post, we will explore the art of technical documentation, covering essential techniques and
          best practices that will help you create documentation that truly stands out. From organizing your content
          to crafting clear and concise language, we'll provide you with the tools and strategies you need to master
          the art of technical documentation.
        </p>
        <h2>Organizing Your Content</h2>
        <p>
          One of the key aspects of effective technical documentation is organization. Your content should be
          structured in a way that makes it easy for users to find the information they need, when they need it. This
          means creating a clear and logical hierarchy of topics, with intuitive navigation and cross-references to
          related content.
        </p>
        <h2>Writing for Your Audience</h2>
        <p>
          Another crucial element of technical documentation is understanding your audience. Who are the users of your
          product, and what are their specific needs and pain points? By tailoring your language and tone to your
          target audience, you can create documentation that is both informative and engaging.
        </p>
        <h2>Incorporating Visual Aids</h2>
        <p>
          Technical documentation often involves complex processes and concepts, and visual aids can be an invaluable
          tool for communicating these ideas effectively. From diagrams and screenshots to video tutorials and
          interactive demos, incorporating visual elements can help your users better understand and retain the
          information you're presenting.
        </p>
        <h2>Continuous Improvement</h2>
        <p>
          Finally, it's important to remember that technical documentation is an ongoing process. As your product
          evolves and user needs change, your documentation should also adapt and improve. Regularly gathering
          feedback, testing your documentation, and making updates based on user input will help ensure that your
          technical documentation remains relevant and effective over time.
        </p>
      `,
      createdAt: "2023-08-09T00:00:00Z",
      date: "August 9, 2023",
      slug: "mastering-the-art-of-technical-documentation",
      image: "/placeholder.svg",
      category: "Documentation"
    };

    // Check if the slug matches and set the static content
    if (slug === staticBlogPost.slug) {
      setBlog(staticBlogPost);
    } else {
      console.error('No matching blog post found');
    }
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
