import { GraduationCap, Code2, Server, Sparkles } from 'lucide-react';
import { profile as defaultProfile } from '../config';
import { SectionIndex } from './SectionIndex';
import { AnimatedHeadline } from './AnimatedHeadline';
import { Reveal } from './Reveal';
import { Terminal } from './Terminal';
import { useContent } from '../content/ContentContext';
import { aboutIcon } from '../content/iconMap';

const defaultAboutCards = [
  {
    icon: GraduationCap,
    title: 'B.E. CSE Student',
    text: 'Pursuing my Bachelor of Computer Science and Engineering at Kongunadu College of Engineering and Technology, Trichy.',
  },
  {
    icon: Code2,
    title: 'Frontend Developer',
    text: 'Building responsive interfaces with HTML5, CSS3 and JavaScript.',
  },
  {
    icon: Server,
    title: 'Backend Developer',
    text: 'Developing server-side logic with Node.js and Express.js, backed by SQL and MySQL.',
  },
  {
    icon: Sparkles,
    title: 'Generative AI Enthusiast',
    text: 'Exploring Generative AI through real projects like MindMate AI, my emotional wellness companion.',
  },
];

const defaultStats = [
  { value: '2', label: 'Real Projects' },
  { value: '1', label: 'Internship' },
  { value: 'AI', label: 'Generative AI' },
  { value: 'All', label: 'Responsive Websites' },
];

const defaultHeadline = [
  { text: 'I build scalable web' },
  { text: 'experiences with' },
  { text: 'modern technologies.', gradient: true },
];

const defaultSub = 'My path from learning the web to designing responsive websites and AI-powered projects.';

export function About() {
  const { content } = useContent();
  const profile = content.profile || defaultProfile;
  const about = content.about || {};
  const cards = about.cards || defaultAboutCards;
  const stats = about.stats || defaultStats;
  const headline = about.headline || defaultHeadline;
  const sub = about.sub || defaultSub;

  const aboutScript = [
    {
      id: 'profile',
      command: 'nisha.profile',
      output: [
        `name: "${profile.shortName}"`,
        `role: "${profile.role}"`,
        `focus: "Web design, development & Generative AI"`,
        `education: "${profile.education.short}"`,
        `stack: [html, css, javascript, node, express]`,
        `projects: [${Array.isArray(content.projects) ? content.projects.map((p) => p.id).join(', ') : 'mindmate-ai, food-court'}]`,
      ],
    },
    {
      id: 'status',
      command: 'status',
      output: [`"${profile.availability}"`],
    },
  ];

  return (
    <section id="about" aria-label="About me">
      <div className="container">
        <SectionIndex number="01" kicker="About Me" />

        <AnimatedHeadline lines={headline} />
        <p className="section-sub about-sub">{sub}</p>

        <div className="about-grid">
          <Reveal>
            <div className="about-visual">
              <Terminal script={aboutScript} title="nisha@about: ~" typingDelay={30} outputDelay={150} />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="about-body">
                {profile.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <div className="about-stats">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={(i % 4) + 1}>
                  <div className="card stat-card">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="about-cards">
              {cards.map((card, i) => {
                const Icon = typeof card.icon === 'string' ? aboutIcon(card.icon) : card.icon;
                return (
                  <Reveal key={card.title} delay={(i % 2) + 1}>
                    <div className="card about-card">
                      <div className="about-icon">
                        <Icon aria-hidden="true" />
                      </div>
                      <h3>{card.title}</h3>
                      <p>{card.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}