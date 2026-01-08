import React, { useState, useEffect } from 'react';
import { fetchGallery } from '../services/db';
import { GalleryImage } from '../types';
import { X, ZoomIn, Loader2, Calendar } from 'lucide-react';

const Gallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchGallery();
        setImages(data);
      } catch (error) {
        console.error("Error loading gallery:", error);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const openLightbox = (img: GalleryImage) => setSelectedImage(img);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <div className="bg-white dark:bg-neutral-950 min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center md:text-left">
           <span className="text-accent font-medium tracking-wider uppercase text-sm block mb-2">Portfolio & Events</span>
           <h1 className="font-serif text-5xl font-bold text-neutral-900 dark:text-white">Our Gallery</h1>
           <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-2xl">
             A glimpse into our manufacturing prowess, corporate events, and the heavy machinery we bring to life.
           </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
          </div>
        ) : (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((img) => (
              <div 
                key={img.id} 
                className="break-inside-avoid relative group overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900 cursor-zoom-in"
                onClick={() => openLightbox(img)}
              >
                <img 
                  src={img.imageUrl} 
                  alt={img.caption || 'National Electricals Gallery'} 
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  {img.caption && (
                    <p className="text-white font-medium text-lg mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {img.caption}
                    </p>
                  )}
                  {img.date && (
                    <div className="flex items-center gap-2 text-neutral-300 text-xs translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      <Calendar size={12} />
                      <span>{img.date}</span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ZoomIn size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {images.length === 0 && !loading && (
           <div className="text-center py-20 text-neutral-500">
             No images added to the gallery yet.
           </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 p-2 rounded-full z-50"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>

          <div 
            className="relative max-w-7xl w-full max-h-[90vh] flex flex-col items-center justify-center" 
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.imageUrl} 
              alt={selectedImage.caption} 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            {(selectedImage.caption || selectedImage.date) && (
              <div className="mt-4 text-center">
                <p className="text-white text-xl font-medium">{selectedImage.caption}</p>
                <p className="text-neutral-400 text-sm mt-1">{selectedImage.date}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;