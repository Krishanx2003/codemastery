import Link from "next/link";
import { Input } from "@/components/ui/input";

export default function Testimonial() {
  return (
    <>
   <section className="py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Students Say</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-md bg-card p-6 text-card-foreground">
                <blockquote className="space-y-2">
                  <p className="text-lg font-medium">
                    "This website has been a game-changer for my web development journey. The tutorials are comprehensive and easy to understand."
                  </p>
                  <cite className="text-sm font-medium">- John Doe, Software Engineer</cite>
                </blockquote>
              </div>
              <div className="rounded-md bg-card p-6 text-card-foreground">
                <blockquote className="space-y-2">
                  <p className="text-lg font-medium">
                    "I've been able to learn and apply new skills quickly thanks to the practical examples and hands-on exercises."
                  </p>
                  <cite className="text-sm font-medium">- Jane Smith, Web Developer</cite>
                </blockquote>
              </div>
              <div className="rounded-md bg-card p-6 text-card-foreground">
                <blockquote className="space-y-2">
                  <p className="text-lg font-medium">
                    "The certification program has been invaluable in demonstrating my expertise to potential employers."
                  </p>
                  <cite className="text-sm font-medium">- Michael Johnson, Frontend Engineer</cite>
                </blockquote>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-4 gap-4">
                <img
                  src="/placeholder.svg"
                  alt="Company Logo"
                  width={100}
                  height={50}
                  className="h-auto w-full object-contain"
                />
                <img
                  src="/placeholder.svg"
                  alt="Company Logo"
                  width={100}
                  height={50}
                  className="h-auto w-full object-contain"
                />
                <img
                  src="/placeholder.svg"
                  alt="Company Logo"
                  width={100}
                  height={50}
                  className="h-auto w-full object-contain"
                />
                <img
                  src="/placeholder.svg"
                  alt="Company Logo"
                  width={100}
                  height={50}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
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
  );
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
  );
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
  );
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
      <line x1="21" x2="16.65" y1="21" y2="16.65" />
    </svg>
  );
}
