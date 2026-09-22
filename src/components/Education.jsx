import React from 'react';

export default function Education() {
  const timelineData = [
    {
      side: 'left',
      icon: 'fa-solid fa-graduation-cap',
      date: '2022 – 2026',
      title: 'Bachelor in Professional Studies',
      org: 'University of Management & Technology (UMT)',
      desc: 'Focusing on foundational software engineering, practical web frameworks, business communications, and professional IT skills.'
    },
    {
      side: 'right',
      icon: 'fa-solid fa-school',
      date: '2020 – 2022',
      title: 'Intermediate in ICS',
      org: 'Punjab Group of Colleges',
      desc: 'Core subjects including Computer Science, Mathematics, and Physics. Developed basic programming logic and mathematical foundations.'
    },
    {
      side: 'left',
      icon: 'fa-solid fa-book-open',
      date: '2008 – 2020',
      title: 'Matriculation',
      org: 'Alpine School of Sciences',
      desc: 'Early science curriculum laying the groundwork for mathematical analytics and analytical thinking.'
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">02. My Journey</span>
          <h2 className="section-title">Education</h2>
          <div className="underline"></div>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          {timelineData.map((item, index) => (
            <div key={index} className={`timeline-item ${item.side}`}>
              <div className="timeline-marker">
                <i className={item.icon}></i>
              </div>
              <div className="timeline-content glassmorphism">
                <span className="timeline-date">{item.date}</span>
                <h3>{item.title}</h3>
                <h4 className="timeline-org">{item.org}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
