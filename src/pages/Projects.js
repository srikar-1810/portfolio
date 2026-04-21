import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Student Performance Prediction",
      description: "Developed a machine learning model to predict student academic performance based on various factors including study hours, attendance, and previous scores. Used Random Forest and XGBoost algorithms achieving 92% accuracy. The system provides actionable insights for early intervention to help educators identify at-risk students.",
      techStack: ["Python", "Scikit-learn", "Pandas", "XGBoost", "Matplotlib"],
      icon: "🎓",
      githubLink: "https://github.com/srikar-1810/student-performance-prediction",
    },
    {
      id: 2,
      title: "IPL Data Analysis & Visualization",
      description: "Comprehensive analysis of Indian Premier League data spanning 15 seasons. Created interactive dashboards to visualize team performance, player statistics, and match trends. Built an intuitive web application using Streamlit for data exploration and insights generation.",
      techStack: ["Python", "Pandas", "Seaborn", "Streamlit", "Plotly"],
      icon: "🏏",
      githubLink: "https://github.com/srikar-1810/ipl-data-analysis",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern, responsive personal portfolio website showcasing technical skills and projects. Built with React and React Router featuring a professional dark theme design, smooth animations, and glassmorphism effects. Deployed for seamless accessibility.",
      techStack: ["React", "React Router", "CSS3", "GitHub Pages"],
      icon: "🌐",
      githubLink: "https://github.com/srikar-1810/portfolio",
    },
  ];

  return (
    <div className="projects-page">
      <div className="projects-header animate-fade-in">
        <h1>My <span className="highlight">Projects</span></h1>
        <p>A collection of projects showcasing my technical skills and problem-solving abilities</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`project-card animate-fade-in animate-delay-${index + 1}`}
          >
            <div className="project-header">
              <div className="project-icon">{project.icon}</div>
              <div className="project-number">0{project.id}</div>
            </div>
            
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            
            <div className="project-tech">
              {project.techStack.map((tech, techIndex) => (
                <span key={techIndex} className="tech-badge">{tech}</span>
              ))}
            </div>
            
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;