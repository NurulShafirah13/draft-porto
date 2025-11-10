import React from "react";
import "./masonry.scss";
import SplitText from "../../components/SplitText/SplitText"; // pastikan path benar

const Masonry = ({ title, subtitle, photos }) => {
  return (
    <section className="masonryGallery-section">
      {title && (
        <SplitText
          text={title}              // judul
          className="masonryGallery-title"
          color="#6cd46c"           // warna tunggal
          // colors={["#6cd46c","#ff4da6","#52b93b"]} // atau array warna tiap huruf
        />
      )}

      {subtitle && <p className="masonryGallery-subtitle">{subtitle}</p>}

      <div className="masonryGallery-grid">
        {photos.map((photo, index) => (
          <div key={index} className="masonryGallery-item">
            <img
              src={photo.src}
              alt={photo.alt || `photo-${index}`}
              className="masonryGallery-img"
              loading="lazy"
            />
            {(photo.title || photo.text) && (
              <div className="masonryGallery-overlay">
                {photo.title && <h3>{photo.title}</h3>}
                {photo.text && <p>{photo.text}</p>}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Masonry;
