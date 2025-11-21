import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "../../components/SplitText/SplitText";
import "./About.scss";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      section.querySelector("header h2"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      section.querySelectorAll("article p"),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="about-vintage" ref={sectionRef}>
      <div className="about-inner">
        <header>
          <h2>
            <SplitText text="About Me" color="#6cd46c" />
          </h2>
        </header>

        <article>
          <p>
            I am Shafirah — an enthusiast who loves learning, exploring new
            things, and observing how they shape the world around me. I’m deeply
            curious about how technology — and ideas beyond it — can solve
            real-world problems, inspire meaningful research, and create
            positive change.
          </p>
          <p>
            I began my journey through the Bangkit Cloud Computing Graduate
            Program led by Google, Tokopedia, Gojek, and Traveloka, where I
            built a strong foundation in cloud-based application development.
            Later, I joined the AI Talent Program, an independent university
            study focused on machine learning and artificial intelligence,
            through which I had the opportunity to earn the TensorFlow Global
            Certification.
          </p>
          <p>
            For my final university project, my team and I developed a Digital
            Pathology Platform using artificial intelligence for cervical cancer
            diagnosis, which we also presented at the Pragma Student Workshop
            Competition 2023.
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;
