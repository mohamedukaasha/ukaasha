import type { Project, Skill, Experience } from '@/types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'echoes-software',
    title: 'Echoes Software Technologies',
    tagline: 'Enterprise-grade software solutions',
    description: 'A premier software development firm specializing in custom enterprise solutions, cloud architecture, and digital transformation for global clients.',
    category: 'company',
    tags: ['Software Development', 'Cloud', 'Enterprise', 'Consulting'],
    image: '/echoes.jpeg',
    gallery: ['/echoes.jpeg'],
    featured: true,
    year: '2023',
    client: 'Multiple',
    role: 'Software IT Company',
    duration: 'Ongoing',
    results: [
      { label: 'Clients Served', value: '50+' },
      { label: 'Products Shipped', value: '120+' },
      { label: 'Team Size', value: '25+' },
    ],
    testimonial: {
      text: "Echoes Software Technologies transformed our legacy systems into a modern, cloud-native infrastructure. Their expertise in enterprise solutions is unmatched.",
      author: "Sarah Jenkins",
      role: "CTO, Global Logistics Corp",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
  },
  {
    id: '2',
    slug: 'arroway',
    title: 'Arroway',
    tagline: 'Strategic growth & navigation',
    description: 'A strategy-focused venture empowering businesses with innovative tools and insights to navigate complex market environments and achieve sustainable growth.',
    category: 'company',
    tags: ['Strategy', 'Growth', 'Innovation', 'Analytics'],
    image: '/arroway.jpeg',
    gallery: ['/arroway.jpeg'],
    featured: true,
    year: '2022',
    role: 'Marketing Company',
    duration: 'Ongoing',
    results: [
      { label: 'Impact Score', value: '94/100' },
      { label: 'Global Reach', value: '10+ Countries' },
      { label: 'Partnerships', value: '15+' },
    ],
    testimonial: {
      text: "Arroway's strategic marketing approach helped us scale our user base by 300% in less than six months. They truly understand market dynamics.",
      author: "David Chen",
      role: "Founder, Zenith FinTech",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
  },
  {
    id: '3',
    slug: 'judolearning',
    title: 'Judolearning',
    tagline: 'Revolutionizing digital education',
    description: 'An interactive learning platform designed to streamline skill acquisition through adaptive curriculum and peer-to-peer engagement.',
    category: 'company',
    tags: ['EdTech', 'Learning', 'Platform', 'Community'],
    image: '/judolearning.jpeg',
    gallery: ['/judolearning.jpeg'],
    featured: true,
    year: '2022',
    role: 'Educational Technology',
    duration: 'Ongoing',
    results: [
      { label: 'Active Learners', value: '20K+' },
      { label: 'Course Catalog', value: '150+' },
      { label: 'Completion Rate', value: '82%' },
    ],
    testimonial: {
      text: "Judolearning has revolutionized how we train our employees. The interactive format makes even complex technical skills easy to acquire.",
      author: "Elena Rodriguez",
      role: "Head of Learning, TechAcademy",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
  },
  {
    id: '4',
    slug: 'infynecs',
    title: 'Infynecs',
    tagline: 'Next-gen infrastructure & software tech',
    description: 'Building the fundamental building blocks for modern software systems and resilient tech infrastructure.',
    category: 'company',
    tags: ['Software Tech', 'Infrastructure', 'Security', 'Scalability'],
    image: '/infynecs.png',
    gallery: ['/infynecs.png'],
    featured: true,
    year: '2024',
    role: 'Software IT Technologies',
    duration: 'Ongoing',
    results: [
      { label: 'Systems Deployed', value: '40+' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'Node Network', value: '500+' },
    ],
  },
];

export const SKILLS: Skill[] = [
  { name: 'Enterprise Software', level: 95, category: 'backend' },
  { name: 'Product Strategy', level: 92, category: 'design' },
  { name: 'Strategic Leadership', level: 95, category: 'design' },
  { name: 'EdTech Innovation', level: 90, category: 'frontend' },
  { name: 'React / Next.js', level: 90, category: 'frontend' },
  { name: 'Node.js', level: 88, category: 'backend' },
  { name: 'Tech Infrastructure', level: 92, category: 'devops' },
  { name: 'Business Growth', level: 94, category: 'design' },
  { name: 'System Architecture', level: 92, category: 'backend' },
  { name: 'Cloud Engineering', level: 88, category: 'devops' },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Echoes Software Technologies',
    role: 'Founder',
    period: '2023 — Present',
    description: 'Spearheading the delivery of high-impact software solutions for enterprise clients worldwide.',
  },
  {
    company: 'Arroway',
    role: 'Founder',
    period: '2022 — Present',
    description: 'Defining strategic roadmaps and growth frameworks for modern businesses.',
  },
  {
    company: 'Judolearning',
    role: 'Founder',
    period: '2022 — Present',
    description: 'Pioneering educational technology to make learning more accessible and interactive.',
  },
  {
    company: 'Infynecs',
    role: 'Founder',
    period: '2021 — Present',
    description: 'Developing next-generation financial and tech infrastructure for scalable startups.',
  },
];

export const CATEGORIES = [
  { value: 'all', label: 'All Companies' },
  { value: 'company', label: 'Companies' },
] as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com',
  linkedin: 'https://www.linkedin.com/in/mohamed-ukaasha-kk-a2334335a/',
  twitter: 'https://twitter.com',
  email: 'mohamedukaashakk@gmail.com',
};

export const STATS = [
  { label: 'Active Users', value: '100K+' },
  { label: 'Countries Covered', value: '13+' },
  { label: 'Ventures Founded', value: '4+' },
  { label: 'Years of Innovation', value: '7+' },
];
