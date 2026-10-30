import { contactEndpoint } from './data/contact.js';

export function validateContact(values) {
  const errors = {};
  if (!values.name.trim() || values.name.trim().length > 100) {
    errors.name = 'Enter your name (up to 100 characters).';
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()) || values.email.length > 254) {
    errors.email = 'Enter a valid email address.';
  }
  if (values.message.trim().length < 10 || values.message.trim().length > 5000) {
    errors.message = 'Enter a message between 10 and 5,000 characters.';
  }
  return errors;
}

export async function sendContactMessage(values, { signal, pageUrl, fetchImpl = fetch } = {}) {
  if (Object.keys(validateContact(values)).length) {
    throw new Error('Please check your name, email, and message.');
  }
  if (values.website) return;

  const response = await fetchImpl(contactEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    signal,
    body: JSON.stringify({
      name: values.name.trim(),
      email: values.email.trim(),
      message: values.message.trim(),
      _replyto: values.email.trim(),
      _subject: 'New portfolio message',
      _honey: values.website || '',
      _template: 'table',
      ...(pageUrl ? { _url: pageUrl } : {}),
    }),
  });
  if (!response.ok) throw new Error('The message service is unavailable. Please try again.');
  const result = await response.json();
  if (result.success !== true && result.success !== 'true') {
    throw new Error('Your message could not be submitted. Please try again.');
  }
}
