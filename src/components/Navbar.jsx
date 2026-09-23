import React, { useState, useEffect } from 'react';

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'activity', label: 'AI Activity' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'qualifications', label: 'Qualifications' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header id="main-header" className={scrolled ? 'scrolled' : ''}>
        <div class="container nav-container">
          <a href="#home" class="logo">
            <span class="logo-accent">&lt;</span>Abdullah<span class="logo-accent"> /&gt;</span>
          </a>

          <nav id="nav-menu">
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div class="nav-actions">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="theme-btn"
              aria-label="Toggle theme"
            >
              <i className={darkMode ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}></i>
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className="menu-btn"
              id="mobile-menu-toggle"
              aria-label="Open menu"
            >
              <i className="fa-solid fa-bars-staggered"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <div id="mobile-nav-overlay" className={mobileOpen ? 'open' : ''}>
        <div className="mobile-nav-header">
          <a href="#home" className="logo" onClick={() => setMobileOpen(false)}>
            <span className="logo-accent">&lt;</span>Abdullah<span className="logo-accent"> /&gt;</span>
          </a>
          <button
            onClick={() => setMobileOpen(false)}
            className="menu-btn"
            aria-label="Close menu"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <nav className="mobile-nav-links">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`mobile-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
