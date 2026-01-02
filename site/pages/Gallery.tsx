import React from 'react';

const Gallery = () => {
  // Generating a list of placeholder images with varied sizes for masonry feel
  const images = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    src: `https://picsum.photos/seed/${i + 50}/800/${i % 2 === 0 ? 600 : 800}`,
    caption: `Company Event ${2020 + (i % 4)}`
  }));

  return (
    <div className="bg-white dark:bg-neutral-950 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
           <span className="text-accent font-medium tracking-wider uppercase text-sm block mb-2">Memories</span>
           <h1 className="font-serif text-5xl font-bold text-neutral-900 dark:text-white">Gallery</h1>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img) => (
            <div key={img.id} className="break-inside-avoid relative group overflow-hidden rounded-xl">
              <img 
                src={img.src} 
                alt={img.caption} 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-serif text-xl tracking-wide border-b border-accent pb-1">{img.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
