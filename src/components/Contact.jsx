import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import ContactForm from './ContactForm';
import './Contact.css';

const contactCards = [
  {
    icon: <Mail size={22} />,
    label: 'Email',
    value: 'hk202502@gmail.com',
    href: 'mailto:hk202502@gmail.com',
    color: 'cyan',
    id: 'contact-email-card',
  },
  {
    icon: <Phone size={22} />,
    label: 'Phone',
    value: '+92 347 5923031',
    href: 'tel:+923475923031',
    color: 'purple',
    id: 'contact-phone-card',
  },
  {
    icon: <FaGithub size={22} />,
    label: 'GitHub',
    value: 'github.com/hamxa846',
    href: 'https://github.com/hamxa846',
    color: 'green',
    id: 'contact-github-card',
  },
];

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="orb orb-2" style={{ opacity: 0.08 }} />

      <div className="container">
        <div className="section-label">
          <MessageCircle size={14} />
          Contact
        </div>
        <h2 className="section-title">Let's Work Together</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          Whether you have a project in mind, an opportunity to discuss, or just want to say hello,
          I'm always open to a conversation. Reach out and let's build something great.
        </p>

        <div className="contact-layout">
          {/* Contact Cards */}
          <div className="contact-main">
          <div className="contact-cards-grid">
            {contactCards.map(card => (
              <a
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`contact-card-item card contact-card-${card.color}`}
                key={card.label}
                id={card.id}
              >
                <div className={`cc-icon cc-icon-${card.color}`}>{card.icon}</div>
                <div className="cc-info">
                  <span className="cc-label">{card.label}</span>
                  <span className="cc-value">{card.value}</span>
                </div>
              </a>
            ))}
          </div>

          <ContactForm />
          </div>

          {/* Availability Panel */}
          <div className="availability-panel card">
            <div className="avail-header">
              <span className="avail-dot" />
              <span>Currently Available</span>
            </div>
            <h3>Open to Opportunities</h3>
            <p>
              I'm actively looking for <strong>full-time roles</strong> and <strong>freelance projects</strong> in
              AI Engineering, Full Stack Development, or roles combining both. Remote and on-site positions welcome.
            </p>

            <div className="avail-roles">
              {[
                'AI / ML Engineer',
                'Full Stack Developer',
                'MERN Stack Developer',
                'Backend Engineer (Python)',
                'LLM / GenAI Developer',
                'Software Engineer',
              ].map(role => (
                <span className="tag tag-primary" key={role}>{role}</span>
              ))}
            </div>

            <div className="avail-location">
              <MapPin size={15} />
              <span>Islamabad, Pakistan | Remote Worldwide</span>
            </div>

            <a
              href="#message-form"
              className="btn btn-primary avail-cta"
              id="contact-hire-btn"
              onClick={event => {
                event.preventDefault();
                document.getElementById('message-form')?.scrollIntoView({ block: 'start' });
                document.getElementById('message-name')?.focus({ preventScroll: true });
              }}
            >
              <Send size={16} />
              Send Me a Message
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-logo">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-name">HT</span>
            <span className="logo-bracket">/&gt;</span>
          </div>
          <p className="footer-copy">
             &copy; {new Date().getFullYear()} Hamza Tariq. Built with passion &amp; hard work.
          </p>
          <div className="footer-links">
            <a href="https://github.com/hamxa846" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="GitHub">
              <FaGithub size={18} />
            </a>
            <a href="mailto:hk202502@gmail.com" className="footer-icon" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}

