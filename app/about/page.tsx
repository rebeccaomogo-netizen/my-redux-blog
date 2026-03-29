import type { Metadata } from 'next';

// Requirement: Metadata API for dynamic titles 
export const metadata: Metadata = {
  title: 'About Our Mission',
  description: 'Information about the Campus Blog project and our technical stack.',
};

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto p-10 bg-gray-50 min-h-screen">
      {/* Requirement: Information about the blog  */}
      <h1 className="text-4xl font-extrabold text-blue-700 mb-6">
        About Campus Blog
      </h1>
      
      <section className="prose lg:prose-xl text-gray-800 space-y-6">
        <p className="text-lg leading-relaxed">
          Welcome to the **Campus Blog**. This platform was specifically designed to 
          demonstrate proficiency in modern React development patterns, including 
          server-side rendering (SSR), global state management, and complex side effect handling[cite: 3].
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">Technical Proficiency</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Framework:</strong> Next.js 15 (App Router) </li>
          <li><strong>State Management:</strong> Redux Toolkit [cite: 42]</li>
          <li><strong>Side Effects:</strong> Redux-Saga [cite: 48]</li>
          <li><strong>Styling:</strong> Tailwind CSS for responsive design </li>
        </ul>

        <p className="mt-6 border-t pt-6 text-gray-600 italic">
          This project is part of a professional developer assignment designed to mirror 
          real-world production-grade applications[cite: 247].
        </p>
      </section>
    </main>
  );
}