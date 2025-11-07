import React from "react";
import "./workInfo.scss";

const WorkInfo = ({ title, data }) => {
  return (
    <section className="work-section">
      <header>
        <h2>{title}</h2>
      </header>

      <article>
        <div className="container">
          {data.map((item, i) => (
            <div className="card" key={i}>
              <div className="img-container">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="card-details">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default WorkInfo;
