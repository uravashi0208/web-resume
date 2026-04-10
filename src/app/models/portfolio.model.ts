export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  tech: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface PortfolioItem {
  category: string;
  title: string;
  description: string; // add this
  tech: string[]; // add this
  image: string;
  link: string;
}

export interface Testimonial {
  name: string;
  location: string;
  image: string;
  text: string;
  rating: number;
}
