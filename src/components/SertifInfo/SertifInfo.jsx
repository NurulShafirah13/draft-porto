import React, { useState, useEffect } from "react";
import "./sertifInfo.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Sertif1 from "../../assets/images/sertif-1.JPG";

gsap.registerPlugin(ScrollTrigger);

const WorkInfo = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    // animasi muncul dari bawah
    gsap.fromTo(
      ".certif-card",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        overwrite: false,
        scrollTrigger: {
          trigger: ".certif-wrapper",
          start: "top 85%",
          once: true,
        },
      }
    );
  }, [visibleCount]);

  const data = [
    {
      title: "Certificate One",
      subtitle: "Achievement",
      img: Sertif1,
      desc: "Awarded for excellence and dedication to learning.",
    },
    {
      title: "Certificate Two",
      subtitle: "Project",
      img: Sertif1,
      desc: "Outstanding contribution in innovation and design.",
    },
    {
      title: "Certificate Three",
      subtitle: "Leadership",
      img: Sertif1,
      desc: "Leadership and collaboration in creative projects.",
    },
    {
      title: "Certificate Four",
      subtitle: "Creativity",
      img: Sertif1,
      desc: "Recognized for creative problem-solving.",
    },
    {
      title: "Certificate Five",
      subtitle: "Innovation",
      img: Sertif1,
      desc: "Innovation and continuous learning.",
    },
    {
      title: "Certificate Six",
      subtitle: "Professionalism",
      img: Sertif1,
      desc: "Commitment to growth and excellence.",
    },
    {
      title: "Certificate Seven",
      subtitle: "Excellence",
      img: Sertif1,
      desc: "Achievement in academic excellence.",
    },
    {
      title: "Certificate Eight",
      subtitle: "Teamwork",
      img: Sertif1,
      desc: "Outstanding collaboration in team projects.",
    },
    {
      title: "Certificate Nine",
      subtitle: "Dedication",
      img: Sertif1,
      desc: "Consistency and commitment to quality work.",
    },
  ];

  const handleShowMore = () => {
    if (visibleCount >= data.length) {
      setVisibleCount(3);
    } else {
      setVisibleCount((prev) => prev + 3);
    }
  };

  return (
    <section className="certif-section">
      <header>
        <h1>My Work Experiences</h1>
      </header>

      <div className="certif-wrapper">
        {data.slice(0, visibleCount).map((item, i) => (
          <article key={i} className="certif-card">
            <div className="image-container">
              <img src={item.img} alt={item.title} />
              <div className="content">
                <h3>{item.subtitle}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
            <h2 className="card-title">{item.title}</h2>
          </article>
        ))}
      </div>

      <button className="show-more-btn" onClick={handleShowMore}>
        {visibleCount >= data.length ? "Show Less" : "Show More"}
      </button>
    </section>
  );
};

export default WorkInfo;
