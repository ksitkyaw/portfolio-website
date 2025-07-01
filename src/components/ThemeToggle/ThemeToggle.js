import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../contexts/ThemeContext';
import './ThemeToggle.scss';

const ThemeToggle = () => {
  const { isDark, toggleTheme, isLoading } = useTheme();

  if (isLoading) {
    return (
      <div className="theme-toggle theme-toggle--loading">
        <div className="theme-toggle__track">
          <div className="theme-toggle__thumb">
            <div className="theme-toggle__loading-spinner" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      aria-pressed={isDark}
      type="button"
    >
      <div className="theme-toggle__track">
        <div className="theme-toggle__thumb">
          <FontAwesomeIcon 
            icon={isDark ? faMoon : faSun} 
            className="theme-toggle__icon"
            aria-hidden="true"
          />
        </div>
      </div>
      <span className="sr-only">
        {isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      </span>
    </button>
  );
};

export default ThemeToggle;