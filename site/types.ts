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