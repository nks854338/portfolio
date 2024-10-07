import React from "react";

const Service = () => {
  return (
    <>
      <section id="services">
        <div className="ServicesSection">
          <div className="serviceUpperContainer">
            <div className="ServiceMainHeading">
              <h3>
                My <span>Services</span>
              </h3>
            </div>
            <div className="servicesParagraph HeroParagraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
              voluptas omnis nesciunt a reiciendis maiores aspernatur non
              laborum odit earum.
            </div>
          </div>
          <div className="serviceLowerContainer">
            <div className="serviceCards">
              <div className="serviceCard">
                <div className="serviceCardtop">
                <i class="fa-solid fa-code"></i>
                </div>
                <div className="serviceCardMid">Web Development</div>
                <div className="serviceCardBottom">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum, voluptatem? Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Minima, eum!
                </div>
              </div>
              <div className="serviceCard">
                <div className="serviceCardtop">
                <i class="fa-brands fa-wordpress"></i>
                </div>
                <div className="serviceCardMid">Wordpress Development</div>
                <div className="serviceCardBottom">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum, voluptatem? Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Minima, eum!
                </div>
              </div>
              <div className="serviceCard">
                <div className="serviceCardtop">
                <i class="fa-brands fa-figma"></i>
                </div>
                <div className="serviceCardMid">UI /UX Design</div>
                <div className="serviceCardBottom">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum, voluptatem? Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Minima, eum!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
