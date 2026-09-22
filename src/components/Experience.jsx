import React from 'react';

export default function Experience() {
  const focusAreas = [
    {
      title: 'Front-End Development:',
      desc: 'Translating Figma mockups into clean, accessible, and fast web structures using HTML, CSS, JavaScript, and React.'
    },
    {
      title: 'Web Development:',
      desc: 'Crafting full-stack integrations using PHP backends, managing schema parameters, and ensuring secure client-server interaction.'
    },
    {
      title: 'Networking:',
      desc: 'Designing subnet ranges, packet trace debugging, configuring routers, and understanding load balancing techniques.'
    },
    {
      title: 'Technical Support:',
      desc: 'Assisting in hardware resolution, desktop OS patching, remote server shells, and infrastructure uptime checks.'
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">06. Next Career Steps</span>
          <h2 className="section-title">Experience</h2>
          <div className="underline"></div>
        </div>

        <div className="experience-showcase glassmorphism">
          <div className="experience-banner">
            <span className="status-pill">
              <span className="pulse-dot green"></span> Active Candidate
            </span>
            <h3>Looking for Internship Opportunities</h3>
            <p className="experience-tagline">
              Motivated front-end developer and network aspirant ready to drive value in a tech role.
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
