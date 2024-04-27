import img1 from "../assets/img/1.jpg";
import img2 from "../assets/img/2.jpg";
import img3 from "../assets/img/3.jpg";
import img4 from "../assets/img/4.jpg";
import img5 from "../assets/img/5.jpg";
import img6 from "../assets/img/6.jpg";
export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        Latest <span>Project</span>
      </h2>

      <div className="portfolio-container">
        <div className="portfolio-box">
          <img src={img1} alt="portfolio" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <i className="fa-solid fa-up-right-from-square"></i>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={img2} alt="portfolio" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <i className="fa-solid fa-up-right-from-square"></i>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={img3} alt="portfolio" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <i className="fa-solid fa-up-right-from-square"></i>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={img4} alt="portfolio" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <i className="fa-solid fa-up-right-from-square"></i>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={img5} alt="portfolio" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <i className="fa-solid fa-up-right-from-square"></i>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={img6} alt="portfolio" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <i className="fa-solid fa-up-right-from-square"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
