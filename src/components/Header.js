import React, { useState } from 'react';
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className='logo__img'></div>
      <div className="hamburger" onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </div>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <a href="/">Home</a>
        <a href="/cv">CV</a>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/articles">Articles</a>
        <a href="/videos">Videos</a>
        <a href="/contact">Contact Me</a>
      </div>
    </nav>
  );
};

export default Header;
