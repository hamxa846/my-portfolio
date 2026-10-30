import assert from 'node:assert/strict';
import { test } from 'node:test';
import { sendContactMessage, validateContact } from '../src/contactForm.js';

const message = { name: ' Visitor ', email: ' visitor@example.com ', message: ' A project enquiry for your portfolio. ', website: '' };

test('accepts normal input and rejects blank, malformed, or oversized fields', () => {
  assert.deepEqual(validateContact(message), {});
  assert.deepEqual(Object.keys(validateContact({ name: ' ', email: 'invalid', message: 'short' })), ['name', 'email', 'message']);
  assert.deepEqual(Object.keys(validateContact({ name: 'x'.repeat(101), email: `${'x'.repeat(250)}@x.com`, message: 'x'.repeat(5001) })), ['name', 'email', 'message']);
});

test('sends trimmed fields, reply address, and page URL to the message service', async () => {
  const controller = new AbortController();
  let calls = 0;
  await sendContactMessage(message, {
    signal: controller.signal,
    pageUrl: 'https://portfolio.example/#contact',
    fetchImpl: async (url, options) => {
      calls++;
      assert.equal(new URL(url).hostname, 'formsubmit.co');
      assert.equal(options.method, 'POST');
      assert.equal(options.signal, controller.signal);
      const body = JSON.parse(options.body);
      assert.equal(body.name, 'Visitor');
      assert.equal(body.email, 'visitor@example.com');
      assert.equal(body._replyto, 'visitor@example.com');
      assert.equal(body.message, message.message.trim());
      assert.equal(body._url, 'https://portfolio.example/#contact');
      return { ok: true, json: async () => ({ success: 'true' }) };
    },
  });
  assert.equal(calls, 1);
});

test('accepts a boolean success response', async () => {
  await sendContactMessage(message, { fetchImpl: async () => ({ ok: true, json: async () => ({ success: true }) }) });
});

test('does not send invalid or honeypot-filled submissions', async () => {
  const fetchImpl = async () => assert.fail('No network request should be made');
  await assert.rejects(sendContactMessage({ ...message, message: ' ' }, { fetchImpl }));
  await sendContactMessage({ ...message, website: 'spam.example' }, { fetchImpl });
});

test('rejects failed HTTP responses, service errors, and malformed responses', async () => {
  for (const result of [
    { ok: false },
    { ok: true, json: async () => ({ success: 'false' }) },
    { ok: true, json: async () => ({}) },
    { ok: true, json: async () => { throw new SyntaxError('Invalid JSON'); } },
  ]) {
    await assert.rejects(sendContactMessage(message, { fetchImpl: async () => result }));
  }
});

test('propagates network failures and aborted requests for retry feedback', async () => {
  const error = new DOMException('Aborted', 'AbortError');
  await assert.rejects(sendContactMessage(message, { fetchImpl: async () => { throw error; } }), error);
});
