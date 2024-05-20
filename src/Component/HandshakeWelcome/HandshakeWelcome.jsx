import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import "./HandshakeWelcome.css";
import manuella from '../../images/speakers1/Ms-Manuella.jpg'
import william from '../../images/speakers1/Mr-William.jpg'
import simone from '../../images/speakers1/Ms-Simone.jpg'
import victor from '../../images/speakers1/Mr-Victor.jpg'
import nissem from '../../images/speakers1/Ms-Nissem.jpg'
import sandile from '../../images/speakers1/Mr-Sandile.jpg'
import aude from '../../images/speakers1/Ms-Aude.jpg'
import adoum from '../../images/speakers1/Mr-Adoum.jpg'
import speaker from '../../images/speaker.jpg'
import speaker1 from '../../images/speaker.jpg'
import speaker2 from '../../images/speaker.jpg'
import speaker3 from '../../images/speaker.jpg'
import speaker4 from '../../images/speaker.jpg'
import speaker5 from '../../images/speaker.jpg'
import speaker6 from '../../images/speaker.jpg'
import christopher from '../../images/speakers1/Mr-Christopher.jpg'
import zinga from '../../images/speakers1/Ms-Zinga.jpg'
//import lesley from '../../images/speakers1/'
//import manuella from '../../images/speakers1/'
//import daudi from '../../images/speakers1'
//import hamza from '../../images/speakers/'

import { OverlayTrigger, Popover } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { IoCalendar } from "react-icons/io5";
import { IoMdClock } from "react-icons/io";

