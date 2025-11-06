import React from "react";
import "./certifInfo.scss";

const CertifInfo = () => {
  const data = [
    {
      title: "Certificate One",
      subtitle: "Category: Achievement",
      img: "https://assets.codepen.io/4787486/oak_1.jpg",
      bg: "https://assets.codepen.io/4787486/trees.png",
      desc: `This certificate represents excellence in performance and dedication
             to learning. A reflection of consistent effort and creativity.`,
    },
    {
      title: "Certificate Two",
      subtitle: "Category: Project",
      img: "https://assets.codepen.io/4787486/tree+clipart.jpeg",
      bg: "https://assets.codepen.io/4787486/trees.png",
      desc: `An award for outstanding contribution in technology-based
             projects focusing on innovation and design.`,
    },
    {
      title: "Certificate Three",
      subtitle: "Category: Leadership",
      img: "https://assets.codepen.io/4787486/oak_1.jpg",
      bg: "https://assets.codepen.io/4787486/trees.png",
      desc: `This recognition highlights leadership and collaboration
             in a creative learning environment.`,
    },
  ];

  return (
    <section className="certif-section">
      <header>
        <h1>My Lovely Certificates 💖</h1>
      </header>

      <div className="certif-wrapper">
        {data.map((item, i) => (
          <article key={i} className="certif-card animate pop">
            <div className="overlay">
              <div className="overlay-content animate slide-left delay-2">
                <h2 className="animate slide-left pop delay-4">{item.title}</h2>
                <p className="animate slide-left pop delay-5">{item.subtitle}</p>
              </div>
              <div
                className="image-content animate slide delay-5"
                style={{ backgroundImage: `url(${item.bg})` }}
              ></div>
              <div className="dots animate">
                <div className="dot animate slide-up delay-6"></div>
                <div className="dot animate slide-up delay-7"></div>
                <div className="dot animate slide-up delay-8"></div>
              </div>
            </div>

            <div className="text">
              <img className="inset" src={item.img} alt={item.title} />
              <p>{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CertifInfo;
