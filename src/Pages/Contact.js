import React from "react";

const Contact = () => {
  return (
    <>
      <section id="contact" className="contactSection">
        <div className="contactMainContainer">
          <div className="skillsMainHeading contactMainHeading">
            <h3>
              Contact <span>Us</span>
            </h3>
          </div>
          <div className="contactContainer">
            <div className="ContactRight">
              <div>
                <div className="HeroSectionImage">
                  <img src="images/woman_laptop.png" />
                </div>
              </div>
            </div>
            <div className="ContactLeft">
              <div className="ContactLeftContentContainer">
                <form className="ContactForm">
                  <div className="NameMailBox">
                    <div className="UserInfo ConatctName ContactInputBox">
                      <div className="ContactName">Name</div>
                      <div className="name">
                        <input type="text" />
                      </div>
                    </div>
                    <div className="UserInfo ConatctMail ContactInputBox">
                      <div className="ContactName">Email</div>
                      <div className="name">
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="message ContactInputBox">
                    <div className="ContactName">Message</div>
                    <div className="name">
                      <textarea name="" id=""></textarea>
                    </div>
                  </div>
                  <div className="ContactSubmit">
                    <button>Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
