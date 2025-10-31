import React from "react";
import Navbar from "../../components/navbar/Navbar";
import About from "../../components/About/About";
import Hero from "../../components/Hero/Hero";

function Home() {
  return (
    <section className="home">
     <Navbar />
     
      {/* <img
        src="https://i.imgur.com/5QFJzZK.png"
        alt="Rara"
        className="profile-pic"
      /> */}
      {/* <h1>Hai, aku Rara cantik bgt💖</h1>
      <p>
        Seorang lulusan Teknik Informatika dari Universitas Yarsi yang
        bersemangat di bidang data, teknologi, dan pengembangan sistem informasi.
      </p> */}

      
      <Hero/>
      <About />
    </section>
  );
}

export default Home;
