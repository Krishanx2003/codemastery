import Link from 'next/link';

export default function Blog() {
  const blogs = [
    {
      title: "Mastering the Fundamentals of Documentation",
      slug: "mastering-documentation",
      date: "August 9, 2024",
      description: "Learn the essential techniques for creating clear and concise documentation that helps users understand and utilize your product.",
    },
    {
      title: "Effective Strategies for Technical Writing",
      slug: "effective-strategies-writing",
      date: "July 28, 2024",
      description: "Discover the best practices for crafting clear, concise, and user-friendly technical documentation.",
    },
    // Add other blog posts here
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <article key={blog.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link href={`/blog/${blog.slug}`}>
            
                <img
                  src="/placeholder.svg"
                  alt={blog.title}
                  width="400"
                  height="200"
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "400/200", objectFit: "cover" }}
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
                  <p className="text-muted-foreground mb-4">{blog.description}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span>Published on</span>
                    <span className="ml-2">{blog.date}</span>
                  </div>
                </div>
             
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
