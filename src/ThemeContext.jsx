import { useState, useLayoutEffect } from 'react';
import { ThemeContext } from './themeContextStore';
import { themes } from './themes';
import { readThemePreference, saveThemePreference } from './themeStorage';

const themeFonts = {
  'crimson-elite': 'Inter:wght@400;500;600;700;800;900',
  'ocean-depth': 'Outfit:wght@400;500;600;700;800;900',
  'emerald-luxury': 'Playfair+Display:wght@400;500;600;700;800;900',
  cyberpunk: 'Orbitron:wght@400;500;600;700;800;900',
  'corporate-light': 'Roboto:wght@400;500;600;700;800;900',
  'minimal-nord': 'Fira+Sans:wght@400;500;600;700;800;900',
  'mint-breeze': 'Quicksand:wght@400;500;600;700',
};

function loadThemeFont(themeKey) {
  const family = themeFonts[themeKey];
  if (!family || document.getElementById(`theme-font-${themeKey}`)) return;
  const stylesheet = document.createElement('link');
  stylesheet.id = `theme-font-${themeKey}`;
  stylesheet.rel = 'stylesheet';
  stylesheet.href = `https://fonts.googleapis.com/css2?family=${family}&display=swap`;
  document.head.append(stylesheet);
}

export function ThemeProvider({ children }) {
  const [themeKey, setThemeKey] = useState(() => readThemePreference(themes));

  useLayoutEffect(() => {
    const theme = themes[themeKey];
    const root = document.documentElement;
    Object.entries(theme.vars).forEach(([prop, val]) => {
      root.style.setProperty(prop, val);
    });
    root.dataset.theme = themeKey;
    root.style.colorScheme = themeKey === 'corporate-light' || themeKey === 'minimal-nord' ||
      themeKey === 'mint-breeze' || themeKey === 'executive-monochrome' ? 'light' : 'dark';
    loadThemeFont(themeKey);
    saveThemePreference(themeKey);
  }, [themeKey]);

  return (
    <ThemeContext.Provider value={{ themeKey, setThemeKey }}>
      {children}
    </ThemeContext.Provider>
  );
}
