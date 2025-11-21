import React, { useEffect } from "react";
import "./agendaInfo.scss";

const AgendaInfo = ({ leftImages = [], title, paragraph }) => {
  const firstTwo = leftImages.slice(0, 2);
  const restImages = leftImages.slice(2);

  console.log("FIRST TWO IMAGES:", firstTwo); // ← LETAK YANG BENAR

  useEffect(() => {
    const items = document.querySelectorAll(
      ".agenda-page .left-img.not-visible"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("not-visible");
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="agenda-page">
      <section className="agenda-mag">
        {/* BAGIAN 1 — 2 FOTO + TEKS */}
        <div className="agenda-top">
          <div className="agenda-left">
            {firstTwo.map((img, i) => (
              <div key={i} className="left-img not-visible">
                <img src={img} alt={`agenda-${i}`} />
              </div>
            ))}
          </div>

          <div className="agenda-middle">
            <h2 className="agenda-title">
              {title.split(" ").map((word, i) => (
                <span key={i}>{word}</span>
              ))}
            </h2>

            {paragraph.map((para, i) => (
              <p key={i} className="agenda-text">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* BAGIAN 2 — SCROLL BAWAH */}
        {restImages.length > 0 && (
          <div className="agenda-scroll">
            {restImages.map((img, i) => (
              <div key={i} className="scroll-img">
                <img src={img} alt={`agenda-scroll-${i}`} />
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default AgendaInfo;
