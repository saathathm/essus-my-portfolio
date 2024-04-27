import saadhath from "../assets/img/saadh.jpeg";

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          explicabo labore iure optio inventore reiciendis officia placeat
          delectus, ea, commodi voluptates nisi, repellendus soluta qui?
        </p>
        <div className="social-media">
          <a href="#">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>
        <a className="btn" href="#cv">
          Download CV
        </a>
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
