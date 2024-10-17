import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef(); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault(); 

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        (res) => {
          console.log(res.text);
          // Clear the form fields after successful submission
          setName('');
          setEmail('');
          setMessage('');
          alert("Your message has been sent successfully!");
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Failed to send your message. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="contactSection">
      <div className="contactMainContainer">
        <div className="mainSectionHeading textCenter">
          <h3>
            Contact <span>Me</span>
          </h3>
        </div>
        <div className="contactContainer">
          <div className="ContactRight">
            <div className="HeroSectionImage">
              <img src="images/coder1.png" alt="Coder" />
            </div>
          </div>
          <div className="ContactLeft">
            <div className="ContactLeftContentContainer">
              <form ref={form} onSubmit={sendEmail} className="ContactForm">
                <div className="NameMailBox">
                  <div className="UserInfo ConatctName ContactInputBox">
                    <div className="ContactName">Name</div>
                    <div className="name">
                      <input 
                        type="text" 
                        name="from_name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                      />
                    </div>
                  </div>
                  <div className="UserInfo ConatctMail ContactInputBox">
                    <div className="ContactName">Email</div>
                    <div className="name">
                      <input 
                        type="email" 
                        name="from_email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                      />
                    </div>
                  </div>
                </div>
                <div className="message ContactInputBox">
                  <div className="ContactName">Message</div>
                  <div className="name">
                    <textarea 
                      name="message" 
                      value={message} 
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className="ContactSubmit">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
