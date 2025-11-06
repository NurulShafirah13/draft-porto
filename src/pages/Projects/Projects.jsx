import LearningProject from "../../components/LearningProject/LearningProject";
import queen from "../../assets/images/queen.png";
  import CircularGallery from '../../components/CircularGallery/CircularGallery'

const Projects = () => {
  const items = [
    { id: "1", img: queen, url: "#", height: 380 },
    { id: "2", img: queen, url: "#", height: 270 },
    { id: "3", img: queen, url: "#", height: 500 },
    { id: "4", img: queen, url: "#", height: 320 },
    { id: "5", img: queen, url: "#", height: 450 },
    { id: "6", img: queen, url: "#", height: 290 },
  ];

  return (
    <>
      <section className="learningProject">
        <LearningProject />
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
