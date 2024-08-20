"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
        <Image 
                    src="/codeweb3.svg"
                    width="48"
                    height="48"
                    alt="Testimonial Avatar"
                    className="h-12 w-12 rounded-full"
                  />
          <span className="text-xl font-bold">CodeWeb3</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="/explore" className="text-sm font-medium text-foreground hover:text-primary transition-colors" prefetch={false}>
            Explore
          </Link>
          <Link href="/courses" className="text-sm font-medium text-foreground hover:text-primary transition-colors" prefetch={false}>
            All Courses
          </Link>
          <Link href="/docs" className="text-sm font-medium text-foreground hover:text-primary transition-colors" prefetch={false}>
            Docs
          </Link>
          <Link href="/blog" className="text-sm font-medium text-foreground hover:text-primary transition-colors" prefetch={false}>
            Blog
          </Link>
          <Link href="/blog/new" className="text-sm font-medium text-foreground hover:text-primary transition-colors" prefetch={false}>
            Create Blog
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <SignedOut>
            <Link href="/sign-in" className="text-sm font-medium text-foreground hover:text-primary transition-colors" prefetch={false}>
              Sign in
            </Link>
            <Link href="/get-started" className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" prefetch={false}>
              Get started
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <ModeToggle />
          <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <div className="flex flex-col gap-6 p-6">
              {/* Menu Items */}
              <a href="/explore" className="font-medium hover:underline">Explore</a>
              <a href="/courses" className="font-medium hover:underline">All Courses</a>
              <a href="/docs" className="font-medium hover:underline">Docs</a>
              <a href="/blog" className="font-medium hover:underline">Blog</a>
              <a href="/blog/new" className="font-medium hover:underline">Create Blog</a>
              <a href="/sign-in" className="font-medium hover:underline">Sign in</a>
              <a href="/get-started" className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">Get started</a>
            </div>
          </SheetContent>
        </Sheet>
        </div>
      </div>
    </header>
  );
}

function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
