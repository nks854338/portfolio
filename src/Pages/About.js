import React from 'react'

const About = () => {
  return (
    <div>
      <section id="about">
        <div className="aboutSection">
          <div className="HeroRight">
            <div>
              <div className="HeroSectionImage">
                <img src="images/coder2.png" />
              </div>
            </div>
          </div>
          <div className="HeroLeft">
            <div className="HeroLeftContentContainer">
            <div className="ServiceMainHeading">
              <h3>
                About <span>Us</span>
              </h3>
            </div>
              <div className="HeroParagraph">
              I'm Nandani Singh, a passionate web developer with expertise in frontend and backend technologies like React.js, Node.js, and MongoDB. As a freelancer, I enjoy crafting intuitive user interfaces and seamless user experiences. With a focus on innovation, I create robust, user-centered applications that solve real-world problems. I also have experience with WordPress, continually seeking opportunities to expand my skill set in technology.
              </div>
              <div className="aboutInfoContainer">
                <div className="aboutInfoBoxes">
                  <div className="aboutInfoBox">
                    <div className="aboutInfoLeftBox">
                      <div className="AboutInfoImg">
                        {/* <img src="images/experience1.png" alt="" /> */}
                        <i class="fa-solid fa-award"></i>
                      </div>
                    </div>
                    <div className="aboutInfoRightBox">
                      <h3>2 Years+</h3>
                      <p>Experience</p>
                    </div>
                  </div>
                  <div className="aboutInfoBox">
                    <div className="aboutInfoLeftBox">
                      <div className="AboutInfoImg">
                        {/* <img src="images/247.png" alt="" /> */}
                        <i class="fa-solid fa-user-graduate"></i>
                      </div>
                    </div>
                    <div className="aboutInfoRightBox">
                      <h3>BSC CS</h3>
                      <p>Education</p>
                    </div>
                  </div>
                </div>

                <div className="aboutInfoBoxes">
                  <div className="aboutInfoBox">
                    <div className="aboutInfoLeftBox">
                      <div className="AboutInfoImg">
                        {/* <img src="images/project1.png" alt="" /> */}
                        <i class="fa-solid fa-ranking-star"></i>
                      </div>
                    </div>
                    <div className="aboutInfoRightBox">
                      <h3>15+</h3>
                      <p>Projects</p>
                    </div>
                  </div>
                  <div className="aboutInfoBox"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
