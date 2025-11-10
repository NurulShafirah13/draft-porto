import React from "react";
import "./projectInfo.scss";
import { motion } from "framer-motion";
import SplitText from "../../components/SplitText/SplitText"; // pastikan path benar

const ProjectInfo = ({ title, subtitle, items = [], images = [] }) => {
  const leftImages = images.slice(0, 2);
  const rightImage = images[2];

  return (
    <section className="process-section">
      <div className="process-text">
        {title && (
          <SplitText
            text={title}
            className="title"
            color="#6cd46c"       // bisa ganti warna per halaman
            // colors={["#6cd46c","#ff4da6","#52b93b"]} // atau array warna tiap huruf
          />
        )}

        <motion.p
          className="subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {subtitle}
        </motion.p>

        <div className="steps">
          {items.map((item, index) => (
            <motion.div
              className="step"
              key={index}
              initial={{ opacity: 0, y: 20, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="process-image">
        <div className="left-column">
          {leftImages.map((img, i) => (
            <motion.div
              key={i}
              className="image-card landscape"
              whileHover={{ scale: 1.04, rotate: -1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img src={img.src} alt={`image-${i}`} />
            </motion.div>
          ))}
        </div>

        {rightImage && (
          <motion.div
            className="right-column"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img src={rightImage.src} alt="portrait" />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectInfo;
