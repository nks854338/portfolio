import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isNavbarVisible, setNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setNavbarVisible(!isNavbarVisible);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveSection(sectionId);
          }
        });
      },
      { threshold: 0.7 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header id="header">
      <a href="#home" className="logo">
        <div className="LogoBox">
          <img src="images/blogo.png" alt="Logo" />
        </div>
      </a>
      {!isNavbarVisible && (
        <div className="menuIcon" onClick={toggleNavbar}>
          <i className="fa-solid fa-bars"></i>
        </div>
      )}
      <nav className={`navbar ${isNavbarVisible ? "showNavbar" : "hideNavbar"}`}>
        <div className="closeIcon" onClick={toggleNavbar}>
          <i className="fa-solid fa-times"></i>
        </div>
        <ul>
          <li>
            <a
              href="#home"
              className={activeSection === "home" ? "active" : ""}
              onClick={toggleNavbar} 
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
              onClick={toggleNavbar} 
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={activeSection === "skills" ? "active" : ""}
              onClick={toggleNavbar} 
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={activeSection === "services" ? "active" : ""}
              onClick={toggleNavbar} 
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeSection === "projects" ? "active" : ""}
              onClick={toggleNavbar} 
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
              onClick={toggleNavbar} 
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
