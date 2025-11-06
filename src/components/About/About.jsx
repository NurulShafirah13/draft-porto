import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from '../../components/SplitText/SplitText';
import './About.scss';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      section.querySelector('header h2'),
      { opacity: 0, x: 80 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      section.querySelector('article'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section className="about" id="about" ref={sectionRef}>
      <header>
        <h2 className="text-4xl font-bold text-pink-400">
          <SplitText text="About Me" />
        </h2>
      </header>

      <article>
        <p>
          Demonstrated dedication through participation in the Artificial
          Intelligence Program and completion of the TensorFlow Developer (TFD)
          Global Certification. Skilled in data analysis, database management,
          web development, content management, and information systems.
        </p>

        <p>
          Experienced as a Junior Database Consultant at a government
          institution, conducting research on Clean and Sustainable River
          Management. Also worked as an Account Receivable Administrator in a
          container shipping company, showcasing adaptability by successfully
          handling financial operations despite a different academic background.
          Interested in research, data processing, and observation to gain new
          insights in unique ways, with a strong commitment to professional
          growth and development.
        </p>
      </article>
    </section>
  );
}

export default About;
