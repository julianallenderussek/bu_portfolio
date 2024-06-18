import React from 'react';
import './Projects.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

const projects = [
  { id: 1, title: 'Project 1', date: 'Jan 2023', description: 'Description of Project 1' },
  { id: 2, title: 'Project 2', date: 'Feb 2023', description: 'Description of Project 2' },
  { id: 3, title: 'Project 3', date: 'Mar 2023', description: 'Description of Project 3' },
  { id: 4, title: 'Project 4', date: 'Apr 2023', description: 'Description of Project 4' },
  { id: 5, title: 'Project 5', date: 'May 2023', description: 'Description of Project 5' },
  { id: 6, title: 'Project 6', date: 'Jun 2023', description: 'Description of Project 6' },
  { id: 7, title: 'Project 7', date: 'Jul 2023', description: 'Description of Project 7' },
  { id: 8, title: 'Project 8', date: 'Aug 2023', description: 'Description of Project 8' },
];

const ProjectsGrid = () => {
  return (
    <>
      <Header/>
      <h1 className="project-title">My Projects</h1>
      <div className="projects-grid">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <div className="project-image"></div>
          <h3>{project.title}</h3>
          <p><strong>Date:</strong> {project.date}</p>
          <p>{project.description}</p>
        </div>
      ))}
      </div>
      <Footer/>
    </>
    
  );
};

export default ProjectsGrid;
