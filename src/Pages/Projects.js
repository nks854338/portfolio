import React, { useState } from "react";

const Project = [
  {
    projectId: 1,
    Title: "E-commerce",
    description:
      "Developed a personalized e-commerce platform, 'Senh Sangrah,' with browsing, shopping, cart, and wishlist functionalities. Enabled user authentication and shop creation for sellers.",
    img: "images/ecommerce.jpg",
    repo: "https://github.com/nks854338/e-commerce",
    type: "php",
    view: "https://github.com/nks854338/e-commerce",
  },
  {
    projectId: 2,
    Title: "Queto app",
    description:
      "Implemented a dynamic quote management system with features like search, filter, and add quotes functionality. Integrated form validation, and state management to ensure smooth user experience and efficient backend operations.",
    img: "images/dailyQuote.jpg",
    repo: "https://github.com/nks854338/QuoteAPI",
    type: "web",
    view: "https://quote-api-frontend-lt1d.vercel.app/",
  },
  {
    projectId: 3,
    Title: "FreshBeatsLaundry",
    description:
      "A laundry service web app where customers can select and book services. Integrated Email.js to notify the owner of bookings, ensuring efficient communication and service management.",
    img: "images/12.jpeg",
    repo: "https://github.com/nks854338/LaundryService",
    type: "web",
    view: "https://nks854338.github.io/LaundryService/",
  },
  {
    projectId: 4,
    Title: "Sneaker Selling Store",
    description:
      "Developed a dynamic shoe store using React Context API for state management, featuring cart management and a 'Proceed to Payment' button for future integration.",
    img: "images/shoe.png",
    repo: "https://github.com/nks854338/task24",
    type: "web",
    view: "https://task24-qr7h.vercel.app/",
  },
  {
    projectId: 5,
    Title: "EchoTune",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quia ratione maxime, natus quidem! Find and save your favorite recipes with Find and save your favorite recipes with",
    img: "images/music.jpg",
    repo: "https://github.com/nks854338/Music_App",
    type: "web",
    view: "https://music-app-ashy-one.vercel.app/",
  },
  {
    projectId: 6,
    Title: "ClimaCast",
    description:
      " Built a weather app providing real-time weather information with forecasts up to 1 week ahead",
    img: "images/weather.png",
    repo: "https://github.com/nks854338/Weather-app",
    type: "web",
    view: "https://weather-app-peach-one-84.vercel.app/",
  },
  {
    projectId: 7,
    Title: "Kabadi Connect",
    description:
      "KabadiConnect is your go-to platform for eco-friendly scrap management, connecting users with trusted local rag pickers for responsible and sustainable disposal of scrap materials. Experience efficient and reliable service for all your scrap management needs.",
    img: "images/5.png",
    repo: "https://github.com/nks854338/-KabadiConnect",
    type: "php",
    view: "https://drive.google.com/file/d/1iIvNhVSHkcb7xuZPn_OoZw03Tu2z_Qc5/view",
  },
  {
    projectId: 8,
    Title: "NutriEase (UI/UX Design)",
    description:
      " Created a user-friendly app combining nutrition tracking, meal planning, and subscription features for a restaurant. Focused on seamless user experience and functionality to enhance meal plan management.",
    img: "images/11.jpeg",
    repo: "",
    type: "UI/UX",
    view: "",
  },
  {
    projectId: 9,
    Title: "NFT-UI",
    description:
      "The NFT-UI Project, developed for the Upskill Mafia Weekly Group Project, features a sleek, user-friendly interface for NFT interactions, with light and dark mode options and responsive design for an optimal experience on desktop and mobile devices.",
    img: "images/6.png",
    repo: "https://github.com/nks854338/NFT_Project",
    type: "web",
    view: "https://friendly-seahorse-582b31.netlify.app/",
  },
  
  {
    projectId: 10,
    Title: "Alabay UI Design",
    description:
      "A simple and clean React-based interface for the Central Asian Shepherd Dog community, designed to connect dog lovers and share valuable information.",
    img: "images/Alabay.png",
    repo: "https://github.com/nks854338/dogSite",
    type: "web",
    view: "https://dog-site-xi.vercel.app/",
  },
  {
    projectId: 11,
    Title: "image Gallery",
    description:
      "This full-stack application allows users to upload image files via a React frontend, store metadata in a MongoDB database, and display uploaded images.",
    img: "images/imageUpload.jpg",
    repo: "https://github.com/nks854338/FileUploadUsingMulter",
    type: "web",
    view: "https://multer-frontend.vercel.app/",
  },
  {
    projectId: 12,
    Title: "News Fetch Web App",
    description:
      "Developed a news web app using a custom useFetch hook to retrieve news from an API. Features include search filtering, news removal, and a 'Read More' option for viewing full articles.",
    img: "images/news.png",
    repo: "",
    type: "web",
    view: "",
  },
  {
    projectId: 13,
    Title: "Netflix clone",
    description:
      "Built a responsive Netflix clone with a modern UI, mimicking Netflix's homepage design. Features interactive elements, hover effects, and a dynamic layout for seamless user experience across devices.",
    img: "images/netflix.jpg",
    repo: "https://github.com/nks854338/Netflix-Clone",
    type: "web",
    view: "https://sunny-pika-2832c2.netlify.app/",
  },
  {
    projectId: 14,
    Title: "Infinity Academy",
    description:
      "A virtual university site, Infinity Academy, built with HTML, CSS, PHP, and MySQL, focusing on secure user authentication and data management.",
    img: "images/acadmy.jpeg",
    repo: "https://github.com/nks854338/LoginSystem",
    type: "php",
    view: "https://multer-frontend.vercel.app/",
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [filter, setFilter] = useState("all");
  const [readMore, setReadMore] = useState({});

  const filteredProjects = Project.filter((project) => 
    filter === "all" ? true : project.type === filter
  );

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleProjects >= filteredProjects.length ? 0 : prevIndex + visibleProjects
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredProjects.length - visibleProjects : prevIndex - visibleProjects
    );
  };

  const toggleReadMore = (id) => {
    setReadMore((prevReadMore) => ({
      ...prevReadMore,
      [id]: !prevReadMore[id],
    }));
  };

  return (
    <section className="ProjectSection ServicesSection" id="projects">
      <div className="mainSectionHeading">
              <h3>
                My <span>Projects</span>
              </h3>
            </div>
            <div className="servicesParagraph HeroParagraph">
            College and Side Projects for practice.
            </div>
      <div className="section2heading">
        <div className="sec2Btns">
          <div
            className={`sec2Btn btn1 ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </div>
          <div
            className={`sec2Btn btn2 ${filter === "web" ? "active" : ""}`}
            onClick={() => setFilter("web")}
          >
            Web
          </div>
          <div
            className={`sec2Btn btn3 ${filter === "php" ? "active" : ""}`}
            onClick={() => setFilter("php")}
          >
            PHP
          </div>
          <div
            className={`sec2Btn btn3 ${filter === "UI/UX" ? "active" : ""}`}
            onClick={() => setFilter("UI/UX")}
          >
            UI/UX
          </div>
        </div>
      </div>

      <div className="serviceLowerContainer">
        <div className="ProjectSlideIcon phoneHide" onClick={handlePrev}>
          <span>
            <i className="fa-solid fa-chevron-left"></i>
          </span>
        </div>

        <div className="projectCards">
          {filteredProjects.slice(currentIndex, currentIndex + visibleProjects).map((Data) => (
            <div className="projectCard" key={Data.projectId} style={{ flex: "1 1 30%" }}>
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
              <div className="projectCardBottom">
                <a href={Data.view}>
                  <button className="projectLeftBtn">View</button>
                </a>
                <a href={Data.repo}>
                  <button className="projectRightBtn">Github Repo</button>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="ProjectSlideIcon phoneHide" onClick={handleNext}>
          <span>
            <i className="fa-solid fa-chevron-right"></i>
          </span>
        </div>
      </div>
      {visibleProjects < Project.length && (
          <div className="seeMore laptopHide" onClick={() => setVisibleProjects((prev) => prev + 3)}>
            See More
          </div>
        )}
    </section>
  );
};

export default Projects;
