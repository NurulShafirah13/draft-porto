import CollegeImg1 from "../../assets/images/grafis/pragma.jpeg";
import "./workIntro.scss";

const WorkIntro = () => {
  return (
    <section className="work-intro">
      <header className="masthead">
        <div className="project-header">
          <h1>My Experiences</h1>
          <div className="decor-line"></div>
        </div>
        {/* <h1 className="paper-title">My Experiences</h1> */}
        <div className="strapline">
          CHRONICLING THE PAST, PRESENT, AND FUTURE
        </div>
      </header>

      <div className="intro-row">
        <div className="intro-left">
          <h2>Learning, Growing, Becoming</h2>
          <p className="sub">from college to work experiences</p>
        </div>
      </div>

      <article className="article">
        {/* GAMBAR DI KIRI */}
        <figure className="article-figure">
          <img src={CollegeImg1} alt="foto-kuliah" />
          <figcaption>
            AI Talent Students gather at the opening of Pragma 39 — Yarsi University
          </figcaption>
        </figure>

        {/* TEKS DI KANAN */}
        <div className="article-text">
          <p>
            <span className="dropcap">D</span>
            uring my university years, I actively participated in various
            activities and truly enjoyed the journey. Through these experiences,
            I gained valuable lessons that helped shape my mindset and personal
            growth. The photo beside this text was taken when my friends and I
            participated in Pragma 39, which was held on our campus. The
            competition brought together participants not only from Indonesia,
            but also from Thailand and Japan. Through this event, I learned the
            importance of teamwork and healthy competition, and I also had the
            opportunity to make new friends from different countries. In
            addition to competitions, I took part in several programs under
            Kampus Merdeka, including the Independent Internship Program and the
            AI Talent program organized by my university. Through these
            programs, I was able to deepen my knowledge in artificial
            intelligence and even earned an international certification funded
            by a grant. This opportunity became one of the achievements I am
            truly grateful for. Beyond academics, I was also actively involved
            in a faculty-level student organization for two years. These
            organizational experiences were both enjoyable and meaningful,
            helping me develop responsibility, teamwork, and leadership skills.
            After graduating from university, I was accepted into a government
            institution. In this role, I continue to learn many new things,
            including gaining hands-on experience by visiting various locations
            to collect information directly from the field. All of these
            experiences have broadened my perspective and enriched my life
            journey. Today, I remain open and hopeful for many more meaningful
            opportunities in the future.
          </p>
        </div>
      </article>
    </section>
  );
};
export default WorkIntro;
