import React, { useState, useEffect } from 'react';
import { getBlogs } from '../services/mockData';
import { BlogPost } from '../types';
import { Linkedin, Calendar, User, ArrowLeft, ArrowRight } from 'lucide-react';

const Blog = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  useEffect(() => {
    setBlogs(getBlogs());
  }, []);

  if (selectedBlog) {
    return (
      <div className="bg-white dark:bg-neutral-950 min-h-screen py-12 animate-in fade-in slide-in-from-bottom-4">
        <div className="max-w-3xl mx-auto px-4">
          <button 
            onClick={() => setSelectedBlog(null)} 
            className="flex items-center gap-2 text-neutral-500 hover:text-accent mb-8 transition-colors"
          >
            <ArrowLeft size={20} /> Back to Blogs
          </button>
          
          <img src={selectedBlog.headerImage} alt={selectedBlog.title} className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8 shadow-sm" />
          
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6 leading-tight">
            {selectedBlog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500 mb-10 border-b border-neutral-100 dark:border-neutral-800 pb-8">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span className="font-medium text-neutral-900 dark:text-white">{selectedBlog.author}</span>
              {selectedBlog.authorLinkedin && (
                <a href={selectedBlog.authorLinkedin} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                  <Linkedin size={16} />
                </a>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{selectedBlog.date}</span>
            </div>
          </div>

          <div 
            className="prose prose-lg dark:prose-invert prose-headings:font-serif prose-a:text-accent max-w-none"
            dangerouslySetInnerHTML={{ __html: selectedBlog.contentHtml }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-50 dark:bg-neutral-950 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl font-bold mb-4 text-neutral-900 dark:text-white">Latest Insights</h1>
          <p className="text-neutral-600 dark:text-neutral-400">Updates, technology, and news from National Electricals.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div 
              key={blog.id} 
              className="bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group border border-neutral-100 dark:border-neutral-800"
              onClick={() => setSelectedBlog(blog)}
            >
              <div className="h-48 overflow-hidden">
                <img src={blog.headerImage} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.author}</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-accent transition-colors">
                  {blog.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm line-clamp-3 mb-4">
                  {blog.excerpt}
                </p>
                <span className="text-accent font-medium text-sm flex items-center gap-1">Read More <ArrowRight size={14} /></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;