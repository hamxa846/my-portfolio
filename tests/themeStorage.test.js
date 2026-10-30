import assert from 'node:assert/strict';
import { afterEach, test } from 'node:test';
import { DEFAULT_THEME, THEME_STORAGE_KEY, readThemePreference, saveThemePreference } from '../src/themeStorage.js';

const themes = { 'dark-space': {}, 'mint-breeze': {} };
afterEach(() => { delete globalThis.window; });

test('uses valid saved preferences and falls back for missing, unknown, or inherited keys', () => {
  for (const saved of ['mint-breeze', null, '', 'removed-theme', 'toString', '__proto__']) {
    globalThis.window = { localStorage: { getItem: () => saved } };
    assert.equal(readThemePreference(themes), saved === 'mint-breeze' ? saved : DEFAULT_THEME);
  }
});

test('a denied storage getter cannot prevent rendering or changing themes', () => {
  globalThis.window = Object.defineProperty({}, 'localStorage', { get() { throw new Error('Storage denied'); } });
  assert.equal(readThemePreference(themes), DEFAULT_THEME);
  assert.doesNotThrow(() => saveThemePreference('mint-breeze'));
});

test('failed storage reads and writes are safely ignored', () => {
  globalThis.window = { localStorage: {
    getItem() { throw new Error('Read denied'); },
    setItem() { throw new Error('Quota exceeded'); },
  } };
  assert.equal(readThemePreference(themes), DEFAULT_THEME);
  assert.doesNotThrow(() => saveThemePreference('mint-breeze'));
});

test('persists the selected theme under its preference key', () => {
  let entry;
  globalThis.window = { localStorage: { setItem: (...args) => { entry = args; } } };
  saveThemePreference('mint-breeze');
  assert.deepEqual(entry, [THEME_STORAGE_KEY, 'mint-breeze']);
});
