import React from "react";
import "./hardSkills.scss";
import SplitText from '../SplitText/SplitText';

function HardSkill() {
  const skills = [
    {
      category: "Frontend & Backend",
      items: [
        { name: "React", icon: "react.png" },
        { name: "JavaScript", icon: "javascript.png" },
        { name: "CSS", icon: "css-3.png" },
        { name: "SQL", icon: "sql.png" },
        { name: "Python", icon: "python.png" },
        { name: "HTML", icon: "html-logo.png" },
      ],
    },
    {
      category: "Tools & Others",
      items: [
        { name: "GitHub", icon: "github.png" },
        { name: "LinkedIn", icon: "linkedin.png" },
        { name: "Firebase", icon: "backend.png" },
        { name: "Visual Studio Code", icon: "vsc.png" },
        { name: "LookerStudio", icon: "looker-studio.png" },
        { name: "Oracle", icon: "oracle.png" },
      ],
    },
    {
      category: "Language Skills",
      items: [
        { name: "Bahasa (Native Proficiency)", icon: "indo.png" },
        { name: "English (TOEIC Score: 675)", icon: "english.png" },
      ],
    },
  ];

  return (
    <section className="skills">
      <header className="skills-header">
        <h2>
          <SplitText
            text="The Tools I’m Exploring and Growing With"
            color="#6cd46c"
            className="skills-title"
          />
        </h2>
        <p>
          I’m still in the process of learning and exploring new technologies.
          Every project I build helps me understand more about how things work — 
          from front-end frameworks to database management. Learning never stops.
        </p>
      </header>

      <div className="skills-wrapper">
        <div className="skills-container">
          {skills.map((skillCategory, index) => (
            <article key={index} className="skill-category">
              <h3>{skillCategory.category}</h3>
              <div className="skill-items">
                {skillCategory.items.map((item, i) => (
                  <figure key={i} className="skill-item">
                    <img
                      src={require(`../../assets/images/${item.icon}`)}
                      alt={item.name}
                      className="skill-icon"
                    />
                    <figcaption>{item.name}</figcaption>
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="soft-art-section">
           <h2>
          <SplitText
            text="About My Skills"
            color="#6cd46c"
            className="skills-title"
          />
        </h2>
          

          <div className="skills-description">
            <article className="text-content">
              <h3>Hard Skills</h3>
              <p>
                I’m continuously learning various technologies to build modern
                applications. I also explore tools like Microsoft Office to support my
                work in creating reports and journals. I believe that technical skills
                go beyond coding — they’re about understanding problems and crafting
                efficient, meaningful solutions.
              </p>
              <ul>
                <li>Ms.Office</li>
                <li>Web Development</li>
                <li>Data Analyst</li>
                <li>Database</li>
              </ul>
            </article>

            <article className="text-content">
              <h3>Soft Skills</h3>
              <p>
                Beyond technical abilities, I have strong communication and teamwork
                skills. I adapt quickly, love learning new things, and thrive in
                dynamic environments. I believe that positivity and empathy are also
                key parts of professional success.
              </p>
              <ul>
                <li>Time-Management</li>
                <li>Empathy</li>
                <li>Team-Work</li>
                <li>Self-Motivation</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HardSkill;
