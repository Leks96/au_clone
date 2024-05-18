import React, { useState, useEffect } from "react";
import "./Hero.css";
import Navbar from "../Navbar/Navbar";
import { IoArrowUp, IoCalendar, IoMic, IoPeople } from "react-icons/io5";
import { Link } from "react-router-dom";
//const riderImage = require("../../images/rider.jpg");
import beautyImage1 from "../../images/fs/2.0/nkiru_olumide_ojo.jpg";
import beautyImage2 from "../../images/fs/2.0/debo_adejana.jpg";
import beautyImage3 from "../../images/fs/2.0/elsa_bankole.jpg";
import beautyImage4 from "../../images/fs/2.0/charles_odii.jpg";
import beautyImage5 from "../../images/fs/2.0/chidubem_onyegbulu.jpg";
import beautyImage6 from "../../images/fs/2.0/chisom_ejim.jpg";
import beautyImage7 from "../../images/fs/2.0/mohammed_mijindadi.jpg";

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(window.scrollY > 0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showMenu, setShowMenu] = useState(false);

  const [displayText, setDisplayText] = useState({});
  const [nextText, setNextText] = useState("");
  const [fadeOut, setFadeOut] = useState(true);

  const textData = [
    {
      leadText: "Virtual Careers Fair Masterclass",
      secondaryText: "Build A Global Career: Join The African Union",
      dateTime: "Saturday, 8th June 2024 | 7.00 AM GMT",
      //speaker: beautyImage1,
      //speakerName: "Nkiru Olumide Ojo",
      //speakerJob: ""
    },
    {
      leadText: "African Union (The Backstory)",
      //secondaryText: "Tackling Unemployment At Scale",
      dateTime: "Saturday, 8th June 2024 | 7.00 AM GMT",
      //speaker: beautyImage2,
      //speakerName: "Debo Adejana",
      //speakerJob: ""
    },
    {
      leadText: "Agenda 2063: The Africa We Want",
      //secondaryText: "Perspectives from Employers of Labour",
      dateTime: "Saturday, 8th June 2024 | 7.00 AM GMT",
      //speaker: beautyImage3,
      //speakerName: "Elsa Bankole",
      //speakerJob: ""
    },
    {
      leadText: "African Union Structure: The Organisation",
      //secondaryText: "Spotlighting Noteworthy Models",
      dateTime: "Saturday, 8th June 2024 | 7.00 AM GMT",
      //speaker: beautyImage4,
      //speakerName: "Charle Odii",
      //speakerJob: ""
    },
    {
      leadText: "Taking Action",
      secondaryText: "Join The African Union",
      dateTime: "Saturday, 8th June 2024 | 7.00 AM GMT",
      //speaker: beautyImage5,
      //speakerName: "Chidubem Onyegbulu",
      //speakerJob: ""
    },
    {
      leadText: "Pathways, Opportunities and Requirements",
      //secondaryText: "Strategies For Enduring Success in the Diaspora",
      dateTime: "Saturday, 8th June 2024 | 7.00 AM GMT",
      //speaker: beautyImage6,
      //speakerName: "Chison Ejim",
      //speakerJob: ""
    },
    {
      leadText: "Understanding The AU Talent Selection Process",
      //secondaryText: "Strategies for Securing Global Opportunities",
      dateTime: "Saturday, 8th June 2024 | 7.00 AM GMT",
      //speaker: beautyImage7,
      //speakerName: "Mohammed Mijindadi",
      //speakerJob: ""
    },
    {
      leadText: "Virtual Mixers",
    },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setShowMenu(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    let currentIndex = 0;
    let nextIndex = 1;
    const currentDiv = document.querySelector(".current-div");
    const nextDiv = document.querySelector(".next-div");

    const template = `<div
    className={col-lg-8 col-md-7 col-sm-12 text-container ${
      fadeOut ? "fade-in" : "fade-out"
    }}
  >
    <span className="leadText lead-text-mobile mt-6">
      {displayText.leadText}
    </span>
    <div className="secondaryText">{displayText.secondaryText}</div>
    <p className="dateTime date-time-mobile">{displayText.dateTime}</p>
  </div>`;

    const textInterval = setInterval(() => {
      // const currentDivClass = currentDiv.classList;
      // currentDivClass.add("fade-in");
      // currentDivClass.remove("fade-out");
      // const nextDivClass = nextDiv.classList;
      // nextDivClass.add("fade-out");
      // nextDivClass.remove("fade-in");

      // nextDiv.style.display = "none";

      currentIndex = (currentIndex + 1) % textData.length;
      // nextIndex = (nextIndex + 1) % textData.length;
      setDisplayText(textData[currentIndex]);
      // setNextText(textData[nextIndex]);

      // setTimeout(() => {
      //   currentDivClass.add("fade-out");
      //   currentDivClass.remove("fade-in");

      //   nextDivClass.add("fade-in");
      //   nextDivClass.remove("fade-out");

      //   nextDiv.style.display = "block";
      // }, 2000);
    }, 3000); // Change text every 3000 milliseconds (3 seconds)

    // // Function to cycle through texts every 3 seconds
    // const intervalId = setInterval(() => {
    //   currentIndex = (currentIndex + 1) % textData.length;
    //   setNextText(textData[currentIndex]);
    //   setFadeOut(true);
    //   setTimeout(() => {
    //     setDisplayText(textData[currentIndex]);
    //     setFadeOut(false);
    //   }, 1000); // 1000 milliseconds = 1 second (after fade out)
    // }, 3000); // 3000 milliseconds = 3 seconds

    return () => {
      clearInterval(textInterval);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [textData.length]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="hero-section pb-lg-5">
      <Navbar
        toggleMenu={toggleMenu}
        isMobile={isMobile}
        isScrolled={isScrolled}
        showMenu={showMenu}
      />
      <div
        className={`container ${
          isScrolled ? "h-80 h-40" : "h-75 h-40"
        } d-flex align-items-center`}
      >
      <div className="colorLayer">
      </div>
        <div
        style={{opacity: "1" }}
        className="row justify-content-center rowContainer">
            <div className="rectAngle">
              <svg width="137" height="70" viewBox="0 0 197 130" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="197" height="45" fill="#F7B021"/>
              <rect y="130" width="130" height="45" transform="rotate(-90 0 130)" fill="#F7B021"/>
              </svg>
            </div>
          <div className="col-md-12 text-container">
            <div className="leadText lead-text-mobile mt-6 px-5">
              {displayText.leadText}
            </div>
            <div className="secondaryText px-5">{displayText.secondaryText}</div>
            <p className="dateTime date-time-mobile px-5">{displayText.dateTime}</p>
          </div>

          <div
            style={{ position: "absolute", opacity: "0", transition: "opacity 10s linear" }}
            className="col-md-12 text-container next-div"
          >
            <span className="leadText lead-text-mobile mt-6">
              {nextText.leadText}
            </span>
            <div className="secondaryText">{nextText.secondaryText}</div>
            <p className="dateTime date-time-mobile">{nextText.dateTime}</p>
          </div>

          {/*<div className="col-lg-4 col-md-5 col-sm-12">
            <img
              className="rounded rounded-2 w-75 d-none d-md-block"
              src={displayText.speaker}
              alt={`speaker`}
            />
            <h2 className="speakerName pt-4">{displayText.speakerName}</h2>
            <p>{displayText.speakerJob}</p>
          </div>*/}
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          {/* <div className="col-md-4 btn-speaker-div">
            <Link to={"/speaker-application"}>
              <button className="btn-apply w-100" type="button">
                <IoArrowUp className="rotate-90" /> Apply to speak
              </button>
            </Link>
          </div>
          <div className="col-md-4 btn-partner-div p-0">
            <Link to={"/partner"}>
              <button className="btn-partner w-100" type="button">
                <IoArrowUp className="rotate-90" /> Partner with us
              </button>
            </Link>
          </div> */}
          <div className="col-md-12 btn-register-div">
            <Link to={"/register"}>
              <button className="btn-register w-100" type="button">
                <IoArrowUp className="rotate-90" /> Register
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-3">
        <div className="row d-sm-flex align-items-center">
          <div className="col-md-3 col-6 text-center border-right text-white fw-bolder">
            <IoCalendar /> 7 Hours
          </div>
          <div className="col-md-3 col-6 text-center border-right text-white fw-bolder">
            <IoCalendar /> 7 Events
          </div>
          <div className="col-md-3 col-6 text-center border-right text-white fw-bolder">
            <IoMic /> 30 Speakers
          </div>
          <div className="col-md-3 col-6 text-center text-white fw-bolder">
            <IoPeople /> 10,000 Attendees
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
