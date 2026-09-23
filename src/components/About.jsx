import React from 'react';

export default function About() {
  const stats = [
    { icon: 'fa-solid fa-brain', number: 'AI & ML', label: 'Fellowship @ NETSOL' },
    { icon: 'fa-solid fa-robot', number: 'Agentic', label: 'GenAI & Autonomous Systems' },
    { icon: 'fa-brands fa-react', number: 'React UI', label: 'Modern Frontend Architecture' },
    { icon: 'fa-brands fa-python', number: 'Python', label: 'Data Science & Modeling' },
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
              AI/ML Developer & Web Engineer passionate about Agentic Systems, Generative AI, and high-performance user experiences.
            </p>
            <p>
              I specialize in bridging intelligent Artificial Intelligence models—including autonomous agentic workflows and Generative AI—with clean, intuitive web interfaces. Currently selected for the intensive 3-month AI/ML training program at <strong>NETSOL Technologies Pakistan</strong> under the NAVTTC initiative, mentored by <strong>Sir Ali Raqib</strong>.
            </p>
            <p>
              Whether engineering goal-directed multi-agent pipelines, training predictive machine learning models in Python, or crafting responsive React web applications, I focus on transforming cutting-edge algorithms into high-value real-world software.
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
                  <strong>University & Training</strong>
                  <p>UMT & NETSOL (NAVTTC)</p>
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
