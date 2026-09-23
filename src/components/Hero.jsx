import React, { useState, useEffect } from 'react';
import profileImg from '../assets/p.jpg';
import cvPdf from '../assets/cv.pdf';

export default function Hero() {
  const titles = [
    "Front-End Web Developer.",
    "Computer Science Student.",
    "Aspiring Network Engineer."
  ];

  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentTitle.length) {
      typingSpeed = 1600;
    } else if (isDeleting && charIndex === 0) {
      typingSpeed = 500;
    }

    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText(currentTitle.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex === 1) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      } else {
        setDisplayedText(currentTitle.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex === currentTitle.length - 1) {
          setIsDeleting(true);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <section id="home" className="hero-section">
      <div className="background-decorations">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
      </div>
      <div className="container grid-2">
        <div className="hero-content">
          <span className="welcome-badge">
            <span className="pulse-dot"></span> Open to Internships
          </span>
          <h1 className="hero-title">
            Hi, I'm <br />
            <span className="gradient-text">Muhammad Abdullah Shahid</span>
          </h1>
          <h2 className="hero-subtitle">
            I am a <span>{displayedText}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-description">
            Building modern, responsive, dynamic, and user-friendly web experiences with clean code & state-of-the-art design systems.
          </p>
          <div className="hero-cta">
            <a
              href={cvPdf}
              download="Muhammad_Abdullah_Shahid_CV.pdf"
              className="btn btn-primary"
            >
              <i className="fa-solid fa-cloud-arrow-down"></i> Download CV
            </a>
            <a href="#contact" className="btn btn-secondary">
              <i className="fa-regular fa-envelope"></i> Contact Me
            </a>
            <a href="#projects" className="btn btn-tertiary">
              View Projects <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div className="hero-socials">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="social-icon"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="social-icon"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="mailto:mabdullahshahid764@gmail.com"
              aria-label="Email"
              className="social-icon"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="avatar-glass-card glassmorphism">
            <div className="avatar-border">
              <img
                src={profileImg}
                alt="Muhammad Abdullah Shahid"
                className="avatar-image"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'assets/p.jpg';
                }}
              />
            </div>
            {/* Quick stats floating badges */}
            <div className="floating-badge badge-1">
              <div className="badge-icon">
                <i className="fa-solid fa-laptop-code"></i>
              </div>
              <div className="badge-info">
                <h4>75%+</h4>
                <p>React Skills</p>
              </div>
            </div>
            <div className="floating-badge badge-2">
              <div className="badge-icon">
                <i className="fa-solid fa-circle-check"></i>
              </div>
              <div className="badge-info">
                <h4>Matric - BPS</h4>
                <p>Education Path</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
