'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button 
      id="theme-toggle" 
      className="theme-toggle w-12 h-6 rounded-full flex items-center transition duration-300 focus:outline-none shadow relative px-1 overflow-hidden" 
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
    >
      <div 
        id="theme-toggle-ball" 
        className={`w-4 h-4 rounded-full shadow flex items-center justify-center transition-all duration-500 transform ${isDark ? 'translate-x-2' : 'translate-x-0'} z-10 bg-white`}
      ></div>
      <i id="sun-icon" className="fas fa-sun text-yellow-200 text-xs absolute right-1"></i>
      <i id="moon-icon" className="fas fa-moon text-blue-200 text-xs absolute left-1"></i>
    </button>
  );
}