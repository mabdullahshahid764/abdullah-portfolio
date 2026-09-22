import React from 'react';

export default function About() {
  const stats = [
    { icon: 'fa-solid fa-code', number: '95%', label: 'HTML5 & CSS3 Expertise' },
    { icon: 'fa-solid fa-cubes', number: '90%', label: 'Bootstrap Responsiveness' },
    { icon: 'fa-brands fa-js', number: '85%', label: 'JavaScript Development' },
    { icon: 'fa-brands fa-react', number: '75%', label: 'React Framework' },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">01. Who I Am</span>
          <h2 className="section-title">About Me</h2>
          <div className="underline"></div>
        </div>

        <div className="grid-2 gap-4">
          <div className="about-text">
            <p className="paragraph-lead" style={{ fontSize: '1.15rem', fontWeight: 600 }}>
              Passionate and motivated Front-End Web Developer currently pursuing a Bachelor's degree at the University of Management & Technology (UMT).
            </p>
            <p>
              I specialize in creating responsive, high-performance, and user-friendly websites using HTML, CSS, JavaScript, Bootstrap, and React. I am continuously expanding my knowledge of modern web technologies and networking concepts to craft top-notch digital solutions.
            </p>
            <p>
              Currently seeking internship opportunities where I can apply my web development skills, gain valuable hands-on experience, and contribute to real-world software products.
            </p>

            <div className="quick-highlights">
              <div className="highlight-item">
                <div className="highlight-item-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <strong>Location</strong>
                  <p>Lahore, Pakistan</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-item-icon">
                  <i className="fa-solid fa-graduation-cap"></i>
                </div>
                <div>
                  <strong>Current University</strong>
                  <p>UMT Lahore</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card glassmorphism">
                <div className="stat-icon">
                  <i className={stat.icon}></i>
                </div>
                <span className="stat-number">{stat.number}</span>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
