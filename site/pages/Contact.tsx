import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-neutral-900 dark:text-white">Get in touch</h1>
              <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Want to work with us? What can we do for you? Tell us more about your company and service you want.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-900 rounded-full flex items-center justify-center flex-shrink-0 text-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-neutral-900 dark:text-white">Chat to Us</h3>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-1">Our team is here to help.</p>
                  <a href="mailto:nationalelectricalsgkp@gmail.com" className="text-accent font-medium">nationalelectricalsgkp@gmail.com</a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-900 rounded-full flex items-center justify-center flex-shrink-0 text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-neutral-900 dark:text-white">Visit Us</h3>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-1">Come say hello at our office HQ.</p>
                  <p className="text-neutral-800 dark:text-neutral-200">AU-8, Sector 13, GIDA, Gorakhpur, Uttar Pradesh, India, 273209</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-900 rounded-full flex items-center justify-center flex-shrink-0 text-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-neutral-900 dark:text-white">Call Us</h3>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-1">Mon-Sat from 9am to 6pm.</p>
                  <p className="text-neutral-800 dark:text-neutral-200">+91 9452190777, +91 9452189627</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-neutral-50 dark:bg-neutral-900 p-8 md:p-12 rounded-3xl border border-neutral-100 dark:border-neutral-800">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">First Name</label>
                  <input type="text" className="w-full bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all dark:text-white" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all dark:text-white" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Email</label>
                <input type="email" className="w-full bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all dark:text-white" placeholder="john@example.com" />
              </div>

               <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Service of Interest</label>
                <select className="w-full bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all dark:text-white">
                  <option>Product Inquiry</option>
                  <option>Maintenance Service</option>
                  <option>Consulting</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all dark:text-white" placeholder="Tell us a little about your project..."></textarea>
              </div>

              <button type="submit" className="w-full bg-accent text-white font-medium py-4 rounded-lg hover:bg-opacity-90 transition-opacity">
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        {/* Placeholder Map */}
        <div className="mt-20 h-80 bg-neutral-100 dark:bg-neutral-800 rounded-2xl flex items-center justify-center border border-neutral-200 dark:border-neutral-700">
           <span className="text-neutral-400 flex items-center gap-2"><MapPin /> Google Maps Integration Placeholder</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
