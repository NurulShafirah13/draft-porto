import React, { useState } from "react";
import PropTypes from "prop-types";
import SplitText from "../SplitText/SplitText";
import "./workList.scss";

const WorkList = ({ title, data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // fallback kalau datanya kosong
  if (!data || data.length === 0) {
    return (
      <section className="worklist-section">
        <header>
          <h2 className="text-4xl font-bold text-pink-400">
            <SplitText text={title} />
          </h2>
        </header>
        <p className="text-center mt-6 text-gray-500 italic">
          No work data yet 💭
        </p>
      </section>
    );
  }

  return (
    <section className="worklist-section">
      <header>
        <h2 className="text-4xl font-bold text-pink-400">
          <SplitText text={title} />
        </h2>
      </header>

      <div className="worklist-container">
        {/* === LEFT SIDE === */}
        <div className="worklist-sidebar">
          {data.map((work, index) => (
            <button
              key={index}
              className={`worklist-btn ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {work.company}
            </button>
          ))}
        </div>

        {/* === RIGHT SIDE === */}
        <div key={activeIndex} className="worklist-details animate">
          <h3>
            {data[activeIndex].role}{" "}
            <span>@ {data[activeIndex].company}</span>
          </h3>
          <p className="date">{data[activeIndex].date}</p>
          <ul>
            {data[activeIndex].details.map((item, i) => (
              <li key={i}>
                <span className="check">♡</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

WorkList.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      date: PropTypes.string,
      details: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};

export default WorkList;
