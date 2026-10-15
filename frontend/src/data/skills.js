import {
  Braces,
  Palette,
  FileCode2,
  Coffee,
  Terminal,
  Server,
  Route,
  Boxes,
  Database,
  Layout,
  Lightbulb,
  Sparkles,
  Smartphone,
  Users,
  MessagesSquare,
  Puzzle,
  RefreshCw,
} from 'lucide-react';

// Skills grouped by category. Honest presentation only — no fake percentages.
// `level` (1–5) is a relative visual proficiency indicator rendered as a meter.
export const skillGroups = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Building responsive, accessible and modern user interfaces.',
    skills: [
      { name: 'HTML5', desc: 'Semantic document structure', icon: FileCode2, level: 5 },
      { name: 'CSS3', desc: 'Modern layouts and styling', icon: Palette, level: 4 },
      { name: 'JavaScript', desc: 'Interactivity and logic', icon: Braces, level: 4 },
      { name: 'Responsive Design', desc: 'Works on every screen', icon: Smartphone, level: 4 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'Designing server-side logic that powers real applications.',
    skills: [
      { name: 'Node.js', desc: 'JavaScript runtime for servers', icon: Server, level: 3 },
      { name: 'Express.js', desc: 'Web framework for Node.js', icon: Route, level: 3 },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    description: 'Modeling and persisting data with relational databases.',
    skills: [
      { name: 'SQL', desc: 'Querying relational data', icon: Database, level: 4 },
      { name: 'MySQL', desc: 'Database for real applications', icon: Boxes, level: 3 },
    ],
  },
  {
    id: 'programming',
    title: 'Programming',
    description: 'Core languages for logic and problem solving.',
    skills: [
      { name: 'Java', desc: 'OOP and problem solving', icon: Coffee, level: 3 },
      { name: 'Python', desc: 'Data analytics with Python — NPTEL', icon: Terminal, level: 3 },
    ],
  },
  {
    id: 'tools',
    title: 'AI & Design',
    description: 'Areas I love working in — AI and thoughtful design.',
    skills: [
      { name: 'Generative AI', desc: 'AI-powered features and chatbots', icon: Sparkles, level: 3 },
      { name: 'UI/UX Design', desc: 'User-friendly interface design', icon: Palette, level: 4 },
      { name: 'Web Designing', desc: 'Designing responsive websites', icon: Layout, level: 4 },
    ],
  },
  {
    id: 'concepts',
    title: 'Soft Skills',
    description: 'How I work with people and approach problems.',
    skills: [
      { name: 'Communication', desc: 'Sharing ideas clearly', icon: MessagesSquare, level: 4 },
      { name: 'Teamwork', desc: 'Collaborating with others', icon: Users, level: 4 },
      { name: 'Problem Solving', desc: 'Breaking problems down', icon: Puzzle, level: 4 },
      { name: 'Adaptability', desc: 'Adjusting to new tools', icon: RefreshCw, level: 4 },
    ],
  },
];

export const groupIcons = {
  frontend: Layout,
  backend: Server,
  database: Database,
  programming: Terminal,
  tools: Sparkles,
  concepts: Lightbulb,
};
