import React from 'react';
import './Projects.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

const projects = [
  { id: 1, title: 'PWC Hong Kong', date: 'Jul 2023', image_url: 'pwc.png', description: 'Build a metaverse experiance for PWC in using Typescript and Web3 technologies.' },
  { id: 2, title: 'Fidelity Campus', date: 'Feb 2023', image_url: 'https://www.fidelityinternational.com/media/international/images/how-to-visit-540x355px.jpg',  description: 'Built a metaverse experiance for Fidelity Investments' },
  { id: 3, title: 'Athletic Brewing', date: 'April 2023',image_url: 'https://athleticbrewing.com/cdn/shop/files/club_0be5d494-2236-473e-a592-874e1962e74e.jpg?v=1680355966&width=800', description: 'Description of Project 3' },
  { id: 4, title: 'Quiken MTY', date: 'Apr 2023', image_url: "https://quiken.mx/static/media/Quiken_Miles_Guias_generadas.290a52df.png", description: 'Description of Project 4' },
  { id: 5, title: 'BCBGMaxAzria', date: 'May 2023', image_url: "https://wwd.com/wp-content/uploads/2023/02/Models-in-the-BCBG-Metaverse_1-jpeg.jpg?w=1000&h=563&crop=1&resize=1000%2C563", description: 'Metaverse Marketing activation for BCBGMaxAzria' },
  { id: 6, title: 'Axented', date: 'Jun 2022', image_url:"https://cdn.prod.website-files.com/643db42c8b57574b24aed445/644af47bc21ca54e7f24c3dc_Ax_02%20(1)-p-800.jpg", description: 'HR recruiting and payroll online platform' },
  { id: 7, title: 'Avionata', date: 'Jul 2021', image_url: "https://avioneta.org/wp-content/uploads/2024/04/man-computer.jpg",  description: 'Website and online platform for NGO Avioneta.org' },
];

const ProjectsGrid = () => {
  return (
    <>
      <Header/>
      <h1 className="project-title">My Projects</h1>
        <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img style={{height: "100%", width: "100%"}} src={project.image_url}/>
            </div>
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
