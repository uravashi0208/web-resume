import { Injectable } from '@angular/core';
import {
  Experience,
  Education,
  Service,
  PortfolioItem,
  Testimonial,
} from '../models/portfolio.model';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {
  readonly profile = {
    name: 'Uravashiben Vagadiya',
    shortName: 'Uravashi',
    tagline: 'Senior Full-Stack Developer',
    subtitle: '8+ Years · React · Angular · Node.js · AWS',
    bio: 'Senior Full-Stack Developer with 8+ years of experience building scalable, high-performance web applications for SaaS, marketing, and automation platforms. I specialize in React.js, Next.js, TypeScript, Node.js, Angular, PHP, and RESTful APIs, with strong expertise in cloud infrastructure (AWS), Docker, CI/CD, and microservices architecture.',
    location: 'Gliwice, Śląskie, Poland',
    email: 'urvashiv210@gmail.com',
    linkedin: 'https://www.linkedin.com/in/uravashibenvagadiya-978121171',
    availability: 'Open to Poland & Germany',
    phone: '+48 453457100',
    stats: [
      { value: '8+', label: 'Years Experience' },
      { value: '50K+', label: 'Daily Requests' },
      { value: '1M+', label: 'Events/Day' },
      { value: '35%', label: 'AWS Cost Reduction' },
    ],
  };

  readonly experiences: Experience[] = [
    {
      company: 'Hexotix',
      role: 'Full-stack Developer',
      period: 'Feb 2023 – Present',
      location: 'Surat',
      description: [
        'Designed Node.js microservices handling 50K+ daily requests with <300ms response time',
        'Built React + TypeScript Chrome Extension used by 50K+ users with 99.9% uptime',
        'Engineered Angular flow builder reducing user onboarding time by 65%',
        'Implemented real-time analytics dashboard using WebSockets, processing 1M+ Instagram DM events/day',
        'Integrated Meta (Instagram) Graph API for compliant AutoDM on Posts, Reels, Stories, Ads and Inbox',
        'Integrated Stripe payments generating €150K+ monthly revenue',
        'Reduced AWS infrastructure costs by 30% through Docker containerization + ECS auto-scaling',
        'Achieved 85%+ test coverage across microservices using Jest and Cypress E2E tests',
        'Built React + TypeScript Chrome Extension',
        'Engineered Angular flow builder for DM automation workflows, reducing user onboarding time by 65%',
      ],
      tech: [
        'React',
        'TypeScript',
        'Angular',
        'Node.js',
        'Chrome Extension',
        'Meta Graph API',
        'Instagram API',
        'WebSockets',
        'AWS',
        'Docker',
        'ECS',
        'PostgreSQL',
        'Stripe',
        'Jest',
        'Cypress',
        'RabbitMQ',
        'Agile/Scrum',
      ],
    },
    {
      company: 'VPN INFOTECH',
      role: 'Team Lead / Senior Angular & Node.js Developer',
      period: 'Jul 2021 – Jan 2023',
      location: 'Surat, Gujarat, India',
      description: [
        'Led a team of frontend and backend developers delivering scalable web applications',
        'Designed serverless architectures, reducing infrastructure costs by 35%',
        'Optimized PostgreSQL queries, improving API response times by 50%',
        'Migrated legacy modules to Angular + Node.js',
        'Increased test coverage from 40% to 85% using Jest and Cypress',
        'Conducted code reviews, mentoring, and sprint planning',
      ],
      tech: ['Angular', 'Node.js', 'PostgreSQL', 'AWS', 'Serverless', 'Jest', 'Cypress', 'CI/CD'],
    },
    {
      company: 'DI Solutions',
      role: 'Frontend Developer (Angular → React)',
      period: 'Aug 2020 – Jun 2021',
      location: 'Surat, Gujarat, India',
      description: [
        'Developed hybrid mobile applications using Ionic + Angular with 95% code reuse',
        'Integrated Firebase Authentication and Realtime Database',
        'Built RESTful APIs using Node.js & Express',
        'Supported 10K+ monthly active users',
        'Improved load time by 30% through lazy loading and optimization',
        'Reduced memory leaks by 65%',
      ],
      tech: ['Angular', 'Ionic', 'React', 'Node.js', 'Firebase', 'CI/CD', 'REST APIs'],
    },
    {
      company: 'Jr technolabs',
      role: 'PHP Web Developer',
      period: 'Nov 2016 – Jul 2020',
      location: 'Surat, Gujarat, India',
      description: [
        'Developed dynamic web applications using PHP, MySQL, JavaScript, jQuery',
        'Built CMS platforms and e-commerce modules handling 50K+ monthly visitors',
        'Optimized SQL queries and Apache configurations, improving page speed by 35%',
        'Implemented secure authentication systems and CRUD modules',
      ],
      tech: ['PHP', 'MySQL', 'JavaScript', 'jQuery', 'AJAX', 'Apache'],
    },
  ];

  readonly education: Education[] = [
    {
      institution: 'LDRP Institute of Technology & Research, Gujarat Technological University',
      degree: 'Master of Science',
      field: 'Information Technology',
      period: 'Jul 2014 – Apr 2016',
    },
    {
      institution: 'Gujarat University',
      degree: 'Bachelor of Computer Application (BCA)',
      field: 'Computer and Information Sciences',
      period: 'Aug 2011 – Jul 2014',
    },
  ];

  readonly skillCategories = [
    {
      category: 'Frontend',
      icon: 'fa-laptop-code',
      skills: [
        'React.js',
        'Next.js',
        'Angular',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Material UI',
        'Ionic',
      ],
    },
    {
      category: 'Backend',
      icon: 'fa-server',
      skills: [
        'Node.js',
        'Nest.js',
        'Express.js',
        'GraphQL',
        'RESTful APIs',
        'WebSockets',
        'PHP',
        'Microservices',
        'RabbitMQ',
        'Apache Kafka',
      ],
    },
    {
      category: 'Cloud & DevOps',
      icon: 'fa-cloud',
      skills: [
        'AWS',
        'Azure',
        'Docker',
        'Kubernetes',
        'CI/CD',
        'Amazon ECS',
        'Serverless',
        'GitHub',
        'Git',
      ],
    },
    {
      category: 'Databases',
      icon: 'fa-database',
      skills: [
        'PostgreSQL',
        'MySQL',
        'MongoDB',
        'Firebase',
        'Redis',
        'Query Optimization',
        'Database Design',
      ],
    },
    {
      category: 'Testing',
      icon: 'fa-vial',
      skills: [
        'Jest',
        'Cypress',
        'Unit Testing',
        'E2E Testing',
        'Integration Testing',
        'Test Automation',
      ],
    },
    {
      category: 'Architecture',
      icon: 'fa-sitemap',
      skills: [
        'Microservices',
        'Event-Driven',
        'Serverless',
        'PWA',
        'Single Page Apps',
        'Systems Design',
        'Performance Tuning',
      ],
    },
    {
      category: 'AI & Automation',
      icon: 'fa-robot',
      skills: [
        'OpenAI API',
        'LLM Integration',
        'Prompt Engineering',
        'AI-powered SaaS',
        'Meta Graph API',
      ],
    },
  ];

  readonly services: Service[] = [
    {
      icon: 'fa-laptop-code',
      title: 'Full-Stack Web Development',
      description:
        'End-to-end SaaS, marketing, and automation platforms — from pixel-perfect UI to scalable backend APIs.',
      features: [
        'React · Next.js · Angular',
        'Node.js · GraphQL · TypeScript',
        '50K+ daily requests at <300ms',
      ],
    },
    {
      icon: 'fa-cloud-upload-alt',
      title: 'Cloud & DevOps Engineering',
      description:
        'Scalable AWS infrastructure, Docker containerization, and CI/CD pipelines that cut costs and ship faster.',
      features: [
        'AWS · Docker · Kubernetes · ECS',
        'CI/CD · Serverless Architecture',
        '30–35% AWS cost reduction',
      ],
    },
    {
      icon: 'fa-bolt',
      title: 'Real-Time & Event-Driven Systems',
      description:
        'High-throughput microservices, WebSocket dashboards, and messaging pipelines for live data at scale.',
      features: [
        'WebSockets · Kafka · RabbitMQ',
        'Microservices · PostgreSQL',
        '1M+ events/day in production',
      ],
    },
    {
      icon: 'fa-tachometer-alt',
      title: 'Performance Optimization',
      description:
        'Deep profiling to reduce load times, fix memory leaks, optimize DB queries, and cut cloud spend — measurably.',
      features: [
        '30% faster load · 65% fewer leaks',
        '50% faster API response times',
        '35% infrastructure cost reduction',
      ],
    },
    {
      icon: 'fa-mobile-alt',
      title: 'Hybrid Mobile Development',
      description:
        'Cross-platform mobile apps using Ionic + Angular with native-like UX and high code reuse across platforms.',
      features: [
        'Ionic · Angular · Firebase',
        'REST APIs · CI/CD',
        '95% code reuse · 10K+ monthly users',
      ],
    },
    {
      icon: 'fa-vial',
      title: 'QA, Testing & Code Quality',
      description:
        'Comprehensive test strategies — unit, integration, and E2E — to ensure reliability and confidence in every release.',
      features: [
        'Jest · Cypress · Test Automation',
        'Unit · Integration · E2E Testing',
        '40% → 85%+ test coverage',
      ],
    },
  ];

  readonly portfolioItems: PortfolioItem[] = [
    {
      category: 'SaaS · Instagram Automation',
      title: 'LinkDM — Instagram DM Automation Platform',
      description:
        'Built the #1 AutoDM SaaS platform for Instagram creators, enabling automated replies to comments, reels, stories, and ads via Meta Graph API. Engineered Angular flow builder reducing onboarding by 65%. Integrated Stripe payments generating €150K+ monthly revenue. Handles 1M+ DM events/day via real-time WebSockets with 99.9% uptime.',
      tech: ['Angular', 'Node.js', 'Meta Graph API', 'WebSockets', 'Stripe', 'AWS', 'PostgreSQL'],
      image: 'assets/img/linkdm.jpg',
      link: 'https://www.linkdm.com/',
    },
    {
      category: 'Marketplace · Remote Work',
      title: 'Pros Marketplace — Latin American Remote Job Platform',
      description:
        'Developed a bilingual (English/Spanish) remote work marketplace connecting Latin American professionals with global employers. Features job search, worker profiles, skills testing, employer hiring tools, and pricing plans. Built with scalable full-stack architecture supporting multi-role user flows and CloudFront CDN delivery.',
      tech: ['React', 'Node.js', 'AWS CloudFront', 'REST APIs', 'PostgreSQL', 'CI/CD'],
      image: 'assets/img/marketplace.jpg',
      link: 'https://prosmarketplace.com/',
    },
    {
      category: 'AI · SaaS · Automation',
      title: 'SmartHire AI — AI-Powered Recruitment Automation Platform',
      description:
        'Built an end-to-end AI-powered recruitment SaaS platform integrating OpenAI GPT API for automated CV screening, candidate ranking, and interview question generation. Developed React + TypeScript dashboard for HR teams with real-time candidate pipeline management. Engineered Node.js microservices backend with PostgreSQL and Redis caching handling 10K+ CV processing requests/day. Deployed on AWS ECS with Docker and CI/CD pipelines achieving 99.9% uptime.',
      tech: [
        'React',
        'TypeScript',
        'Node.js',
        'OpenAI API',
        'PostgreSQL',
        'Redis',
        'AWS ECS',
        'Docker',
        'CI/CD',
      ],
      image: 'assets/img/Powered-Recruitment-Software.jpg',
      link: '',
    },
    {
      category: 'Data · Analytics · Multi-Cloud',
      title: 'DataPulse — Real-Time Business Intelligence Dashboard',
      description:
        'Engineered a real-time BI analytics platform aggregating data from multiple sources — Stripe, Google Analytics, PostgreSQL, and third-party APIs — into a unified Next.js dashboard with live charts and KPI tracking. Built event-driven data pipeline using Apache Kafka processing 500K+ events/day with sub-second latency. Deployed across AWS and Azure with Terraform IaC for multi-cloud resilience. Integrated Power BI-style visualization layer with exportable reports for non-technical stakeholders.',
      tech: [
        'Next.js',
        'TypeScript',
        'Node.js',
        'Apache Kafka',
        'PostgreSQL',
        'AWS',
        'Azure',
        'Terraform',
        'Power BI',
        'Docker',
      ],
      image: 'assets/img/datapulse.jpg',
      link: '',
    },
    {
      category: 'SaaS · URL Management',
      title: 'Foxly — Branded URL Shortener & Link Analytics',
      description:
        'Engineered a full-featured branded link management SaaS tool — custom domain support, bulk link creation, QR code generation, and click analytics dashboard. Designed for marketers to track and brand every link. Built scalable backend for high-volume link resolution with real-time analytics reporting.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'REST APIs', 'Analytics'],
      image: 'assets/img/GRAPHICS-13.avif',
      link: 'https://www.foxlyme.com/',
    },
    {
      category: 'React · Node.js · Full-Stack · E-Commerce',
      title: 'Vegefoods — Full-Stack E-Commerce Platform',
      description:
        'A production-grade e-commerce platform built end-to-end — React 18 customer storefront, complete admin dashboard with analytics, and a Node.js REST API backed by Firebase Firestore. Integrates Stripe, PayPal, and Google Pay payment flows with dual JWT authentication for customers and admins. Features background cron jobs for cart abandonment recovery, Cloudinary media uploads, and 22 service-layer modules covering products, orders, users, blogs, newsletters, and reviews. Deployed on Vercel.',
      tech: ['React', 'React Hooks', 'TypeScript', 'CSS3', 'Vercel'],
      image: 'assets/img/vegafoods.png',
      link: 'https://fruitsapp-one.vercel.app/',
    },
    {
      category: 'Automation · Admin Dashboard',
      title: 'Gmail Automation — Email Workflow Admin Panel',
      description:
        'Built a full-stack Gmail automation admin dashboard enabling rule-based email workflows, automated replies, and inbox management at scale. Features a React admin UI with Node.js backend integrating Gmail API. Designed for teams managing high-volume email operations with audit logs and scheduling.',
      tech: ['React', 'Node.js', 'Gmail API', 'REST APIs', 'PostgreSQL', 'Docker'],
      image: 'assets/img/automated-emails-from-gmail.jpg',
      link: 'https://gmail-automation-frontend.onrender.com/',
    },
    {
      category: 'AI · Chatbot',
      title: 'AI Chatbot — Intelligent Conversational Interface',
      description:
        'Developed an AI-powered chatbot application with a React admin dashboard (Flexy template) for managing conversations, bot configuration, and analytics. Integrates LLM/AI API for intelligent responses with real-time chat UI. Demonstrates AI integration skills increasingly demanded in the Poland tech market.',
      tech: ['React', 'Node.js', 'AI/LLM API', 'WebSockets', 'REST APIs', 'Vercel'],
      image: 'assets/img/ai-automation.avif',
      link: 'https://ai-chat-bot-indol-gamma.vercel.app/',
    },
  ];

  readonly testimonials: Testimonial[] = [
    {
      name: 'Alex Thompson',
      location: 'CTO, Hexotix',
      image: 'assets/img/testimonial-img-1.jpg',
      text: 'Uravashi delivered an exceptional Chrome Extension that now serves 50K+ users flawlessly. Her attention to performance and reliability is unmatched.',
      rating: 5,
    },
    {
      name: 'Maria Kowalski',
      location: 'Product Lead, VPN INFOTECH',
      image: 'assets/img/testimonial-img-2.jpg',
      text: 'As our team lead, Uravashi boosted our test coverage from 40% to 85% and cut infrastructure costs by 35%. She mentors brilliantly and delivers consistently.',
      rating: 5,
    },
    {
      name: 'Raj Mehta',
      location: 'Founder, DI Solutions',
      image: 'assets/img/testimonial-img-3.jpg',
      text: 'Uravashi reduced our app load time by 30% and memory leaks by 65%. She brings deep expertise and professionalism to every project.',
      rating: 5,
    },
  ];
}
