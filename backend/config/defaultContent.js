// Default content for every editable section, mirroring the frontend's
// static config/data files. Icons are intentionally excluded — the React
// components map icon keys to lucide icons in code.

export const defaultContent = {
  profile: {
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
    image: '/nisha-profile.jpeg',
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
  },

  socials: {
    email: 'nishathangarasu15@gmail.com',
    phone: '+916369848299',
    phoneDisplay: '+91 63698 48299',
    github: 'https://github.com/Nisha162005',
    githubUser: 'Nisha162005',
    linkedin: 'https://www.linkedin.com/in/nisha-thangarasu-347992325',
    website: '',
  },

  nav: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ],

  skills: [
    {
      id: 'frontend',
      title: 'Frontend',
      description: 'Building responsive, accessible and modern user interfaces.',
      skills: [
        { name: 'HTML5', desc: 'Semantic document structure', level: 5 },
        { name: 'CSS3', desc: 'Modern layouts and styling', level: 4 },
        { name: 'JavaScript', desc: 'Interactivity and logic', level: 4 },
        { name: 'Responsive Design', desc: 'Works on every screen', level: 4 },
      ],
    },
    {
      id: 'backend',
      title: 'Backend',
      description: 'Designing server-side logic that powers real applications.',
      skills: [
        { name: 'Node.js', desc: 'JavaScript runtime for servers', level: 3 },
        { name: 'Express.js', desc: 'Web framework for Node.js', level: 3 },
      ],
    },
    {
      id: 'database',
      title: 'Database',
      description: 'Modeling and persisting data with relational databases.',
      skills: [
        { name: 'SQL', desc: 'Querying relational data', level: 4 },
        { name: 'MySQL', desc: 'Database for real applications', level: 3 },
      ],
    },
    {
      id: 'programming',
      title: 'Programming',
      description: 'Core languages for logic and problem solving.',
      skills: [
        { name: 'Java', desc: 'OOP and problem solving', level: 3 },
        { name: 'Python', desc: 'Data analytics with Python — NPTEL', level: 3 },
      ],
    },
    {
      id: 'tools',
      title: 'AI & Design',
      description: 'Areas I love working in — AI and thoughtful design.',
      skills: [
        { name: 'Generative AI', desc: 'AI-powered features and chatbots', level: 3 },
        { name: 'UI/UX Design', desc: 'User-friendly interface design', level: 4 },
        { name: 'Web Designing', desc: 'Designing responsive websites', level: 4 },
      ],
    },
    {
      id: 'concepts',
      title: 'Soft Skills',
      description: 'How I work with people and approach problems.',
      skills: [
        { name: 'Communication', desc: 'Sharing ideas clearly', level: 4 },
        { name: 'Teamwork', desc: 'Collaborating with others', level: 4 },
        { name: 'Problem Solving', desc: 'Breaking problems down', level: 4 },
        { name: 'Adaptability', desc: 'Adjusting to new tools', level: 4 },
      ],
    },
  ],

  projects: [
    {
      id: 'mindmate-ai',
      name: 'MindMate AI',
      role: 'Emotional Wellness Companion',
      featured: true,
      short:
        'An emotional wellness chatbot powered by Generative AI that provides personalized emotional support, mood tracking and self-care recommendations.',
      description:
        'MindMate AI is an emotional wellness companion chatbot built with Generative AI. It provides personalized emotional support, mood tracking and self-care recommendations to help users take care of their mental well-being, one conversation at a time.',
      stack: ['Generative AI', 'HTML', 'CSS', 'JavaScript'],
      features: [
        'Personalized emotional support',
        'Mood tracking',
        'Self-care recommendations',
        'Generative AI conversations',
        'Conversational chatbot interface',
        'Simple, friendly user interface',
      ],
      challenges: [
        'Designing conversations that feel supportive, safe and genuinely helpful instead of robotic.',
        'Turning raw AI responses into structured mood tracking and self-care suggestions.',
        'Keeping the interface calm and simple so anyone can use it every day.',
      ],
      learned: [
        'How Generative AI can be applied to real problems like emotional wellness.',
        'Structuring a chatbot flow around a user’s mood and conversation context.',
        'Building a caring, user-friendly experience with front-end web technologies.',
      ],
      image: '',
      alt: 'Preview of the MindMate AI emotional wellness chatbot',
      github: 'https://github.com/Nisha162005/Mindmate',
      demo: '',
    },
    {
      id: 'food-court',
      name: 'Smart College Food Court Management System',
      role: 'Web-based Food Ordering System',
      featured: false,
      short:
        'A web-based food ordering system with student login, menu display, search and order management that automates order processing.',
      description:
        'A web-based food ordering system for college food courts with student login, menu display, search and order management. Built with HTML, CSS and JavaScript and integrated with MySQL to automate order processing — reducing waiting time and improving efficiency.',
      stack: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
      features: [
        'Student login',
        'Menu display',
        'Menu search',
        'Order management',
        'Automated order processing',
        'Responsive design',
      ],
      challenges: [
        'Designing a simple flow from browsing the menu to placing an order on any device.',
        'Integrating JavaScript with MySQL so orders are processed and tracked automatically.',
        'Keeping search and order management fast and easy for students.',
      ],
      learned: [
        'Connecting a front-end interface to a MySQL database for real order data.',
        'Structuring student login, menu and order flows clearly.',
        'How automation reduces waiting time and improves efficiency in a real workflow.',
      ],
      image: '',
      alt: 'Preview of the Smart College Food Court Management System',
      github: '',
      demo: '',
    },
  ],

  journey: [
    {
      id: 'bca',
      title: 'B.E. CSE Student',
      text: 'Started my Bachelor of Computer Science and Engineering at Kongunadu College of Engineering and Technology, Trichy — my formal foundation in computer science.',
    },
    {
      id: 'html-css',
      title: 'HTML & CSS',
      text: 'Learned the building blocks of the web — structure with HTML and styling with CSS — and shaped my first responsive layouts.',
    },
    {
      id: 'javascript',
      title: 'JavaScript',
      text: 'Added interactivity with JavaScript — logic, events and DOM manipulation — the language that powers modern web apps.',
    },
    {
      id: 'java',
      title: 'Java',
      text: 'Strengthened my programming fundamentals with Java — object-oriented thinking and logical problem solving.',
    },
    {
      id: 'node',
      title: 'Node.js',
      text: 'Moved to the server side and learned to run JavaScript outside the browser with Node.js.',
    },
    {
      id: 'express',
      title: 'Express.js',
      text: 'Built server-side logic and routes with Express.js — request handling and connecting the front end to data.',
    },
    {
      id: 'mysql',
      title: 'SQL & MySQL',
      text: 'Learned to store and manage data with SQL and MySQL — tables, queries and relational data for real applications.',
    },
    {
      id: 'projects',
      title: 'Real Projects',
      text: 'Built real applications — MindMate AI, a Generative AI emotional wellness companion, and a Smart College Food Court Management System.',
    },
    {
      id: 'internship',
      title: 'Internship',
      text: 'Completed a Web Designing internship at Odugaatech Pvt. Ltd. designing responsive websites and improving mobile responsiveness and UI consistency.',
    },
    {
      id: 'goal',
      title: 'Web Designer & Developer',
      text: 'Now focused on growing as a web designer and developer — building, learning and shipping every day.',
    },
  ],

  tech: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Java',
    'SQL',
    'MySQL',
    'Node.js',
    'Express.js',
    'Generative AI',
    'UI/UX Design',
    'Web Designing',
    'GitHub',
  ],

  build: [
    {
      id: 'responsive',
      icon: 'monitor',
      title: 'Responsive Websites',
      desc: 'Websites and interfaces that adapt cleanly from mobile to desktop — fast, accessible and easy to use.',
    },
    {
      id: 'webapps',
      icon: 'layers',
      title: 'Web Applications',
      desc: 'Complete web projects with login, menu display, search and order management — from interface to database.',
    },
    {
      id: 'ai',
      icon: 'plug',
      title: 'Generative AI Integration',
      desc: 'AI-powered features like chatbots, mood tracking and personalised recommendations.',
    },
    {
      id: 'ordering',
      icon: 'cart',
      title: 'Food Ordering Systems',
      desc: 'Web-based ordering systems with student login, menu search and automated order processing.',
    },
  ],

  mern: [
    { id: 'frontend', name: 'HTML5 & CSS3', role: 'Frontend', desc: 'Responsive, user-friendly interfaces', color: '#61dafb' },
    { id: 'javascript', name: 'JavaScript', role: 'Interactivity', desc: 'Logic, DOM and dynamic behaviour', color: '#3b82f6' },
    { id: 'node', name: 'Node.js & Express.js', role: 'Backend', desc: 'Server-side logic & routing', color: '#a8b3cf' },
    { id: 'database', name: 'SQL & MySQL', role: 'Database', desc: 'Relational data storage', color: '#68a063' },
  ],

  about: {
    headline: [
      { text: 'I build scalable web' },
      { text: 'experiences with' },
      { text: 'modern technologies.', gradient: true },
    ],
    sub: 'My path from learning the web to designing responsive websites and AI-powered projects.',
    cards: [
      { icon: 'graduation', title: 'B.E. CSE Student', text: 'Pursuing my Bachelor of Computer Science and Engineering at Kongunadu College of Engineering and Technology, Trichy.' },
      { icon: 'code', title: 'Frontend Developer', text: 'Building responsive interfaces with HTML5, CSS3 and JavaScript.' },
      { icon: 'server', title: 'Backend Developer', text: 'Developing server-side logic with Node.js and Express.js, backed by SQL and MySQL.' },
      { icon: 'sparkles', title: 'Generative AI Enthusiast', text: 'Exploring Generative AI through real projects like MindMate AI, my emotional wellness companion.' },
    ],
    stats: [
      { value: '2', label: 'Real Projects' },
      { value: '1', label: 'Internship' },
      { value: 'AI', label: 'Generative AI' },
      { value: 'All', label: 'Responsive Websites' },
    ],
  },

  design: {
    accent: '#3b82f6',
    accent2: '#38bdf8',
    accent3: '#34d399',
    gradientFrom: '#2563eb',
    gradientMid: '#3b82f6',
    gradientTo: '#38bdf8',
    fontDisplay: "'Space Grotesk', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontBody: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontMono: "'JetBrains Mono', 'SF Mono', 'Cascadia Code', Consolas, monospace",
    logoText: 'nisha.',
    radius: 16,
  },
};

export const sectionKeys = Object.keys(defaultContent);
