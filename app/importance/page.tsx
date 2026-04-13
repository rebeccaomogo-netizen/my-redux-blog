"use client";

import React from "react";
import Link from "next/link";

export default function ImportancePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Visual Header */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2000" 
          alt="Books and Knowledge" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/60" />
        <h1 className="relative z-10 text-4xl md:text-6xl font-black text-white text-center">
          The Power of Reading
        </h1>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why We Write</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Reading is the gateway to new worlds. In our campus community, sharing 
              knowledge through blogs helps us grow together, stay informed, and 
              expand our horizons.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              When you read, you aren't just consuming content—you are engaging with 
              the minds of your peers and industry experts.
            </p>
          </div>
          <div className="rounded-4xl overflow-hidden shadow-2xl rotate-2">
            <img 
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1000" 
              alt="Person reading" 
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-slate-50 rounded-[3rem] p-10 text-center border border-slate-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to dive in?</h3>
          <p className="text-slate-600 mb-8">
            Our full collection of student-led blogs is waiting for you. 
            Sign in to access exclusive articles and campus news.
          </p>
          <Link 
            href="/login" 
            className="inline-block px-12 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all transform hover:scale-105"
          >
            Sign In to Read All Posts
          </Link>
        </div>
      </section>
    </main>
  );
}