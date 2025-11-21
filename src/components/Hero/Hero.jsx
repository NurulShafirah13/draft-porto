import React from "react";
import queenLogo from "../../assets/images/rara-2.png";
import "./Hero.scss";
import SplitText from "../SplitText/SplitText";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>
          <SplitText
            text="Hi, I'm Shafirah"
            color="#6cd46c"
            className="hero-title"
          />
        </h2>

        <p>
          A highly motivated and adaptive graduate in Informatics Engineering
          from Yarsi University with good interpersonal skills and a passion for
          continuous learning.
        </p>

        <h4>My Resume</h4>
      </div>

      {/* 🖼️ Wrapper biar efek perangko nggak kepotong */}
      <div className="hero-image">
        <div className="queen-wrapper">
          <img src={queenLogo} className="queen" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
