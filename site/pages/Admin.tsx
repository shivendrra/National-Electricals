import React, { useState } from 'react';
import { addProduct, addBlog } from '../services/mockData';
import { Product, BlogPost } from '../types';
import { Plus, LayoutDashboard, FileText, Package } from 'lucide-react';

const Admin = () => {
  const [activeTab, setActiveTab] = useState<'products' | 'blogs'>('products');
  const [message, setMessage] = useState('');

  const [productForm, setProductForm] = useState<Partial<Product>>({
    name: '',
    description: '',
    category: '',
    imageUrl: '',
    specifications: {}
  });

  const [specInput, setSpecInput] = useState({ key: '', value: '' });

  const [blogForm, setBlogForm] = useState<Partial<BlogPost>>({
    title: '',
    author: '',
    authorLinkedin: '',
    date: '',
    headerImage: '',
    excerpt: '',
    contentHtml: ''
  });

  const handleProductSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (productForm.name && productForm.imageUrl) {
      addProduct({
        id: Date.now().toString(),
        name: productForm.name!,
        description: productForm.description || '',
        category: productForm.category || 'General',
        imageUrl: productForm.imageUrl!,
        specifications: productForm.specifications || {},
        pdfLink: productForm.pdfLink
      } as Product);
      setMessage('Product added successfully!');
      setProductForm({ name: '', description: '', category: '', imageUrl: '', specifications: {} });
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const addSpec = () => {
    if (specInput.key && specInput.value) {
      setProductForm(prev => ({
        ...prev,
        specifications: { ...prev.specifications, [specInput.key]: specInput.value }
      }));
      setSpecInput({ key: '', value: '' });
    }
  };

  const handleBlogSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (blogForm.title && blogForm.contentHtml) {
      addBlog({
        id: Date.now().toString(),
        title: blogForm.title!,
        author: blogForm.author || 'Admin',
        authorLinkedin: blogForm.authorLinkedin,
        date: blogForm.date || new Date().toISOString().split('T')[0],
        headerImage: blogForm.headerImage || '',
        excerpt: blogForm.excerpt || '',
        contentHtml: blogForm.contentHtml!
      } as BlogPost);
      setMessage('Blog post published successfully!');
      setBlogForm({ title: '', author: '', contentHtml: '', excerpt: '', headerImage: '' });
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-950 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-serif text-4xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
            <LayoutDashboard /> Admin Dashboard
          </h1>
          {message && <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm">{message}</div>}
        </div>

        <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800 overflow-hidden">
          <div className="flex border-b border-neutral-200 dark:border-neutral-800">
            <button
              onClick={() => setActiveTab('products')}
              className={`flex-1 py-4 text-center flex items-center justify-center gap-2 transition-all duration-200 ${
                activeTab === 'products' 
                  ? 'bg-neutral-50 dark:bg-neutral-800 text-accent border-b-2 border-accent font-bold' 
                  : 'text-neutral-500 hover:text-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 font-medium'
              }`}
            >
              <Package size={18} /> Manage Products
            </button>
            <button
              onClick={() => setActiveTab('blogs')}
              className={`flex-1 py-4 text-center flex items-center justify-center gap-2 transition-all duration-200 ${
                activeTab === 'blogs' 
                  ? 'bg-neutral-50 dark:bg-neutral-800 text-accent border-b-2 border-accent font-bold' 
                  : 'text-neutral-500 hover:text-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 font-medium'
              }`}
            >
              <FileText size={18} /> Manage Blogs
            </button>
          </div>

          <div className="p-8">
            {activeTab === 'products' ? (
              <form onSubmit={handleProductSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Product Name"
                    className="p-3 border rounded-lg bg-transparent dark:text-white dark:border-neutral-700 w-full"
                    value={productForm.name}
                    onChange={e => setProductForm({ ...productForm, name: e.target.value })}
                    required
                  />
                   <input
                    type="text"
                    placeholder="Category (e.g. Transformer)"
                    className="p-3 border rounded-lg bg-transparent dark:text-white dark:border-neutral-700 w-full"
                    value={productForm.category}
                    onChange={e => setProductForm({ ...productForm, category: e.target.value })}
                  />
                </div>
                
                <textarea
                  placeholder="Description"
                  className="w-full p-3 border rounded-lg bg-transparent dark:text-white dark:border-neutral-700"
                  rows={3}
                  value={productForm.description}
                  onChange={e => setProductForm({ ...productForm, description: e.target.value })}
                />
                
                <input
                    type="text"
                    placeholder="Image URL"
                    className="p-3 border rounded-lg bg-transparent dark:text-white dark:border-neutral-700 w-full"
                    value={productForm.imageUrl}
                    onChange={e => setProductForm({ ...productForm, imageUrl: e.target.value })}
                    required
                  />

                <div className="p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                  <h4 className="text-sm font-bold mb-3 dark:text-neutral-300">Specifications</h4>
                  <div className="flex gap-2 mb-2">
                    <input type="text" placeholder="Spec Name (e.g. Voltage)" className="p-2 border rounded flex-1 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white" value={specInput.key} onChange={e => setSpecInput({...specInput, key: e.target.value})} />
                    <input type="text" placeholder="Value (e.g. 230V)" className="p-2 border rounded flex-1 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white" value={specInput.value} onChange={e => setSpecInput({...specInput, value: e.target.value})} />
                    <button type="button" onClick={addSpec} className="p-2 bg-neutral-200 dark:bg-neutral-700 rounded hover:bg-neutral-300"><Plus size={18} /></button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(productForm.specifications || {}).map(([k, v]) => (
                      <span key={k} className="text-xs bg-white dark:bg-neutral-900 border px-2 py-1 rounded dark:text-neutral-300">{k}: {v}</span>
                    ))}
                  </div>
                </div>

                <button type="submit" className="w-full bg-accent text-white py-3 rounded-lg font-bold hover:opacity-90">Add Product</button>
              </form>
            ) : (
              <form onSubmit={handleBlogSubmit} className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Blog Title"
                    className="p-3 border rounded-lg bg-transparent dark:text-white dark:border-neutral-700 w-full"
                    value={blogForm.title}
                    onChange={e => setBlogForm({ ...blogForm, title: e.target.value })}
                    required
                  />
                  <input
                    type="date"
                    className="p-3 border rounded-lg bg-transparent dark:text-white dark:border-neutral-700 w-full"
                    value={blogForm.date}
                    onChange={e => setBlogForm({ ...blogForm, date: e.target.value })}
                  />
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <input
                    type="text"
                    placeholder="Author Name"
                    className="p-3 border rounded-lg bg-transparent dark:text-white dark:border-neutral-700 w-full"
                    value={blogForm.author}
                    onChange={e => setBlogForm({ ...blogForm, author: e.target.value })}
                  />
                   <input
                    type="text"
                    placeholder="Author LinkedIn URL"
                    className="p-3 border rounded-lg bg-transparent dark:text-white dark:border-neutral-700 w-full"
                    value={blogForm.authorLinkedin}
                    onChange={e => setBlogForm({ ...blogForm, authorLinkedin: e.target.value })}
                  />
                 </div>

                 <input
                    type="text"
                    placeholder="Header Image URL"
                    className="p-3 border rounded-lg bg-transparent dark:text-white dark:border-neutral-700 w-full"
                    value={blogForm.headerImage}
                    onChange={e => setBlogForm({ ...blogForm, headerImage: e.target.value })}
                    required
                  />

                 <textarea
                  placeholder="Short Excerpt"
                  className="w-full p-3 border rounded-lg bg-transparent dark:text-white dark:border-neutral-700"
                  rows={2}
                  value={blogForm.excerpt}
                  onChange={e => setBlogForm({ ...blogForm, excerpt: e.target.value })}
                />

                <div>
                   <label className="block text-sm font-medium mb-2 dark:text-neutral-300">Content (HTML Snippet)</label>
                   <textarea
                    placeholder="<p>Write your blog content here...</p>"
                    className="w-full p-3 border rounded-lg bg-transparent dark:text-white dark:border-neutral-700 font-mono text-sm"
                    rows={10}
                    value={blogForm.contentHtml}
                    onChange={e => setBlogForm({ ...blogForm, contentHtml: e.target.value })}
                    required
                  />
                  <p className="text-xs text-neutral-500 mt-1">Use standard HTML tags: &lt;p&gt;, &lt;h3&gt;, &lt;ul&gt;, &lt;strong&gt;</p>
                </div>

                <button type="submit" className="w-full bg-accent text-white py-3 rounded-lg font-bold hover:opacity-90">Publish Blog</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;