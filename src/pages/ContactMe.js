import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactFrom";

const About = () => {
  return (
    <>
      <Header/>
      <ContactForm/>
      <Footer/>
    </>
  );
};

export default About;
