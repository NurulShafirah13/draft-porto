import React, { useState } from "react";
import Slider from "react-slick";
import "./learningProject.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import web1a from "../../assets/images/queen1.png";
import web1b from "../../assets/images/queen2.png";
import web1c from "../../assets/images/queen3.png";

import web2a from "../../assets/images/queen1.png";
import web2b from "../../assets/images/queen2.png";
import web2c from "../../assets/images/queen3.png";

import web3a from "../../assets/images/queen1.png";
import web3b from "../../assets/images/queen2.png";

const projects = [
  { id: 1, name: "MindJoy", desc: "Website portfolio exploration.", thumbnails: [web1a, web1b, web1c] },
  { id: 2, name: "ViuMe", desc: "Social media UI redesign.", thumbnails: [web2a, web2b, web2c] },
  { id: 3, name: "Citarum Harum to WWF", desc: "Dashboard visualization for river management.", thumbnails: [web3a, web3b] },
  { id: 4, name: "LPTM Student Certificate", desc: "Training certificate generator app.", thumbnails: [web3a, web3b] },
  { id: 5, name: "AI-HEART", desc: "AI support for telemedicine at Yarsi Hospital.", thumbnails: [web3a, web3b] },
  { id: 6, name: "Soda Caleg", desc: "Fast diagnostic ECG software.", thumbnails: [web3a, web3b] },
  { id: 7, name: "Dashboard River Data", desc: "Visualization system for clean river monitoring.", thumbnails: [web3a, web3b] },
  { id: 8, name: "Portfolio Revamp", desc: "New portfolio layout & animation.", thumbnails: [web3a, web3b] },
];

const LearningProject = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  // 🎠 carousel utama
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className="list-project">
      <header className="project-header">
        <h2>My Learning Projects</h2>
        <p>Some of my works and learning experiments 💻</p>
      </header>

      {/* 🎠 Carousel */}
      <Slider {...settings} className="project-carousel">
        {projects.map((project) => (
          <article
            key={project.id}
            className="project-card"
            onClick={() => handleCardClick(project)}
          >
            <img src={project.thumbnails[0]} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.desc}</p>
          </article>
        ))}
      </Slider>

      {/* 🌸 Modal Scrollable */}
      {selectedProject && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-scroll" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>✕</button>
            <h2>{selectedProject.name}</h2>
            <p className="project-desc">{selectedProject.desc}</p>

            <div className="scroll-content">
              {selectedProject.thumbnails.map((img, i) => (
                <img key={i} src={img} alt={`${selectedProject.name} preview ${i + 1}`} />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LearningProject;
