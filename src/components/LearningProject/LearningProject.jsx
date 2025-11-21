// LearningProject.jsx
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "./learningProject.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LearningProject = ({ projects }) => {
  const [modalProject, setModalProject] = useState(null);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="project-part">
      <div className="project-header">
        <h1>Learning Projects</h1>
        <div className="decor-line"></div>
      </div>

      <p className="subhead">
        My little Project Exploration
      </p>

      <div className="project-layout">
        <article className="article">
          <h3>Experiment Design</h3>
          <p>
            Over time, I’ve grown to love crafting things that live on the web —
            from simple interfaces to full-featured dashboard systems. My recent
            works include building an admin dashboard application for LPTM
            Company complete with data CRUD operations, barcode scanning
            integration, and responsive UI/UX using scss and Framer Motion.
          </p>
        </article>

        <div className="project-carousel">
          <Slider ref={sliderRef} {...settings}>
            {projects.map((p) => (
              <div
                key={p.id}
                className="carousel-item"
                onClick={() => setModalProject(p)}
              >
                {/* 💖 tampilkan cover di depan */}
                <img src={p.cover || p.thumbnails[0]} alt={p.name} />
                <h4>{p.name}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </Slider>

          <div className="carousel-nav">
            <button
              className="prev"
              onClick={() => sliderRef.current.slickPrev()}
            />
            <button
              className="next"
              onClick={() => sliderRef.current.slickNext()}
            />
          </div>
        </div>
      </div>

      {/* 💕 Modal Gallery */}
      {modalProject && (
        <div className="modal-overlay" onClick={() => setModalProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setModalProject(null)}>
              ✕
            </button>
            <h2>{modalProject.name}</h2>
            <p className="modal-desc">{modalProject.desc}</p>
            <div className="modal-gallery">
              {modalProject.thumbnails.map((img, i) => (
                <img key={i} src={img} alt={`${modalProject.name} ${i + 1}`} />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LearningProject;
