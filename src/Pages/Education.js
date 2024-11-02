import React from "react";

const Education = () => {
  return (
    <>
      <section className="timeline" id="Education">
        <div className="title-wrapper">
          <div className="icon-box">
            <i class="fa-solid fa-book-open"></i>
          </div>
          <div className="mainSectionHeading">
            <h3>
              Education
            </h3>
          </div>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Chandigarh university</h4>
            <span>2022 — 2025</span>
            <p className="timeline-text">
              Pursuing a Bachelor’s in Computer Science (2022-2025) at
              Chandigarh University, gaining strong foundational skills in
              programming, data structures, and software development.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Govt +2 High school, Birpur
            </h4>
            <span>2019 — 2021</span>
            <p className="timeline-text">
              Completed Higher Secondary from Govt +2 High School, Birpur, with
              a focus in PCM, building a solid foundation in analytical skills.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Govt +2 High school, Birpur
            </h4>
            <span>2018 — 2019</span>
            <p className="timeline-text">
              Completed Matriculation from Govt +2 High School, Birpur, gaining
              a strong foundational understanding across core subjects and
              essential academic skills.
            </p>
          </li>
        </ol>
      </section>
    </>
  );
};

export default Education;
