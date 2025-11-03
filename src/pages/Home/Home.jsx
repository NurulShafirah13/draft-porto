import React from "react";
import Navbar from "../../components/navbar/Navbar";
import About from "../../components/About/About";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/footer/Footer";
import HardSkills from "../../components/HardSkills/HardSkills";

// Home.jsx
const Home = () => {
  return (
    <>
      <section className="hero">
        <Hero />
      </section>

      <section className="about">
        <About />
      </section>

      <section className="skills">
        <HardSkills />
      </section>
    </>
  );
};


export default Home;
