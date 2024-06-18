import React from 'react';
import './CVLayout.css';

const CV = () => {
  return (
    <div className="cv-container">
      <header className="cv-header">
        <h1>Julian Allende</h1>
        <p>Software Developer</p>
      </header>

      <section className="cv-section">
        <h2>Education</h2>
        <div className="cv-item">
          <h3>Master's Degree in Computer Science</h3>
          <p>Boston University</p>
          <p>2015 - 2017</p>
        </div>
        <div className="cv-item">
          <h3>Bachelor's Degree in Computer Science</h3>
          <p>University of ABC</p>
          <p>2011 - 2015</p>
        </div>
      </section>

      <section className="cv-section">
        <h2>Professional Experience</h2>
        <div className="cv-item">
          <h3>Senior Software Developer</h3>
          <p>Tech Company</p>
          <p>2019 - Present</p>
          <p>Developed and maintained web applications using React and Node.js.</p>
        </div>
        <div className="cv-item">
          <h3>Software Developer</h3>
          <p>Another Tech Company</p>
          <p>2017 - 2019</p>
          <p>Worked on several projects including e-commerce platforms and mobile apps.</p>
        </div>
      </section>
    </div>
  );
};

export default CV;
