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
  email: 'yugendiransenthilkumar@gmail.com',
  linkedin: 'https://www.linkedin.com/in/yugendiran-senthilkumar',
  github: 'https://github.com/yugendiransenthilkumar',
  status: 'Open to internships & 2027 full-time roles',
  cv: '/Yugendiran_Senthilkumar_Resume.pdf',
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
    title: 'JK Mobile',
    subtitle: 'Shop website, repair tracking & admin app',
    status: 'Live',
    category: 'Web',
    year: 2026,
    stack: ['HTML', 'CSS', 'JavaScript (ES Modules)', 'Firebase Auth', 'Cloud Firestore', 'PWA', 'Vercel'],
    summary: 'A production website and repair-tracking system for JK Mobile, a mobile sales & service shop in Panapakkam: customers track their repair on their phone, and the owner runs every job from an installable admin app.',
    how: [
      'Public site with services, brands, live offers, shop timings and map, all editable from the admin app.',
      'Customers track a repair with a WhatsApp link or their Job ID plus the last 4 digits of their phone.',
      'Admin PWA: dashboard of pending, ready and delivered jobs, search and filters, status updates, WhatsApp/call, and printable job slips for 80 mm thermal printers.',
      'Firebase Auth (email + password, admin-only) and Cloud Firestore with strict security rules: private job data stays admin-only, customers can read only one exact public status record.',
      'Job IDs issued with Firestore transactions; deployed on Vercel with security headers, CSP and caching.',
    ],
    live: 'https://jk-mobiles-omega.vercel.app',
  },
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
  {
    title: 'Winner, Ideathon',
    where: 'Jeppiaar Engineering College',
    note: 'Certificate & Shield',
    proof: {
      event: 'FuturaX 2K25 – Innovision',
      organizer: 'Department of IT, Jeppiaar Engineering College',
      date: 'October 2025',
      summary: 'Our team won the "Winner" title for Predictive Analysis for Hospital Resource Optimization, using AI and data-driven insights to improve healthcare efficiency and decision-making.',
      post: 'https://www.linkedin.com/feed/update/urn:li:activity:7382023991580008448/',
      photos: [
        { src: '/proof/futurax-2.jpg', alt: 'Receiving the winner certificate at FuturaX 2K25' },
        { src: '/proof/futurax-1.jpg', alt: 'Presenting the project on stage' },
        { src: '/proof/futurax-4.jpg', alt: 'Presenting outcome measures to the judges' },
        { src: '/proof/futurax-3.jpg', alt: 'Discussing the project with judges' },
      ],
    },
  },
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
  javascript: 'JavaScript in SP Motors and JK Mobile',
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
  bootstrap: 'Bootstrap from QSpiders training',
  tailwind: 'Tailwind CSS (this portfolio)',
  firebase: 'Firebase Auth and Firestore in the JK Mobile repair-tracking app',
  firestore: 'Cloud Firestore with security rules in JK Mobile',
  pwa: 'Installable admin PWA for JK Mobile',
}
