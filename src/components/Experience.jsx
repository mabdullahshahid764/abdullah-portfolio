import React from 'react';

export default function Experience() {
  const focusAreas = [
    {
      title: 'Agentic & Generative AI:',
      desc: 'Architecting autonomous agent workflows, prompt strategies, RAG systems, and integrating intelligent LLM APIs into production applications.'
    },
    {
      title: 'Machine Learning & Python:',
      desc: 'Data preprocessing, exploratory analysis with Pandas/NumPy, supervised & unsupervised modeling, and computer vision pipelines.'
    },
    {
      title: 'Front-End Development:',
      desc: 'Translating Figma mockups into clean, accessible, and fast web structures using HTML, CSS, JavaScript, and React.'
    },
    {
      title: 'Full-Stack Integration & Networking:',
      desc: 'Connecting Python/PHP backends with React frontends, designing secure APIs, and managing network protocols.'
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">06. Professional Journey</span>
          <h2 className="section-title">Experience</h2>
          <div className="underline"></div>
        </div>

        {/* Active Fellowship at NETSOL */}
        <div className="experience-role-card glassmorphism" style={{ marginBottom: '2.5rem', padding: '2.25rem', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(167, 139, 250, 0.3)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                <span className="status-pill">
                  <span className="pulse-dot green"></span> Current Role
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--primary-color)', fontWeight: 600 }}>
                  2026 – Present
                </span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700 }}>
                AI / Machine Learning Trainee & Fellow
              </h3>
              <h4 style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '0.35rem' }}>
                NETSOL Technologies Pakistan &nbsp;•&nbsp; NAVTTC Training Program
              </h4>
            </div>
            <div>
              <span className="org-pill">
                <i className="fa-solid fa-chalkboard-user"></i> Mentor: Sir Ali Raqib
              </span>
            </div>
          </div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            Selected for an intensive 3-month AI/ML training fellowship hosted at global enterprise leader <strong>NETSOL Technologies Pakistan</strong> under the <strong>NAVTTC</strong> initiative. Gaining in-depth practical expertise in Machine Learning, Python data analytics, <strong>Agentic AI workflows</strong>, <strong>Generative AI & LLMs</strong>, and real-world software applications under the mentorship of <strong>Sir Ali Raqib</strong>.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span className="tag">Agentic AI</span>
            <span className="tag">Generative AI</span>
            <span className="tag">Python 3</span>
            <span className="tag">Machine Learning</span>
            <span className="tag">LLM Architecture</span>
            <span className="tag">NETSOL</span>
          </div>
        </div>

        <div className="experience-showcase glassmorphism">
          <div className="experience-banner">
            <span className="status-pill">
              <span className="pulse-dot green"></span> Active Candidate
            </span>
            <h3>Looking for AI/ML & Web Opportunities</h3>
            <p className="experience-tagline">
              Passionate AI/ML developer and web engineer ready to build high-impact, intelligent solutions.
            </p>
          </div>

          <div className="grid-2 gap-4 experience-body">
            <div className="experience-points">
              <h4 className="sub-heading">Primary Focus Areas</h4>
              <ul className="styled-list">
                {focusAreas.map((area, idx) => (
                  <li key={idx}>
                    <div className="list-bullet">
                      <i className="fa-solid fa-chevron-right"></i>
                    </div>
                    <span>
                      <strong>{area.title}</strong> {area.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="experience-pitch">
              <h4 className="sub-heading">Why Hire Me?</h4>
              <p>
                As a student in Bachelor of Professional Studies at UMT, my core strength lies in combining rapid technical adaptability with a strong professional work ethic. I actively seek out challenging environments where I can learn under senior developers and contribute immediately to code production pipelines.
              </p>
              <div className="languages-widget">
                <h5 className="sub-heading-small">Languages Spoken</h5>
                <div className="languages-tags">
                  <span className="lang-tag">English <small>(Fluent)</small></span>
                  <span className="lang-tag">Urdu <small>(Native)</small></span>
                  <span className="lang-tag">Chinese <small>(Basic)</small></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
