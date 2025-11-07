import LearningProject from "../../components/LearningProject/LearningProject";
import queen from "../../assets/images/queen.png";
import CircularGallery from "../../components/CircularGallery/CircularGallery";
import SertifInfo from "../../components/SertifInfo/SertifInfo";
import WorkInfo from "../../components/WorkInfo/WorkInfo";
import Journal1 from "../../assets/images/journal1.png";
import WorkList from "../../components/WorkList/WorkList";


const Projects = () => {
  // const items = [
  //   { id: "1", img: queen, url: "#", height: 380 },
  //   { id: "2", img: queen, url: "#", height: 270 },
  //   { id: "3", img: queen, url: "#", height: 500 },
  //   { id: "4", img: queen, url: "#", height: 320 },
  //   { id: "5", img: queen, url: "#", height: 450 },
  //   { id: "6", img: queen, url: "#", height: 290 },
  // ];

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
        <div style={{ height: "600px", position: "relative" }}>
          <CircularGallery
            bend={3}
            textColor="#68031eff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>
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
