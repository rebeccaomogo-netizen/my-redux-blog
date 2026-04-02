"use client";

import React from "react";
import Link from "next/link";

export default function PublicLandingPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100">
      {/* Hero Section */}
      <main className="relative flex flex-col items-center justify-center px-6 pt-20 pb-32 overflow-hidden">
        
        {/* Decorative Background Blurs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-50 blur-[120px] opacity-60" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-50 blur-[120px] opacity-60" />
        </div>

        <div className="max-w-4xl text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50/50 px-3 py-1 text-sm font-medium text-blue-700">
            ✨ Now Live: The Nairobi Student Hub
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            Empowering Campus Life with <span className="text-blue-600">CampusHub</span>
          </h1>

          {/* Subtext */}
          <p className="mx-auto max-w-2xl text-lg md:text-xl text-slate-600 leading-relaxed">
            Your all-in-one platform for campus news, blog stories, and student resources. 
            Join thousands of students in Nairobi and stay connected.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/login"
              className="w-full sm:w-auto rounded-2xl bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95"
            >
              Get Started (Login)
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto rounded-2xl border border-slate-200 bg-white px-8 py-4 text-lg font-bold text-slate-700 hover:bg-slate-50 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Feature Preview Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
          {[
            { title: "Real-time Updates", desc: "Never miss a beat with instant campus news." },
            { title: "Student Blogs", desc: "Share your voice and read stories from peers." },
            { title: "Resources", desc: "Access essential student information systems." },
          ].map((feature, i) => (
            <div key={i} className="p-6 rounded-4xl bg-white border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-500 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}