import React from 'react';
import { ArrowRight, Hammer, Lightbulb, Wrench, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, CLIENTS } from '../services/mockData';

const Hero = () => (
  <section className="relative h-[85vh] flex items-center justify-center bg-white dark:bg-neutral-950 overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://picsum.photos/id/193/1920/1080')] bg-cover bg-center opacity-10 dark:opacity-20 grayscale"></div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
      <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-neutral-900 dark:text-white tracking-tight">
        We Build <br/><span className="text-accent italic">Machines.</span>
      </h1>
      <p className="mt-4 text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto font-light">
        Engineering excellence since 1999. Delivering robust electrical solutions for the industrial world.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/products" className="px-8 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full font-medium hover:bg-accent dark:hover:bg-accent hover:text-white dark:hover:text-white transition-all flex items-center justify-center gap-2 group">
          View Products <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link to="/contact" className="px-8 py-3 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white rounded-full font-medium hover:border-accent hover:text-accent transition-colors">
          Contact Us
        </Link>
      </div>
    </div>
  </section>
);

const Vision = () => (
  <section className="py-24 bg-neutral-50 dark:bg-neutral-900">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <span className="text-accent font-medium tracking-wider uppercase text-sm">Our Vision</span>
      <h2 className="font-serif text-3xl md:text-5xl font-bold mt-4 mb-8 text-neutral-900 dark:text-white leading-tight">
        "To establish a prominent and influential presence in the manufacturing of reliable power conditioning solutions."
      </h2>
      <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
        At the core of our philosophy lies an unwavering commitment to excellence. We don't just provide services; we partner with our clients to understand their unique challenges and solve them effectively. Our track record is a testament to our dedication.
      </p>
    </div>
  </section>
);

const ServiceCard: React.FC<{ icon: string, title: string, description: string }> = ({ icon, title, description }) => {
  const IconComponent = icon === 'Hammer' ? Hammer : icon === 'Lightbulb' ? Lightbulb : Wrench;
  return (
    <div className="p-8 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:border-accent/50 dark:hover:border-accent/50 transition-colors group bg-white dark:bg-neutral-950">
      <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-900 rounded-full flex items-center justify-center mb-6 text-neutral-900 dark:text-white group-hover:bg-accent group-hover:text-white transition-colors">
        <IconComponent size={24} />
      </div>
      <h3 className="font-serif text-2xl font-semibold mb-3 text-neutral-900 dark:text-white">{title}</h3>
      <p className="text-neutral-600 dark:text-neutral-400">{description}</p>
    </div>
  );
};

const Services = () => (
  <section className="py-24 bg-white dark:bg-neutral-950">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white">What we do?</h2>
        <div className="w-20 h-1 bg-accent mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SERVICES.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>
    </div>
  </section>
);

const Clients = () => (
  <section className="py-24 bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
      <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">Trusted By</h2>
    </div>
    
    <div className="relative w-full">
      {/* Gradient Fade Effects */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-neutral-50 dark:from-neutral-900 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-neutral-50 dark:from-neutral-900 to-transparent z-10 pointer-events-none"></div>

      {/* Marquee Container */}
      <div className="flex animate-marquee hover:pause items-center">
        {/* Render multiple sets of clients to ensure seamless looping on large screens */}
        {[...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, idx) => (
          <div key={idx} className="flex-shrink-0 px-12 group relative">
             <div className="w-40 h-24 flex items-center justify-center relative transition-transform duration-300 group-hover:scale-110">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="w-full h-full object-contain filter grayscale-0 drop-shadow-sm" 
                />
             </div>
             
             {/* Hover Name Popup */}
             <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20">
                <div className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-bold py-1.5 px-3 rounded-lg shadow-xl whitespace-nowrap relative">
                  {client.name}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-900 dark:bg-white rotate-45"></div>
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
    
    <div className="mt-16 text-center">
      <p className="text-neutral-500 italic">and many more...</p>
    </div>

    <style>{`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-25%); }
      }
      .animate-marquee {
        animation: marquee 40s linear infinite;
        width: fit-content;
      }
      .hover\\:pause:hover {
        animation-play-state: paused;
      }
    `}</style>
  </section>
);

const Home = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <Hero />
      <Vision />
      <Services />
      <Clients />
    </div>
  );
};

export default Home;