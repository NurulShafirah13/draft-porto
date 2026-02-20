import CollegeImg1 from "../../assets/images/grafis/pragma.jpeg";
import "./collegeInfo.scss";
import CollegeImg2 from "../../assets/images/grafis/kampus-merdeka.jpeg";
import CollegeImg3 from "../../assets/images/grafis/sema.jpeg";
import CollegeImg4 from "../../assets/images/grafis/bangkit.jpeg";

const CollageInfo = () => {
  return (
    <section className="collage-info">
      <header>
        <h2>College Experiences</h2>
      </header>

      <article>
        <div className="collegeInfo-section-left">
          <div className="collegeInfo-first">
            <img src={CollegeImg3} alt="organization" />
            <div className="text-box">
              <h4>Organizational Journey</h4>
              <p>Organizational experiences that helped shape my interpersonal skills.</p>
            </div>
          </div>
        </div>

        <div className="collegeInfo-section-right">
          <div className="collegeInfo-second">
            <img src={CollegeImg1} alt="AI talent" />
            <div className="text-box">
              <h4>AI Talent Program</h4>
              <p>Developing advanced skills in AI and machine learning.</p>
            </div>
          </div>

          <div className="collegeInfo-third">
            <img src={CollegeImg4} alt="Bangkit" />
            <div className="text-box">
              <h4>Bangkit Academy</h4>
              <p>Learning Google technologies, Cloud fundamentals, and real-world problem-solving.</p>
            </div>
          </div>

          <div className="collegeInfo-fourth">
            <img src={CollegeImg2} alt="Internship" />
            <div className="text-box">
              <h4>Internship Experience</h4>
              <p>My first professional experience in the working environment.</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default CollageInfo;
