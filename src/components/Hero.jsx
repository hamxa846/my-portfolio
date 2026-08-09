import { useState, useEffect } from 'react';
import { ArrowDown, Sparkles, Code2, Brain, Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Hero.css';

const TYPING_ROLES = [
  'AI Engineer',
  'Full Stack Developer',
  'MERN Stack Developer',
  'Machine Learning Engineer',
  'Python Developer',
];

export default function Hero() {
  const [displayed, setDisplayed] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TYPING_ROLES[roleIdx];
    let timeout;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), 80);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), 45);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setRoleIdx(i => (i + 1) % TYPING_ROLES.length);
    }

    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIdx]);

  return (
    <section className="hero" id="hero">
      {/* Background orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Grid pattern overlay */}
      <div className="hero-grid" />

      <div className="container hero-content">
        {/* Badge */}
        <div className="hero-badge">
          <Sparkles size={14} />
          <span>Available for Opportunities</span>
        </div>

        {/* Main heading */}
        <h1 className="hero-name">
          Hi, I'm <span className="gradient-text-hero">Hamza Tariq</span>
        </h1>

        {/* Typing effect */}
        <div className="hero-role">
          <Code2 size={20} className="role-icon" />
          <span className="typed-text">{displayed}</span>
          <span className="cursor" aria-hidden="true">|</span>
        </div>

        <p className="hero-description">
          Passionate developer with <strong>3+ years</strong> of experience building intelligent,
          scalable applications. I blend AI/ML expertise with full-stack development to craft
          solutions that are both smart and beautiful.
        </p>

        {/* CTA Buttons */}
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            <Brain size={18} />
            View My Work
          </a>
          <a
            href="mailto:hk202502@gmail.com"
            className="btn btn-outline"
          >
            <Mail size={18} />
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="hero-socials">
          <a
            href="https://github.com/hamxa846"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
            id="hero-github"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/hamzakhan-361964248"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
            id="hero-linkedin"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:hk202502@gmail.com"
            className="social-link"
            aria-label="Email"
            id="hero-email"
          >
            <Mail size={20} />
          </a>
          <a
            href="tel:+923475923031"
            className="social-link"
            aria-label="Phone"
            id="hero-phone"
          >
            <Phone size={20} />
          </a>
        </div>

        {/* Stats row */}
        <div className="hero-stats">
          {[
            { value: '3+', label: 'Years Experience' },
            { value: '5+', label: 'Projects Built' },
            { value: '2', label: 'Expert Domains' },
            { value: '15+', label: 'Technologies' },
          ].map(stat => (
            <div className="hero-stat" key={stat.label}>
              <span className="stat-value gradient-text">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="scroll-indicator" aria-label="Scroll down">
        <ArrowDown size={20} />
      </a>
    </section>
  );
}

