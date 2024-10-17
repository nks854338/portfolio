import React, { useState } from "react";

const Project = [
  {
    projectId: 1,
    Title: "E-commerce",
    description:
      "Developed a personalized e-commerce platform, 'Senh Sangrah,' with browsing, shopping, cart, and wishlist functionalities. Enabled user authentication and shop creation for sellers.",
    img: "images/ecommerce.jpg",
    repo: "https://github.com/nks854338/e-commerce",
    view: "https://github.com/nks854338/e-commerce",
  },
  {
    projectId: 2,
    Title: "Queto app",
    description:
      "Implemented a dynamic quote management system with features like search, filter, and add quotes functionality. Integrated form validation, and state management to ensure smooth user experience and efficient backend operations.",
    img: "images/dailyQuote.jpg",
    repo: "https://github.com/nks854338/QuoteAPI",
    view: "https://quote-api-frontend-lt1d.vercel.app/",
  },
  {
    projectId: 3,
    Title: "FreshBeatsLaundry",
    description:
      "A laundry service web app where customers can select and book services. Integrated Email.js to notify the owner of bookings, ensuring efficient communication and service management.",
    img: "images/12.jpeg",
    repo: "https://github.com/nks854338/LaundryService",
    view: "https://nks854338.github.io/LaundryService/",
  },
  {
    projectId: 4,
    Title: "Sneaker Selling Store",
    description:
      "Developed a dynamic shoe store using React Context API for state management, featuring cart management and a 'Proceed to Payment' button for future integration.",
    img: "images/shoe.png",
    repo: "https://github.com/nks854338/task24",
    view: "https://task24-qr7h.vercel.app/",
  },
  {
    projectId: 5,
    Title: "EchoTune",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quia ratione maxime, natus quidem! Find and save your favorite recipes with Find and save your favorite recipes with",
    img: "images/music.jpg",
    repo: "https://github.com/nks854338/Music_App",
    view: "https://music-app-ashy-one.vercel.app/",
  },
  {
    projectId: 6,
    Title: "ClimaCast",
    description:
      " Built a weather app providing real-time weather information with forecasts up to 1 week ahead",
    img: "images/weather.png",
    repo: "https://github.com/nks854338/Weather-app",
    view: "https://weather-app-peach-one-84.vercel.app/",
  },
  {
    projectId: 7,
    Title: "Kabadi Connect",
    description:
      "KabadiConnect is your go-to platform for eco-friendly scrap management, connecting users with trusted local rag pickers for responsible and sustainable disposal of scrap materials. Experience efficient and reliable service for all your scrap management needs.",
    img: "images/5.png",
    repo: "https://github.com/nks854338/-KabadiConnect",
    view: "https://drive.google.com/file/d/1iIvNhVSHkcb7xuZPn_OoZw03Tu2z_Qc5/view",
  },
  {
    projectId: 8,
    Title: "News Fetch Web App",
    description:
      "Developed a news web app using a custom useFetch hook to retrieve news from an API. Features include search filtering, news removal, and a 'Read More' option for viewing full articles.",
    img: "images/news.png",
    repo: "",
    view: "",
  },
  {
    projectId: 9,
    Title: "NutriEase (UI/UX Design)",
    description:
      " Created a user-friendly app combining nutrition tracking, meal planning, and subscription features for a restaurant. Focused on seamless user experience and functionality to enhance meal plan management.",
    img: "images/11.jpeg",
    repo: "",
    view: "",
  },
  {
    projectId: 10,
    Title: "Netflix clone",
    description:
      "Built a responsive Netflix clone with a modern UI, mimicking Netflix's homepage design. Features interactive elements, hover effects, and a dynamic layout for seamless user experience across devices.",
    img: "images/netflix.jpg",
    repo: "https://github.com/nks854338/Netflix-Clone",
    view: "https://sunny-pika-2832c2.netlify.app/",
  },
  {
    projectId: 11,
    Title: "NFT-UI",
    description:
      "The NFT-UI Project, developed for the Upskill Mafia Weekly Group Project, features a sleek, user-friendly interface for NFT interactions, with light and dark mode options and responsive design for an optimal experience on desktop and mobile devices.",
    img: "images/6.png",
    repo: "https://github.com/nks854338/NFT_Project",
    view: "https://friendly-seahorse-582b31.netlify.app/",
  },
  {
    projectId: 12,
    Title: "image Gallery",
    description:
      "This full-stack application allows users to upload image files via a React frontend, store metadata in a MongoDB database, and display uploaded images.",
    img: "images/imageUpload.jpg",
    repo: "https://github.com/nks854338/FileUploadUsingMulter",
    view: "https://multer-frontend.vercel.app/",
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleProjects, setVisibleProjects] = useState(3);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleProjects >= Project.length
        ? 0
        : prevIndex + visibleProjects
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Project.length - visibleProjects
        : prevIndex - visibleProjects
    );
  };

  const handleMore = () => {
    if (visibleProjects < Project.length) {
      setVisibleProjects(visibleProjects + 1);
    }
  };

  return (
    <>
      <section className="ProjectSection" id="projects">
        <div className="">
          <div
            className="mainSectionHeading textCenter"
            style={{ marginBottom: "30px" }}
          >
            <h3>Projects</h3>
            <p style={{ textAlign: "center", fontSize: "18px" }}>
              College and Side Projects for practice.
            </p>
          </div>
          <div className="serviceLowerContainer">
            <div className="ProjectSlideIcon phoneHide" onClick={handlePrev}>
              <span>
                <i className="fa-solid fa-chevron-left"></i>
              </span>
            </div>
            <div className="projectCards">
              {Project.slice(currentIndex, currentIndex + visibleProjects).map(
                (Data) => {
                  return (
                    <div
                      className="projectCard"
                      key={Data.projectId}
                      style={{ flex: "1 1 30%" }}
                    >
                      <div className="projectCardtop">
                        <div className="ProjectImage">
                          <img src={Data.img} height="60px" />
                        </div>
                      </div>
                      <div className="projectCardMid">
                        <div className="ProjectHeading">{Data.Title}</div>
                        <div className="ProjectParagraph">
                          {Data.description}
                        </div>
                      </div>
                      {/* <div className="usedSkills">
                        <div className="usedskill">HTML</div>
                        <div className="usedskill">CSS</div>
                        <div className="usedskill">JS</div>
                        <div className="usedskill">PHP</div>
                        <div className="usedskill">MySQL</div>
                      </div> */}
                      <div className="projectCardBottom">
                        <a href={Data.view}>
                          <button className="projectLeftBtn ">View</button>
                        </a>
                        <a href={Data.repo}>
                          <button className="projectRightBtn">
                            Github Repo
                          </button>
                        </a>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
            <div className="ProjectSlideIcon phoneHide" onClick={handleNext}>
              <span>
                <i className="fa-solid fa-chevron-right"></i>
              </span>
            </div>
          </div>
          {visibleProjects < Project.length && (
            <div className="seeMore laptopHide" onClick={handleMore}>
              See More
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Projects;
