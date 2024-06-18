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
          <p>Boston University, Massachusets, USA</p>
          <p>2021 - 2024</p>
        </div>
        <div className="cv-item">
          <h3>Postgraduate degree in Blockchain Development</h3>
          <p>George Brown College, Toronto, Canada</p>
          <p>2022 - 2023</p>
        </div>
        <div className="cv-item">
          <h3>Bachelor's Degree in Economics and Finance</h3>
          <p>Wirtschaftsuniversitat Wien, Vienna, Austria</p>
          <p>2012 - 2018</p>
        </div>
      </section>

      <section className="cv-section">
        <h2>Professional Experience</h2>
        <div className="cv-item">
          <h3>Full-stack Software Developer</h3>
          <p>Terrazero Technologies, Vancouver, Canada</p>
          <p>2022 - 2024</p>
          <p>Developed and maintained web applications using React and Node.js.</p>
        </div>
        <div className="cv-item">
          <h3>Software Developer</h3>
          <p>Vali</p>
          <p>2021-2022</p>
          <p>Worked on several projects including e-commerce platforms and mobile apps.</p>
        </div>
        <div className="cv-item">
          <h3>Backend Software Enginner</h3>
          <p>Axented, Monterrey, Mexico</p>
          <p>2020-2021</p>
          <p>Worked on several projects as a Ruby on Rails backend developer.</p>
        </div>
      </section>
    </div>
  );
};

export default CV;
