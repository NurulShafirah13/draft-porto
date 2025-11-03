import React from "react";
import "./hardSkills.scss";
import Navbar from "../../components/navbar/Navbar";

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
    <>
      <Navbar />
      <main className="skills">
        <header>
          <h2>The Tools I’m Exploring and Growing With 🚀</h2>

          <h3>
            I’m still in the process of learning and exploring new technologies.
            Every project I build helps me understand more about how things work
            — from front-end frameworks to database management. Learning never
            stops.
          </h3>
        </header>

        {/* daftar skills utama */}
        <section className="skills-container">
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
        </section>

        {/* dua kolom: hard & soft skills */}
        <section className="soft-art-section">
          <h2>About My Skills</h2>

          <div className="skills-description">
            {/* kiri */}
            <div className="text-content">
              <h3>Hard Skills</h3>
              <p>
                I’m continuously learning various technologies to build modern
                applications. I also explore tools like Microsoft Office to
                support my work in creating reports and journals. I believe that
                technical skills go beyond coding — they’re about understanding
                problems and crafting efficient, meaningful solutions.
              </p>
              

            </div>

            {/* kanan */}
            <div className="text-content">
              <h3>Soft Skills</h3>
              <p>
                Beyond technical abilities, I have strong communication and
                teamwork skills. I adapt quickly, love learning new things, and
                thrive in dynamic environments. I believe that positivity and
                empathy are also key parts of professional success.
              </p>
              
                <h4>Time-Management</h4>
                <h4>Empaty</h4>
              
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default HardSkill;
