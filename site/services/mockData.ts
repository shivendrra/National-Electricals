import { Product, BlogPost, Client, Service, TeamMember } from '../types';

// Initial Data
const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Automatic Voltage Controller',
    description: 'Precision-engineered guardians of voltage stability. They ensure your electrical systems operate flawlessly, protecting equipment from fluctuations.',
    category: 'Voltage Controllers',
    imageUrl: 'https://picsum.photos/id/1/600/600',
    specifications: {
      "Capacity": "25Kva - 5000Kva",
      "Type": "Balanced / Unbalanced",
      "Cooling": "Oil Cooled",
      "Efficiency": "> 98%"
    }
  },
  {
    id: '2',
    name: 'Electroplating Rectifier',
    description: 'Convert AC to DC efficiently. Essential for electroplating processes, anodizing, and hydrogenation.',
    category: 'Rectifiers',
    imageUrl: 'https://picsum.photos/id/20/600/600',
    specifications: {
      "Output Voltage": "0-100V DC",
      "Current": "Up to 20k Amps",
      "Control": "Stepless / Thyristor",
      "Cooling": "Oil / Air Cooled"
    }
  },
  {
    id: '3',
    name: 'Distribution Transformer',
    description: 'High efficiency transformers designed to minimize losses and provide reliable power distribution for industries.',
    category: 'Transformers',
    imageUrl: 'https://picsum.photos/id/60/600/600',
    specifications: {
      "Rating": "100Kva to 2500Kva",
      "Voltage Class": "11kV / 33kV",
      "Tapping": "Off Circuit / On Load",
      "Standards": "IS 1180 / IS 2026"
    }
  }
];

const INITIAL_BLOGS: BlogPost[] = [
  {
    id: '1',
    title: 'The Importance of Voltage Stability in Manufacturing',
    author: 'Harihar Singh',
    authorLinkedin: 'https://linkedin.com',
    date: '2023-10-15',
    headerImage: 'https://picsum.photos/id/48/1200/600',
    excerpt: 'Voltage fluctuations can cause severe damage to heavy machinery. Learn how to protect your assets.',
    contentHtml: `<p>In the industrial sector, <strong>voltage stability</strong> is not just a luxury; it's a necessity. Fluctuation in power supply can lead to:</p><ul><li>Overheating of motors</li><li>Malfunctioning of CNC machines</li><li>Increased energy bills due to poor power factor</li></ul><p>At National Electricals, we engineer our Automatic Voltage Controllers to mitigate these risks entirely.</p>`
  },
  {
    id: '2',
    title: 'Innovations in Electroplating Efficiency',
    author: 'Sanjay Singh',
    date: '2023-11-20',
    headerImage: 'https://picsum.photos/id/49/1200/600',
    excerpt: 'Modern rectifiers are changing the game for electroplating industries by reducing power consumption.',
    contentHtml: `<p>Traditional rectifiers often suffer from high switching losses. Our new range of silicon-controlled rectifiers ensures that you get maximum DC output with minimal heat dissipation.</p><h3>Key Benefits:</h3><p>1. Reduced Ripple Factor<br>2. Higher Energy Efficiency<br>3. Compact Design</p>`
  }
];

export const SERVICES: Service[] = [
  {
    title: "Heavy Machine Manufacturing",
    description: "We manufacture servo stabilizers, electrical panels, rectifiers, and transformers tailored to industrial needs.",
    icon: "Hammer"
  },
  {
    title: "Consulting & Advising",
    description: "Expert guidance to help you choose the best power conditioning solutions for your specific purpose.",
    icon: "Lightbulb"
  },
  {
    title: "Service & Contract Work",
    description: "Comprehensive servicing and AMC for all electrical machines, ensuring longevity and efficiency.",
    icon: "Wrench"
  }
];

export const CLIENTS: Client[] = [
  { name: "UP Government", logo: "https://raw.githubusercontent.com/shivendrra/National-Electricals/dev/assets/SVG/upgov.svg" },
  { name: "Indraprastha Gas Limited", logo: "https://raw.githubusercontent.com/shivendrra/National-Electricals/dev/assets/SVG/igl.png" },
  { name: "Bhusal Group", logo: "https://raw.githubusercontent.com/shivendrra/National-Electricals/dev/assets/SVG/bhusal.png" },
  { name: "Little Flower School", logo: "https://raw.githubusercontent.com/shivendrra/National-Electricals/dev/assets/SVG/lfs.png" },
  { name: "Splice Laminates", logo: "https://raw.githubusercontent.com/shivendrra/National-Electricals/dev/assets/SVG/splice.png" },
  { name: "Gharana", logo: "https://raw.githubusercontent.com/shivendrra/National-Electricals/dev/assets/SVG/gharana.jpg" },
  { name: "Galant", logo: "https://raw.githubusercontent.com/shivendrra/National-Electricals/dev/assets/SVG/gallant.png" },
];

export const TEAM: TeamMember[] = [
  { name: "Harihar Singh", role: "Co-Founder & Chairman", image: "https://raw.githubusercontent.com/shivendrra/National-Electricals/dev/assets/Pictures/Head1.png" },
  { name: "Birendra Kumar Singh", role: "Co-Founder & Vice-Chairman", image: "https://raw.githubusercontent.com/shivendrra/National-Electricals/dev/assets/Pictures/Head2.png" },
  { name: "Sanjay Singh", role: "Managing Director", image: "https://raw.githubusercontent.com/shivendrra/National-Electricals/dev/assets/Pictures/Head3.png" },
];

// Local Storage Helpers
const getStorage = <T>(key: string, initial: T): T => {
  const stored = localStorage.getItem(key);
  if (!stored) {
    localStorage.setItem(key, JSON.stringify(initial));
    return initial;
  }
  return JSON.parse(stored);
};

const setStorage = <T>(key: string, data: T) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// API Methods
export const getProducts = (): Product[] => getStorage('ne_products', INITIAL_PRODUCTS);
export const addProduct = (product: Product) => {
  const products = getProducts();
  setStorage('ne_products', [product, ...products]);
};

export const getBlogs = (): BlogPost[] => getStorage('ne_blogs', INITIAL_BLOGS);
export const addBlog = (blog: BlogPost) => {
  const blogs = getBlogs();
  setStorage('ne_blogs', [blog, ...blogs]);
};