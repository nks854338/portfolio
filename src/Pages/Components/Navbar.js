import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

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
          <img src="images/blogo.png" />
        </div>
      </a>
      <nav className="navbar">
        <ul>
          <li>
            <a
              href="#home"
              className={activeSection === "home" ? "active" : ""}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={activeSection === "skills" ? "active" : ""}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={activeSection === "services" ? "active" : ""}
            >
              Service
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeSection === "projects" ? "active" : ""}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
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

// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const Navbar = () => {
//   return (

//   //   <header id="header">
//   //   <a href="#" class="logo"><NavLink to="/">Nandani</NavLink></a>

//   //   <nav class="navbar">
//   //     <ul>
//   //       <li><a href="#box1"> <NavLink to="/">Home</NavLink></a></li>
//   //       <li><a href="#box2"><NavLink to="/about">About Us</NavLink></a></li>
//   //       <li><a href="#box2"><NavLink to="/skills">Skills</NavLink></a></li>
//   //       <li><a href="#box4"><NavLink to="/service">Service</NavLink></a></li>
//   //       <li><a href="#box4"> <NavLink to="/projects">Projects</NavLink></a></li>
//   //       {/* <li><a href="#box4"><NavLink to="/experience">Experience</NavLink></a></li> */}
//   //       <li><a href="#box4"> <NavLink to="/contact">Contact Us</NavLink></a></li>
//   //     </ul>
//   //   </nav>
//   // </header>

// <header id="header">
// <a href="#home" className="logo">Nandani</a>
// <nav className="navbar">
//   <ul>
//     <li><a href="#home">Home</a></li>
//     <li><a href="#about">About Us</a></li>
//     <li><a href="#skills">Skills</a></li>
//     <li><a href="#services">Service</a></li>
//     <li><a href="#projects">Projects</a></li>
//     <li><a href="#contact">Contact Us</a></li>
//   </ul>
// </nav>
// </header>
//   )
// }

// export default Navbar
