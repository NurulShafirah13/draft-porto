import CollegeImg1 from "../../assets/images/grafis/pragma.jpeg";
import "./workIntro.scss";

const WorkIntro = () => {
  return (
    <section className="work-intro">
      <header className="masthead">
        <h1 className="paper-title">My Experiences</h1>
        <div className="strapline">
          CHRONICLING THE PAST, PRESENT, AND FUTURE
        </div>
      </header>

      <div className="intro-row">
        <div className="intro-left">
          <h2>judul nya nanti</h2>
          <p className="sub">from college to work experiences</p>
        </div>
      </div>

      <article className="article">
        {/* GAMBAR DI KIRI */}
        <figure className="article-figure">
          <img src={CollegeImg1} alt="foto-kuliah" />
          <figcaption>
            Students gather at the opening — caption vintage
          </figcaption>
        </figure>

        {/* TEKS DI KANAN */}
        <div className="article-text">
          <p>
            <span className="dropcap">C</span>
            ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.


          </p>
        </div>
      </article>
    </section>
  );
};
export default WorkIntro;
