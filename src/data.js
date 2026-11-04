// Edit this file to update the portfolio content.

export const profile = {
  name: 'Yugendiran',
  surname: 'Senthilkumar',
  role: 'Java Full Stack Developer',
  tagline: 'I build practical web and Java apps, from the database to the button you click.',
  location: 'Chennai, India',
  college: 'Jeppiaar Engineering College',
  degree: 'B.Tech Information Technology',
  batch: '2023 – 2027',
  cgpa: '7.5',
  email: 'yugendiranyugi46@gmail.com',
  linkedin: 'https://www.linkedin.com/in/yugendiran-senthilkumar',
  github: 'https://github.com/yugendiransenthilkumar',
  status: 'Open to internships & 2027 full-time roles',
}

export const about = [
  "I'm a B.Tech IT student at Jeppiaar Engineering College, Chennai, and a Java Full Stack Developer Intern at Altruisty Innovation. I like turning real problems into working software: a car dealer's storefront, a college bus tracker, a placement portal for my own batch.",
  'Right now I\'m sharpening Core Java, DSA, and Spring Boot, and shipping projects end to end: design, backend, database, deployment.',
]

export const skills = [
  { group: 'Languages', items: ['Java', 'JavaScript', 'SQL', 'HTML', 'CSS'] },
  { group: 'Backend', items: ['Spring Boot', 'REST APIs', 'JWT Auth', 'OOP', 'Collections', 'Exception Handling'] },
  { group: 'Frontend', items: ['React', 'Vite', 'Bootstrap', 'Tailwind CSS', 'Responsive UI'] },
  { group: 'Data & Cloud', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Supabase', 'Appwrite', 'Vercel'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Eclipse', 'Android Studio'] },
]

// status: 'Live' | 'In progress' | 'Building' | 'Completed'
export const projects = [
  {
    title: 'SP Motors',
    subtitle: 'Car dealer e-commerce website',
    status: 'Live',
    category: 'Web',
    year: 2026,
    stack: ['JavaScript', 'Vite', 'Supabase', 'PostgreSQL', 'Appwrite'],
    summary: 'A full storefront for a used-car dealer: browse inventory with filters, open a car\'s details page, and enquire on WhatsApp in one tap.',
    how: [
      'Inventory and car details are stored in Supabase (PostgreSQL), with Row Level Security guarding writes.',
      'Admin sign-in with Supabase Auth to add, edit, and remove listings.',
      'Car photos are uploaded to Appwrite Storage and served as optimised images.',
      'WhatsApp click-to-chat pre-fills the car name so the dealer knows what you\'re asking about.',
      'Built with Vite and deployed on Vercel.',
    ],
    live: 'https://spmotors.vercel.app/',
    code: 'https://github.com/yugendiransenthilkumar/car-sales',
  },
  {
    title: 'College Transportation App',
    subtitle: 'Android app · Altruisty internship',
    status: 'In progress',
    category: 'Java',
    year: 2026,
    stack: ['Java', 'Android', 'XML Layouts'],
    summary: 'An Android app for students to see college bus routes, schedules, and driver details in one place.',
    how: [
      'Written in Java with multiple activities for routes, schedules, and driver info.',
      'Dynamic UI components render each route and its stops.',
      'Being built as part of my Java Full Stack internship at Altruisty Innovation.',
    ],
  },
  {
    title: 'Jeppiaar Placement Drive Portal',
    subtitle: 'Spring Boot backend for campus drives',
    status: 'Building',
    category: 'Java',
    year: 2026,
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'JWT', 'Docker'],
    summary: 'Students see only the drives they\'re eligible for and never miss a deadline. Admins track shortlists.',
    how: [
      'An eligibility engine in Java matches each student\'s branch, CGPA, backlogs, and batch to every drive.',
      'Spring Security with JWT for student and admin logins.',
      'Scheduled jobs send deadline reminder emails; Redis caches drive lists.',
      'PostgreSQL with Flyway migrations, packaged with Docker Compose.',
    ],
  },
  {
    title: 'Hospital Management Dashboard',
    subtitle: 'Admin dashboard',
    status: 'Completed',
    category: 'Web',
    stack: ['JavaScript', 'Bootstrap', 'HTML', 'CSS'],
    summary: 'A responsive admin dashboard for managing patients, appointments, and doctor records.',
    how: [
      'Dynamic UI components built with plain JavaScript.',
      'Bootstrap grid for a layout that works on phone and desktop.',
    ],
  },
  {
    title: 'Waste Management System',
    subtitle: 'Pickup request platform',
    status: 'Completed',
    category: 'Web',
    stack: ['REST APIs', 'MongoDB', 'JavaScript'],
    summary: 'A full-stack app to raise, update, and track waste pickup requests.',
    how: [
      'RESTful APIs for creating, updating, and tracking pickup requests.',
      'MongoDB stores requests and their status history.',
    ],
  },
]

export const experience = [
  {
    role: 'Java Full Stack Developer Intern',
    org: 'Altruisty Innovation Pvt Ltd',
    when: 'Jul 2026 – Present',
    points: [
      'Building the College Transportation mobile app in Java.',
      'Working in a team with industry mentors on real project workflows.',
    ],
  },
  {
    role: 'Java Full Stack Development Training',
    org: 'QSpiders',
    when: '2026 – Present',
    points: ['Core Java, SQL, web technologies, Bootstrap, and React.js, with hands-on mini projects.'],
  },
  {
    role: 'B.Tech Information Technology',
    org: 'Jeppiaar Engineering College, Chennai',
    when: '2023 – 2027',
    points: ['CGPA 7.5 / 10.'],
  },
]

export const achievements = [
  { title: 'Winner, Ideathon', where: 'Jeppiaar Engineering College', note: 'Certificate & Shield' },
  { title: 'Winner, AI Quiz', where: 'Alpha Engineering College', note: '' },
  { title: 'Hackathon participant', where: 'Inter-college hackathons', note: 'Problem solving under time pressure' },
]

// Words the recruiter "fit check" looks for, mapped to how I can show them.
export const fitKeywords = {
  java: 'Core Java, OOP, Collections, Exception Handling',
  'spring': 'Building a Spring Boot backend (Placement Portal)',
  'spring boot': 'Building a Spring Boot backend (Placement Portal)',
  rest: 'REST APIs in the Waste Management System and Placement Portal',
  api: 'REST APIs in the Waste Management System and Placement Portal',
  sql: 'SQL with MySQL and PostgreSQL',
  mysql: 'MySQL from QSpiders training',
  postgresql: 'PostgreSQL via Supabase in SP Motors',
  postgres: 'PostgreSQL via Supabase in SP Motors',
  mongodb: 'MongoDB in the Waste Management System',
  javascript: 'JavaScript in SP Motors and the Hospital Dashboard',
  react: 'React (this portfolio is built with it)',
  html: 'HTML & CSS across every web project',
  css: 'HTML & CSS across every web project',
  git: 'Git & GitHub for all projects',
  android: 'Android app in Java (College Transportation App)',
  docker: 'Docker Compose in the Placement Portal',
  jwt: 'JWT auth in the Placement Portal',
  'full stack': 'Built SP Motors end to end, from database to deployment',
  frontend: 'Responsive UIs with React, Bootstrap, and Tailwind',
  backend: 'Java and Spring Boot backends with REST APIs',
  dsa: 'Practising Data Structures & Algorithms in Java daily',
  'problem solving': 'Ideathon winner; DSA practice in Java',
  bootstrap: 'Bootstrap in the Hospital Management Dashboard',
  tailwind: 'Tailwind CSS (this portfolio)',
}
