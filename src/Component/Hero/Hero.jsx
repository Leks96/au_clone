import React, { useState, useEffect } from "react";
import "./Hero.css";
import Navbar from "../Navbar/Navbar";
import { IoArrowUp, IoCalendar, IoMic, IoPeople } from "react-icons/io5";
import { Link } from "react-router-dom";
//const riderImage = require("../../images/rider.jpg");
import naomi from '../../images/speakers1/MrsNaomi.jpg'
import netsanet from '../../images/speakers1/Ms-Netsanet.jpg'
import william from '../../images/speakers1/Mr-William.jpg'
import simone from '../../images/speakers1/Ms-Simone.jpg'
//import mkoma from '../../images/speakers/'
import audie from '../../images/speakers1/Ms-Aude.jpg'
import victor from '../../images/speakers1/Mr-Victor.jpg'
import nadege from '../../images/speakers1/Ms-Nadege.jpg'
import fathallah from '../../images/speakers1/Fathallah.jpg'
import monique from '../../images/speakers1/Dr-Monique.jpg'
import botho from '../../images/speakers1/Ms-Botho.jpg'
import sandile from '../../images/speakers1/Mr-Sandile.jpg'
//import rico from '../../images/speakers/'
//import hamza from '../../images/speakers/'

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
      speaker: naomi,
      speakerName: "Naomi Lucas",
      speakerJob: "Founder, Graduatepro"
    },
    {
      leadText: "African Union",
      secondaryText: "(The Backstory)",
      dateTime: "Saturday, 8th June 2024 | 7.00 AM GMT",
      speaker: simone,
      speakerName: "Ms. Simone Yankey-Ouattara",
      speakerJob: "Ag. Head, AU-CIEFFA, Burkina Faso"
    },
    //{
    //  leadText: "Agenda 2063:",
    //  secondaryText: "The Africa We Want",
    //  dateTime: "Saturday, 8th June 2024 | 7.00 AM GMT",
    //  //speaker: rico,
    //  speakerName: "Mr. Rico Bien Aime",
    //  speakerJob: "Director, Operations Support Services Directorate (OSSD), African Union Commission"
    //},
    {
      leadText: "African Union Structure:",
      secondaryText: "The Organisation",
      dateTime: "Saturday, 8th June 2024 | 7.00 AM GMT",
      speaker: william,
      speakerName: "Mr. William Carew",
      speakerJob: "Head of AU ECOSOCC Secretariat, Zambia"
    },
    {
      leadText: "Taking Action",
      secondaryText: "Join The African Union",
      dateTime: "Saturday, 8th June 2024 | 7.00 AM GMT",
      speaker: fathallah,
      speakerName: "His Excellency, Fathallah Sijilmassi",
      speakerJob: "Director-General, African Union Commision"
    },
    {
      leadText: "Pathways, Opportunities and Requirements",
      //secondaryText: "Strategies For Enduring Success in the Diaspora",
      dateTime: "Saturday, 8th June 2024 | 7.00 AM GMT",
      speaker: nadege,
      speakerName: "Ms. Nadege Thandu",
      speakerJob: "Director, Human Resources Management Directorate (HRMD)",
      other: "African Union Commision"
    },
    {
      leadText: "Understanding The African Union Talent Selection Process",
      //secondaryText: "Strategies for Securing Global Opportunities",
      dateTime: "Saturday, 8th June 2024 | 7.00 AM GMT",
      speaker: monique,
      speakerName: "His Excellency, Dr. Monique Nsanzabaganwa",
      speakerJob: "Deputy Chairperson (DCP)",
      other: "African Union Commission"
    },
    {
      leadText: "Virtual Mixers",
      dateTime: "Saturday, 8th June 2024 | 7.00 AM GMT",
      speaker: botho,
      speakerName: "Ms. Botho Kebabonye Bayendi",
      speakerJob: "Director, Strategic Planning and Delivery Directorate (SPDD)",
      other: "African Union Commission"
    },
    //second version
    {
      leadText: "Virtual Careers Fair Masterclass",
      secondaryText: "Build A Global Career: Join The African Union",
      dateTime: "Saturday, 8th June 2024 | 7.00 AM GMT",
      speaker: sandile,
      speakerName: "Mr. Sandile Peace Gumedze",
      speakerJob: "Head, Human Resources Planning & Organization Development (HRPOD) Division",
      other: "African Union Commission"
    },
    //{
    //  leadText: "African Union",
    //  secondaryText: "(The Backstory)",
    //  dateTime: "Saturday, 8th June 2024 | 7.00 AM GMT",
    //  //speaker: hamza,
    //  speakerName: "Mr. Hamza Sahl",
    //  speakerJob: "Head, Human Resources Shared Services (HRSS) Division, HRMD",
    //  other: "African Union Commission"
    //},
    {
      leadText: "Agenda 2063:",
      secondaryText: "The Africa We Want",
      dateTime: "Saturday, 8th June 2024 | 7.00 AM GMT",
      speaker: audie,
      speakerName: "Ms. Aude Lucie Ayo-Adibet",
      speakerJob: "Head, Talent Acquisition Unit, HRMD",
      other: "African Union Commission"
    },
    {
      leadText: "African Union Structure:",
      secondaryText: "The Organisation",
      dateTime: "Saturday, 8th June 2024 | 7.00 AM GMT",
      speaker: victor,
      speakerName: "Mr. Victor Paa Kwesi Mensah",
      speakerJob: "Human Resources Projects Manager, HRMD",
      other: "African Union Commission"
    },
    {
      leadText: "Taking Action",
      secondaryText: "Join The African Union",
      dateTime: "Saturday, 8th June 2024 | 7.00 AM GMT",
      speaker: netsanet,
      speakerName: "Ms. Netsanet Getachew",
      speakerJob: "Human Resources Officer, AU PCRD, Egypt"
    }
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
      className="row align-items-center justify-content-between">
        <div className="col-lg-8 col-md-7 col-sm-12 text-container current-div">
          <span className="leadText lead-text-mobile mt-6">
            {displayText.leadText}
          </span>
          <div className="secondaryText">{displayText.secondaryText}</div>
          <p className="dateTime date-time-mobile">{displayText.dateTime}</p>
        </div>

        <div
          style={{ position: "absolute", opacity: "0", transition: "opacity 10s linear" }}
          className="col-lg-8 col-md-7 col-sm-12 text-container next-div"
        >
          <span className="leadText lead-text-mobile mt-6">
            {nextText.leadText}
          </span>
          <div className="secondaryText">{nextText.secondaryText}</div>
          <p className="dateTime date-time-mobile">{nextText.dateTime}</p>
        </div>

        <div className="col-lg-4 col-md-5 col-sm-12">
          <img
            className="rounded rounded-2 speaker-pic d-none d-md-block"
            src={displayText.speaker}
            alt={`speaker`}
          />
          <h2 className="speakerName pt-4">{displayText.speakerName}</h2>
          <p className="speakerJob">{displayText.speakerJob}</p>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row">
        {/*<div className="col-md-4 btn-speaker-div">
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
        </div>*/}
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
          <IoMic /> 25 Speakers
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
