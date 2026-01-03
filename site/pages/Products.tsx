import React, { useState, useEffect } from 'react';
import { Download, ChevronRight } from 'lucide-react';
import { Product } from '../types';
import { fetchProducts } from '../services/db';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
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
        <button className="flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg hover:opacity-90 transition-opacity font-medium">
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

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

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
                <ProductCard key={product.id} product={product} />
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
    </div>
  );
};

export default Products;
