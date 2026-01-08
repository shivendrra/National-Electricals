export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  specifications: Record<string, string>; // e.g. { "Input Voltage": "230V", "Power": "50kW" }
  imageUrl: string;
  pdfLink?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  authorLinkedin?: string;
  date: string;
  headerImage: string;
  contentHtml: string; // The HTML snippet
  excerpt: string;
}

export interface GalleryImage {
  id: string;
  imageUrl: string;
  caption?: string;
  date?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface Client {
  name: string;
  logo: string;
}

export interface ContactMessage {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  service: string;
  message: string;
  read: boolean;
  createdAt: any;
}

export interface QuoteRequest {
  id: string;
  productId: string;
  productName: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  quantity: number;
  message?: string;
  status: 'pending' | 'contacted';
  createdAt: any;
}