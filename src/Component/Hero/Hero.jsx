import React, { useState, useEffect } from "react";
import "./Hero.css";
import Navbar from "../Navbar/Navbar";
import { IoArrowUp, IoCalendar, IoMic, IoPeople } from "react-icons/io5";
import { Link } from "react-router-dom";
//const riderImage = require("../../images/rider.jpg");
import naomi from "../../images/heroSpeakers/MrsNaomi.jpg";
//import netsanet from '../../images/speakers1/Ms-Netsanet.jpg'
import william from "../../images/heroSpeakers/Mr-William.jpg";
import simone from "../../images/heroSpeakers/Ms-Simone.jpg";
//import mkoma from '../../images/speakers/'
import audie from "../../images/heroSpeakers/Ms-Aude.jpg";
import victor from "../../images/heroSpeakers/Mr-Victor.jpg";
import nadege from "../../images/heroSpeakers/Ms-Nadege.jpg";
import fathallah from "../../images/heroSpeakers/Fathallah.jpg";
import monique from "../../images/heroSpeakers/Dr-Monique.jpg";
import botho from "../../images/heroSpeakers/imgg.jpg";
import sandile from "../../images/heroSpeakers/Mr-Sandile.jpg";
//import rico from '../../images/speakers/'
//import hamza from '../../images/speakers/'

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(window.scrollY > 0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showMenu, setShowMenu] = useState(false);
  const [displayText, setDisplayText] = useState({});

  const textData = [
    {
      leadText: "Virtual Career Fair Masterclass",
      secondaryText: "Opening Remarks",
      dateTime: "Saturday, 8th June 2024 | 8:00 AM GMT",
      speaker: fathallah,
      speakerName: "His Excellency, Fathallah Sijilmassi",
      speakerJob: "Director-General, African Union Commision",
    },
    {
      leadText: "Virtual Career Fair Masterclass",
      secondaryText: "Opening Remarks",
      dateTime: "Saturday, 8th June 2024 | 8:00 AM GMT",
      speaker: monique,
      speakerName: "Her Excellency, Dr. Monique Nsanzabaganwa",
      speakerJob:
        "Deputy Chairperson (DCP), African Union Commission Turn on screen",
    },
    {
      leadText: "Virtual Career Fair Masterclass",
      secondaryText: "Opening Remarks",
      dateTime: "Saturday, 8th June 2024 | 8:00 AM GMT",
      speaker: nadege,
      speakerName: "Ms. Nadege Thandu",
      speakerJob:
        "Director, Human Resources Management Directorate (HRMD), African Union Commision",
    },
    //{
    //  leadText: "Virtual Career Fair Masterclass",
    //  secondaryText: "African Union Backstory",
    //  dateTime: "Saturday, 8th June 2024 | 8:00 AM GMT",
    //  speaker: fathallah,
    //  speakerName: "Mr. Rico Bien Aime",
    //  speakerJob: "Director, Operations Support Services Directorate (OSSD), African Union Commission"
    //},
    {
      leadText: "Virtual Career Fair Masterclass",
      secondaryText: "Agenda 2063: The Africa We Want",
      dateTime: "Saturday, 8th June 2024 | 8:00 AM GMT",
      speaker: botho,
      speakerName: "Ms. Botho Kebabonye Bayendi",
      speakerJob:
        "Director, Strategic Planning and Delivery Directorate (SPDD), AUC",
    },
    {
      leadText: "Virtual Career Fair Masterclass",
      secondaryText: "The African Union Organs and Structure",
      dateTime: "Saturday, 8th June 2024 | 8:00 AM GMT",
      speaker: sandile,
      speakerName: "Mr. Sandile Peace Gumedze",
      speakerJob:
        "Head, Human Resources Planning & Organization Development (HRPOD) Division, HRMD",
    },
    //{
    //  leadText: "Virtual Career Fair Masterclass",
    //  secondaryText: "Live Chat with African Union Organs",
    //  dateTime: "Saturday, 8th June 2024 | 8:00 AM GMT",
    //  speaker: botho,
    //  speakerName: "Mr. Hamza Sahl,",
    //  speakerJob: "Head, Human Resources Shared Services (HRSS) Division, HRMD",
    //},
    //second version
    {
      leadText: "Virtual Career Fair Masterclass",
      secondaryText:
        "Pathways, Opportunities and Requirements Across The African Union",
      dateTime: "Saturday, 8th June 2024 | 8:00 AM GMT",
      speaker: victor,
      speakerName: "Mr. Victor Paa Kwesi Mensah",
      speakerJob: "Human Resources Projects Manager, HRMD",
    },
    {
      leadText: "Virtual Career Fair Masterclass",
      secondaryText:
        "Improving Your Odds: Understanding The African Union Talent Selection Process",
      dateTime: "Saturday, 8th June 2024 | 8:00 AM GMT",
      speaker: audie,
      speakerName: "Ms. Aude Lucie Ayo-Adibet",
      speakerJob:
        "Head, Talent Acquisition Unit, HRMD, African Union Commision",
    },
    //{
    //  leadText: "Virtual Career Fair Masterclass",
    //  secondaryText: "Why The African Union",
    //  dateTime: "Saturday, 8th June 2024 | 8:00 AM GMT",
    //  speaker: audie,
    //  speakerName: "Mr. Daudi Mkoma",
    //  speakerJob: "Head, Administration and Human Resources Division, AUCDC",
    //},
    {
      leadText: "Virtual Career Fair Masterclass",
      secondaryText: "Why The African Union",
      dateTime: "Saturday, 8th June 2024 | 8:00 AM GMT",
      speaker: simone,
      speakerName: "Ms. Simone Yankey-Ouattara",
      speakerJob: "Ag. Head, AU-CIEFFA, Burkina Faso",
    },
    {
      leadText: "Virtual Career Fair Masterclass",
      secondaryText: "Why The African Union?",
      dateTime: "Saturday, 8th June 2024 | 8:00 AM GMT",
      speaker: william,
      speakerName: "Mr. William Carew",
      speakerJob: "Head of AU ECOSOCC Secretariat, Zambia",
    },
    //{
    //  leadText: "Virtual Career Fair Masterclass",
    //  secondaryText: "Why The African Union?",
    //  dateTime: "Saturday, 8th June 2024 | 8:00 AM GMT",
    //  speaker: william,
    //  speakerName: "Ms. Netsanet Getachew",
    //  speakerJob: "Human Resources Officer, AU PCRD, Egypt",
    //},
    //{
    //  leadText: "Virtual Career Fair Masterclass",
    //  secondaryText: "Taking Action",
    //  dateTime: "Saturday, 8th June 2024 | 8:00 AM GMT",
    //  speaker: manuella,
    //  speakerName: "Ms. Manuella Diaha",
    //  speakerJob: "Senior HR Efficiency and Systems Coherence Officer, HRMD, African Union Commission",
    //},
    {
      leadText: "Virtual Career Fair Masterclass",
      secondaryText: "Build A Global Career: Join The African Union",
      dateTime: "Saturday, 8th June 2024 | 8:00 AM GMT",
      speaker: naomi,
      speakerName: "Naomi Lucas",
      speakerJob: "Founder, Graduatepro",
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

    setDisplayText(textData[0]);

    let currentIndex = 0;

    const textInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % textData.length;
      setDisplayText(textData[currentIndex]);
    }, 1000);

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
      <div className="colorLayer"></div>
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
        <div
          style={{ opacity: "1" }}
          className="row align-items-center justify-content-between rowContainer"
        >
          <div className="col-md-1 rectAngle">
            <svg
              width="137"
              height="70"
              viewBox="0 0 197 130"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="197" height="45" fill="#5ac5c9" />
              <rect
                y="130"
                width="130"
                height="45"
                transform="rotate(-90 0 130)"
                fill="#5ac5c9"
              />
            </svg>
          </div>
          <div className="col-md-8 text-container current-div text-start">
            <span className="leadText lead-text-mobile mt-6">
              {displayText.leadText}
            </span>
            <div className="secondaryText">{displayText.secondaryText}</div>
            <p className="dateTime date-time-mobile">{displayText.dateTime}</p>
          </div>
          <div className="col-md-3 row justify-content-center">
            <img
              className="rounded rounded-2 w-75 d-none d-md-block px-0"
              src={displayText.speaker}
              alt={`speaker`}
            />
            <h2 className="text-start speakerName pt-4 w-75 px-0">
              {displayText.speakerName}
            </h2>
            <p className="text-start w-75 speakerJob px-0">
              {displayText.speakerJob}
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
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
          <div className="col-md-4 col-6 text-center border-right infoTouch fw-bolder">
            <IoCalendar /> 7 Hours
          </div>
          <div className="col-md-4 col-6 text-center border-right infoTouch fw-bolder">
            <IoCalendar /> 25 Speakers
          </div>
          <div className="col-md-4 col-6 text-center infoTouch fw-bolder">
            <IoMic /> 7 Sessions
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
