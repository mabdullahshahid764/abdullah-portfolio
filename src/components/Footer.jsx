import React from 'react';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="#home" className="logo">
              <span className="logo-accent">&lt;</span>Abdullah<span className="logo-accent"> /&gt;</span>
            </a>
            <p className="footer-about">
              Crafting modern, scalable, dynamic, and responsive front-end web interfaces for future-forward teams.
            </p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#skills">Skills</a></li>
            </ul>
            <ul>
              <li><a href="#qualifications">Qualifications</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Muhammad Abdullah Shahid. All rights reserved.</p>
          <div className="footer-legal">
            <p>Designed with <i className="fa-solid fa-heart heart-beat"></i> & React</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
