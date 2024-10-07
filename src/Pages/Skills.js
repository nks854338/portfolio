import React, { useState } from "react";

const Language = [
  {
    Title: "HTML",
    img: "images//SkillLogo/html.png",
  },
  {
    Title: "css",
    img: "images//SkillLogo/CSS.png",
  },
  {
    Title: "JavaScript",
    img: "images//SkillLogo/JavaScript.png",
  },
  {
    Title: "PHP",
    img: "images//SkillLogo/Php.png",
  },
  {
    Title: "SQL",
    img: "images//SkillLogo/SQL.png",
  },
  {
    Title: "C",
    img: "images//SkillLogo/c.jpeg",
  },
  {
    Title: "C++",
    img: "images//SkillLogo/c++.jpg",
  },
  {
    Title: "C#",
    img: "images//SkillLogo/csharp.png",
  },
];

const Tool = [
  {
    Title: "MySQL",
    img: "images//SkillLogo/MySQL.png",
  },
  {
    Title: "Figma",
    img: "images//SkillLogo/Figma.png",
  },
  {
    Title: "VScode",
    img: "images//SkillLogo/VScode.jpeg",
  },
  {
    Title: "Github",
    img: "images//SkillLogo/Github.png",
  },
  {
    Title: "Git",
    img: "images//SkillLogo/git.png",
  },
  {
    Title: "Wordpress",
    img: "images//SkillLogo/wordpress.jpg",
  },
  {
    Title: "Bootstrap",
    img: "images//SkillLogo/bootstrap.png",
  },
];

const Framwork = [
  {
    Title: "Bootstrap",
    img: "images//SkillLogo/bootstrap.png",
  },
  {
    Title: "React",
    img: "images//SkillLogo/React.png",
  },
  {
    Title: "Redux",
    img: "images//SkillLogo/Redux.png",
  },
  {
    Title: "Twilwind",
    img: "images//SkillLogo/tawilwind.png",
  },
  {
    Title: "Express js",
    img: "images//SkillLogo/Express.png",
  },
  {
    Title: "node js",
    img: "images//SkillLogo/node.png",
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
          <div className="skillsMainHeading">
            <h3>
              My<span>Skills</span>
            </h3>
          </div>
          <div className="skillsContainer">
            <div className="skillHeading">Language</div>
            <div className="skillsBoxes">
              {MyLanguage.map((Data) => {
                return (
                  <div className="skillsBox">
                    <div className="skillImage">
                      <img src={Data.img} alt="" />
                    </div>
                    <div className="skillName">{Data.Title}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="skillsContainer">
            <div className="skillHeading">Tool</div>
            <div className="skillsBoxes">
            {MyTool.map((Data) => {
                return (
                  <div className="skillsBox">
                    <div className="skillImage">
                      <img src={Data.img} alt="" />
                    </div>
                    <div className="skillName">{Data.Title}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="skillsContainer">
            <div className="skillHeading">Framwork & Libries</div>
            <div className="skillsBoxes">
            {MyFramwork.map((Data) => {
                return (
                  <div className="skillsBox">
                    <div className="skillImage">
                      <img src={Data.img} alt="" />
                    </div>
                    <div className="skillName">{Data.Title}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
