
import Link from "next/link"
import { Input } from "@/components/ui/input"

export default function Hero() {
  return (
    <section className="w-full bg-[url('/hero-bg.jpg')] bg-cover bg-center py-20 md:py-32 lg:py-40">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Learn to Code with Comprehensive Tutorials and Examples
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">Start your journey in web development today!</p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Get Started
              </Link>
              <div className="relative flex-1">
                <Input type="search" placeholder="Search tutorials, references, and examples" className="pr-10" />
                <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-md bg-muted px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                <HashIcon className="h-5 w-5" />
                HTML Tutorial
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-md bg-muted px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                <CodepenIcon className="h-5 w-5" />
                CSS Tutorial
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-md bg-muted px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                <CodepenIcon className="h-5 w-5" />
                JavaScript Tutorial
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-md bg-muted px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                <BadgeIcon className="h-5 w-5" />
                Get Certified
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="grid max-w-md gap-4">
              <div className="rounded-lg border bg-card p-4">
                <div className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg"
                    width="48"
                    height="48"
                    alt="Testimonial Avatar"
                    className="h-12 w-12 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-muted-foreground">Software Engineer</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  "The tutorials and examples on this website have been\n invaluable in helping me learn web
                  development. Highly\n recommended!"
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/placeholder.svg"
                  width="100"
                  height="50"
                  alt="Partner Logo 1"
                  className="aspect-[2/1] object-contain"
                />
                <img
                  src="/placeholder.svg"
                  width="100"
                  height="50"
                  alt="Partner Logo 2"
                  className="aspect-[2/1] object-contain"
                />
                <img
                  src="/placeholder.svg"
                  width="100"
                  height="50"
                  alt="Partner Logo 3"
                  className="aspect-[2/1] object-contain"
                />
                <img
                  src="/placeholder.svg"
                  width="100"
                  height="50"
                  alt="Partner Logo 4"
                  className="aspect-[2/1] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function BadgeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    </svg>
  )
}


function CodepenIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  )
}


function HashIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="9" y2="9" />
      <line x1="4" x2="20" y1="15" y2="15" />
      <line x1="10" x2="8" y1="3" y2="21" />
      <line x1="16" x2="14" y1="3" y2="21" />
    </svg>
  )
}


function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}