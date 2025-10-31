import React from "react";
import Navbar from "../../components/navbar/Navbar";

function Projects() {
  const projects = [
    {
      title: "Dashboard Admin Pelatihan",
      link: "https://dashboard-rara.vercel.app",
      description: "Aplikasi CRUD data peserta pelatihan berbasis React dan Firebase."
    },
    {
      title: "Clean River Project",
      link: "https://riverproject.hostinger.com",
      description: "Website monitoring sungai dalam proyek Bappenas."
    },
    {
      title: "Personal Blog",
      link: "https://mindjoy.github.io",
      description: "Blog pribadi untuk berbagi catatan dan pembelajaran IT."
    }
  ];

  return (
    <section className="projects">
      <Navbar/>
      <h2>My Projects 💻</h2>
      <div className="project-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <a href={p.link} target="_blank" rel="noreferrer">
              Lihat Website
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
