'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true); // Default to dark mode
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check for saved theme preference or default to dark mode
    try {
      const savedTheme = localStorage.getItem('theme');
      
      if (savedTheme === 'light') {
        setIsDark(false);
        document.documentElement.classList.remove('dark');
      } else {
        // Default to dark mode
        setIsDark(true);
        document.documentElement.classList.add('dark');
      }
    } catch (error) {
      // If localStorage is not available, default to dark mode
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Prevent hydration mismatch by not rendering theme-dependent content until mounted
  if (!mounted) {
    return <div suppressHydrationWarning>{children}</div>;
  }

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    try {
      if (newTheme) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    } catch (error) {
      // If localStorage is not available, just update the class
      if (newTheme) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // Return a default context during SSR or when provider is not available
    return {
      isDark: false,
      toggleTheme: () => {},
    };
  }
  return context;
}
