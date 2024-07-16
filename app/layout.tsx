"use client"
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SideNavbar from '../components/SideNavbar'; // Import the SideNavbar component

import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import '../styles/globals.css';

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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body 
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        <Navbar />
        <div className="flex">
          <SideNavbar />
          <main className="flex-1 ml-64 p-4">{children}</main> {/* Adjusted to add margin-left for the SideNavbar */}
        </div>
        <Footer />
      </body>
    </html>
  );
}
