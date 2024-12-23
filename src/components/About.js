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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          pariatur voluptatem iure qui ut minima officia fugiat aut voluptatibus
          voluptas ducimus tempora dolores eius repudiandae, voluptates
          quibusdam! Veritatis assumenda exercitationem, quam corrupti dolor
          eveniet, ipsam itaque velit cum placeat molestiae omnis eaque tempore
          cupiditate aperiam odio dignissimos consequatur maiores earum.
        </p>
        <a href="#" className="btn">
          Read more
        </a>
      </div>
      <div className="about-img">
        <img src={aboutPic} alt="about" />
      </div>
    </section>
  );
}
