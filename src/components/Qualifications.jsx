import React from 'react';

export default function Qualifications() {
  const qualifications = [
    {
      title: "Bachelor's in Professional Studies (In Progress)",
      desc: "Focusing on modern professional development, computing, and administrative practices."
    },
    {
      title: "Intermediate in ICS",
      desc: "Sound foundation in computers, networks, mathematics, and logic structures."
    },
    {
      title: "Front-End Development",
      desc: "Practical expertise in HTML, CSS, JavaScript, Bootstrap, and dynamic React components."
    },
    {
      title: "Responsive Web Design",
      desc: "Expertise in responsive layouts, mobile-first design, CSS grid/flexbox systems."
    },
    {
      title: "Git & GitHub Version Control",
      desc: "Proficiency in branch management, repo creation, merge conflict resolution, and collaborative workflow."
    },
    {
      title: "Database Fundamentals",
      desc: "Sound knowledge of relational database schema design, indexing, keys, SQL queries, and transaction tables."
    },
    {
      title: "Computer Networking Fundamentals",
      desc: "Clear understanding of TCP/IP layers, routing protocols, subnets, switches, and network models."
    }
  ];

  return (
    <section id="qualifications" className="qualifications-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">04. Milestones Achieved</span>
          <h2 className="section-title">Qualifications</h2>
          <div className="underline"></div>
        </div>

        <div className="grid-2">
          <div className="qualification-graphics">
            <div className="qual-card glassmorphism" style={{ padding: '2.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
                <i className="fa-solid fa-award"></i>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                Verified Qualifications
              </h3>
              <p style={{ color: 'var(--text-muted)' }}>
                Continuous learning and academic excellence mapped to industry frameworks.
              </p>
            </div>
          </div>

          <div className="qualification-list">
            {qualifications.map((qual, index) => (
              <div key={index} className="qual-item glassmorphism">
                <div className="qual-icon-container">
                  <i className="fa-solid fa-circle-check"></i>
                </div>
                <div className="qual-text">
                  <h4>{qual.title}</h4>
                  <p>{qual.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="certifications-notice glassmorphism">
          <i className="fa-solid fa-award"></i>
          <p>
            <strong>Upcoming Professional Certificates:</strong> FreeCodeCamp (Responsive Design & JavaScript), Cisco Networking Academy (CCNA Fundamentals), Coursera & Google Web Certifications.
          </p>
        </div>
      </div>
    </section>
  );
}
