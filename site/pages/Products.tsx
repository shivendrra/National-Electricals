import React, { useState, useEffect } from 'react';
import { Download, ChevronRight, X, CheckCircle } from 'lucide-react';
import { Product } from '../types';
import { fetchProducts, sendQuoteRequest } from '../services/db';

const ProductCard: React.FC<{ product: Product, onGetQuote: (p: Product) => void }> = ({ product, onGetQuote }) => (
  <div className="flex flex-col md:flex-row gap-8 bg-white dark:bg-neutral-900 p-6 md:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-shadow">
    <div className="w-full md:w-1/3 aspect-square bg-neutral-100 dark:bg-neutral-800 rounded-xl overflow-hidden relative">
      <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
      <div className="absolute top-4 left-4 bg-accent text-white text-xs px-3 py-1 rounded-full uppercase tracking-wide">
        {product.category}
      </div>
    </div>
    <div className="flex-1 flex flex-col justify-center">
      <h3 className="font-serif text-3xl font-bold text-neutral-900 dark:text-white mb-4">{product.name}</h3>
      <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
        {product.description}
      </p>
      
      <div className="grid grid-cols-2 gap-4 mb-8">
        {product.specifications && Object.entries(product.specifications).map(([key, value]) => (
          <div key={key} className="border-l-2 border-accent/30 pl-3">
            <span className="block text-xs text-neutral-500 uppercase tracking-wider">{key}</span>
            <span className="font-medium text-neutral-800 dark:text-neutral-200">{value}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto flex gap-4">
        <button 
          onClick={() => onGetQuote(product)}
          className="flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg hover:opacity-90 transition-opacity font-medium"
        >
          Get Quote
        </button>
        {product.pdfLink && (
           <button className="flex items-center gap-2 px-6 py-3 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:border-accent hover:text-accent transition-colors">
            <Download size={18} /> Catalog
          </button>
        )}
      </div>
    </div>
  </div>
);

const QuoteModal: React.FC<{ 
  product: Product, 
  isOpen: boolean, 
  onClose: () => void 
}> = ({ product, isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    quantity: 1,
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendQuoteRequest({
        productId: product.id,
        productName: product.name,
        ...formData
      });
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setFormData({ name: '', email: '', phone: '', company: '', quantity: 1, message: '' });
        onClose();
      }, 3000);
    } catch (error) {
      console.error("Failed to send quote request", error);
      alert("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-neutral-900 rounded-2xl w-full max-w-lg shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden relative" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
          <X size={24} />
        </button>
        
        <div className="p-6 md:p-8">
           {success ? (
             <div className="flex flex-col items-center justify-center py-12 text-center">
               <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-4">
                 <CheckCircle size={32} />
               </div>
               <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">Request Sent!</h3>
               <p className="text-neutral-500">We have received your quote request for {product.name}. Our team will contact you shortly.</p>
             </div>
           ) : (
             <>
                <div className="mb-6">
                  <span className="text-xs font-bold text-accent uppercase tracking-wider">Get a Quote</span>
                  <h3 className="font-serif text-2xl font-bold text-neutral-900 dark:text-white mt-1">{product.name}</h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-500 mb-1">Name *</label>
                      <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-accent outline-none dark:text-white" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-500 mb-1">Company</label>
                      <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-accent outline-none dark:text-white" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-500 mb-1">Email *</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-accent outline-none dark:text-white" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-500 mb-1">Phone *</label>
                      <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-accent outline-none dark:text-white" />
                    </div>
                  </div>

                  <div>
                     <label className="block text-xs font-medium text-neutral-500 mb-1">Quantity</label>
                     <input type="number" min="1" name="quantity" required value={formData.quantity} onChange={handleChange} className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-accent outline-none dark:text-white" />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-500 mb-1">Additional Details / Specs</label>
                    <textarea name="message" rows={3} value={formData.message} onChange={handleChange} className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-accent outline-none dark:text-white" placeholder="Specific voltage requirements, delivery location, etc."></textarea>
                  </div>

                  <button type="submit" disabled={loading} className="w-full bg-accent text-white py-3 rounded-lg font-bold hover:opacity-90 transition-opacity disabled:opacity-70 mt-2">
                    {loading ? 'Sending Request...' : 'Send Request'}
                  </button>
                </form>
             </>
           )}
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const load = async () => {
        try {
            const data = await fetchProducts();
            setProducts(data);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    }
    load();
  }, []);

  return (
    <div className="bg-neutral-50 dark:bg-neutral-950 min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-neutral-900 dark:text-white">Our Products</h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Dedication to crafting industrial essentials. From Transformers to Rectifiers, we power your business.
          </p>
        </div>

        {loading ? (
             <div className="flex justify-center py-20">
                 <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
             </div>
        ) : (
            <div className="space-y-8">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} onGetQuote={setSelectedProduct} />
            ))}
            {products.length === 0 && <p className="text-center text-neutral-500">No products available at the moment.</p>}
            </div>
        )}

        <div className="mt-20 p-12 bg-accent rounded-3xl text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="font-serif text-4xl font-bold mb-4">Get our online Catalogue.</h3>
            <button className="bg-white text-accent px-8 py-3 rounded-full font-bold hover:bg-neutral-100 transition-colors inline-flex items-center gap-2">
              Download <Download size={20} />
            </button>
          </div>
          {/* Abstract Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl -ml-20 -mb-20"></div>
        </div>
      </div>

      {selectedProduct && (
        <QuoteModal 
          product={selectedProduct} 
          isOpen={!!selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
};

export default Products;