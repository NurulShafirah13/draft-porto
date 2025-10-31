import React from "react";
import "./Skills.scss";
import Navbar from "../../components/navbar/Navbar";

function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", icon: "react.png" },
        { name: "JavaScript", icon: "javascript.png" },
        { name: "CSS", icon: "css-3.png" },
        { name: "HTML", icon: "browser 2.png" }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: "backend.png" },
        { name: "Firebase", icon: "backend.png" }
      ]
    },
    {
      category: "Tools & Others",
      items: [
        { name: "GitHub", icon: "github (2).png" },
        { name: "LinkedIn", icon: "linkedin.png" },
        { name: "Mail", icon: "mail.png" }
      ]
    },
    {
      category: "Soft Skills",
      items: [
        { name: "Hard Skills", icon: "hard skill.png" },
        { name: "Soft Skills", icon: "softskills.png" }
      ]
    }
  ];

  return (
    <section className="skills">
        <Navbar />
      <h2>My Skills 🚀</h2>
      <div className="skills-container">
        {skills.map((skillCategory, index) => (
          <div key={index} className="skill-category">
            <h3>{skillCategory.category}</h3>
            <div className="skill-items">
              {skillCategory.items.map((item, i) => (
                <div key={i} className="skill-item">
                  <img
                    src={`/assets/images/${item.icon}`}
                    alt={item.name}
                    className="skill-icon"
                  />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
