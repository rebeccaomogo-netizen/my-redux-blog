import type { Metadata } from 'next';

// Requirement: Metadata API [cite: 24, 33]
export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the Campus Blog team.',
};

export default function ContactPage() {
  return (
    <main className="max-w-xl mx-auto p-10 mt-10 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Contact Us </h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" className="w-full mt-1 border border-gray-300 p-2 rounded-md" placeholder="Your Name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" className="w-full mt-1 border border-gray-300 p-2 rounded-md" placeholder="email@campus.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea className="w-full mt-1 border border-gray-300 p-2 rounded-md" rows={4} placeholder="How can we help?"></textarea>
        </div>
        <button type="button" className="w-full bg-blue-600 text-white py-2 rounded-md font-bold hover:bg-blue-700">
          Send Message [cite: 27]
        </button>
      </form>
    </main>
  );
}