const HandshakeWelcome = () => {
  const popover = (name) => {
    return (
      <Popover body={true} id="popover-basic">
        {name}
      </Popover>
    );
  };

  const [key, setKey] = useState("allDays");

  const allDaysContent = (
    <div className="container">
    <div className="col-md-12 justify-content-center hw d-sm-flex" style={{border: "#1d1e4a"}}>
      
      <div className="firstDiv card text-white-50 text-sm-center">
        <div className="card-body flex-column cb-border-bottom timeCol bg-div">
          <h6 className="text-uppercase event-title">
            Live Chat<br className="d-none d-sm-block" /> With African Union Organs
          </h6>
          <br /><br />
          <div className="panelist mt-3 d-flex d-sm-block align-items-center">
            <h6 className="text-uppercase text-pan mb-2 pe-4 mt-2 mt-sm-0 pe-sm-0 cb-fs-18">
              panelists:
            </h6>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Mr. Leslye Melinda Koumba")}
              key="top"
              placement="top"
            >
              <Image className="panelist-img me-2" src={speaker6} alt="Image" />
            </OverlayTrigger>
          </div>
          <div className="moderator mt-4 d-flex d-sm-block align-items-center">
            <h6 className="text-uppercase text-pan mb-2 pe-4 mt-2 mt-sm-0 pe-sm-0 cb-fs-18">
              moderator:
            </h6>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Mr. Hamza Sahl")}
              key="top"
              placement="top"
            >
              <img className="panelist-img ms-3" src={speaker1} />
            </OverlayTrigger>
          </div>
        </div>
        
      </div>
      <div className="firstDiv card text-white-50 text-sm-center">
        <div className="card-body flex-column cb-border-bottom timeCol bg-div">
          <h6 className="text-uppercase event-title">
            Taking Action<br className="d-none d-sm-block" /> (Live Individual Activity)
          </h6><br /><br />
          <div className="panelist mt-3 d-flex d-sm-block align-items-center">
            <h6 className="text-uppercase text-pan mb-2 pe-4 mt-2 mt-sm-0 pe-sm-0 cb-fs-18">
              hosts:
            </h6>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Ms. Manuella Diaha")}
              key="top"
              placement="top"
            >
              <Image className="panelist-img me-2" src={manuella} alt="Image" />
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Ms. Christopher Orilogbon")}
              key="top"
              placement="top"
            >
              <img className="panelist-img" src={christopher} />
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Ms. Zinga Clara Suama")}
              key="top"
              placement="top"
            >
              <img className="panelist-img ms-3" src={zinga} />
            </OverlayTrigger>
          </div>
        </div>
        
      </div>
      <div className="firstDiv card text-white-50 text-sm-center">
        <div className="card-body flex-column cb-border-bottom timeCol bg-div">
          <h6 className="text-uppercase event-title">
            Pathways, Opportunities and<br className="d-none d-sm-block" /> Requirements Across The
            <br className="d-none d-sm-block" /> African Union
          </h6>
          <div className="panelist mt-3 d-flex d-sm-block align-items-center">
            <h6 className="text-uppercase text-pan mb-2 pe-4 mt-2 mt-sm-0 pe-sm-0 cb-fs-18">
              panelists:
            </h6>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Ms. Nissem Bezzaouia")}
              key="top"
              placement="top"
            >
              <Image className="panelist-img me-2" src={nissem} alt="Image" />
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Mr. Sandile Peace Gumedze")}
              key="top"
              placement="top"
            >
              <img className="panelist-img" src={sandile} />
            </OverlayTrigger>
          </div>
          <div className="moderator mt-4 d-flex d-sm-block align-items-center">
            <h6 className="text-uppercase text-pan mb-2 pe-4 mt-2 mt-sm-0 pe-sm-0 cb-fs-18">
              moderator:
            </h6>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Mr. Victor Paa Kwesi Mensah")}
              key="top"
              placement="top"
            >
              <img className="panelist-img ms-3" src={victor} />
            </OverlayTrigger>
          </div>
        </div>
        
      </div>
      <div className="firstDiv card text-white-50 text-sm-center">
        <div className="card-body flex-column cb-border-bottom timeCol bg-div">
          <h6 className="text-uppercase event-title">
          Improving Your Odds:
          <br className="d-none d-sm-block" /> 
          Understanding The African
          <br className="d-none d-sm-block" />
          Union Talent Selection Process
          </h6>
          <div className="panelist mt-3 d-flex d-sm-block align-items-center">
            <h6 className="text-uppercase text-pan mb-2 pe-4 mt-2 mt-sm-0 pe-sm-0 cb-fs-18">
              panelists:
            </h6>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Mr. Adoum Gagoloum")}
              key="top"
              placement="top"
            >
              <Image className="panelist-img me-2" src={adoum} alt="Image" />
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Ms. Rebecca Oloo")}
              key="top"
              placement="top"
            >
              <img className="panelist-img" src={speaker4} />
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Mr. Ngarhasta Neldjingar")}
              key="top"
              placement="top"
            >
              <img className="panelist-img ms-3" src={speaker5} />
            </OverlayTrigger>
          </div>
          <div className="panelist mt-3 d-flex d-sm-block align-items-center">
          <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Ms. Nigest Ensene")}
              key="top"
              placement="top"
            >
              <img className="panelist-img ms-3" src={speaker5} />
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Mr. Rico Bien Aime")}
              key="top"
              placement="top"
            >
              <img className="panelist-img ms-3" src={speaker5} />
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Ms. Seblewongel Goshu")}
              key="top"
              placement="top"
            >
              <img className="panelist-img ms-3" src={speaker3} />
            </OverlayTrigger>
          </div>
          <div className="moderator mt-4 d-flex d-sm-block align-items-center">
            <h6 className="text-uppercase text-pan mb-2 pe-4 mt-2 mt-sm-0 pe-sm-0 cb-fs-18">
              moderator:
            </h6>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Ms. Aude Lucie Ayo-Adibet")}
              key="top"
              placement="top"
            >
              <img className="panelist-img ms-3" src={aude} />
            </OverlayTrigger>
          </div>
        </div>
        
      </div>
      <div className="firstDiv card text-white-50 text-sm-center">
        <div className="card-body flex-column cb-border-bottom timeCol bg-div">
          <h6 className="text-uppercase event-title">
          Why The African Union?
          </h6>
          <br /><br />
          <div className="panelist mt-3 d-flex d-sm-block align-items-center">
            <h6 className="text-uppercase text-pan mb-2 pe-4 mt-2 mt-sm-0 pe-sm-0 cb-fs-18">
              panelists:
            </h6>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover(" Ms. Simone Yankey-Ouattara")}
              key="top"
              placement="top"
            >
              <Image className="panelist-img me-2" src={simone} alt="Image" />
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Mr. William Carew")}
              key="top"
              placement="top"
            >
              <img className="panelist-img" src={william} />
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Ms. Netsanet Getachew")}
              key="top"
              placement="top"
            >
              <img className="panelist-img ms-3" src={speaker6} />
            </OverlayTrigger>
          </div>
          <div className="moderator mt-4 d-flex d-sm-block align-items-center">
            <h6 className="text-uppercase text-pan mb-2 pe-4 mt-2 mt-sm-0 pe-sm-0 cb-fs-18">
              moderator:
            </h6>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Mr. Daudi Mkoma")}
              key="top"
              placement="top"
            >
              <img className="panelist-img ms-3" src={speaker} />
            </OverlayTrigger>
          </div>
        </div>
        
      </div>
    </div>
    </div>
  );

  

  const days = [
    {
      key: "allDays",
      label: "All Days",
      dayName: "All Days",
      date: "",
      events: [allDaysContent],
    }
  ];

  return (
    <section className="handshake-welcome pb-3 container-fluid">
      <div className="row mt-5 justify-content-center p-sm-0 p-3">
        <span className="col-md-8 text-center text-uppercase text-nlco-secondary">
            Welcome To The African Union Virtual Career Fair Masterclass
        </span>
        <div className="col-md-10 text-center mt-5 fw-bold">
        A rich, bold, hearty and highly interactive half-day event, the fair will spotlight strategic decision makers from the AU who will provide first-hand information about the history, mandate, structures and opportunities available within the institution. The African Union Virtual Career Fair Masterclass is not a box to be ticked. It is an intentional attempt to find, attract and nurture a highly diverse, passionate and competent talent pipeline for the African Union.
        </div>
        <div className="col-md-10 text-center mt-5 fw-bold">
        Curated by Graduatepro and moderated by Naomi Lucas, The African Union Virtual Career Fair Masterclass is a must-attend for Africans who want to build a global career.
        </div>
      </div>

      <div className="row justify-content-center" style={{ marginTop: "7rem" }}>
        <span className="text-center text-uppercase text-nlco-secondary">
          Event Details
        </span>
        <div className="col-md-6 col-12 text-uppercase text-white days-container mt-0">
          <div className="row justify-content-sm-center">
            {/*<div
              className={`col-4 col-sm-2 py-2 my-2 day-div text-center ${
                key === "allDays" ? "active" : ""
              }`}
              onClick={() => setKey("allDays")}
            >
              All Day
            </div>
             <div
              className={`col-4 col-sm-2 py-2 my-2 day-div text-center ${
                key === "day1" ? "active" : ""
              }`}
              onClick={() => setKey("day1")}
            >
              Day 1
            </div>
            <div
              className={`col-4 col-sm-2 py-2 my-2 day-div text-center ${
                key === "day2" ? "active" : ""
              }`}
              onClick={() => setKey("day2")}
            >
              Day 2
            </div>
            <div
              className={`col-4 col-sm-2 py-2 my-2 day-div text-center ${
                key === "day3" ? "active" : ""
              }`}
              onClick={() => setKey("day3")}
            >
              Day 3
            </div>
            <div
              className={`col-4 col-sm-2 py-2 my-2 day-div text-center ${
                key === "day4" ? "active" : ""
              }`}
              onClick={() => setKey("day4")}
            >
              Day 4
            </div> */}
          </div>
        </div>
      </div>

      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="row justify-content-center mb-5"
      >
        {days.map((day) => (
          <Tab key={day.key} eventKey={day.key}>
            {day.events.map((event, index) => (
              <React.Fragment key={index}>{event}</React.Fragment>
            ))}
          </Tab>
        ))}
      </Tabs>
    </section>
  );
};

export default HandshakeWelcome;
