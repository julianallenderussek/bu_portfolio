import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const Home = () => {
  return (
  <div>
    <Header/>    
    <Hero/>
    <h1>{REACT_APP_API_URL}</h1>
    <Footer/>
  </div>);
};

export default Home;
