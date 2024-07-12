"use client"
import React, { useState, useEffect } from 'react';
import BlogContent from '@/components/BlogContent';
import { client } from "@/lib/createClient";
import { groq } from "next-sanity";


const revalidate = 30;
const query = groq`*[_type == 'post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)`;

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await client.fetch(query);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const limitedPosts = posts.slice(0, 3); // Slice the array to show only the first three posts

  return (
    <main className="container relative ">
   
      <BlogContent posts={posts.slice(0, 3)} />
     
    </main>
  );
};

export default Home;
