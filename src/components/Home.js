import saadhath from "../assets/img/saadh.jpg";

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hi, Myself</h3>
        <h1>Mohamed Sa Aadhath</h1>
        <h3>
          And I'm a <span>Web Developer</span>{" "}
        </h3>
        <p>
          I'm a web developer focused on building responsive, user-friendly web
          applications using React.js, Node.js, PHP, Laravel, and MySQL. I enjoy
          creating practical solutions, learning modern technologies, and
          improving my skills through real-world projects.
        </p>
        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/sa-aadhath-samsameer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="https://wa.me/94782502232"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a
            href="https://www.facebook.com/m.saaadh.3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>
      </div>
      <div className="home-img">
        <img
          src={saadhath}
          style={{ borderRadius: "50%", overflow: "hidden" }}
          alt="dp"
        />
      </div>
    </section>
  );
}
