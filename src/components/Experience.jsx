import { Briefcase, Calendar, MapPin, ChevronRight, Award } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    id: 'nastp',
    role: 'Full Stack Developer & AI Engineer Intern',
    company: 'NASTP (National Aerospace Science & Technology Park)',
    location: 'Islamabad, Pakistan',
    period: '2024 â€“ 2025',
    type: 'Internship',
    color: 'cyan',
    achievements: [
      'Developed end-to-end MERN stack web applications with responsive UIs and RESTful APIs',
      'Built AI-powered features integrating OpenAI APIs, LangChain agents, and custom NLP pipelines',
      'Designed and deployed machine learning models for classification and prediction tasks',
      'Implemented RAG (Retrieval-Augmented Generation) pipelines for intelligent document Q&A',
      'Collaborated in an Agile team environment using Git, GitHub, and CI/CD workflows',
      'Containerized microservices using Docker for consistent deployment environments',
    ],
    techs: ['React', 'Node.js', 'MongoDB', 'Python', 'LangChain', 'OpenAI', 'Docker', 'FastAPI'],
  },
  {
    id: 'freelance',
    role: 'Freelance Full Stack Developer & AI Engineer',
    company: 'Self-Employed (Remote)',
    location: 'Remote',
    period: '2022 â€“ Present',
    type: 'Freelance',
    color: 'purple',
    achievements: [
      'Delivered projects for clients across e-commerce, healthcare, fintech, and education sectors',
      'Built web scraping systems using Selenium, BeautifulSoup, and Scrapy for data collection',
      'Developed RESTful & GraphQL APIs using Django REST Framework and FastAPI',
      'Created cross-platform mobile apps with Flutter for iOS and Android clients',
      'Fine-tuned transformer models (BERT, GPT) for custom NLP tasks',
      'Integrated payment gateways (Stripe, PayPal) and third-party APIs into web platforms',
      'Built real-time applications using WebSockets and Socket.io for live features',
    ],
    techs: ['MERN', 'Django', 'FastAPI', 'Flutter', 'Python', 'Selenium', 'PyTorch', 'AWS', 'Stripe'],
  },
];

export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="section-label">
          <Briefcase size={14} />
          Experience
        </div>
        <h2 className="section-title">Work Experience</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          Professional experience building intelligent applications across internships and freelance engagements.
        </p>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div className={`timeline-item timeline-${exp.color}`} key={exp.id}>
              {/* Timeline marker */}
              <div className="timeline-marker">
                <div className={`marker-dot dot-${exp.color}`}>
                  <Briefcase size={14} />
                </div>
                {i < experiences.length - 1 && <div className="timeline-line" />}
              </div>

              {/* Content */}
              <div className="timeline-content card">
                {/* Header */}
                <div className="exp-header">
                  <div>
                    <span className={`exp-type-badge badge-${exp.color}`}>{exp.type}</span>
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company">
                      <Award size={15} />
                      <strong>{exp.company}</strong>
                    </div>
                    <div className="exp-meta">
                      <span className="exp-meta-item">
                        <Calendar size={13} />
                        {exp.period}
                      </span>
                      <span className="exp-meta-item">
                        <MapPin size={13} />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <ul className="exp-achievements">
                  {exp.achievements.map((item, j) => (
                    <li key={j}>
                      <ChevronRight size={14} className={`chevron-${exp.color}`} />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="exp-techs">
                  {exp.techs.map(tech => (
                    <span className={`tag tag-${exp.color === 'cyan' ? 'cyan' : 'primary'}`} key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

