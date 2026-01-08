import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { sendMessage } from '../services/db';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: 'Product Inquiry',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendMessage(formData);
      setSuccess(true);
      setFormData({ firstName: '', lastName: '', email: '', service: 'Product Inquiry', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error("Error sending message", error);
      alert("Failed to send message. Please try again.");
    }
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            {success ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-neutral-500">Thank you for contacting us. We will get back to you shortly.</p>
                <button onClick={() => setSuccess(false)} className="mt-8 text-accent font-medium hover:underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">First Name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all dark:text-white" placeholder="John" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Last Name</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all dark:text-white" placeholder="Doe" required />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all dark:text-white" placeholder="john@example.com" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Service of Interest</label>
                  <select name="service" value={formData.service} onChange={handleChange} className="w-full bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all dark:text-white">
                    <option>Product Inquiry</option>
                    <option>Maintenance Service</option>
                    <option>Consulting</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all dark:text-white" placeholder="Tell us a little about your project..." required></textarea>
                </div>

                <button type="submit" disabled={loading} className="w-full bg-accent text-white font-medium py-4 rounded-lg hover:bg-opacity-90 transition-opacity disabled:opacity-70 flex items-center justify-center gap-2">
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
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
