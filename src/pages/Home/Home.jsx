import React from "react";
import Navbar from "../../components/navbar/Navbar";
import About from "../../components/About/About";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/footer/Footer";
import HardSkills from "../../components/HardSkills/HardSkills";
function Home() {
  return (
    <section className="home">
      <Navbar />
      <main>
        <Hero />
        <About />
         <HardSkills/>
      </main>
      <Footer />
    </section>
  );
}

export default Home;
