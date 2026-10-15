// Central place for personal details and external links.
// Only real information — no invented URLs, roles or statistics.

export const profile = {
  name: 'NISHA T',
  shortName: 'Nisha',
  role: 'Web Designer & Developer',
  headline: 'I build responsive, user-friendly websites and AI-powered projects using modern web technologies.',
  intro:
    'Aspiring Computer Science Engineer with a passion for coding and logical problem-solving, building practical and scalable web solutions with HTML, CSS, JavaScript and Generative AI.',
  about: [
    'I am an aspiring Computer Science Engineer pursuing my B.E. at Kongunadu College of Engineering and Technology, Trichy, driven by a passion for coding and logical problem-solving.',
    'I build responsive and user-friendly websites with HTML5, CSS3 and JavaScript, and work with Node.js and Express.js on the backend, using SQL and MySQL for data.',
    'I completed a Web Designing internship at Odugaatech Pvt. Ltd. and keep learning by building real projects — including MindMate AI, a Generative AI emotional wellness companion.',
  ],
  location: 'Arasanatham, Namakkal, Tamil Nadu, India',
  availability: 'Open to internships and opportunities',
  // profile photo for the hero — '' means no photo yet,
  // or upload one from Admin > Profile (it's stored in MongoDB)
  image: '/nisha-profile.jpeg',
  // Set this to a file placed in frontend/public (e.g. '/Nisha-Resume.pdf')
  // to enable the "Download Resume" button in the hero.
  resume: '/Nisha-Resume.pdf',
  education: {
    degree: 'Bachelor of Engineering in Computer Science and Engineering',
    short: 'B.E. CSE',
    institution: 'Kongunadu College of Engineering and Technology',
    location: 'Trichy, Tamil Nadu, India',
    years: '2023 – 2027',
    status: 'Currently pursuing final year',
    cgpa: 7.14,
    previous: [
      {
        degree: 'HSC',
        institution: 'Karur Vetri Vinayaga Matric Higher Secondary School',
        years: '2022 – 2023',
      },
      {
        degree: 'SSLC',
        institution: 'Karur Vetri Vinayaga Matric Higher Secondary School',
        years: '2020 – 2021',
      },
    ],
    interests: ['UI/UX Designs', 'Generative AI', 'Web Designing'],
    courses: ['Generative & Agentic AI – MindMate AI Project', 'Data Analytics with Python – NPTEL'],
  },
  internship: {
    role: 'Web Designing Intern',
    company: 'Odugaatech Pvt. Ltd.',
    period: '11/2025 – 12/2025',
    duration: '2 months',
    tags: ['HTML', 'CSS', 'Responsive Design', 'UI/UX'],
    points: [
      'Designed responsive websites using HTML and CSS.',
      'Improved mobile responsiveness and UI consistency.',
      'Optimized web pages for better user experience.',
    ],
  },
};

export const socials = {
  email: 'nishathangarasu15@gmail.com',
  phone: '+916369848299',
  phoneDisplay: '+91 63698 48299',
  github: 'https://github.com/Nisha162005',
  githubUser: 'Nisha162005',
  linkedin: 'https://www.linkedin.com/in/nisha-thangarasu-347992325',
  website: '', // Set to your deployed portfolio URL when available
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const api = {
  // In development the Vite proxy forwards /api to http://localhost:5000,
  // so no base URL is needed. Override with VITE_API_URL if you deploy separately.
  baseUrl: import.meta.env.VITE_API_URL || '/api',
};
