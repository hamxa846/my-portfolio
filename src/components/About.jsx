import { User, MapPin, Mail, Phone, Globe, Zap, Target, Heart } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './About.css';
import profilePic from '../assets/Hamza.png';

const highlights = [
  {
    icon: <Zap size={22} />,
    title: 'AI-First Approach',
    description: 'I build intelligent systems that leverage ML, NLP, and deep learning to solve real-world problems.',
    color: 'cyan',
  },
  {
    icon: <Target size={22} />,
    title: 'Full Stack Mastery',
    description: 'End-to-end web development with React, Node.js, Django, and FastAPI, from UI to database.',
    color: 'purple',
  },
  {
    icon: <Heart size={22} />,
    title: 'Passion for Quality',
    description: 'I care deeply about clean code, thoughtful UX, and delivering results that exceed expectations.',
    color: 'pink',
  },
];

const contactInfo = [
  { icon: <MapPin size={16} />, label: 'Islamabad, Pakistan' },
  { icon: <Mail size={16} />, label: 'hk202502@gmail.com', href: 'mailto:hk202502@gmail.com' },
  { icon: <Phone size={16} />, label: '+92 347 5923031', href: 'tel:+923475923031' },
  { icon: <FaGithub size={16} />, label: 'hamxa846', href: 'https://github.com/hamxa846' },
];

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-header">
          <div className="section-label">
            <User size={14} />
            About Me
          </div>
          <h2 className="section-title">Who Am I?</h2>
          <div className="section-divider" />
        </div>

        <div className="about-grid">
          {/* Left: Avatar + Contact */}
          <div className="about-left">
            <div className="avatar-wrapper">
              <div className="avatar-ring" />
              <div className="avatar-inner">
                <img
                  src={profilePic}
                  alt="Hamza Tariq"
                  className="avatar-img"
                  width={1023}
                  height={1537}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="avatar-badge">
                <Globe size={14} />
                <span>Open to Work</span>
              </div>
            </div>

            <div className="contact-card card">
              <h3 className="contact-card-title">Contact Info</h3>
              <ul className="contact-list">
                {contactInfo.map(item => (
                  <li key={item.label} className="contact-item">
                    <span className="contact-icon">{item.icon}</span>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="contact-link">
                        {item.label}
                      </a>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Bio + Highlights */}
          <div className="about-right">
            <div className="about-bio">
              <p>
                I'm <strong>Hamza Tariq</strong>, a versatile software engineer based in Islamabad, Pakistan,
                with over <strong>3 years of experience</strong> spanning both AI/ML engineering and full-stack
                web development. I hold a <strong>Bachelor of Science in Computer Science</strong> from
                Air University, Islamabad.
              </p>
              <p>
                My unique dual expertise allows me to build <strong>intelligent, end-to-end applications</strong>,
                from designing React-powered frontends to deploying machine learning models in production.
                I'm proficient in the entire development lifecycle: requirements gathering, architecture design,
                implementation, and deployment on cloud platforms.
              </p>
              <p>
                I've worked as a <strong>Full Stack Developer & AI Engineer Intern at NASTP</strong> and
                as a <strong>Freelance Developer</strong>, delivering web scraping tools, NLP pipelines,
                MERN stack applications, and cross-platform mobile apps for clients globally.
              </p>
              <p>
                I'm currently seeking new opportunities where I can bring both my AI and full-stack
                capabilities to build products that make a real difference.
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="highlights-grid">
              {highlights.map(item => (
                <div className={`highlight-card highlight-${item.color}`} key={item.title}>
                  <div className={`highlight-icon icon-${item.color}`}>{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

