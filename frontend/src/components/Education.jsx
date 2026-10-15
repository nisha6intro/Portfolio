import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { profile as defaultProfile } from '../config';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { useContent } from '../content/ContentContext';

export function Education() {
  const { content } = useContent();
  const edu = (content.profile || defaultProfile).education;
  const previous = edu.previous || [];
  const interests = edu.interests || [];
  const courses = edu.courses || [];

  return (
    <section id="education" aria-label="Education">
      <div className="container">
        <SectionHeading number={7} kicker="Education" title="Academic background" />

        <Reveal>
          <div className="card education-card">
            <div className="education-icon">
              <GraduationCap aria-hidden="true" />
            </div>
            <div>
              <div className="edu-tags">
                <span className="edu-tag">Currently Pursuing</span>
                <span className="edu-tag chip">{edu.years}</span>
              </div>
              <h3>{edu.degree}</h3>
              <p className="edu-institution">{edu.institution}</p>
              <p className="edu-location">
                <MapPin size={14} aria-hidden="true" />
                {edu.location}
              </p>
              <div className="edu-facts">
                <span className="chip">
                  <Calendar size={13} aria-hidden="true" />
                  {edu.status}
                </span>
                <span className="chip">CGPA: {edu.cgpa}</span>
              </div>
              <p className="edu-note">
                Building my foundation in computer science while sharpening my skills in web
                design, development and Generative AI.
              </p>
            </div>
          </div>
        </Reveal>

        {previous.length > 0 && (
          <div className="edu-prior">
            {previous.map((item, i) => (
              <Reveal key={item.degree} delay={(i % 2) + 1}>
                <div className="card edu-prior-card">
                  <div className="edu-prior-head">
                    <span className="edu-prior-title">{item.degree}</span>
                    <span className="chip">{item.years}</span>
                  </div>
                  <p className="edu-prior-school">{item.institution}</p>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {(interests.length > 0 || courses.length > 0) && (
          <div className="edu-extra">
            {interests.length > 0 && (
              <Reveal>
                <div className="card edu-extra-card">
                  <h3 className="edu-extra-title">Areas of Interest</h3>
                  <div className="edu-chip-row">
                    {interests.map((item) => (
                      <span className="chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            {courses.length > 0 && (
              <Reveal delay={2}>
                <div className="card edu-extra-card">
                  <h3 className="edu-extra-title">Value Added Courses</h3>
                  <div className="edu-chip-row">
                    {courses.map((item) => (
                      <span className="chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
