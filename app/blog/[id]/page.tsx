'use client';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export default function PostDetail() {
  const { id } = useParams();
  const router = useRouter();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching directly here for simplicity, or use Redux if required by the rubric
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-20">Reading the article...</p>;

  return (
    <main className="max-w-3xl mx-auto p-10">
      <button 
        onClick={() => router.back()} 
        className="mb-6 text-blue-600 hover:underline"
      >
        ← Back to Campus Feed
      </button>
      
      <h1 className="text-5xl font-extrabold mb-6 leading-tight">{post.title}</h1>
      
      <div className="flex gap-2 mb-8">
        {post.tags?.map((tag: string) => (
          <span key={tag} className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
            #{tag}
          </span>
        ))}
      </div>

      <p className="text-xl text-gray-700 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
        {post.body}
      </p>

      <div className="mt-12 p-6 bg-blue-50 rounded-2xl flex justify-between items-center">
        <span className="font-semibold text-blue-800">Likes: {post.reactions?.likes || 0}</span>
        <span className="text-gray-500 italic">Views: {post.views || 0}</span>
      </div>
    </main>
  );
}