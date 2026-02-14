export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: 'web' | 'mobile' | 'open-source' | 'saas' | 'company';
  tags: string[];
  image: string;
  gallery: string[];
  link?: string;
  github?: string;
  featured: boolean;
  year: string;
  client?: string;
  role: string;
  duration: string;
  results: { label: string; value: string }[];
  testimonial?: {
    text: string;
    author: string;
    role: string;
    avatar: string;
  };
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'devops' | 'design';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  type?: string;
}
