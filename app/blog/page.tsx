"use client";

import React from "react";
// We import the entire Blog List component that handles the fetching
import BlogList from "../components/blog/PostCard/Card"; 

export default function BlogFeedPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black text-slate-900">Campus News Feed</h1>
          <p className="text-slate-500 mt-2">Welcome back! Here are the latest updates.</p>
        </div>

        {/* If BlogList still shows an error here, it's because that 
           specific file is only for ONE card. 
           In that case, we should import your main "Posts" component.
        */}
        <BlogList title="Sample Post" body="Click to read more..." id={1} />
      </div>
    </main>
  );
}