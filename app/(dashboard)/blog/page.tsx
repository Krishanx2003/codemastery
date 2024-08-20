import React from 'react'

const Blog = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="/placeholder.svg"
            alt="Blog Post Image"
            width="400"
            height="200"
            className="w-full h-48 object-cover"
            style={{ aspectRatio: "400/200", objectFit: "cover" }}
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Mastering the Fundamentals of Documentation</h2>
            <p className="text-muted-foreground mb-4">
              Learn the essential techniques for creating clear and concise documentation that helps users understand
              and utilize your product.
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>Published on</span>
              <span className="ml-2">August 9, 2024</span>
            </div>
          </div>
        </article>
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="/placeholder.svg"
            alt="Blog Post Image"
            width="400"
            height="200"
            className="w-full h-48 object-cover"
            style={{ aspectRatio: "400/200", objectFit: "cover" }}
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Effective Strategies for Technical Writing</h2>
            <p className="text-muted-foreground mb-4">
              Discover the best practices for crafting clear, concise, and user-friendly technical documentation.
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>Published on</span>
              <span className="ml-2">July 28, 2024</span>
            </div>
          </div>
        </article>
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="/placeholder.svg"
            alt="Blog Post Image"
            width="400"
            height="200"
            className="w-full h-48 object-cover"
            style={{ aspectRatio: "400/200", objectFit: "cover" }}
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Navigating the Documentation Landscape</h2>
            <p className="text-muted-foreground mb-4">
              Explore the various types of documentation and how to choose the right approach for your project.
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>Published on</span>
              <span className="ml-2">June 15, 2024</span>
            </div>
          </div>
        </article>
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="/placeholder.svg"
            alt="Blog Post Image"
            width="400"
            height="200"
            className="w-full h-48 object-cover"
            style={{ aspectRatio: "400/200", objectFit: "cover" }}
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Crafting Engaging Documentation</h2>
            <p className="text-muted-foreground mb-4">
              Learn how to create documentation that captivates your audience and helps them understand your product.
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>Published on</span>
              <span className="ml-2">May 3, 2024</span>
            </div>
          </div>
        </article>
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="/placeholder.svg"
            alt="Blog Post Image"
            width="400"
            height="200"
            className="w-full h-48 object-cover"
            style={{ aspectRatio: "400/200", objectFit: "cover" }}
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Optimizing Documentation for SEO</h2>
            <p className="text-muted-foreground mb-4">
              Discover strategies for improving the visibility and discoverability of your documentation content.
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>Published on</span>
              <span className="ml-2">April 20, 2024</span>
            </div>
          </div>
        </article>
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="/placeholder.svg"
            alt="Blog Post Image"
            width="400"
            height="200"
            className="w-full h-48 object-cover"
            style={{ aspectRatio: "400/200", objectFit: "cover" }}
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Collaborative Documentation Workflows</h2>
            <p className="text-muted-foreground mb-4">
              Explore best practices for managing documentation projects with a team and ensuring consistent,
              high-quality content.
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>Published on</span>
              <span className="ml-2">March 12, 2024</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Blog
