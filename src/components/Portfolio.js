import notesApp from "../assets/img/noteApp.png";
import socialM from "../assets/img/socialM.png";
import leaveM from "../assets/img/leaveM.jpg";
import eFash from "../assets/img/eFash.png";
import eCom from "../assets/img/eCom.png";
import eGem from "../assets/img/eGem.png";
export default function Portfolio() {
  const handleRedirect = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        Latest <span>Project</span>
      </h2>

      <div className="portfolio-container">
        <div className="portfolio-box">
          <img src={eCom} alt="Velmora Ecommerce Store" />

          <div
            className="portfolio-layer"
            onClick={() => {
              handleRedirect("https://velmora-ecommerce-topaz.vercel.app/");
            }}
          >
            <h4>Velmora Ecommerce Store — MERN Stack</h4>
            __________________________________________
            <p>
              Designed and deployed an in-progress full-stack ecommerce platform
              with authentication, product search, cart management, order flow,
              password reset, and Stripe payment integration using the MERN
              stack, JWT, Redux Toolkit, MongoDB Atlas, and Vercel.
            </p>

            <i className="fa-solid fa-up-right-from-square"></i>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={notesApp} alt="portfolio" />
          <div
            className="portfolio-layer"
            onClick={() => {
              handleRedirect("https://memoweb123.vercel.app/");
            }}
          >
            <h4>Memo: Full-Stack Notes & To-Do App</h4>
            __________________________________________
            <p>
              A full-stack MERN app with JWT authentication, Redux state
              management, and styled using TailwindCss, allowing users to store
              notes and manage to-do tasks efficiently.
            </p>
            <i className="fa-solid fa-up-right-from-square"></i>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={socialM} alt="portfolio" />
          <div
            className="portfolio-layer"
            onClick={() => {
              handleRedirect("https://saathathm.github.io/essus-social-media/");
            }}
          >
            <h4>Essus: React-Based Social Media Interface</h4>
            __________________________________________
            <p>
              A social media front-end built with React.js and styled using
              Bootstrap for a responsive and modern design.
            </p>
            <i className="fa-solid fa-up-right-from-square"></i>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={leaveM} alt="portfolio" />
          <div
            className="portfolio-layer"
            onClick={() => {
              handleRedirect(
                "https://docs.google.com/document/d/1UCfXeywmpd80P9CvX802gResril6QjbqHRJGGmBTcR8/edit?usp=sharing",
              );
            }}
          >
            <h4>Leave Management System API Backend</h4>
            __________________________________________
            <p>
              A robust backend for a leave management system, built with MongoDB
              and JWT authentication. Features well-structured code and
              documented APIs in Google Docs for easy integration into your
              company.
            </p>
            <i className="fa-solid fa-up-right-from-square"></i>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={eFash} alt="portfolio" />
          <div
            className="portfolio-layer"
            onClick={() => {
              handleRedirect("https://essus-fashion-eta.vercel.app/");
            }}
          >
            <h4>Essus Fashion: Full-Stack Fashion Store</h4>
            __________________________________________
            <p>
              A modern fashion store built with the MERN stack, styled using
              Tailwind CSS, and secured with JWT authentication for a seamless
              user experience.
            </p>
            <i className="fa-solid fa-up-right-from-square"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
