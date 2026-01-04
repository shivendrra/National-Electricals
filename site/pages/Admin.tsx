import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  createProduct, fetchProducts, deleteProduct, 
  createBlog, fetchBlogs, deleteBlog, 
  fetchMessages, deleteMessage, markMessageRead, ContactMessage,
  updateProduct,
  fetchGallery, createGalleryImage, deleteGalleryImage
} from '../services/db';
import { updatePassword } from 'firebase/auth';
import { Product, BlogPost, GalleryImage } from '../types';
import { 
  LayoutDashboard, Package, FileText, MessageSquare, Settings, 
  LogOut, Plus, Trash2, Search, X, Check, Loader2, Edit, AlertTriangle, Image as ImageIcon
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('products');
  const [loading, setLoading] = useState(false);
  const [permissionError, setPermissionError] = useState(false);
  
  // Data States
  const [products, setProducts] = useState<Product[]>([]);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  
  // Forms & UI States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'product' | 'blog' | 'gallery' | null>(null);
  const [editMode, setEditMode] = useState<string | null>(null);
  
  // Settings State
  const [newPassword, setNewPassword] = useState('');
  
  // Form Data
  const [productForm, setProductForm] = useState<Partial<Product>>({ specifications: {} });
  const [blogForm, setBlogForm] = useState<Partial<BlogPost>>({});
  const [galleryForm, setGalleryForm] = useState<Partial<GalleryImage>>({});
  const [specInput, setSpecInput] = useState({ key: '', value: '' });

  useEffect(() => {
    loadData();
  }, [activeTab]);

  const loadData = async () => {
    setLoading(true);
    setPermissionError(false);
    try {
      if (activeTab === 'products') {
        const data = await fetchProducts();
        setProducts(data);
      } else if (activeTab === 'blogs') {
        const data = await fetchBlogs();
        setBlogs(data);
      } else if (activeTab === 'messages') {
        const data = await fetchMessages();
        setMessages(data);
      } else if (activeTab === 'gallery') {
        const data = await fetchGallery();
        setGalleryImages(data);
      }
    } catch (error: any) {
      console.error("Error loading data", error);
      if (error.code === 'permission-denied') {
        setPermissionError(true);
      }
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error("Failed to logout", error);
    }
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) return;
    try {
      await updatePassword(currentUser, newPassword);
      alert("Password updated successfully");
      setNewPassword('');
    } catch (error: any) {
      if (error.code === 'auth/requires-recent-login') {
        alert("Security: Please sign out and sign in again to change your password.");
      } else {
        alert("Error updating password: " + error.message);
      }
    }
  };

  // Product Handlers
  const handleProductSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!productForm.name || !productForm.imageUrl) return;
    
    setLoading(true);
    try {
      const payload: any = {
        name: productForm.name,
        description: productForm.description || '',
        category: productForm.category || 'General',
        imageUrl: productForm.imageUrl,
        specifications: productForm.specifications || {},
        pdfLink: productForm.pdfLink || ''
      };

      if (editMode) {
        await updateProduct(editMode, payload);
      } else {
        await createProduct(payload);
      }
      setIsModalOpen(false);
      resetForms();
      loadData();
    } catch (error: any) {
      console.error("Error saving product", error);
      if (error.code === 'permission-denied') alert("Permission Denied: Check Firestore Rules.");
    }
    setLoading(false);
  };

  const deleteProductItem = async (id: string) => {
    if(confirm('Are you sure?')) {
      try {
        await deleteProduct(id);
        loadData();
      } catch (error: any) {
        if (error.code === 'permission-denied') alert("Permission Denied: Check Firestore Rules.");
      }
    }
  };

  // Blog Handlers
  const handleBlogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!blogForm.title || !blogForm.contentHtml) return;

    setLoading(true);
    try {
      const payload: any = {
        title: blogForm.title,
        author: blogForm.author || 'Admin',
        authorLinkedin: blogForm.authorLinkedin || '',
        date: blogForm.date || new Date().toISOString().split('T')[0],
        headerImage: blogForm.headerImage || '',
        excerpt: blogForm.excerpt || '',
        contentHtml: blogForm.contentHtml
      };
      
      await createBlog(payload);
      setIsModalOpen(false);
      resetForms();
      loadData();
    } catch (error: any) {
      console.error("Error saving blog", error);
      if (error.code === 'permission-denied') alert("Permission Denied: Check Firestore Rules.");
    }
    setLoading(false);
  };

  const deleteBlogItem = async (id: string) => {
    if(confirm('Are you sure?')) {
      try {
        await deleteBlog(id);
        loadData();
      } catch (error: any) {
        if (error.code === 'permission-denied') alert("Permission Denied: Check Firestore Rules.");
      }
    }
  };

  // Gallery Handlers
  const handleGallerySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!galleryForm.imageUrl || !galleryForm.date) return;

    setLoading(true);
    try {
      const payload: any = {
        imageUrl: galleryForm.imageUrl,
        caption: galleryForm.caption || '',
        date: galleryForm.date
      };
      
      await createGalleryImage(payload);
      setIsModalOpen(false);
      resetForms();
      loadData();
    } catch (error: any) {
      console.error("Error saving gallery image", error);
      if (error.code === 'permission-denied') alert("Permission Denied: Check Firestore Rules.");
    }
    setLoading(false);
  };

  const deleteGalleryItem = async (id: string) => {
    if(confirm('Are you sure?')) {
      try {
        await deleteGalleryImage(id);
        loadData();
      } catch (error: any) {
        if (error.code === 'permission-denied') alert("Permission Denied: Check Firestore Rules.");
      }
    }
  };

  // Specification Handler
  const addSpec = () => {
    if (specInput.key && specInput.value) {
      setProductForm(prev => ({
        ...prev,
        specifications: { ...prev.specifications, [specInput.key]: specInput.value }
      }));
      setSpecInput({ key: '', value: '' });
    }
  };
  
  const removeSpec = (key: string) => {
      const newSpecs = { ...productForm.specifications };
      delete newSpecs[key];
      setProductForm({ ...productForm, specifications: newSpecs });
  }

  const resetForms = () => {
    setProductForm({ specifications: {} });
    setBlogForm({});
    setGalleryForm({});
    setEditMode(null);
    setSpecInput({ key: '', value: '' });
  };

  const openEditProduct = (product: Product) => {
    setProductForm(product);
    setEditMode(product.id);
    setModalType('product');
    setIsModalOpen(true);
  };

  const inputClasses = "w-full p-3 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg text-neutral-900 dark:text-white focus:ring-2 focus:ring-accent outline-none";

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-950 flex flex-col md:flex-row font-sans">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800 flex-shrink-0">
        <div className="p-6 border-b border-neutral-200 dark:border-neutral-800">
          <h2 className="font-serif text-2xl font-bold text-neutral-900 dark:text-white">Admin Panel</h2>
          <p className="text-xs text-neutral-500 mt-1">{currentUser?.email}</p>
        </div>
        <nav className="p-4 space-y-2">
          {[
            { id: 'products', icon: Package, label: 'Products' },
            { id: 'gallery', icon: ImageIcon, label: 'Gallery' },
            { id: 'blogs', icon: FileText, label: 'Blogs' },
            { id: 'messages', icon: MessageSquare, label: 'Inquiries' },
            { id: 'settings', icon: Settings, label: 'Settings' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeTab === item.id
                  ? 'bg-accent text-white'
                  : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800'
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 mt-8"
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-neutral-900 dark:text-white capitalize flex items-center gap-2">
              {activeTab === 'messages' ? 'Contact Inquiries' : `Manage ${activeTab}`}
              {loading && <Loader2 className="animate-spin text-accent" size={20} />}
            </h1>
            
            {(activeTab === 'products' || activeTab === 'blogs' || activeTab === 'gallery') && (
              <button
                onClick={() => {
                  resetForms();
                  setModalType(activeTab === 'gallery' ? 'gallery' : activeTab === 'products' ? 'product' : 'blog');
                  setIsModalOpen(true);
                }}
                className="flex items-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                <Plus size={18} />
                Add New
              </button>
            )}
          </div>

          {permissionError && (
             <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 text-red-800">
                <AlertTriangle className="flex-shrink-0 mt-0.5" size={20} />
                <div>
                   <h3 className="font-bold">Missing or Insufficient Permissions</h3>
                   <p className="text-sm mt-1">Your Firestore Security Rules are blocking this request. Please update your rules to allow access to the '{activeTab}' collection for admin users.</p>
                   {activeTab === 'gallery' && (
                     <pre className="mt-3 bg-red-100 p-3 rounded text-xs font-mono whitespace-pre-wrap overflow-x-auto">
{`match /gallery/{imageId} {
  allow read: if true;
  allow write: if isAdmin();
}`}
                     </pre>
                   )}
                </div>
             </div>
          )}

          {/* Content Area */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm overflow-hidden min-h-[400px]">
            
            {/* PRODUCTS TAB */}
            {activeTab === 'products' && (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-neutral-50 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
                    <tr>
                      <th className="p-4 font-medium text-neutral-500">Image</th>
                      <th className="p-4 font-medium text-neutral-500">Name</th>
                      <th className="p-4 font-medium text-neutral-500">Category</th>
                      <th className="p-4 font-medium text-neutral-500 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                    {products.map((product) => (
                      <tr key={product.id} className="hover:bg-neutral-50 dark:hover:bg-neutral-800/50">
                        <td className="p-4">
                          <img src={product.imageUrl} alt="" className="w-12 h-12 rounded-lg object-cover bg-neutral-100" />
                        </td>
                        <td className="p-4 font-medium text-neutral-900 dark:text-white">{product.name}</td>
                        <td className="p-4 text-neutral-500">{product.category}</td>
                        <td className="p-4 text-right">
                          <button onClick={() => openEditProduct(product)} className="text-blue-500 hover:text-blue-600 mr-3"><Edit size={18} /></button>
                          <button onClick={() => deleteProductItem(product.id)} className="text-red-500 hover:text-red-600"><Trash2 size={18} /></button>
                        </td>
                      </tr>
                    ))}
                    {products.length === 0 && !loading && !permissionError && (
                      <tr><td colSpan={4} className="p-8 text-center text-neutral-500">No products found.</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {/* GALLERY TAB */}
            {activeTab === 'gallery' && (
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
                {galleryImages.map((img) => (
                  <div key={img.id} className="relative group rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800 aspect-square">
                    <img src={img.imageUrl} alt={img.caption} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3">
                      <div className="flex justify-end">
                         <button onClick={() => deleteGalleryItem(img.id)} className="text-white hover:text-red-400 bg-black/50 p-1.5 rounded-full"><Trash2 size={16} /></button>
                      </div>
                      <div className="text-xs text-white">
                        <p className="font-bold truncate">{img.caption}</p>
                        <p className="opacity-80">{img.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
                 {galleryImages.length === 0 && !loading && !permissionError && (
                    <div className="col-span-full p-12 text-center text-neutral-500">No images in gallery.</div>
                 )}
              </div>
            )}

            {/* BLOGS TAB */}
            {activeTab === 'blogs' && (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                   <thead className="bg-neutral-50 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
                    <tr>
                      <th className="p-4 font-medium text-neutral-500">Date</th>
                      <th className="p-4 font-medium text-neutral-500">Title</th>
                      <th className="p-4 font-medium text-neutral-500">Author</th>
                      <th className="p-4 font-medium text-neutral-500 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                    {blogs.map((blog) => (
                      <tr key={blog.id} className="hover:bg-neutral-50 dark:hover:bg-neutral-800/50">
                        <td className="p-4 text-neutral-500">{blog.date}</td>
                        <td className="p-4 font-medium text-neutral-900 dark:text-white">{blog.title}</td>
                        <td className="p-4 text-neutral-500">{blog.author}</td>
                        <td className="p-4 text-right">
                          <button onClick={() => deleteBlogItem(blog.id)} className="text-red-500 hover:text-red-600"><Trash2 size={18} /></button>
                        </td>
                      </tr>
                    ))}
                     {blogs.length === 0 && !loading && !permissionError && (
                      <tr><td colSpan={4} className="p-8 text-center text-neutral-500">No blogs found.</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {/* MESSAGES TAB */}
            {activeTab === 'messages' && (
               <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
                 {messages.map((msg) => (
                   <div key={msg.id} className={`p-6 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors ${!msg.read ? 'bg-blue-50/30 dark:bg-blue-900/10' : ''}`}>
                     <div className="flex justify-between items-start mb-2">
                       <div>
                         <h3 className="font-bold text-neutral-900 dark:text-white">{msg.firstName} {msg.lastName}</h3>
                         <p className="text-sm text-neutral-500">{msg.email} • {msg.service}</p>
                       </div>
                       <div className="flex gap-2">
                         {!msg.read && (
                           <button onClick={() => { markMessageRead(msg.id); loadData(); }} className="text-accent hover:bg-accent/10 p-2 rounded-full" title="Mark as Read">
                             <Check size={18} />
                           </button>
                         )}
                         <button onClick={() => { deleteMessage(msg.id); loadData(); }} className="text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 p-2 rounded-full">
                           <Trash2 size={18} />
                         </button>
                       </div>
                     </div>
                     <p className="text-neutral-700 dark:text-neutral-300 mt-2 text-sm leading-relaxed whitespace-pre-wrap">{msg.message}</p>
                     <p className="text-xs text-neutral-400 mt-4">{new Date(msg.createdAt?.seconds * 1000).toLocaleString()}</p>
                   </div>
                 ))}
                 {messages.length === 0 && !loading && !permissionError && (
                    <div className="p-12 text-center text-neutral-500">No new messages.</div>
                 )}
               </div>
            )}

            {/* SETTINGS TAB */}
            {activeTab === 'settings' && (
              <div className="p-8 max-w-xl">
                <h3 className="font-serif text-xl font-bold mb-6 text-neutral-900 dark:text-white">Security Settings</h3>
                <form onSubmit={handlePasswordChange} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">New Password</label>
                    <input 
                      type="password" 
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className={inputClasses}
                      placeholder="Enter new password (min 6 chars)"
                      minLength={6}
                      required
                    />
                  </div>
                  <button type="submit" className="bg-accent text-white px-6 py-3 rounded-lg font-bold hover:opacity-90">
                    Update Password
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-neutral-900 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border border-neutral-200 dark:border-neutral-800">
            <div className="p-6 border-b border-neutral-200 dark:border-neutral-800 flex justify-between items-center sticky top-0 bg-white dark:bg-neutral-900 z-10">
              <h3 className="font-serif text-2xl font-bold text-neutral-900 dark:text-white">
                {modalType === 'product' ? (editMode ? 'Edit Product' : 'Add Product') : modalType === 'blog' ? 'Add Blog Post' : 'Add Gallery Image'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white">
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6">
              {modalType === 'product' ? (
                 <form onSubmit={handleProductSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="Product Name" className={inputClasses} value={productForm.name || ''} onChange={e => setProductForm({...productForm, name: e.target.value})} required />
                      <input type="text" placeholder="Category" className={inputClasses} value={productForm.category || ''} onChange={e => setProductForm({...productForm, category: e.target.value})} />
                    </div>
                    <textarea placeholder="Description" rows={3} className={inputClasses} value={productForm.description || ''} onChange={e => setProductForm({...productForm, description: e.target.value})} />
                    <input type="text" placeholder="Image URL" className={inputClasses} value={productForm.imageUrl || ''} onChange={e => setProductForm({...productForm, imageUrl: e.target.value})} required />
                    <input type="text" placeholder="PDF Catalog Link (Optional)" className={inputClasses} value={productForm.pdfLink || ''} onChange={e => setProductForm({...productForm, pdfLink: e.target.value})} />
                    
                    <div className="p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                      <h4 className="text-sm font-bold mb-3 text-neutral-900 dark:text-neutral-300">Specifications</h4>
                      <div className="flex gap-2 mb-2">
                        <input type="text" placeholder="Key (e.g. Voltage)" className={inputClasses} value={specInput.key} onChange={e => setSpecInput({...specInput, key: e.target.value})} />
                        <input type="text" placeholder="Value (e.g. 230V)" className={inputClasses} value={specInput.value} onChange={e => setSpecInput({...specInput, value: e.target.value})} />
                        <button type="button" onClick={addSpec} className="p-3 bg-neutral-200 dark:bg-neutral-700 rounded-lg hover:bg-neutral-300"><Plus size={20} /></button>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {Object.entries(productForm.specifications || {}).map(([k, v]) => (
                          <span key={k} className="flex items-center gap-2 text-xs bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 px-3 py-1.5 rounded-full text-neutral-700 dark:text-neutral-300">
                            {k}: {v}
                            <button type="button" onClick={() => removeSpec(k)} className="hover:text-red-500"><X size={12} /></button>
                          </span>
                        ))}
                      </div>
                    </div>
                    <button type="submit" className="w-full bg-accent text-white py-3 rounded-lg font-bold hover:opacity-90">{loading ? 'Saving...' : 'Save Product'}</button>
                 </form>
              ) : modalType === 'blog' ? (
                <form onSubmit={handleBlogSubmit} className="space-y-4">
                  <input type="text" placeholder="Title" className={inputClasses} value={blogForm.title || ''} onChange={e => setBlogForm({...blogForm, title: e.target.value})} required />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Author" className={inputClasses} value={blogForm.author || ''} onChange={e => setBlogForm({...blogForm, author: e.target.value})} />
                    <input type="date" className={inputClasses} value={blogForm.date || ''} onChange={e => setBlogForm({...blogForm, date: e.target.value})} />
                  </div>
                  <input type="text" placeholder="Header Image URL" className={inputClasses} value={blogForm.headerImage || ''} onChange={e => setBlogForm({...blogForm, headerImage: e.target.value})} />
                  <textarea placeholder="Excerpt" rows={2} className={inputClasses} value={blogForm.excerpt || ''} onChange={e => setBlogForm({...blogForm, excerpt: e.target.value})} />
                  <textarea placeholder="HTML Content" rows={8} className={`${inputClasses} font-mono text-sm`} value={blogForm.contentHtml || ''} onChange={e => setBlogForm({...blogForm, contentHtml: e.target.value})} required />
                  <button type="submit" className="w-full bg-accent text-white py-3 rounded-lg font-bold hover:opacity-90">{loading ? 'Publishing...' : 'Publish Blog'}</button>
                </form>
              ) : (
                <form onSubmit={handleGallerySubmit} className="space-y-4">
                  <input type="text" placeholder="Image URL (Publicly hosted)" className={inputClasses} value={galleryForm.imageUrl || ''} onChange={e => setGalleryForm({...galleryForm, imageUrl: e.target.value})} required />
                  <input type="text" placeholder="Caption (Optional)" className={inputClasses} value={galleryForm.caption || ''} onChange={e => setGalleryForm({...galleryForm, caption: e.target.value})} />
                  <input type="date" className={inputClasses} value={galleryForm.date || ''} onChange={e => setGalleryForm({...galleryForm, date: e.target.value})} required />
                  <button type="submit" className="w-full bg-accent text-white py-3 rounded-lg font-bold hover:opacity-90">{loading ? 'Saving...' : 'Add to Gallery'}</button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
