import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container navbar-inner">
        <a href="#hero" className="nav-logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">HT</span>
          <span className="logo-bracket">/&gt;</span>
        </a>

        <ul className="nav-links">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn btn-primary nav-cta">
          Hire Me
        </a>

        <button
          className="nav-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a href="#contact" className="btn btn-primary" onClick={() => setMobileOpen(false)}>
          Hire Me
        </a>
      </div>
    </nav>
  );
}

