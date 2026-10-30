export const DEFAULT_THEME = 'dark-space';
export const THEME_STORAGE_KEY = 'portfolio-theme';

export function readThemePreference(availableThemes) {
  try {
    const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
    return Object.hasOwn(availableThemes, saved) ? saved : DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
}

export function saveThemePreference(themeKey) {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, themeKey);
  } catch {
    // Theme changes still work when the browser disables persistent storage.
  }
}
