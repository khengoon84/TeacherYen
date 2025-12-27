
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) return <div className="p-20 text-center">Article not found.</div>;

  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-40 py-8 lg:py-12">
      <nav className="flex flex-wrap gap-2 mb-6 text-sm">
        <Link to="/" className="text-text-muted hover:text-primary">Home</Link>
        <span className="text-text-muted">/</span>
        <Link to="/blog" className="text-text-muted hover:text-primary">Blog</Link>
        <span className="text-text-muted">/</span>
        <span className="text-text-main dark:text-white font-medium">{post.title}</span>
      </nav>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight mb-8">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-8 border-b dark:border-slate-800">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-full overflow-hidden ring-2 ring-primary/20">
              <img src="https://picsum.photos/seed/yen/100/100" alt="Teacher Yen" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-bold">Teacher Yen</p>
              <div className="flex items-center gap-2 text-sm text-text-muted">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-text-muted hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-xl">share</span>
            </button>
            <button className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-text-muted hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-xl">bookmark</span>
            </button>
          </div>
        </div>

        <div className="mb-12 aspect-[2/1] rounded-2xl overflow-hidden shadow-sm">
          <img src={post.imageUrl} className="w-full h-full object-cover" alt="Cover" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <article className="lg:col-span-8 space-y-8 prose dark:prose-invert max-w-none">
            {post.content.map((section, index) => {
              switch (section.type) {
                case 'heading':
                  return <h2 key={index}>{section.value}</h2>;
                case 'subheading':
                  return <h3 key={index}>{section.value}</h3>;
                case 'paragraph':
                  return (
                    <p key={index} className="text-lg text-text-main dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
                      {section.value}
                    </p>
                  );
                case 'code':
                  return (
                    <div key={index} className="relative group">
                      <div className="absolute top-4 right-4 text-xs font-mono text-slate-500 uppercase tracking-widest">{section.metadata || 'code'}</div>
                      <pre className="bg-slate-900 text-slate-100 p-6 rounded-xl overflow-x-auto text-sm font-mono leading-relaxed shadow-lg">
                        {section.value}
                      </pre>
                    </div>
                  );
                case 'tip':
                  return (
                    <div key={index} className="p-6 bg-primary/5 border-l-4 border-primary rounded-r-lg my-8 flex gap-4">
                      <span className="material-symbols-outlined text-primary shrink-0">lightbulb</span>
                      <div>
                        <h4 className="font-bold text-primary mb-1">Pro Tip</h4>
                        <p className="text-sm m-0 leading-relaxed">{section.value}</p>
                      </div>
                    </div>
                  );
                case 'image':
                  return (
                    <div key={index} className="my-8 rounded-xl overflow-hidden shadow-md">
                      <img src={section.value} alt={section.metadata} className="w-full h-auto" />
                      {section.metadata && <p className="text-center text-sm text-text-muted mt-2 italic">{section.metadata}</p>}
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </article>

          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border dark:border-slate-800 shadow-sm sticky top-24">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">school</span>
                About the Teacher
              </h3>
              <div className="flex items-start gap-4 mb-4">
                <img className="size-16 rounded-lg object-cover shrink-0" src="https://picsum.photos/seed/yen-avatar/100/100" alt="Yen Avatar" />
                <div>
                  <p className="font-bold">Teacher Yen</p>
                  <p className="text-xs text-text-muted mb-2">STEM Educator</p>
                  <button className="text-xs bg-primary text-slate-900 px-3 py-1.5 rounded-full font-bold hover:bg-primary-dark transition-colors">Follow</button>
                </div>
              </div>
              <p className="text-sm text-text-muted leading-relaxed">
                Passionate about making complex science simple for everyone. I teach Robotics, Physics, and Coding for K-12.
              </p>
              
              <div className="mt-8 pt-6 border-t dark:border-slate-800">
                <h4 className="text-sm font-bold mb-4">Related Articles</h4>
                <div className="space-y-4">
                  {BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 3).map(related => (
                    <Link key={related.id} to={`/blog/${related.id}`} className="group flex gap-3">
                      <img src={related.imageUrl} className="size-14 rounded-md object-cover shrink-0" alt={related.title} />
                      <div>
                        <p className="text-xs font-bold line-clamp-2 group-hover:text-primary transition-colors">{related.title}</p>
                        <p className="text-[10px] text-text-muted mt-1">{related.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
