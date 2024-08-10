"use client"
import { useParams } from 'next/navigation';

export default function BlogPost() {
  const { slug } = useParams();

  // Replace with fetching data based on slug
  const blog = {
    title: "Mastering the Art of Technical Documentation",
    date: "August 9, 2023",
    content: `
      Technical documentation is a crucial aspect of any software or hardware product, as it helps users understand how to effectively use and maintain the product. However, creating engaging and informative technical documentation can be a challenging task.
      
      In this blog post, we will explore the art of technical documentation, covering essential techniques and best practices that will help you create documentation that truly stands out...
    `,
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
      <article className="space-y-8">
        <div>
          <img
            src="/placeholder.svg"
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
            Discover the essential techniques and best practices for creating high-quality technical documentation that engages and informs your audience.
          </p>
          <p className="text-muted-foreground">
            Published on <time dateTime="2023-08-09">{blog.date}</time>
          </p>
        </div>
        <div className="prose prose-gray max-w-none dark:prose-invert">
          <p>{blog.content}</p>
        </div>
      </article>
    </div>
  );
}
