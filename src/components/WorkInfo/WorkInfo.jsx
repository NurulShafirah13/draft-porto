import React from "react";
import "./workInfo.scss";
import SplitText from '../../components/SplitText/SplitText';

const WorkInfo = ({ title, data }) => {
  return (
    <section className="work-section">
      <header>
        <h2>
          <SplitText
            text={title}
            color="#6cd46c"
            className="journal-title"
          />
        </h2>
      </header>

      <article>
        <div className="container">
          {data.map((item, i) => (
            <div className="card">
              <div className="page front">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="page back">
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
