import { useEffect, useRef, useState } from 'react';
import { Palette, X, Check } from 'lucide-react';
import { themes } from '../themes';
import { useTheme } from '../themeContextStore';
import './ThemeSwitcher.css';

export default function ThemeSwitcher() {
  const { themeKey, setThemeKey } = useTheme();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const panelRef = useRef(null);

  function closePanel() {
    setOpen(false);
    toggleRef.current?.focus();
  }

  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector('[aria-pressed="true"]')?.focus();
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        ref={toggleRef}
        type="button"
        className={`theme-fab ${open ? 'active' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close theme picker' : 'Change theme'}
        aria-expanded={open}
        aria-controls="theme-picker"
        id="theme-switcher-fab"
      >
        {open ? <X size={20} /> : <Palette size={20} />}
      </button>

      {/* Panel */}
      <div
        ref={panelRef}
        className={`theme-panel ${open ? 'open' : ''}`}
        id="theme-picker"
        role="region"
        aria-labelledby="theme-picker-title"
        hidden={!open}
      >
        <div className="theme-panel-header">
          <Palette size={15} />
          <span id="theme-picker-title">Choose Theme</span>
        </div>
        <div className="theme-list" role="group" aria-label="Color theme">
          {Object.entries(themes).map(([key, theme]) => (
            <button
              key={key}
              type="button"
              className={`theme-item ${themeKey === key ? 'selected' : ''}`}
              onClick={() => { setThemeKey(key); }}
              aria-pressed={themeKey === key}
              id={`theme-${key}`}
            >
              <div className="theme-swatches" aria-hidden="true">
                {theme.preview.map((color, i) => (
                  <span
                    key={i}
                    className="swatch"
                    style={{ background: color }}
                  />
                ))}
              </div>
              <div className="theme-meta">
                <span className="theme-emoji" aria-hidden="true">{theme.emoji}</span>
                <span className="theme-name">{theme.name}</span>
              </div>
              {themeKey === key && (
                <span className="theme-check" aria-hidden="true">
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
          onClick={closePanel}
          aria-hidden="true"
        />
      )}
    </>
  );
}
