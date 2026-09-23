import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CurrentActivity from './components/CurrentActivity';
import Education from './components/Education';
import Skills from './components/Skills';
import Qualifications from './components/Qualifications';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [toastVisible, setToastVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
      setShowBackToTop(winScroll > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerToast = () => {
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 4500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Scroll Progress Bar */}
      <div id="scroll-progress-container">
        <div id="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      </div>

      {/* Navigation Bar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Sections */}
      <Hero />
      <About />
      <CurrentActivity />
      <Education />
      <Skills />
      <Qualifications />
      <Projects />
      <Experience />
      <Contact showToast={triggerToast} />
      <Footer />

      {/* Back to Top Button */}
      <button
        id="back-to-top"
        className={showBackToTop ? 'show' : ''}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>

      {/* Toast Modal */}
      {toastVisible && (
        <div className="toast-modal">
          <div className="toast-content glassmorphism">
            <div className="toast-icon">
              <i className="fa-regular fa-circle-check"></i>
            </div>
            <div className="toast-message">
              <h4>Message Sent!</h4>
              <p>Thank you. Abdullah will reach out to you shortly.</p>
            </div>
            <button
              className="toast-close-btn"
              onClick={() => setToastVisible(false)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
