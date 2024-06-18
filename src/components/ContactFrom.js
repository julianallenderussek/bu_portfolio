import React, { useState } from 'react';
import './ContactForm.css';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent from ${formData.name}`);
    e.preventDefault();
    let data = JSON.stringify({
      "email": formData.email,
      "message": formData.message
    });

    let config = {
      method: 'post',
      url: `${process.env.REACT_APP_API_URL}/api/contacts`,
      headers: { 
        'authorization': process.env.REACT_APP_API_HEADER, 
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setFormData(
          {
            name: '',
            email: '',
            message: ''
          }
        )
      })
      .catch((error) => {
        console.log(error);
        
      });
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
