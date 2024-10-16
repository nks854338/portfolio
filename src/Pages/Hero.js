import React from "react";

const Hero = () => {
  return (
    <>
      <section id="home">
        <div className="HeroSection">
          <div className="HeroLeft">
            <div className="HeroLeftContentContainer">
              <div className="HeroHeading">
                Hi, I am Nandani
                <br />
                <span className="proffession"> Full Stack Developer </span>
              </div>
              <div className="HeroParagraph">
              Welcome to my coding journey! 🚀 I'm excited to share my passion for tech and showcase my projects. Explore and join me on this adventure as I learn, create, and innovate in the world of technology!
              </div>
              <div className="socialmediaIcons">
                <div className="socialMediaIcon">
                  <a href="https://github.com/nks854338">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
                <div className="socialMediaIcon">
                  <a href="https://www.linkedin.com/in/nandanisingh85/">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>
                <div className="socialMediaIcon">
                  <a href="https://www.behance.net/nandanikumari13">
                    <i className="fa-brands fa-behance"></i>
                  </a>
                </div>
              </div>
              <div className="HeroBtn">
                <a href="https://drive.google.com/file/d/1sKE5mhL4ICFhan1ijpsEbrhjwsOYlO29/view?usp=sharing" target="blank">
                  <button className="btn">
                    Resume <i className="fa-solid fa-download"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="HeroRight">
            <div>
              <div class="HeroSectionImage">
                <img src="images\coder3.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
