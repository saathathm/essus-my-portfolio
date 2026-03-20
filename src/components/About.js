import aboutPic from "../assets/img/aboutpic.png";
export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <h3>Full-Stack Developer</h3>
        <p>
          Hi, I'm Mohamed Sa Aadhath, a passionate Full-Stack Developer with a
          focus on building dynamic and responsive web applications. I
          specialize in the MERN stack and enjoy working on projects that
          challenge me to learn and grow. My goal is to deliver clean,
          maintainable code that enhances user experience and provides real
          value.
        </p>
      </div>
      <div className="about-img">
        <img src={aboutPic} alt="about" />
      </div>
    </section>
  );
}
