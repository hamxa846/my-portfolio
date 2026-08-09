import { GraduationCap, Calendar, MapPin, BookOpen, Award } from 'lucide-react';
import './Education.css';

const education = [
  {
    id: 'air-university',
    degree: 'Bachelor of Science in Artificial Intelligence',
    institution: 'Air University',
    location: 'Islamabad, Pakistan',
    period: '2021 - 2025',
    grade: 'CGPA: 3.2 / 4.0',
    color: 'cyan',
    description:
      'Studied core AI/ML concepts including machine learning, deep learning, natural language processing, computer vision, and data science. Complemented with strong software engineering foundations in algorithms, data structures, and full-stack web development.',
    courses: [
      'Machine Learning', 'Deep Learning', 'Natural Language Processing',
      'Computer Vision', 'Data Science & Analytics', 'Algorithms & DS',
      'Software Engineering', 'Database Systems', 'Cloud Computing',
    ],
  },
  {
    id: 'fazaia',
    degree: 'Intermediate (Pre-Engineering)',
    institution: 'Fazaia Degree College',
    location: 'Islamabad, Pakistan',
    period: '2019 - 2021',
    grade: 'A Grade',
    color: 'purple',
    description:
      'Completed intermediate studies with a focus on mathematics and physics, building the analytical foundation for computer science and engineering.',
    courses: [
      'Mathematics', 'Physics', 'Computer Science',
    ],
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
              <div className={`edu-icon-wrap icon-bg-${edu.color}`}>
                <GraduationCap size={28} />
              </div>
              <div className="edu-body">
                <div className="edu-meta">
                  <span className={`edu-grade grade-${edu.color}`}>
                    <Award size={13} />
                    {edu.grade}
                  </span>
                  <span className="edu-period">
                    <Calendar size={13} />
                    {edu.period}
                  </span>
                </div>
                <h3 className="edu-degree">{edu.degree}</h3>
                <div className="edu-institution">
                  <Award size={15} />
                  <strong>{edu.institution}</strong>
                </div>
                <div className="edu-location">
                  <MapPin size={13} />
                  {edu.location}
                </div>
                <p className="edu-description">{edu.description}</p>
                <div className="edu-courses">
                  <BookOpen size={14} />
                  <span className="courses-label">Key Courses:</span>
                  <div className="courses-tags">
                    {edu.courses.map(c => (
                      <span className="tag tag-primary" key={c}>{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
