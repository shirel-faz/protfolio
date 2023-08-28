import { Fragment, useState } from "react";
import AnimatedText from "./AnimatedText";
import AboutPopup from "./popup/AboutPopup";

const aboutData = {
  firstName: "Shirel",
  lastName: "Fuzaylov",
  bithday: "06.11.2000",
  address: "Ramat Gan, Israel",
  phn: "+972538257050",
  email: "shirel2341@gmail.com",
  serviceLists: [
    "Frontend Development",
    "Full Stack Development"
  ],
  skills: {
    programming: [
      { name: "ReactJS", value: "100" },
      { name: "Typescript", value: "100" },
      { name: "Git", value: "100" },
      { name: "NodeJS", value: "95" },
      { name: "ExpressJS", value: "95" },
      { name: "MongoDB", value: "95" },
      { name: "mySql", value: "80" },
      { name: "knexJs", value: "85"}
    ],
    language: [
      { name: "English", value: "80" },
      { name: "Hebrew", value: "100" },
    ],
  },
  education: [
    { year: "2023", unv: "Smart College", degree: "Full Stack Development" },
    { year: "2020 - 2021", unv: "Ort Singalovski College", degree: "Full Stack Development" },
    { year: "2014 - 2018", unv: "Ma'alot Highschool", degree: "Highschool Diploma" },
  ],
  working: [
    {
      year: "2021 - 2023",
      company: "Mizrahi Tefahot Bank",
      deg: "Sales Banker",
    },
    {
      year: "2021",
      company: "Freelance Software Developer",
      deg: "Freelance Fullstack Developer",
    },
    {
      year: "2019 - 2020",
      company: "Aroma Israel",
      deg: "Shift Manager",
    },
  ],
  partnersLogos: [
    "img/partners/1.png",
    "img/partners/2.png",
    "img/partners/3.png",
    "img/partners/4.png",
  ],
};

const About = () => {
  const [popup, setPopup] = useState(false);
  return (
    <Fragment>
      <AboutPopup
        open={popup}
        close={() => setPopup(false)}
        aboutData={aboutData}
      />
      <div className="edrea_tm_section hidden animated" id="about">
        <div className="section_inner">
          <div className="edrea_tm_about">
            <div className="left">
              <div className="image">
                <img src="img/thumbs/1-1.jpg" alt="" />
                <div className="main" data-img-url="img/about/1.jpg" />
              </div>
            </div>
            <div className="right">
              <div className="short">
                <h3 className="name">
                  {aboutData.firstName}{" "}
                  <span className="coloring">{aboutData.lastName}</span>
                </h3>
                <h3 className="job">
                  <AnimatedText />
                </h3>
              </div>
              <div className="text">
                <p>
                  Hello, and welcome to my portfolio! My name is <span>Shirel (Roza) Fuzaylov</span>, and {`I'm`} a full-stack developer with a passion for building beautiful and functional web and mobile applications.
                </p>
              </div>
              <div className="edrea_tm_button">
                <a href="#" onClick={() => setPopup(true)}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default About;
