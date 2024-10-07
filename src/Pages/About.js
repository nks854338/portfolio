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
              <div className="HeroHeading">About Us</div>
              <div className="HeroParagraph">
                Welcome to my coding journey! 🚀 Excited to share my passion for
                tech and showcase my projects. Explore and join me on this
                adventure! Welcome to my coding journey! 🚀 Excited to share my
                passion for tech and showcase my projects. Explore and join me
                on this adventure!
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
                      <h3>5+</h3>
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
