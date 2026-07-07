export interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  image: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  logo: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: number;
  tag: string;
  title: string;
  description: string;
  image: string;
  sizeClass: 'large' | 'tall' | 'wide' | 'standard';
  specs: ProductSpec[];
}

export interface WhyChooseUsItem {
  id: number;
  icon: 'shield' | 'refresh' | 'droplet' | 'flame' | 'plus' | 'circle' | 'rect' | 'award';
  title: string;
  description: string;
}

export interface IndustryItem {
  id: number;
  icon: 'home' | 'building' | 'layers' | 'tool' | 'globe' | 'dollar';
  title: string;
  description: string;
}

export interface Award {
  id: number;
  year: string;
  title: string;
  description: string;
}
