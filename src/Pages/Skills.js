import React, { useState } from "react";

const Language = [
  {
    Title: "HTML",
    img: "images/SkillLogo/html.png",
  },
  {
    Title: "CSS",
    img: "images/SkillLogo/CSS.png",
  },
  {
    Title: "JavaScript",
    img: "images/SkillLogo/JavaScript.png",
  },
  {
    Title: "PHP",
    img: "images/SkillLogo/Php.png",
  },
  {
    Title: "SQL",
    img: "images/SkillLogo/SQL.png",
  },
  {
    Title: "C",
    img: "images/SkillLogo/c.jpeg",
  },
  {
    Title: "C++",
    img: "images/SkillLogo/c++.jpg",
  },
  {
    Title: "C#",
    img: "images/SkillLogo/csharp.png",
  },
];

const Tool = [
  {
    Title: "MySQL",
    img: "images/SkillLogo/MySQL.png",
  },
  {
    Title: "Figma",
    img: "images/SkillLogo/Figma.png",
  },
  {
    Title: "VS Code",
    img: "images/SkillLogo/VScode.jpeg",
  },
  {
    Title: "GitHub",
    img: "images/SkillLogo/Github.png",
  },
  {
    Title: "Git",
    img: "images/SkillLogo/git.png",
  },
  {
    Title: "Postman",
    img: "images/SkillLogo/postman.jpg",
  },
  {
    Title: "WordPress",
    img: "images/SkillLogo/wordpress.jpg",
  },
];

const Framwork = [
  {
    Title: "React",
    img: "images/SkillLogo/React.png",
  },
  {
    Title: "Redux",
    img: "images/SkillLogo/Redux.png",
  },
  {
    Title: "Express.js",
    img: "images/SkillLogo/Express.png",
  },
  {
    Title: "Node.js",
    img: "images/SkillLogo/node.png",
  },
  {
    Title: "Tailwind",
    img: "images/SkillLogo/tailwind.png",
  },
  {
    Title: "Bootstrap",
    img: "images/SkillLogo/bootstrap.png",
  },
];

const Skills = () => {
  const [MyLanguage] = useState(Language);
  const [MyTool] = useState(Tool);
  const [MyFramwork] = useState(Framwork);

  return (
    <>
      <section className="SkillSection" id="skills">
        <div>
          <div className="mainSectionHeading textCenter" style={{ marginBottom: '30px' }}>
            <h3>
              My <span>Skills</span>
            </h3>
            <p>Data Structures and Algorithms, Frontend Development, Backend Development, Database Management</p>
          </div>
          <div className="skillcardContainer">
            <div className="skillsContainer">
              <div className="skillHeading">Language</div>
              <div className="skillsBoxes">
                {MyLanguage.map((Data, index) => (
                  <div className="skillsBox" key={index}>
                    <div className="skillImage">
                      <img src={Data.img} alt={Data.Title} />
                    </div>
                    <div className="skillName">{Data.Title}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="skillsContainer">
              <div className="skillHeading">Tool</div>
              <div className="skillsBoxes">
                {MyTool.map((Data, index) => (
                  <div className="skillsBox" key={index}>
                    <div className="skillImage">
                      <img src={Data.img} alt={Data.Title} />
                    </div>
                    <div className="skillName">{Data.Title}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="skillsContainer">
              <div className="skillHeading">Framework & Libraries</div>
              <div className="skillsBoxes">
                {MyFramwork.map((Data, index) => (
                  <div className="skillsBox" key={index}>
                    <div className="skillImage">
                      <img src={Data.img} alt={Data.Title} />
                    </div>
                    <div className="skillName">{Data.Title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
