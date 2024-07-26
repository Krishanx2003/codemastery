import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-muted py-12 w-full">
      <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="grid gap-4">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <nav className="grid gap-2">
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              Services
            </Link>
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
        </div>
        <div className="grid gap-4">
          <h4 className="text-lg font-semibold">Social Media</h4>
          <nav className="flex gap-4">
         =
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              <InstagramIcon className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              <LinkedinIcon className="h-6 w-6" />
            </Link>
          </nav>
        </div>
        <div className="grid gap-4">
          <h4 className="text-lg font-semibold">Newsletter</h4>
          <form className="flex gap-2">
            <Input type="email" placeholder="Enter your email" className="flex-1" />
            <Button type="submit">Subscribe</Button>
          </form>
          <p className="text-sm text-muted-foreground">
            Sign up for our newsletter to stay up-to-date with our latest news and updates.
          </p>
        </div>
        <div className="grid gap-4">
          <h4 className="text-lg font-semibold">Contact Us</h4>
          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              
              <a href="#" className="text-muted-foreground hover:underline">
                +1 (234) 567-890
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MailIcon className="h-5 w-5 text-muted-foreground" />
              <a href="#" className="text-muted-foreground hover:underline">
                info@example.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPinIcon className="h-5 w-5 text-muted-foreground" />
              <span className="text-muted-foreground">123 Main St, Anytown USA</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container max-w-7xl mt-12 border-t pt-6 text-sm text-muted-foreground">
        <p>&copy; 2024 Example Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
