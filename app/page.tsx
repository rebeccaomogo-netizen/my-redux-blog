'use client';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { RootState } from './store';
import { fetchPostsRequest } from './store/slices/postsSlice';
import { logout } from './store/slices/authSlice';
import Card from './components/blog/PostCard/Card';

export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();
  
  // State for search filtering
  const [searchTerm, setSearchTerm] = useState('');
  
  const { items, loading, error } = useSelector((state: RootState) => state.posts);
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    } else {
      dispatch(fetchPostsRequest());
    }
  }, [isAuthenticated, dispatch, router]);

  const handleLogout = () => {
    dispatch(logout());
    router.push('/login');
  };

  // Filter logic
  const filteredItems = items.filter((post: any) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isAuthenticated) return null;

  return (
    <main className="min-h-screen bg-[#f8fafc] pb-20 relative">
      {/* --- NAVBAR --- */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-200">
              C
            </div>
            <h1 className="text-2xl font-black bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-tight">
              CampusHub
            </h1>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Active Student</span>
              <span className="text-sm font-bold text-gray-900">{user?.username || 'Emily'}</span>
            </div>
            <button 
              onClick={handleLogout}
              className="relative z-50 px-5 py-2.5 bg-red-50 text-red-600 text-sm font-bold rounded-xl hover:bg-red-600 hover:text-white transition-all duration-300 active:scale-95 border border-red-100 cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION (FIXED FOR CLICKING) --- */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-8 relative">
        <div className="bg-linear-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] p-8 md:p-16 text-white shadow-2xl shadow-blue-200 relative overflow-hidden">
          
          {/* Content Layer - High Z-Index */}
          <div className="relative z-30 max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
              University News Feed
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Stay Connected with <br /> Your Campus Community.
            </h2>
            
            {/* --- THE SEARCH INPUT --- */}
            <div className="mt-10 relative max-w-md">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-40">
                <svg className="h-5 w-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search campus news..."
                autoFocus
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                /* CRITICAL: 'relative z-40' and 'cursor-text' ensure 
                   this is the top-most layer for mouse events 
                */
                className="relative z-40 block w-full pl-12 pr-4 py-4 bg-white/20 border border-white/30 backdrop-blur-lg rounded-2xl text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/30 transition-all font-medium cursor-text"
              />
            </div>
          </div>

          {/* Abstract Background Shapes 
              'pointer-events-none' ensures you can click right through them 
          */}
          <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-white/10 rounded-full blur-3xl z-0 pointer-events-none"></div>
          <div className="absolute bottom-[-20%] left-[-5%] w-48 h-48 bg-indigo-500/20 rounded-full blur-2xl z-0 pointer-events-none"></div>
        </div>
      </section>

      {/* --- BLOG GRID --- */}
      <section className="max-w-7xl mx-auto px-6 mt-12 relative z-10">
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-2xl font-black text-gray-900 tracking-tight">
            {searchTerm ? `Results for "${searchTerm}"` : 'Trending Posts'}
          </h3>
          <div className="h-px grow mx-8 bg-gray-200 hidden md:block"></div>
          <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
            {filteredItems.length} results
          </span>
        </div>

        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin mb-4"></div>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Synchronizing Feed...</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((post: any) => (
              <Card 
                key={post.id} 
                id={post.id}
                title={post.title} 
                body={post.body} 
              />
            ))}
          </div>
        )}

        {!loading && filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 font-black text-xl italic opacity-50 uppercase tracking-widest">No matches found</p>
          </div>
        )}
      </section>
    </main>
  );
}