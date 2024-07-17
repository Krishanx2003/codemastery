// src/app/layout.tsx

"use client"
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { client } from '../lib/createClient';
import { Course } from '../types/sanity';

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
          fontBody.variable,
          'flex',
        )}
      >
        
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="flex-1 p-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
