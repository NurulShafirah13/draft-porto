import LearningProject from "../../components/LearningProject/LearningProject";
import queen from "../../assets/images/queen.png";
import CircularGallery from "../../components/Masonry/Masonry";
import SertifInfo from "../../components/SertifInfo/SertifInfo";
import WorkInfo from "../../components/WorkInfo/WorkInfo";
import Journal1 from "../../assets/images/journal1.png";
import WorkList from "../../components/WorkList/WorkList";
import ProjectInfo from "../../components/ProjectInfo/ProjectInfo";
import fotoContoh from "../../assets/images/queen.png";
import img1 from "../../assets/images/queen.png";
import img2 from "../../assets/images/queen2.png";
import img3 from "../../assets/images/rara-2.png";
import img4 from "../../assets/images/shaf-logo.png";
import Masonry from "../../components/Masonry/Masonry";

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

  return (
    <>
      <section className="learningProject">
        <LearningProject />
      </section>

      <section>
        <WorkList title="My Journal" data={journalData} />
        <WorkInfo title="" data={imageJournal} />
      </section>

      <section>
        <SertifInfo />
      </section>

      <section>
        <Masonry
          title="Galeri Proyek"
          subtitle="Kumpulan dokumentasi proyek dan ide kreatif"
          photos={itemsMasonry}
        />
        ;
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

      {/* <section>
        <Masonry
          items={items}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.96}
        />
      </section> */}
    </>
  );
};

export default Projects;
