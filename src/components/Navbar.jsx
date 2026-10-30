import { useState, useEffect, useRef } from 'react';
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
  const mobileToggleRef = useRef(null);

  useEffect(() => {
    const sections = navLinks.map(link => document.getElementById(link.href.slice(1))).filter(Boolean);
    let frame = 0;
    const updateScroll = () => {
      frame = 0;
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);
      let nextSection = '';
      for (let index = sections.length - 1; index >= 0; index--) {
        if (sections[index].getBoundingClientRect().top <= 120) {
          nextSection = sections[index].id;
          break;
        }
      }
      if (scrollTop > 0 && Math.ceil(scrollTop + window.innerHeight) >= document.documentElement.scrollHeight - 1) {
        nextSection = sections.at(-1)?.id || '';
      }
      setActiveSection(nextSection);
    };
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScroll);
    };
    updateScroll();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 901px)');
    const closeOnDesktop = () => {
      if (desktop.matches) setMobileOpen(false);
    };
    desktop.addEventListener('change', closeOnDesktop);
    return () => desktop.removeEventListener('change', closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        mobileToggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [mobileOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar" aria-label="Main navigation">
      <div className="container navbar-inner">
        <a href="#hero" className="nav-logo" aria-label="Hamza Tariq, home">
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
                aria-current={activeSection === link.href.slice(1) ? 'location' : undefined}
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
          ref={mobileToggleRef}
          type="button"
          className="nav-mobile-toggle"
          onClick={() => setMobileOpen(isOpen => !isOpen)}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`} id="mobile-navigation" hidden={!mobileOpen}>
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-link"
            aria-current={activeSection === link.href.slice(1) ? 'location' : undefined}
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

