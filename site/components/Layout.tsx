import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'Products', path: '/products' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0 flex items-center" onClick={closeMenu}>
            <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
              National <span className="text-accent">Electricals</span>
            </span>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-accent'
                      : 'text-neutral-600 dark:text-neutral-300 hover:text-accent dark:hover:text-accent'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-600 dark:text-neutral-300 flex items-center justify-center"
                aria-label="Toggle Dark Mode"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
             <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-600 dark:text-neutral-300 flex items-center justify-center"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-600 dark:text-neutral-300 hover:text-accent focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={`block px-3 py-4 rounded-md text-base font-medium ${
                  location.pathname === link.path
                      ? 'text-accent bg-neutral-50 dark:bg-neutral-900'
                      : 'text-neutral-600 dark:text-neutral-300 hover:text-accent'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-neutral-100 dark:bg-neutral-900 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
             <span className="font-serif text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
              National <span className="text-accent">Electricals</span>
            </span>
            <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Leading manufacturer of electrical heavy machinery since 1999. Committed to quality, innovation, and service.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-neutral-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li><Link to="/products" className="hover:text-accent transition-colors">Products</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
             <h3 className="font-serif text-lg font-semibold mb-4 text-neutral-900 dark:text-white">Contact</h3>
             <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
               <li className="flex items-start gap-2">
                 <MapPin size={16} className="mt-1 text-accent" />
                 <span>AU-8, Sector 13, GIDA,<br/>Gorakhpur, U.P. 273209</span>
               </li>
               <li className="flex items-center gap-2">
                 <Phone size={16} className="text-accent" />
                 <span>+91-9452190777</span>
               </li>
               <li className="flex items-center gap-2">
                 <Mail size={16} className="text-accent" />
                 <span>info@national-electricals.com</span>
               </li>
             </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-neutral-900 dark:text-white">Socials</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-accent transition-colors"><Instagram size={24} /></a>
              <a href="#" className="text-neutral-400 hover:text-accent transition-colors"><Facebook size={24} /></a>
              <a href="#" className="text-neutral-400 hover:text-accent transition-colors"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-200 dark:border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 dark:text-neutral-500">
          <p>&copy; {new Date().getFullYear()} National Electricals. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/admin" className="hover:text-accent">Admin Login</Link>
            <a href="#" className="hover:text-accent">Privacy Policy</a>
            <a href="#" className="hover:text-accent">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
