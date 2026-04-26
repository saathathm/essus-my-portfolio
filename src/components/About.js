import aboutPic from "../assets/img/aboutpic.jpg";
export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <h3>Web Developer</h3>
        <p>
          Hi, I'm Mohamed Sa Aadhath, a web developer with a focus on building
          responsive and practical web applications. I work with React.js,
          Node.js, PHP, Laravel, and databases to create clean, maintainable
          solutions. I am currently strengthening my full stack development
          skills through portfolio projects, with the goal of growing into a
          professional software engineering role.
        </p>
      </div>
      <div className="about-img">
        <img src={aboutPic} alt="about" />
      </div>
    </section>
  );
}
