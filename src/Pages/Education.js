import React from "react";

const Education = () => {
  return (
    <>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <i class="fa-solid fa-book-open"></i>
          </div>
          <div className="mainSectionHeading">
          <h3>
            <span>Education</span>
          </h3>
          </div>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Chandigarh university
            </h4>
            <span>2022 — 2025</span>
            <p className="timeline-text">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Govt +2 High school, Birpur</h4>
            <span>2019 — 2021</span>
            <p className="timeline-text">
              Ratione voluptatem sequi nesciunt, facere quisquams facere menda
              ossimus, omnis voluptas assumenda est omnis..
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
               Govt +2 High school, Birpur
            </h4>
            <span>2018 — 2019</span>
            <p className="timeline-text">
              Duis aute irure dolor in reprehenderit in voluptate, quila
              voluptas mag odit aut fugit, sed consequuntur magni dolores eos.
            </p>
          </li>
        </ol>
      </section>
    </>
  );
};

export default Education;
