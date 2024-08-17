"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import '../styles/globals.css';
import {
  ClerkProvider,
 
} from '@clerk/nextjs';
import { ThemeProvider } from 'next-themes';

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

interface RootLayoutProps {
  children: React.ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'antialiased',
            fontHeading.variable,
            fontBody.variable,
            'flex',
          )}
        >
             <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
         
            <div className="flex-1 flex flex-col">
              <Navbar />
              <main className="flex-1 p-0">
             
                {children}
              </main>
              <Footer />
            </div>
            </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
