import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [isLoading, setIsLoading] = useState(true);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const initializeTheme = () => {
      const savedTheme = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      let initialTheme = 'light';
      
      if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
        initialTheme = savedTheme;
      } else if (systemPrefersDark) {
        initialTheme = 'dark';
      }
      
      setTheme(initialTheme);
      document.documentElement.setAttribute('data-theme', initialTheme);
      setIsLoading(false);
    };

    initializeTheme();
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      // Only update if user hasn't manually set a preference
      if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Announce theme change for screen readers
    const announcement = `Theme switched to ${newTheme} mode`;
    const ariaLiveRegion = document.createElement('div');
    ariaLiveRegion.setAttribute('aria-live', 'polite');
    ariaLiveRegion.setAttribute('aria-atomic', 'true');
    ariaLiveRegion.className = 'sr-only';
    ariaLiveRegion.textContent = announcement;
    document.body.appendChild(ariaLiveRegion);
    
    setTimeout(() => {
      if (document.body.contains(ariaLiveRegion)) {
        document.body.removeChild(ariaLiveRegion);
      }
    }, 1000);
  };

  const setThemePreference = (newTheme) => {
    if (newTheme === 'light' || newTheme === 'dark') {
      setTheme(newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    }
  };

  const clearThemePreference = () => {
    localStorage.removeItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const systemTheme = systemPrefersDark ? 'dark' : 'light';
    setTheme(systemTheme);
    document.documentElement.setAttribute('data-theme', systemTheme);
  };

  const value = {
    theme,
    toggleTheme,
    setThemePreference,
    clearThemePreference,
    isLoading,
    isDark: theme === 'dark',
    isLight: theme === 'light'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};