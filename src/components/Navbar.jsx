import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <header className="header">
      <div className="container nav-container">
        <NavLink to="/" className="brand">
          <span className="brand-dot"></span>
          <span>ifeoluwa.dev</span>
        </NavLink>

        <nav>
          <ul className="nav-links">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                ~/
              </NavLink>
            </li>
            <li>
              <NavLink to="/experience" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                /experience
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                /projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/articles" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                /articles
              </NavLink>
            </li>
            <li>
              <button
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
