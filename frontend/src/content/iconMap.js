import {
  Braces,
  Palette,
  Atom,
  FileCode2,
  Coffee,
  Terminal,
  Server,
  Route,
  Network,
  KeyRound,
  Database,
  Boxes,
  GitBranch,
  Github,
  CodeXml,
  FlaskConical,
  Package,
  Lightbulb,
  DatabaseZap,
  ShieldCheck,
  Rows3,
  Smartphone,
  Layout,
  ServerCog,
  Wrench,
  MonitorSmartphone,
  Layers,
  Plug2,
  ShoppingCart,
  GraduationCap,
  Code2,
  Sparkles,
  FileJson2,
  MessagesSquare,
  Users,
  Puzzle,
  RefreshCw,
} from 'lucide-react';

export const groupIcons = {
  frontend: Layout,
  backend: ServerCog,
  database: Database,
  programming: Terminal,
  tools: Sparkles,
  concepts: Lightbulb,
};

const skillIconMap = {
  HTML: FileCode2,
  HTML5: FileCode2,
  CSS: Palette,
  CSS3: Palette,
  JavaScript: Braces,
  'React.js': Atom,
  'Node.js': Server,
  'Express.js': Route,
  'REST APIs': Network,
  'JWT Auth': KeyRound,
  MongoDB: Database,
  Mongoose: Boxes,
  SQL: Database,
  MySQL: Boxes,
  Python: Terminal,
  Java: Coffee,
  Git: GitBranch,
  GitHub: Github,
  'VS Code': CodeXml,
  Postman: FlaskConical,
  npm: Package,
  CRUD: DatabaseZap,
  Auth: ShieldCheck,
  Pagination: Rows3,
  Responsive: Smartphone,
  'Responsive Design': Smartphone,
  'Generative AI': Sparkles,
  'UI/UX Design': Palette,
  'Web Designing': Layout,
  Communication: MessagesSquare,
  Teamwork: Users,
  'Problem Solving': Puzzle,
  Adaptability: RefreshCw,
};

export function skillIcon(name) {
  return skillIconMap[name] || Code2;
}

export const buildIcons = {
  monitor: MonitorSmartphone,
  layers: Layers,
  plug: Plug2,
  cart: ShoppingCart,
};

export function buildIcon(key) {
  return buildIcons[key] || Layers;
}

export const mernIcons = {
  react: Atom,
  node: Server,
  express: Route,
  mongo: Database,
  frontend: FileCode2,
  javascript: Braces,
  database: Database,
};

export function mernIcon(id) {
  return mernIcons[id] || Atom;
}

export const aboutIcons = {
  graduation: GraduationCap,
  code: Code2,
  server: Server,
  sparkles: Sparkles,
};

export function aboutIcon(key) {
  return aboutIcons[key] || FileJson2;
}
