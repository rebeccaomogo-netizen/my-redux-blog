"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const blogImages = [
    { url: "https://images.unsplash.com/photo-1523240715632-d984bb4a970e?q=80&w=800", alt: "Students collaborating" },
    { url: "https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?q=80&w=800", alt: "University library" },
    { url: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?q=80&w=800", alt: "Campus outdoors" },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-600 py-20 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-black mb-4">Our Story</h1>
        <p className="text-xl opacity-90">Connecting the students of Nairobi through storytelling.</p>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Inside CampusHub</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogImages.map((img, index) => (
            <div key={index} className="relative h-64 overflow-hidden rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300">
              <img 
                src={img.url} 
                alt={img.alt} 
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 max-w-4xl mx-auto px-6 text-center">
        <p className="text-lg text-slate-600 leading-relaxed mb-8">
          CampusHub was founded to bridge the communication gap within universities. 
          Our platform allows students to share insights on technology, career advice, 
          and campus culture in real-time.
        </p>
        <Link href="/contact" className="text-blue-600 font-bold hover:underline">
          Want to contribute? Contact us &rarr;
        </Link>
      </section>
    </main>
  );
}