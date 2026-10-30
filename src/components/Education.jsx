import { GraduationCap, Calendar, MapPin, School } from 'lucide-react';
import './Education.css';

const education = [
  {
    id: 'air-university',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Air University',
    location: 'Islamabad, Pakistan',
    period: '2022 - 2026',
    color: 'cyan',
  },
];

export default function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="container">
        <div className="section-label">
          <GraduationCap size={14} />
          Education
        </div>
        <h2 className="section-title">Academic Background</h2>
        <div className="section-divider" />

        <div className="education-cards-full">
          {education.map(edu => (
            <div className={`edu-card card edu-${edu.color}`} key={edu.id}>
              <div className={`edu-icon-wrap icon-bg-${edu.color}`} aria-hidden="true">
                <GraduationCap size={28} />
              </div>
              <div className="edu-body">
                <div className="edu-meta">
                  <span className="edu-period">
                    <Calendar size={13} aria-hidden="true" />
                    {edu.period}
                  </span>
                </div>
                <h3 className="edu-degree">{edu.degree}</h3>
                <div className="edu-institution">
                  <School size={15} aria-hidden="true" />
                  <strong>{edu.institution}</strong>
                </div>
                <div className="edu-location">
                  <MapPin size={13} aria-hidden="true" />
                  {edu.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
