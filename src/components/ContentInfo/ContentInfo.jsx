import React from "react";
import "./contentInfo.scss";

const ContentInfo = ({ title, sections = [] }) => {
  return (
    <div className="content-wrapper">
      <h1 className="main-title">{title}</h1>

      {sections.map((sec, index) => (
        <div
          className={`content-section ${index % 2 === 0 ? "left-img" : "right-img"}`}
          key={index}
        >
          <div className="content-image">
            <img src={sec.image} alt={sec.title} />
            {sec.caption && <span className="polaroid-caption">{sec.caption}</span>}
          </div>

          <div className="content-text">
            <h2>{sec.title}</h2>
            <p>{sec.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentInfo;
