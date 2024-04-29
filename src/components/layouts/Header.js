import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function Header() {
  const toggleHandler = () => {
    let menuIcon = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");

    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
  };

  let side;

  useEffect(() => {
    // Determine ScrollReveal Working Side
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        side = "left";
      } else {
        side = "top";
      }
    };
    handleResize();
    ScrollReveal({
      distance: "80px",
      duration: 2000,
      delay: 200,
    });
    ScrollReveal().reveal(".home-content, heading", { origin: side });

    // Active Color Activation
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll("header nav a");
      let menuIcon = document.querySelector("#menu-icon");
      let navbar = document.querySelector(".navbar");

      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
          });
          const correspondingLink = document.querySelector(
            "header nav a[href='#" + id + "']"
          );
          if (correspondingLink) {
            correspondingLink.classList.add("active");
          }
        }
      });

      // Closing the navbar in mobile view once touch the section
      let header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 100);

      menuIcon.classList.remove("fa-xmark");
      navbar.classList.remove("active");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <a href="" className="logo">
        Portfolio
      </a>

      <i
        className="fa-solid fa-bars"
        onClick={(e) => toggleHandler()}
        id="menu-icon"
      ></i>

      <nav className="navbar">
        <a href="#home" className="active">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
