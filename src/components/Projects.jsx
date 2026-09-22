import React, { useState } from 'react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      category: 'frontend',
      title: 'Lost & Found System',
      meta: 'University Final Year Project',
      image: 'assets/project1.png',
      desc: 'A responsive platform for university campus members to report lost items and claim found belongings with item visual tracking.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      demo: 'https://example.com',
      github: 'https://github.com',
    },
    {
      id: 2,
      category: 'database',
      title: 'Library Management System',
      meta: 'Database Project',
      image: 'assets/project2.png',
      desc: 'A robust system handling inventory tracking, catalog search, book reservations, and fine calculations with SQL backend.',
      tags: ['PHP', 'MySQL', 'HTML/CSS', 'SQL Queries'],
      demo: 'https://example.com',
      github: 'https://github.com',
    },
    {
      id: 3,
      category: 'ai',
      title: 'AgriDrone Mapping',
      meta: 'AI + Agriculture Project',
      image: 'assets/project3.png',
      desc: 'Combines computer vision algorithms and spatial data to plot healthy/dry regions in crops using drone imagery analysis.',
      tags: ['Machine Learning', 'Python', 'Flask', 'D3.js'],
      demo: 'https://example.com',
      github: 'https://github.com',
    },
    {
      id: 4,
      category: 'frontend',
      title: 'Tech Review Website',
      meta: 'Personal Project',
      image: 'assets/project4.png',
      desc: 'A highly optimized review website built in React, featuring custom category filtering, smooth animations, and rating metrics.',
      tags: ['React', 'CSS Modules', 'JavaScript', 'Responsive'],
      demo: 'https://example.com',
      github: 'https://github.com',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">05. What I Built</span>
          <h2 className="section-title">Projects</h2>
          <div className="underline"></div>
        </div>

        {/* Category Filter Tabs */}
        <div className="project-filters">
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Projects
          </button>
          <button
            className={`filter-btn ${activeFilter === 'frontend' ? 'active' : ''}`}
            onClick={() => setActiveFilter('frontend')}
          >
            Front-End
          </button>
          <button
            className={`filter-btn ${activeFilter === 'database' ? 'active' : ''}`}
            onClick={() => setActiveFilter('database')}
          >
            Database/Backend
          </button>
          <button
            className={`filter-btn ${activeFilter === 'ai' ? 'active' : ''}`}
            onClick={() => setActiveFilter('ai')}
          >
            AI & Networking
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glassmorphism">
              <div className="project-img-container">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                      <i className="fa-brands fa-github"></i>
                    </a>
                    <a href={project.demo} target="_blank" rel="noreferrer" aria-label="Live Demo">
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-body">
                <span className="project-meta">{project.meta}</span>
                <h3>{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-card-footer">
                  <a href={project.demo} target="_blank" rel="noreferrer" className="project-link-btn">
                    Live Demo <i className="fa-solid fa-chevron-right"></i>
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-github-btn" aria-label="GitHub">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
