import React from 'react';

function Home() {
  const [photoFailed, setPhotoFailed] = React.useState(false);

  const personalDetails = {
    name: "N. SAI SRIKAR",
    initials: "NS",
    photo: `${process.env.PUBLIC_URL}/profile-photo.jpg`,
    phone: "+91 9398332327",
    email: "nadipallisrikar@gmail.com",
    collegeEmail: "se23uari079@mahindrauniversity.edu.in",
    title: "B.Tech AI Student",
  };

  const skills = [
    "Python", "C++", "JavaScript", "React", "Machine Learning",
    "Data Analysis", "SQL", "TensorFlow", "PyTorch", "NLP", "Git",
    "Data Structures", "Algorithms", "HTML/CSS", "Node.js"
  ];

  const researchInterests = [
    { icon: "🤖", label: "Artificial Intelligence" },
    { icon: "🧠", label: "Machine Learning" },
    { icon: "📊", label: "Data Science" },
    { icon: "💬", label: "NLP" },
    { icon: "💻", label: "Software Development" },
  ];

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span>Available for Internships</span>
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">{personalDetails.name.split(' ')[0]}</span>
            <br />
            {personalDetails.name.split(' ').slice(1).join(' ')}
          </h1>
          <p className="hero-subtitle">
            A passionate AI student at Mahindra University, diving deep into the world of 
            Machine Learning, Data Science, and Software Development. Building solutions 
            that matter, one line of code at a time.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View Projects
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href={`mailto:${personalDetails.email}`} className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="profile-card">
            <div className="profile-avatar">
              {photoFailed ? (
                <span>{personalDetails.initials}</span>
              ) : (
                <img
                  src={personalDetails.photo}
                  alt={`${personalDetails.name} profile`}
                  onError={() => setPhotoFailed(true)}
                />
              )}
            </div>
            <h2 className="profile-name">{personalDetails.name}</h2>
            <p className="profile-title">{personalDetails.title}</p>
            <div className="social-links">
              <a href="https://github.com/srikar-1810" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
                GH
              </a>
              <a href="https://www.linkedin.com/in/srikar-nadipalli-229691282/" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                IN
              </a>
              <a href="https://www.instagram.com/srikar._05" target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram">
                IG
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section animate-fade-in animate-delay-2">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="info-card">
          <p className="summary-text">
            I am a dedicated 3rd-year B.Tech student specializing in Artificial Intelligence 
            at Mahindra University. With a strong foundation in programming and machine learning, 
            I am passionate about leveraging AI to solve real-world problems. I have hands-on 
            experience with various ML frameworks and data analysis tools, and I stay updated 
            with the latest developments in AI research. Currently seeking internship 
            opportunities to apply my skills in a professional environment and contribute 
            to innovative projects.
          </p>
        </div>
      </section>

      <section className="section animate-fade-in animate-delay-3">
        <div className="section-header">
          <h2 className="section-title">Research Interests</h2>
        </div>
        <div className="research-grid">
          {researchInterests.map((interest, index) => (
            <div key={index} className="research-item">
              <span className="research-icon">{interest.icon}</span>
              <span className="research-label">{interest.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section animate-fade-in animate-delay-4">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
        </div>
        <div className="info-card">
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section animate-fade-in animate-delay-4">
        <div className="section-header">
          <h2 className="section-title">Personal Details</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-item">
            <div className="contact-icon">👤</div>
            <div className="contact-details">
              <span className="contact-label">Name</span>
              <span className="contact-value">{personalDetails.name}</span>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">📱</div>
            <div className="contact-details">
              <span className="contact-label">Phone</span>
              <span className="contact-value">{personalDetails.phone}</span>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">📧</div>
            <div className="contact-details">
              <span className="contact-label">Personal Email</span>
              <span className="contact-value">{personalDetails.email}</span>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">🎓</div>
            <div className="contact-details">
              <span className="contact-label">College Email</span>
              <span className="contact-value">{personalDetails.collegeEmail}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
