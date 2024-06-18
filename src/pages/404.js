import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const NotFound404 = () => {
  return (
    <>
      <Header/>
      <div style={{ minHeight: "80vh", padding: "40px"}}>
        <h1>Contact Me Page under construction</h1>
        <h2>
           <Link style={{ color: "blue", textDecoration: "underline"}} to="/" className="footer-link">Go back to Home</Link>
        </h2>
      </div>
      <Footer/>
    </>
  );
};

export default NotFound404;
