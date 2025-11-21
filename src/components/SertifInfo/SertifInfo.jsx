import React, { useState, useEffect } from "react";
import "./sertifInfo.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Sertif1 from "../../assets/images/sertif/sertif-sema1.JPG";
import Sertif2 from "../../assets/images/sertif/sertif-bangkit.jpg";
import Sertif3 from "../../assets/images/sertif/sertif-pragma1.jpg";
import Sertif4 from "../../assets/images/sertif/sertif-tfd.jpg";
import Sertif5 from "../../assets/images/sertif/sertif-sema2.jpg";
import Sertif6 from "../../assets/images/sertif/sertif-asdos.jpg";
import Sertif7 from "../../assets/images/sertif/sertif-bpjs.jpg";
import Sertif8 from "../../assets/images/sertif/sertif-coursera.jpg";

import SplitText from "../../components/SplitText/SplitText";

gsap.registerPlugin(ScrollTrigger);

const SertifInfo = () => {
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
      title: "Certificate of Organization",
      subtitle: "Leadership & Organizational Achievements",
      img: Sertif1,
      desc: "Recognized for serving as Co-Secretary in a faculty-level student organization.",
    },
    {
      title: "Certificate of Completion",
      subtitle: "Project",
      img: Sertif2,
      desc: "Acknowledged for outstanding collaboration in team-based academic and creative projects.",
    },
    {
      title: "Certificate of Competition and Contribution",
      subtitle: "Leadership",
      img: Sertif3,
      desc: "Awarded for demonstrating project and teamwork in creative project initiatives.",
    },
    {
      title: "Certificate of Exam",
      subtitle: "Creativity",
      img: Sertif4,
      desc: "Successfully passed the TensorFlow Developer Certificate examination.",
    },
    {
      title: "Certificate of Organization",
      subtitle: "Innovation",
      img: Sertif5,
      desc: "Recognized for contributing as Secretary within the faculty organization.",
    },
    {
      title: "Certificate of Appreciation",
      subtitle: "Professionalism",
      img: Sertif6,
      desc: "Appreciated for serving as a Teaching Assistant in the Database course.",
    },
    {
      title: "Certificate of Professional Training & Internship",
      subtitle: "Excellence",
      img: Sertif7,
      desc: "Awarded for completing an internship program at BPJS Kesehatan with notable performance.",
    },
    {
      title: "Certificate of Learning & Skill Development",
      subtitle: "Teamwork",
      img: Sertif8,
      desc: "Completed a Cloud Computing specialization course on Coursera.",
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
      <header className="mag-header">
        {/* Baris 1 — teks + garis kiri kanan */}
        <div className="line-title">
          <span>My Certificates</span>
        </div>

        {/* Baris 2 & 3 */}
        <div className="line-full"></div>
        <div className="line-full"></div>

        {/* Baris 4 — judul besar */}
        <h2>A Gallery of Accomplishments</h2>

        {/* Baris 5 */}
        <div className="line-full"></div>
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

export default SertifInfo;
