import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Home,
  Briefcase,
  FolderGit2,
  FileText,
  Mic,
  Radio,
  Sun,
  Moon,
  Menu,
  X
} from 'lucide-react';

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const navItems = [
    { path: '/', label: '~/', fullLabel: 'home', icon: Home, title: 'Home' },
    { path: '/experience', label: '/exp', fullLabel: 'experience', icon: Briefcase, title: 'Experience' },
    { path: '/projects', label: '/projects', fullLabel: 'projects', icon: FolderGit2, title: 'Projects' },
    { path: '/articles', label: '/articles', fullLabel: 'articles', icon: FileText, title: 'Articles' },
    { path: '/speaking', label: '/talks', fullLabel: 'speaking', icon: Mic, title: 'Speaking' },
    { path: '/podcast', label: '/podcast', fullLabel: 'podcast', icon: Radio, title: 'Podcast' },
  ];

  return (
    <header className="header">
      <div className="container nav-container">
        <NavLink to="/" className="brand">
          <span className="brand-dot"></span>
          <span className="brand-text">ifeoluwaafuwape.xyz</span>
        </NavLink>

        {/* Desktop / Tablet Nav Icons */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                    title={item.title}
                  >
                    <Icon size={16} className="nav-icon" />
                    <span className="nav-text">{item.label}</span>
                  </NavLink>
                </li>
              );
            })}
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

        {/* Mobile Actions Toggle */}
        <div className="mobile-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="mobile-menu-drawer">
          <div className="container">
            <ul className="mobile-nav-list">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => (isActive ? 'mobile-nav-link active' : 'mobile-nav-link')}
                    >
                      <Icon size={18} />
                      <span>/{item.fullLabel}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
