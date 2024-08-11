import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import Image from 'next/image';

const Explore: React.FC = () => {
  return (
    <div className="bg-background text-foreground">
      <section className="relative h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-50" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center space-y-6 px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Discover and Learn</h1>
          <p className="max-w-3xl text-lg text-muted-foreground">
            Explore our comprehensive collection of courses, tutorials, examples, references, and blog posts to enhance
            your knowledge and skills.
          </p>
        </div>
        <Image src="/placeholder.svg" alt="Hero Background" fill className="object-cover" />
      </section>
      <main className="mx-auto max-w-6xl space-y-16 px-4 py-12 sm:py-16 lg:py-20">
        <section>
          <h2 className="mb-4 text-2xl font-bold">Courses</h2>
          <p className="mb-8 text-muted-foreground">
            Dive into our extensive collection of online courses covering a wide range of topics.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <Image
                src="/placeholder.svg"
                alt="Course Thumbnail 1"
                width={400}
                height={225}
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "400/225", objectFit: "cover" }}
              />
              <CardContent className="p-4">
                <h3 className="mb-2 text-lg font-bold">Introduction to React</h3>
                <p className="text-muted-foreground">
                  Learn the fundamentals of React, a popular JavaScript library for building user interfaces.
                </p>
              </CardContent>
            </Card>
            <Card>
              <Image
                src="/placeholder.svg"
                alt="Course Thumbnail 2"
                width={400}
                height={225}
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "400/225", objectFit: "cover" }}
              />
              <CardContent className="p-4">
                <h3 className="mb-2 text-lg font-bold">Mastering CSS</h3>
                <p className="text-muted-foreground">
                  Dive deep into the world of CSS and learn how to create stunning and responsive designs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <Image
                src="/placeholder.svg"
                alt="Course Thumbnail 3"
                width={400}
                height={225}
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "400/225", objectFit: "cover" }}
              />
              <CardContent className="p-4">
                <h3 className="mb-2 text-lg font-bold">Advanced JavaScript Concepts</h3>
                <p className="text-muted-foreground">
                  Explore the advanced features and techniques of JavaScript to become a more proficient developer.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section>
          <h2 className="mb-4 text-2xl font-bold">Tutorials</h2>
          <p className="mb-8 text-muted-foreground">
            Browse our collection of step-by-step tutorials to learn new skills and techniques.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <Image
                src="/placeholder.svg"
                alt="Tutorial Thumbnail 1"
                width={400}
                height={225}
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "400/225", objectFit: "cover" }}
              />
              <CardContent className="p-4">
                <h3 className="mb-2 text-lg font-bold">Building a Responsive Website</h3>
                <p className="text-muted-foreground">
                  Learn how to create a modern and responsive website using HTML, CSS, and JavaScript.
                </p>
              </CardContent>
            </Card>
            <Card>
              <Image
                src="/placeholder.svg"
                alt="Tutorial Thumbnail 2"
                width={400}
                height={225}
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "400/225", objectFit: "cover" }}
              />
              <CardContent className="p-4">
                <h3 className="mb-2 text-lg font-bold">Deploying a Node.js Application</h3>
                <p className="text-muted-foreground">
                  Follow this step-by-step guide to deploy your Node.js application to a production environment.
                </p>
              </CardContent>
            </Card>
            <Card>
              <Image
                src="/placeholder.svg"
                alt="Tutorial Thumbnail 3"
                width={400}
                height={225}
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "400/225", objectFit: "cover" }}
              />
              <CardContent className="p-4">
                <h3 className="mb-2 text-lg font-bold">Mastering Git Version Control</h3>
                <p className="text-muted-foreground">
                  Dive into the world of Git and learn how to effectively manage your code using version control.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section>
          <h2 className="mb-4 text-2xl font-bold">Examples</h2>
          <p className="mb-8 text-muted-foreground">
            Explore a collection of code examples and demos to inspire your own projects.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <Image
                src="/placeholder.svg"
                alt="Example Thumbnail 1"
                width={400}
                height={225}
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "400/225", objectFit: "cover" }}
              />
              <CardContent className="p-4">
                <h3 className="mb-2 text-lg font-bold">React Todo App</h3>
                <p className="text-muted-foreground">A simple and intuitive todo list application built with React.</p>
              </CardContent>
            </Card>
            <Card>
              <Image
                src="/placeholder.svg"
                alt="Example Thumbnail 2"
                width={400}
                height={225}
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "400/225", objectFit: "cover" }}
              />
              <CardContent className="p-4">
                <h3 className="mb-2 text-lg font-bold">CSS Grid Layout Demos</h3>
                <p className="text-muted-foreground">
                  Explore a collection of CSS Grid layout examples and learn how to create complex designs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <Image
                src="/placeholder.svg"
                alt="Example Thumbnail 3"
                width={400}
                height={225}
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "400/225", objectFit: "cover" }}
              />
              <CardContent className="p-4">
                <h3 className="mb-2 text-lg font-bold">Animated SVG Illustrations</h3>
                <p className="text-muted-foreground">
                  Discover a gallery of animated SVG illustrations that can be used in your projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section>
          <h2 className="mb-4 text-2xl font-bold">References</h2>
          <p className="mb-8 text-muted-foreground">
            Explore our collection of reference materials and documentation to deepen your understanding.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <Image
                src="/placeholder.svg"
                alt="Reference Thumbnail 1"
                width={400}
                height={225}
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "400/225", objectFit: "cover" }}
              />
              <CardContent className="p-4">
                <h3 className="mb-2 text-lg font-bold">HTML5 Element Reference</h3>
                <p className="text-muted-foreground">
                  A comprehensive guide to all the HTML5 elements and their usage.
                </p>
              </CardContent>
            </Card>
            <Card>
              <Image
                src="/placeholder.svg"
                alt="Reference Thumbnail 2"
                width={400}
                height={225}
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "400/225", objectFit: "cover" }}
              />
              <CardContent className="p-4">
                <h3 className="mb-2 text-lg font-bold">CSS Property Reference</h3>
                <p className="text-muted-foreground">Explore the extensive list of CSS properties and their usage.</p>
              </CardContent>
            </Card>
            <Card>
              <Image
                src="/placeholder.svg"
                alt="Reference Thumbnail 3"
                width={400}
                height={225}
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "400/225", objectFit: "cover" }}
              />
              <CardContent className="p-4">
                <h3 className="mb-2 text-lg font-bold">JavaScript Function Reference</h3>
                <p className="text-muted-foreground">
                  Discover the most commonly used JavaScript functions and their syntax.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section>
          <h2 className="mb-4 text-2xl font-bold">Blog Posts</h2>
          <p className="mb-8 text-muted-foreground">
            Stay up-to-date with the latest news, trends, and insights from our blog.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <Image
                src="/placeholder.svg"
                alt="Blog Thumbnail 1"
                width={400}
                height={225}
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "400/225", objectFit: "cover" }}
              />
              <CardContent className="p-4">
                <h3 className="mb-2 text-lg font-bold">The Future of Web Development</h3>
                <p className="text-muted-foreground">
                  Explore the emerging trends and technologies that are shaping the future of web development.
                </p>
              </CardContent>
            </Card>
            <Card>
              <Image
                src="/placeholder.svg"
                alt="Blog Thumbnail 2"
                width={400}
                height={225}
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "400/225", objectFit: "cover" }}
              />
              <CardContent className="p-4">
                <h3 className="mb-2 text-lg font-bold">Accessibility in Web Design</h3>
                <p className="text-muted-foreground">
                  Learn how to create inclusive and accessible web experiences for all users.
                </p>
              </CardContent>
            </Card>
            <Card>
              <Image
                src="/placeholder.svg"
                alt="Blog Thumbnail 3"
                width={400}
                height={225}
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: "400/225", objectFit: "cover" }}
              />
              <CardContent className="p-4">
                <h3 className="mb-2 text-lg font-bold">Optimizing Website Performance</h3>
                <p className="text-muted-foreground">
                  Discover techniques and strategies to improve the performance of your website.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}
export default Explore;
