import React from "react";
import "./hardSkills.scss";
import SplitText from "../SplitText/SplitText";

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
          from front-end frameworks to database management. Learning never
          stops.
        </p>
      </header>

      <div className="skills-wrapper">
        {/* === Skill Cards === */}
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

        {/* === About My Skills Section === */}
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
                I’m constantly learning and exploring new technologies to build
                modern and meaningful applications. I love getting inspired by
                different ideas and turning them into something real through
                practice and curiosity.
              </p>
              <p>
                I also enjoy using tools like Microsoft Office and any other
                collaboration tools to support my work in creating reports and
                journals, turning ideas into something organized and impactful.
              </p>

              <p>
                I know I still have a long way to go, but every small step I
                take brings me closer to improvement — and that’s what keeps me
                excited to learn more.
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
                For me, skills aren’t just about mastering tools or technologies
                — they’re also about understanding people. Working in dynamic
                environments has taught me how to listen, empathize, and
                appreciate every different perspective.
              </p>
              <p>
                It’s in those collaborations that I learn the most — about
                patience, communication, and the beauty of teamwork. I’ve come
                to realize that time management, clear communication, and
                creativity aren’t just professional skills — they’re the bridges
                that connect ideas and make them come alive.
              </p>
              <p>
                Seeing others grow and improve doesn’t make me feel left behind;
                instead, it inspires me to grow together, to keep learning, and
                to become a better version of myself each day.
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
