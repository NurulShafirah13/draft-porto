import react from "react";
import reactLogo from "../../assets/images/react.png";
import queenLogo from "../../assets/images/FOTO RARA.jpg";
import javascriptLogo from "../../assets/images/javascript.png";
import cssLogo from "../../assets/images/css-3.png";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>belajar sampai gua jago</h2>
        <p>
          suka belajar, mudah beradaptasi terhadap hal baru, pantang menyerah
          terus semangat, miss you all
        </p>
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
