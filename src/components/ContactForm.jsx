import { useEffect, useRef, useState } from 'react';
import { Send } from 'lucide-react';
import { contactEmail } from '../data/contact.js';
import { sendContactMessage, validateContact } from '../contactForm.js';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState('');
  const requestRef = useRef(null);

  useEffect(() => () => requestRef.current?.abort(), []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (requestRef.current) return;
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    const validation = validateContact(values);
    setErrors(validation);
    if (Object.keys(validation).length) {
      setStatus('error');
      setFeedback('Please check the highlighted fields.');
      form.elements.namedItem(Object.keys(validation)[0]).focus();
      return;
    }

    const controller = new AbortController();
    requestRef.current = controller;
    const timeout = window.setTimeout(() => controller.abort('timeout'), 15000);
    setStatus('sending');
    setFeedback('Sending your message...');
    try {
      await sendContactMessage(values, {
        signal: controller.signal,
        pageUrl: `${window.location.origin}${window.location.pathname}#contact`,
      });
      if (controller.signal.aborted) return;
      setStatus('success');
      setFeedback('Your message has been submitted. Thanks for getting in touch!');
      form.reset();
    } catch {
      if (controller.signal.aborted && controller.signal.reason !== 'timeout') return;
      setStatus('error');
      setFeedback(controller.signal.reason === 'timeout'
        ? 'The request timed out. Your message is still here; please try again or email me directly.'
        : 'Your message could not be submitted. Please try again or email me directly.');
    } finally {
      window.clearTimeout(timeout);
      requestRef.current = null;
    }
  }

  return (
    <form className="message-form card" id="message-form" onSubmit={handleSubmit} aria-labelledby="message-form-title" aria-busy={status === 'sending'}>
      <h3 id="message-form-title">Send a message</h3>
      <p>Tell me about your project or opportunity. I’ll reply to the email you provide.</p>
      <div className="form-fields">
        <div className="form-field">
          <label htmlFor="message-name">Name</label>
          <input id="message-name" name="name" autoComplete="name" required maxLength={100} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'message-name-error' : undefined} readOnly={status === 'sending'} />
          {errors.name && <span className="field-error" id="message-name-error">{errors.name}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="message-email">Email</label>
          <input id="message-email" name="email" type="email" autoComplete="email" required maxLength={254} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'message-email-error' : undefined} readOnly={status === 'sending'} />
          {errors.email && <span className="field-error" id="message-email-error">{errors.email}</span>}
        </div>
        <div className="form-field form-field-wide">
          <label htmlFor="message-body">Message</label>
          <textarea id="message-body" name="message" rows={5} required minLength={10} maxLength={5000} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-body-error' : undefined} readOnly={status === 'sending'} />
          {errors.message && <span className="field-error" id="message-body-error">{errors.message}</span>}
        </div>
      </div>
      <div className="form-honeypot" aria-hidden="true">
        <label htmlFor="message-website">Leave this field empty</label>
        <input id="message-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="form-actions">
        <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
          <Send size={16} aria-hidden="true" />
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
        <a className="form-email-link" href={`mailto:${contactEmail}`}>Or email me directly</a>
      </div>
      <p className={`form-feedback feedback-${status}`} role="status" aria-live="polite" aria-atomic="true">{feedback}</p>
      <p className="form-note">Your name, email, and message are sent through <a href="https://formsubmit.co/" target="_blank" rel="noopener noreferrer">FormSubmit</a> to my inbox.</p>
    </form>
  );
}
