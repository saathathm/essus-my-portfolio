import saadhath from "../assets/img/saadh.jpg";

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hi, Myself</h3>
        <h1>Mohamed Sa Aadhath</h1>
        <h3>
          And I'm a <span>Full-Stack Developer</span>{" "}
        </h3>
        <p>
          I'm a passionate Full-Stack Developer with expertise in the MERN
          stack. I enjoy building efficient and user-friendly web applications
          that help solve real-world problems. With a strong focus on quality
          and innovation, I aim to create seamless experiences that meet the
          needs of users and businesses alike.
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
