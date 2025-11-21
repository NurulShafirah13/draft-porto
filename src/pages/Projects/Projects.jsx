import React from "react";
import LearningProject from "../../components/LearningProject/LearningProject";
import CircularGallery from "../../components/Masonry/Masonry";
import SertifInfo from "../../components/SertifInfo/SertifInfo";
import WorkInfo from "../../components/WorkInfo/WorkInfo";
import WorkList from "../../components/WorkList/WorkList";
import ProjectInfo from "../../components/ProjectInfo/ProjectInfo";
import Masonry from "../../components/Masonry/Masonry";
import ContentInfo from "../../components/ContentInfo/ContentInfo";
import AgendaInfo from "../../components/agendaInfo/AgendaInfo";

// Images
import queen from "../../assets/images/queen.png";
import Journal1 from "../../assets/images/journal1.png";
import fotoContoh from "../../assets/images/queen.png";
import img1 from "../../assets/images/queen.png";
import img2 from "../../assets/images/queen2.png";
import img3 from "../../assets/images/rara-2.png";
import img4 from "../../assets/images/shaf-logo.png";

// Bangkit Images
import bangkit1 from "../../assets/images/Bangkit/bangkit1.png";
import bangkit2 from "../../assets/images/Bangkit/bangkit2.png";
import bangkit3 from "../../assets/images/Bangkit/bangkit3.png";
import bangkit4 from "../../assets/images/Bangkit/bangkit4.png";
import bangkit5 from "../../assets/images/Bangkit/bangkit5.png";
import bangkit6 from "../../assets/images/Bangkit/bangkit6.png";

// Showcase website
import web1a from "../../assets/images/web-projects/mindjoy.png";
import web1b from "../../assets/images/web-projects/viume.png";
import web1c from "../../assets/images/web-projects/citarum.png";
import web1d from "../../assets/images/web-projects/looker.png";
import web1e from "../../assets/images/web-projects/lptm.png";
import web1f from "../../assets/images/web-projects/bpjs.png";

//Showcase Scroll Website
import mindjoy1 from "../../assets/images/web-scroll/mindjoy1.png";
import mindjoy2 from "../../assets/images/web-scroll/mindjoy.png";
import viume1 from "../../assets/images/web-scroll/viume1.png";
import viume2 from "../../assets/images/web-scroll/viume2.png";
import viume3 from "../../assets/images/web-scroll/viume3.png";
import viume4 from "../../assets/images/web-scroll/viume4.png";
import citarum1 from "../../assets/images/web-scroll/citarum1.png";
import citarum2 from "../../assets/images/web-scroll/citarum2.png";
import citarum3 from "../../assets/images/web-scroll/citarum3.png";
import looker1 from "../../assets/images/web-scroll/looker1.png";
import looker2 from "../../assets/images/web-scroll/looker2.png";
import looker3 from "../../assets/images/web-scroll/looker3.png";
import lptm1 from "../../assets/images/web-scroll/lptm1.png";
import lptm2 from "../../assets/images/web-scroll/lptm2.png";
import bpjs1 from "../../assets/images/web-scroll/bpjs1.png";
import bpjs2 from "../../assets/images/web-scroll/bpjs2.png";
import bpjs3 from "../../assets/images/web-scroll/bpjs3.png";

