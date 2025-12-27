
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

const BlogArchive: React.FC<{ isLoggedIn: boolean }> = ({ isLoggedIn }) => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Topics');

  const categories = ['All Topics', 'Robotics', 'Mathematics', 'Study Guides', 'Physics', 'Coding', 'Advanced Tech', 'Biology'];

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All Topics' || post.category === activeCategory;
    const isVisible = isLoggedIn || !post.isPrivate;
    return matchesSearch && matchesCategory && isVisible;
  });

  const hasHiddenContent = !isLoggedIn && BLOG_POSTS.some(p => p.isPrivate);

  return (
    <div className="max-w-[1120px] mx-auto px-4 md:px-8 py-12 flex flex-col gap-8">
      {/* Page Heading */}
      <div className="flex flex-col gap-3 max-w-[700px]">
        <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">Teacher Yen's Notes</h1>
        <p className="text-text-muted text-lg font-normal">Explore lessons, teaching tips, and the latest STEM news for K-12 and high school students.</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col lg:flex-row gap-6 lg:items-center justify-between border-y dark:border-slate-800 py-6">
        <div className="flex-1 max-w-lg">
          <div className="flex w-full items-center rounded-xl bg-white dark:bg-slate-900 h-12 border border-slate-200 dark:border-slate-800 focus-within:ring-2 focus-within:ring-primary/20 transition-all overflow-hidden">
            <div className="pl-4 text-text-muted">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input 
              value={search}
              // Fixed: replaced 'setSearchTerm' with 'setSearch'
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent border-none focus:ring-0 text-text-main dark:text-white placeholder:text-text-muted px-3 h-full text-base" 
              placeholder="Search for lessons, tips, or news..." 
            />
          </div>
        </div>
        <div className="relative">
          <select className="appearance-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-text-main dark:text-white h-10 px-4 pr-10 rounded-lg focus:outline-none focus:border-primary text-sm font-medium">
            <option>Sort by Date: Newest</option>
            <option>Sort by Date: Oldest</option>
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">
            <span className="material-symbols-outlined text-xl">expand_more</span>
          </div>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap gap-3">
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`h-9 px-5 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat 
                ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                : 'bg-slate-100 dark:bg-slate-800 text-text-main dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map(post => (
          <article key={post.id} className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="relative h-56 w-full overflow-hidden">
              <img alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={post.imageUrl} />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-md text-[10px] font-black text-primary uppercase tracking-wide">
                  {post.category}
                </span>
                {post.isPrivate && (
                   <span className="bg-slate-900/80 text-primary px-2 py-1 rounded-md text-[10px] font-black uppercase flex items-center gap-1 shadow-sm">
                    <span className="material-symbols-outlined text-xs">lock</span> Closed
                  </span>
                )}
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-2 text-xs text-text-muted mb-3">
                <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                <span>{post.date}</span>
                <span className="mx-1">•</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="mt-auto">
                <Link to={`/blog/${post.id}`} className="inline-flex items-center text-primary font-bold text-sm hover:underline">
                  Read Article <span className="material-symbols-outlined text-lg ml-1">arrow_forward</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {hasHiddenContent && (
        <div className="mt-12 p-8 bg-slate-100 dark:bg-slate-800/50 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 text-center">
          <div className="size-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-3xl">lock_open</span>
          </div>
          <h3 className="text-xl font-bold mb-2">Unlock Premium Content</h3>
          <p className="text-text-muted mb-6 max-w-md mx-auto">Registered students have access to exclusive advanced notes, lab reports, and competition prep material.</p>
          <Link to="/login" className="inline-flex items-center gap-2 bg-primary text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
            Sign In to Unlock
          </Link>
        </div>
      )}

      {/* Pagination Placeholder */}
      <div className="flex items-center justify-center gap-2 mt-8">
        <button className="flex items-center justify-center size-10 rounded-lg text-text-muted hover:bg-slate-100 dark:hover:bg-slate-800 transition">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button className="size-10 rounded-lg bg-primary text-white font-bold shadow-md">1</button>
        <button className="size-10 rounded-lg text-text-muted hover:bg-slate-100 dark:hover:bg-slate-800 transition">2</button>
        <span className="text-text-muted px-2">...</span>
        <button className="size-10 rounded-lg text-text-muted hover:bg-slate-100 dark:hover:bg-slate-800 transition">8</button>
        <button className="flex items-center justify-center size-10 rounded-lg text-text-muted hover:bg-slate-100 dark:hover:bg-slate-800 transition">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  );
};

export default BlogArchive;
