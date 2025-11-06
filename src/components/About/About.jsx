import SplitText from '../../components/SplitText/SplitText'
import './About.scss';

function About() {
  return (
    <section className="about" id="about">
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
