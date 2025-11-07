import WorkInfo from "../../components/WorkInfo/WorkInfo";
import Sertif1 from "../../assets/images/sertif-1.JPG";
import Sertif2 from "../../assets/images/sertif-1.JPG";
import Sertif3 from "../../assets/images/sertif-1.JPG";
import WorkList from "../../components/WorkList/WorkList";

function Experiences() {
  //mengisi data saat manggil props dari komponen workInfo
  const workData = [
    {
      title: "UI Design Project",
      desc: "Designed an interactive contact form with smooth animations.",
      img: Sertif1,
    },
    {
      title: "Portfolio Website",
      desc: "Developed and deployed a personal portfolio with React + GSAP.",
      img: Sertif2,
    },
    {
      title: "Freelance Work",
      desc: "Handled client communication and visual design projects.",
      img: Sertif3,
    },
  ];

  const myWorks = [
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

  return (
    <section className="contact">
      <section>
        <WorkList title="Work Experiences" data={myWorks} />;
      </section>
      <section>
        <WorkInfo title="My Contact Works 💌" data={workData} />
      </section>
    </section>
  );
}

export default Experiences;
