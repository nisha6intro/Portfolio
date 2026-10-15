// Only real projects with verified URLs.
// MindMate AI is the featured project; the Food Court System is the second real project.
export const projects = [
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
    demo: null, // No confirmed live URL — kept honest.
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
    github: null, // No public repository confirmed for this project — kept honest.
    demo: null, // No confirmed live URL — kept honest.
  },
];

export const resumeNote =
  'Add a resume file to frontend/public and set profile.resume in src/config.js to enable the download button.';
