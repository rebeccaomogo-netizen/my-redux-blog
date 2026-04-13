"use client";

import React from "react";
import Link from "next/link";

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=2066" 
            alt="Writing workspace" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="uppercase tracking-widest text-sm font-bold text-blue-400 mb-4 block">
            Est. 2026
          </span>
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
            Welcome to <br /> <span className="text-blue-500">My Blog</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed font-light">
            A space dedicated to student voices, technical insights, and the art of storytelling. 
            Step inside to explore the community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="/importance" 
              className="px-12 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg shadow-2xl transition-all hover:-translate-y-1"
            >
              Start Reading
            </Link>
            <Link 
              href="/about" 
              className="px-12 py-5 bg-white/10 border border-white/20 hover:bg-white/20 backdrop-blur-md text-white rounded-full font-bold text-lg transition-all"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURE PREVIEW */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-16">What's Inside?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100">
              <div className="text-4xl mb-6">🚀</div>
              <h3 className="text-xl font-bold mb-3">Tech Trends</h3>
              <p className="text-slate-500">Deep dives into Next.js, Redux, and modern web development.</p>
            </div>
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100">
              <div className="text-4xl mb-6">🎓</div>
              <h3 className="text-xl font-bold mb-3">Campus Life</h3>
              <p className="text-slate-500">Stories from the heart of the university experience.</p>
            </div>
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100">
              <div className="text-4xl mb-6">💡</div>
              <h3 className="text-xl font-bold mb-3">Career Growth</h3>
              <p className="text-slate-500">Advice for students transitioning into the professional world.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}