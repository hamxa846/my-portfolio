# Hamza Tariq - Personal Portfolio

A React and Vite portfolio with responsive layouts, selectable themes, and a direct contact form.

## Development

Use Node.js 22.12 or later:

```sh
npm ci
npm run dev
npm run lint
npm test
npm run build
```

On Windows, use `npm.cmd` if PowerShell blocks `npm.ps1`. The production build is written to `dist/`.

## Edit your tech stack

Update `src/data/skills.js`, commit your changes, and redeploy. Each skill has a `name` and a `proficiency`:

```js
{ name: 'React Native', proficiency: 'Intermediate' }
```

Available levels: `Beginner`, `Intermediate`, `Advanced`, and `Expert`. Leave `proficiency: null` to show the skill without a rating. Initial ratings are unset so the portfolio does not invent expertise. Add or remove skills and categories in the same file; unfamiliar skill names receive a generic code icon.

## Contact form activation

The contact form submits directly to [FormSubmit](https://formsubmit.co/ajax-documentation), which forwards messages to `hk202502@gmail.com`. The recipient and endpoint are in `src/data/contact.js`. No email credentials are included in the browser bundle.

1. Submit a message from the deployed website.
2. Open the activation email in the recipient inbox (check spam too).
3. Click the activation link, then submit another message to verify delivery.

[FormSubmit requires this one-time confirmation](https://formsubmit.co/help) before it forwards submissions. React reports successful submission, not guaranteed inbox delivery. The form includes validation, a honeypot, duplicate-submit protection, a timeout, and retry feedback that preserves the draft. Visitors can also use the direct email link.

Automated tests use mocked requests and never send real emails. They cover validation, service failures, request cancellation, and unavailable browser storage. Desktop/mobile browser checks should include menu and theme keyboard access, portrait framing, and contact success/error states.