const Projects = () => {
  const itemsMasonry = [
    { src: img1, title: "Eksplorasi Ide", text: "Menyusun rancangan awal" },
    { src: img2, title: "Proses Desain", text: "Membuat prototipe interaktif" },
    { src: img3, title: "Implementasi", text: "Mengembangkan dengan React" },
    { src: img4, title: "Testing", text: "Evaluasi performa dan UX" },
    { src: img2 },
    { src: img1 },
    { src: img3 },
  ];

  const projectData = [
    {
      title: "Clean River Initiative",
      subtitle: "Mengelola sungai berkelanjutan dengan partisipasi masyarakat.",
      items: [
        {
          title: "Survey Awal",
          text: "Mengumpulkan data sungai di 4 provinsi.",
        },
        {
          title: "Pelatihan",
          text: "Meningkatkan kapasitas masyarakat lokal.",
        },
        {
          title: "Evaluasi",
          text: "Menilai efektivitas program bersih sungai.",
        },
      ],
      images: [
        { src: "https://picsum.photos/600/300?random=1" },
        { src: "https://picsum.photos/600/300?random=2" },
        { src: "https://picsum.photos/300/600?random=3" },
      ],
    },
    {
      title: "AI-HEART: Telemedicine Support",
      subtitle: "Sistem AI untuk mendukung layanan rumah sakit.",
      items: [
        {
          title: "Data Collection",
          text: "Mengumpulkan data ECG dari pasien.",
        },
        {
          title: "Model Training",
          text: "Melatih CNN untuk deteksi kelainan jantung.",
        },
        { title: "Deployment", text: "Integrasi dengan sistem RS." },
      ],
      images: [
        { src: "https://picsum.photos/600/300?random=4" },
        { src: "https://picsum.photos/600/300?random=5" },
        { src: "https://picsum.photos/300/600?random=6" },
      ],
    },
  ];

  const journalData = [
    {
      company: "OpenAI",
      role: "Frontend Developer @ OpenAI",
      date: "2024 – Present",
      details: [
        "Built interactive UIs using Next.js and GSAP.",
        "Created reusable component systems for internal tools.",
        "Collaborated on AI-powered UI experiments.",
      ],
    },
    {
      company: "Adobe",
      role: "Design Engineer @ Adobe",
      date: "2022 – 2024",
      details: [
        "Developed animations and micro-interactions for Creative Cloud.",
        "Led performance optimization project reducing load time by 30%.",
        "Worked closely with product design for consistency.",
      ],
    },
  ];

  const imageJournal = [
    {
      title: "UI Design Project",
      desc: "Designed an interactive contact form with smooth animations.",
      img: Journal1,
    },
    {
      title: "UI Design Project",
      desc: "Designed an interactive contact form with smooth animations.",
      img: Journal1,
    },
    {
      title: "UI Design Project",
      desc: "Designed an interactive contact form with smooth animations.",
      img: Journal1,
    },
  ];

  const projectsTes = [
    {
      id: 1,
      name: "MindJoy",
      desc:
        "A landing page for a profile project created through a collaboration " +
        "between my team (Mobile Development, Cloud Computing, and Machine Learning). " +
        "We built an app that detects facial emotions and predicts mental test results " +
        "using Python, Kotlin, HTML, and Jupyter Notebook.",
      cover: web1a,
      thumbnails: [mindjoy1, mindjoy2],
    },
    {
      id: 2,
      name: "ViuMe",
      desc:
        "A dashboard my team and I developed for our final university project using " +
        "React.js, SCSS, and HTML. It features three user roles—admin, pathologist, " +
        "and doctor—to collaborate in managing data and diagnosing pap smear results.",
      cover: web1b,
      thumbnails: [viume1, viume2, viume3, viume4],
    },
    {
      id: 3,
      name: "Citarum Harum",
      desc:
        "A landing page I created for the Citarum Harum booth at the 2024 World Water Forum " +
        "in Bali. It showcases project profiles, activities, and data related to the " +
        "management of the Citarum River.",
      cover: web1c,
      thumbnails: [citarum1, citarum2, citarum3],
    },
    {
      id: 4,
      name: "Dashboard Database",
      desc:
        "A dashboard I developed to support consultants working on various aspects of " +
        "river management projects across Indonesia.",
      cover: web1d,
      thumbnails: [looker1, looker2, looker3],
    },
    {
      id: 5,
      name: "LPTM",
      desc:
        "A company profile landing page with a simple dashboard for CRUD operations and " +
        "displaying participant data after barcode scanning. Built using React.js, " +
        "SCSS, and HTML.",
      cover: web1e,
      thumbnails: [lptm1, lptm2],
    },
    {
      id: 6,
      name: "BPJS",
      desc:
        "UI/UX design suggestions for improving BPJS Kesehatan's JKN mobile app, created " +
        "as my final assignment during an internship under the Kampus Merdeka program.",
      cover: web1f,
      thumbnails: [bpjs1, bpjs2, bpjs3],
    },
  ];

  return (
    <>
      <section className="learningProject">
        <LearningProject projects={projectsTes} />
      </section>

      <section>
        <AgendaInfo
          leftImages={[
            bangkit1,
            bangkit2,
            bangkit3,
            bangkit4,
            bangkit5,
            bangkit6,
          ]}
          title="My College Learning Explorations"
          paragraph={[
            "Joining the MSIB Bangkit program for Cloud Computing has been a valuable experience for me. I learned through two effective learning methods: asynchronous sessions, where I completed tasks and materials on platforms like Dicoding, Coursera, and GCSB, and synchronous sessions led by experts in technology and skill development. Bangkit also offered inspiring Guest Speaker sessions that broadened my knowledge and motivation.",
          ]}
        />
      </section>

      <section>
        <SertifInfo />
      </section>

      <section>
        <WorkList title="My Journal" data={journalData} />
        <WorkInfo title="" data={imageJournal} />
      </section>

      <section>
        <Masonry
          title="Galeri Proyek"
          subtitle="Kumpulan dokumentasi proyek dan ide kreatif"
          photos={itemsMasonry}
        />
      </section>

      <section>
        {projectData.map((project, index) => (
          <ProjectInfo
            key={index}
            title={project.title}
            subtitle={project.subtitle}
            items={project.items}
            images={project.images}
          />
        ))}
      </section>
    </>
  );
};

export default Projects;
