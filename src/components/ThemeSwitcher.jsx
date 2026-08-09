import { useState } from 'react';
import { Palette, X, Check } from 'lucide-react';
import { themes, useTheme } from '../ThemeContext';
import './ThemeSwitcher.css';

export default function ThemeSwitcher() {
  const { themeKey, setThemeKey } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        className={`theme-fab ${open ? 'active' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Change theme"
        id="theme-switcher-fab"
      >
        {open ? <X size={20} /> : <Palette size={20} />}
      </button>

      {/* Panel */}
      <div className={`theme-panel ${open ? 'open' : ''}`}>
        <div className="theme-panel-header">
          <Palette size={15} />
          <span>Choose Theme</span>
        </div>
        <div className="theme-list">
          {Object.entries(themes).map(([key, theme]) => (
            <button
              key={key}
              className={`theme-item ${themeKey === key ? 'selected' : ''}`}
              onClick={() => { setThemeKey(key); }}
              id={`theme-${key}`}
            >
              <div className="theme-swatches">
                {theme.preview.map((color, i) => (
                  <span
                    key={i}
                    className="swatch"
                    style={{ background: color }}
                  />
                ))}
              </div>
              <div className="theme-meta">
                <span className="theme-emoji">{theme.emoji}</span>
                <span className="theme-name">{theme.name}</span>
              </div>
              {themeKey === key && (
                <span className="theme-check">
                  <Check size={13} />
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="theme-backdrop"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
