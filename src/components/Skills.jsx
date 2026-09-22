import React from 'react';

export default function Skills() {
  const frontendSkills = [
    { name: 'HTML5', level: '95%' },
    { name: 'CSS3', level: '95%' },
    { name: 'Bootstrap', level: '90%' },
    { name: 'JavaScript', level: '85%' },
    { name: 'React', level: '75%' },
    { name: 'Git & GitHub', level: '80%' },
  ];

  const backendSkills = [
    { name: 'PHP', level: '70%' },
    { name: 'Database (SQL / MySQL)', level: '75%' },
  ];

  const softSkills = [
    { name: 'Problem Solving', level: '90%' },
    { name: 'Critical Thinking', level: '85%' },
    { name: 'Creativity', level: '90%' },
    { name: 'Management Skills', level: '80%' },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">03. Core Capabilities</span>
          <h2 className="section-title">Skills</h2>
          <div className="underline"></div>
        </div>

        <div className="skills-grid">
          {/* Front-End Card */}
          <div className="skills-card glassmorphism">
            <div className="skills-card-header">
              <i className="fa-solid fa-laptop-code"></i>
              <h3>Front-End Development</h3>
            </div>
            <div className="skills-list">
              {frontendSkills.map((skill, i) => (
                <div key={i} className="skill-item">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-bar" style={{ width: skill.level }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend & Other Card */}
          <div className="skills-card glassmorphism">
            <div className="skills-card-header">
              <i className="fa-solid fa-server"></i>
              <h3>Backend & Database</h3>
            </div>
            <div className="skills-list">
              {backendSkills.map((skill, i) => (
                <div key={i} className="skill-item">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-bar" style={{ width: skill.level }}></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="skills-card-header" style={{ marginTop: '2rem' }}>
              <i className="fa-solid fa-brain"></i>
              <h3>Other Technical Skills</h3>
            </div>
            <div className="skills-tags-container">
              <span className="skill-tag">Computer Networking</span>
              <span className="skill-tag">Machine Learning (Basic)</span>
              <span className="skill-tag">REST APIs</span>
              <span className="skill-tag">Vite & npm</span>
            </div>
          </div>

          {/* Soft Skills Card */}
          <div className="skills-card glassmorphism">
            <div className="skills-card-header">
              <i className="fa-regular fa-handshake"></i>
              <h3>Professional Qualities</h3>
            </div>
            <div className="skills-list">
              {softSkills.map((skill, i) => (
                <div key={i} className="skill-item">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-bar" style={{ width: skill.level }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
