import React from 'react';
import './About.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

const About = () => {
  return (
    <>
      <Header/>
        <div className="about-container">
        <div className='about__img'></div>
        <header className="about-header">
          <h1>About Me</h1>
          <p>A little bit about my hobbies, music interests, and language skills.</p>
        </header>
        
        <section className="about-section hobbies">
          <h2>Hobbies</h2>
          <div className="about-item">
            <h3>Tennis</h3>
            <p>I love playing tennis during my free time. It helps me stay fit and energized.</p>
          </div>
          <div className="about-item">
            <h3>Golf</h3>
            <p>Golf is another hobby of mine. I enjoy the strategic aspect of the game and the peaceful surroundings.</p>
          </div>
        </section>

        <section className="about-section music">
          <h2>Music</h2>
          <div className="about-item">
            <h3>Playing Instruments</h3>
            <p>I play the guitar and piano. Music is a great way for me to unwind and express creativity.</p>
          </div>
          <div className="about-item">
            <h3>Listening to Music</h3>
            <p>My music taste is eclectic. I enjoy everything from classical to rock.</p>
          </div>
        </section>

        <section className="about-section languages">
          <h2>Speaking Languages</h2>
          <div className="about-item">
            <h3>English</h3>
            <p>Fluent in English, both written and spoken.</p>
          </div>
          <div className="about-item">
            <h3>Spanish</h3>
            <p>I am conversational in Spanish and constantly improving my proficiency.</p>
          </div>
          <div className="about-item">
            <h3>French</h3>
            <p>I have a basic understanding of French and enjoy practicing it when I travel.</p>
          </div>
        </section>
      </div>
      <Footer/>
    </>
    
  );
};

export default About;
