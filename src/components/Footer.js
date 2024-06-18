import React, { useState } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Footer = () => {


  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);  
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = JSON.stringify({
      "email": email
    });

    let config = {
      method: 'post',
      url: `${process.env.REACT_APP_API_URL}/api/newsletter`,
      headers: { 
        'authorization': process.env.REACT_APP_API_HEADER, 
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setEmail("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Me</h4>
          <p>I am passionate software developer that loves to build beautiful digital products and services.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/julianallende/">LinkedIn</a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Newsletter</h4>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Enter your email" value={email} onChange={handleChange}/>
            <button type='submit' >Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
