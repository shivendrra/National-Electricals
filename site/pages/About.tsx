import React from 'react';
import { TEAM } from '../services/mockData';

const About = () => {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-950 min-h-screen">
      {/* Header */}
      <div className="bg-white dark:bg-neutral-900 py-24 border-b border-neutral-200 dark:border-neutral-800">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-neutral-900 dark:text-white">Our Journey</h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Commencing in 1999, our journey took root as a workshop in Gorakhpur. Today, we stand as a prominent manufacturer of heavy electrical machinery, driven by innovation and integrity.
            </p>
         </div>
      </div>

      {/* History Timeline - Simplified */}
      <div className="py-24 max-w-5xl mx-auto px-4">
        <div className="relative border-l-2 border-neutral-200 dark:border-neutral-800 ml-6 md:ml-12 space-y-16">
          <div className="relative pl-8 md:pl-16">
            <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-white dark:border-neutral-950"></span>
            <span className="text-accent font-bold text-lg mb-2 block">1999</span>
            <h3 className="font-serif text-3xl font-bold mb-3 dark:text-white">Establishment</h3>
            <p className="text-neutral-600 dark:text-neutral-400">Founded in Gorakhpur specializing in repair and manufacturing of welding machines and battery chargers.</p>
          </div>
          <div className="relative pl-8 md:pl-16">
             <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neutral-300 dark:bg-neutral-700 border-4 border-white dark:border-neutral-950"></span>
             <span className="text-neutral-500 font-bold text-lg mb-2 block">2005</span>
             <h3 className="font-serif text-3xl font-bold mb-3 dark:text-white">Expansion into Heavy Machinery</h3>
             <p className="text-neutral-600 dark:text-neutral-400">Started manufacturing Transformers and Servo Stabilizers, securing contracts with U.P. State Government.</p>
          </div>
          <div className="relative pl-8 md:pl-16">
             <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neutral-300 dark:bg-neutral-700 border-4 border-white dark:border-neutral-950"></span>
             <span className="text-neutral-500 font-bold text-lg mb-2 block">Present</span>
             <h3 className="font-serif text-3xl font-bold mb-3 dark:text-white">Industry Leader</h3>
             <p className="text-neutral-600 dark:text-neutral-400">Strategically positioned to explore diversification with a vast portfolio of clients and ISO certification.</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 dark:text-white">Our Heads</h2>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {TEAM.map((member, idx) => (
               <div key={idx} className="flex flex-col items-center text-center">
                 <div className="w-48 h-56 bg-neutral-200 rounded-lg overflow-hidden mb-6 shadow-md">
                   <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                 </div>
                 <h3 className="font-serif text-2xl font-bold text-neutral-900 dark:text-white">{member.name}</h3>
                 <span className="text-accent font-medium mt-1">{member.role}</span>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;
