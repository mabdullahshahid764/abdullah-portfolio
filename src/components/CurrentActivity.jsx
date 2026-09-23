import React from 'react';

export default function CurrentActivity() {
  const aiPillars = [
    {
      icon: 'fa-solid fa-robot',
      tag: 'Autonomous Systems',
      title: 'Agentic AI & Multi-Agent Workflows',
      desc: 'Architecting goal-driven autonomous agents capable of dynamic task decomposition, multi-step reasoning, tool execution, and collaborative multi-agent orchestration.',
      skills: ['Multi-Agent Architectures', 'Tool Calling & Function Execution', 'Reasoning & Planning (ReAct)', 'Autonomous Task Automation']
    },
    {
      icon: 'fa-solid fa-wand-magic-sparkles',
      tag: 'LLMs & Intelligence',
      title: 'Generative AI & LLM Applications',
      desc: 'Developing context-aware GenAI systems, exploring Retrieval-Augmented Generation (RAG), advanced prompt engineering, and integrating cutting-edge foundation models.',
      skills: ['RAG (Retrieval-Augmented Generation)', 'Vector Embeddings', 'Advanced Prompt Engineering', 'OpenAI & Gemini API Integration']
    },
    {
      icon: 'fa-brands fa-python',
      tag: 'Data & Modeling',
      title: 'Machine Learning & Python Core',
      desc: 'Building a deep mathematical and computational foundation in Python for data analysis, supervised/unsupervised machine learning, and computer vision algorithms.',
      skills: ['Python Data Ecosystem (NumPy, Pandas)', 'Scikit-Learn Algorithms', 'Predictive Analytics', 'Model Evaluation & Optimization']
    },
    {
      icon: 'fa-solid fa-layer-group',
      tag: 'Applied Production',
      title: 'AI-Powered Full-Stack Applications',
      desc: 'Bridging high-performance modern web interfaces (React) with intelligent AI backends, delivering seamless, responsive user experiences powered by smart automation.',
      skills: ['React AI Interfaces', 'FastAPI / Python Backends', 'Streaming AI Responses', 'Production Deployment']
    }
  ];

  const milestones = [
    {
      month: 'Phase 1',
      title: 'Foundations & Data Science',
      status: 'Completed',
      desc: 'Advanced Python programming, data manipulation with Pandas & NumPy, exploratory data analysis, and mathematical foundations for AI.'
    },
    {
      month: 'Phase 2',
      title: 'Machine Learning & Computer Vision',
      status: 'Active',
      desc: 'Supervised & unsupervised models, algorithmic pipelines, feature engineering, and vision data processing with OpenCV & Scikit-Learn.'
    },
    {
      month: 'Phase 3',
      title: 'Agentic AI, GenAI & Capstone Project',
      status: 'In Progress',
      desc: 'Designing end-to-end autonomous agents, LLM integrations, multi-agent frameworks, and building enterprise-grade capstone solutions.'
    }
  ];

  return (
    <section id="activity" className="activity-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">02. Current Pursuit & Innovation</span>
          <h2 className="section-title">Current Activity: AI & Machine Learning</h2>
          <div className="underline"></div>
        </div>

        {/* Featured Fellowship Spotlight Card */}
        <div className="activity-spotlight glassmorphism">
          <div className="spotlight-content">
            <div className="spotlight-badge-row">
              <span className="status-pill">
                <span className="pulse-dot green"></span> Live & Ongoing
              </span>
              <span className="org-pill">
                <i className="fa-solid fa-building-columns"></i> NETSOL Technologies Pakistan
              </span>
              <span className="org-pill navttc-pill">
                <i className="fa-solid fa-certificate"></i> NAVTTC Program
              </span>
            </div>

            <h3 className="spotlight-title">
              Selected for 3-Month Intensive AI/ML Training Program at NETSOL Technologies
            </h3>

            <p className="spotlight-description">
              Currently immersed in a specialized, highly competitive Artificial Intelligence and Machine Learning Fellowship hosted at <strong>NETSOL Technologies Pakistan</strong> under the <strong>NAVTTC</strong> initiative. Under the dedicated mentorship of <strong>Sir Ali Raqib</strong>, I am advancing from core ML mathematics to production-ready <strong>Generative AI</strong> and <strong>Agentic AI architectures</strong>.
            </p>

            <div className="spotlight-highlights">
              <div className="highlight-pill">
                <i className="fa-solid fa-chalkboard-user"></i>
                <span>Mentorship: <strong>Sir Ali Raqib</strong></span>
              </div>
              <div className="highlight-pill">
                <i className="fa-solid fa-code"></i>
                <span>Hands-on Focus: <strong>Real-World AI Solutions</strong></span>
              </div>
              <div className="highlight-pill">
                <i className="fa-solid fa-brain"></i>
                <span>Specialization: <strong>GenAI & Agentic Workflows</strong></span>
              </div>
            </div>

            <div className="spotlight-actions">
              <a
                href="https://www.linkedin.com/in/mabdullahshahid764"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                <i className="fa-brands fa-linkedin"></i> View on LinkedIn
              </a>
              <a href="#projects" className="btn btn-secondary">
                <i className="fa-solid fa-diagram-project"></i> View AI Projects
              </a>
            </div>
          </div>

          <div className="spotlight-quote-card glassmorphism">
            <div className="quote-icon">
              <i className="fa-solid fa-quote-left"></i>
            </div>
            <p className="quote-text">
              "3 months. New skills. Real projects. Endless learning. Turning knowledge of Artificial Intelligence into real-world solutions."
            </p>
            <div className="quote-author">
              <div className="author-indicator"></div>
              <span>Muhammad Abdullah Shahid</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars of AI/ML Focus */}
        <div className="activity-pillars-grid">
          {aiPillars.map((pillar, idx) => (
            <div key={idx} className="pillar-card glassmorphism">
              <div className="pillar-header">
                <div className="pillar-icon">
                  <i className={pillar.icon}></i>
                </div>
                <span className="pillar-tag">{pillar.tag}</span>
              </div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.desc}</p>
              <div className="pillar-skills">
                {pillar.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-chip">
                    <i className="fa-solid fa-check"></i> {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Fellowship Roadmap Timeline */}
        <div className="activity-roadmap glassmorphism">
          <div className="roadmap-header">
            <div>
              <span className="roadmap-badge">Curriculum & Growth</span>
              <h3 className="roadmap-title">Fellowship Progression Roadmap</h3>
            </div>
            <p className="roadmap-subtitle">
              Structured hands-on journey from data-driven fundamentals to deploying autonomous agentic applications.
            </p>
          </div>

          <div className="roadmap-grid">
            {milestones.map((m, idx) => (
              <div key={idx} className={`roadmap-step ${m.status.toLowerCase().replace(' ', '-')}`}>
                <div className="step-top">
                  <span className="step-phase">{m.month}</span>
                  <span className={`step-badge badge-${m.status.toLowerCase().replace(' ', '-')}`}>
                    {m.status}
                  </span>
                </div>
                <h4 className="step-title">{m.title}</h4>
                <p className="step-desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
