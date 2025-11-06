import react from "react";
import reactLogo from "../../assets/images/react.png";
import queenLogo from "../../assets/images/rara-2.png";
import javascriptLogo from "../../assets/images/javascript.png";
import cssLogo from "../../assets/images/css-3.png";
import "./Hero.scss";
import SplitText from "../SplitText/SplitText";



const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2 className="text-4xl font-bold text-pink-400">
          <SplitText text="Hi, I'm Shafirah" />
        </h2>

        <p>
          Nurul Shafirah Ramadhani, a highly motivated and adaptive graduated in
          Informatics Engineering from Yarsi University with good interpersonal
          skills and a passion for continuous learning.
        </p>

        <h4>My Resume</h4>
      </div>
      <div className="hero-image">
        <img src={queenLogo} alt="Queen" className="queen" />
        <img src={reactLogo} alt="React" className="react-logo" />
        <img src={javascriptLogo} alt="JS" className="js-logo" />
        <img src={cssLogo} alt="CSS" className="css-logo" />
      </div>
    </section>
  );
};
export default Hero;
