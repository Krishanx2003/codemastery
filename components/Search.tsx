// components/Search.tsx

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/createClient';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (query.trim() === '') {
      return;
    }

    try {
      const response = await fetch(`/api/search?query=${query}`);
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Search error:', error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center my-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for courses..."
          className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {results.map((result: any) => (
          <Link key={result._id} href={`/courses/${result.slug.current}`} passHref legacyBehavior>
            <a className="group relative block p-4 rounded-md shadow-md hover:bg-gray-100">
              <div className="relative group overflow-hidden rounded-lg">
                <img
                  src={result.image ? urlFor(result.image).width(400).height(300).fit('crop').url() : '/placeholder.png'}
                  alt={result.title}
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-black/70 group-hover:opacity-90 transition-opacity flex items-end p-4">
                <h2 className="text-lg font-semibold text-white">{result.title}</h2>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
