import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import "./HandshakeWelcome.css";
import ronaldo from "../../images/ronaldo.png";
import ramos from "../../images/ramos.jpg";
import serene from "../../images/serena.webp";
import elon from "../../images/elon.jpg";
import victor from '../../images/speakers/Mr-Victor.jpg'
import nissem from '../../images/speakers/Ms-Nissem.jpg'
import sandile from '../../images/speakers/Mr-Sandile.jpg'
import aude from '../../images/speakers/Ms-Aude.jpg'
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
    <div className="col-md-12 justify-content-center hw d-sm-flex text-white-50">
      <div className="firstDiv card text-white-50 text-center d-none d-sm-block">
        <div className="card-header text-center">Time(GMT)</div>
        <div className="card-body timeCol">
          <div className="time">7:00AM - 11:00AM GMT</div>
        </div>
        <div className="card-body timeCol">
          <div className="time">11:00AM - 3:00PM GMT</div>
        </div>
      </div>
      <div className="firstDiv card text-white-50 text-sm-center">
        <div className="card-header d-none d-sm-block bg-div">
          <div className="invisible">
          Tuesday
          <br className="d-none d-sm-block" /> 9th January 2024
          </div>
        </div>
        <div className="card-body flex-column cb-border-bottom timeCol bg-div">
          <h6 className="text-uppercase event-title">
            African Union<br className="d-none d-sm-block" /> (The Backstory)
          </h6>
          <div className="text-white cb-fs-16 invisible">
            Awakening a mindset of <br className="d-none d-sm-block" />{" "}
            possibilities
          </div>
          {/*<div className="cb-datetime d-block d-sm-none mt-4">
            {" "}
            <IoCalendar /> 9th January 2024{" "}
          </div>
          <div className="cb-datetime d-block d-sm-none mt-3 mb-4">
            {" "}
            <IoMdClock /> 12:00PM - 2:00PM{" "}
          </div>*/}
          <div className="panelist mt-3 d-flex d-sm-block align-items-center">
            <h6 className="text-uppercase text-pan mb-2 pe-4 mt-2 mt-sm-0 pe-sm-0 cb-fs-18">
              panelist:
            </h6>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Christiano Ronaldo")}
              key="top"
              placement="top"
            >
              <Image className="panelist-img me-2" src={ronaldo} alt="Image" />
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Sergio Ramos")}
              key="top"
              placement="top"
            >
              <img className="panelist-img" src={ramos} />
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Selena Gomez")}
              key="top"
              placement="top"
            >
              <img className="panelist-img ms-3" src={serene} />
            </OverlayTrigger>
          </div>
          <div className="moderator mt-4 d-flex d-sm-block align-items-center">
            <h6 className="text-uppercase text-pan mb-2 pe-4 mt-2 mt-sm-0 pe-sm-0 cb-fs-18">
              moderator:
            </h6>
            <img className="panelist-img" src={elon} />
          </div>
        </div>
        <div className="card-body flex-column cb-border-bottom timeCol bg-div">
          <h6 className="text-uppercase event-title">
            Agenda 2063:<br className="d-none d-sm-block" />The Africa We Want
          </h6>
          <br /><br />
          <div className="panelist mt-3 d-flex d-sm-block align-items-center">
            <h6 className="text-uppercase text-pan mb-2 pe-4 mt-2 mt-sm-0 pe-sm-0 cb-fs-18">
              panelist:
            </h6>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Christiano Ronaldo")}
              key="top"
              placement="top"
            >
              <Image className="panelist-img me-2" src={ronaldo} alt="Image" />
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Sergio Ramos")}
              key="top"
              placement="top"
            >
              <img className="panelist-img" src={ramos} />
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Selena Gomez")}
              key="top"
              placement="top"
            >
              <img className="panelist-img ms-3" src={serene} />
            </OverlayTrigger>
          </div>
          <div className="moderator mt-4 d-flex d-sm-block align-items-center">
            <h6 className="text-uppercase text-pan mb-2 pe-4 mt-2 mt-sm-0 pe-sm-0 cb-fs-18">
              moderator:
            </h6>
            <img className="panelist-img" src={elon} />
          </div>
        </div>
      </div>
      <div className="firstDiv card text-white-50 text-sm-center">
        <div className="card-header d-none d-sm-block invisible">
          Wednesday
          <br className="d-none d-sm-block" /> 10th January2024
        </div>
        <div className="card-body flex-column cb-border-bottom timeCol">
          <h6 className="text-uppercase event-title">
            African Union Structure:<br className="d-none d-sm-block" />The Organisation
            <br className="d-none d-sm-block" />
          </h6>
          <div className="text-white cb-fs-16 invisible">
            Perspectives from
            <br className="d-none d-sm-block" /> Employers of Labour
          </div>
          <div className="panelist mt-3 d-flex d-sm-block align-items-center">
            <h6 className="text-uppercase text-pan mb-2 pe-4 mt-2 mt-sm-0 pe-sm-0 cb-fs-18">
              panelist:
            </h6>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Mr. Leslye Melinda Koumba")}
              key="top"
              placement="top"
            >
              <Image className="panelist-img me-2" src={ronaldo} alt="Image" />
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Sergio Ramos")}
              key="top"
              placement="top"
            >
              <img className="panelist-img" src={ramos} />
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Selena Gomez")}
              key="top"
              placement="top"
            >
              <img className="panelist-img ms-3" src={serene} />
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
              <img className="panelist-img ms-3" src={ronaldo} />
            </OverlayTrigger>
          </div>
        </div>
        <div className="card-body flex-column cb-border-bottom timeCol">
          <h6 className="text-uppercase event-title">
            African Union Structure:<br className="d-none d-sm-block" /> Key Organs
          </h6>
          <div className="text-white cb-fs-16 invisible">
            Spotlighting Noteworthy <br className="d-none d-sm-block" /> Models
          </div>
          <div className="panelist mt-3 d-flex d-sm-block align-items-center">
            <h6 className="text-uppercase text-pan mb-2 pe-4 mt-2 mt-sm-0 pe-sm-0 cb-fs-18">
              panelist:
            </h6>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Christiano Ronaldo")}
              key="top"
              placement="top"
            >
              <Image className="panelist-img me-2" src={ronaldo} alt="Image" />
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Sergio Ramos")}
              key="top"
              placement="top"
            >
              <img className="panelist-img" src={ramos} />
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Selena Gomez")}
              key="top"
              placement="top"
            >
              <img className="panelist-img ms-3" src={serene} />
            </OverlayTrigger>
          </div>
          <div className="moderator mt-4 d-flex d-sm-block align-items-center">
            <h6 className="text-uppercase text-pan mb-2 pe-4 mt-2 mt-sm-0 pe-sm-0 cb-fs-18">
              moderator:
            </h6>
            <img className="panelist-img" src={elon} />
          </div>
        </div>
      </div>
      <div className="firstDiv card text-white-50 text-sm-center">
        <div className="card-header d-none d-sm-block bg-div">
          <div className="invisible">
          Thursday
          <br className="d-none d-sm-block" /> 11th January 2024
          </div>
        </div>
        <div className="card-body flex-column cb-border-bottom timeCol bg-div">
          <h6 className="text-uppercase event-title">
            Taking Action
          <br className="d-none d-sm-block" />
          <br /> <br />
          </h6>
          <div className="text-white cb-fs-16 invisible">
            Insights for A Successful <br className="d-none d-sm-block" />{" "}
            Transition
          </div>
          <div className="panelist mt-3 d-flex d-sm-block align-items-center">
            <h6 className="text-uppercase text-pan mb-2 pe-4 mt-2 mt-sm-0 pe-sm-0 cb-fs-18">
              panelist:
            </h6>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Christiano Ronaldo")}
              key="top"
              placement="top"
            >
              <Image className="panelist-img me-2" src={ronaldo} alt="Image" />
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Sergio Ramos")}
              key="top"
              placement="top"
            >
              <img className="panelist-img" src={ramos} />
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Selena Gomez")}
              key="top"
              placement="top"
            >
              <img className="panelist-img ms-3" src={serene} />
            </OverlayTrigger>
          </div>
          <div className="moderator mt-4 d-flex d-sm-block align-items-center">
            <h6 className="text-uppercase text-pan mb-2 pe-4 mt-2 mt-sm-0 pe-sm-0 cb-fs-18">
              moderator:
            </h6>
            <img className="panelist-img" src={elon} />
          </div>
        </div>
        <div className="card-body flex-column cb-border-bottom timeCol bg-div">
          <h6 className="text-uppercase event-title">
          Pathways, Opportunities<br className="d-none d-sm-block" />and Requirements
          </h6>
          <div className="text-white cb-fs-16 invisible">
            Spotlighting Noteworthy <br className="d-none d-sm-block" /> Models
          </div>
          <div className="panelist mt-3 d-flex d-sm-block align-items-center">
            <h6 className="text-uppercase text-pan mb-2 pe-4 mt-2 mt-sm-0 pe-sm-0 cb-fs-18">
              panelist:
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
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Selena Gomez")}
              key="top"
              placement="top"
            >
              <img className="panelist-img ms-3" src={serene} />
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
        <div className="card-header d-none d-sm-block invisible">
          Friday
          <br className="d-none d-sm-block" /> 12th January 2024
        </div>
        <div className="card-body flex-column cb-border-bottom timeCol">
          <h6 className="text-uppercase event-title">
          Understanding The African Union<br className="d-none d-sm-block" /> Talent Selection Process
          </h6>
          <div className="text-white cb-fs-16 invisible">
            Strategies for Enduring <br className="d-none d-sm-block" /> Success
            in the Diaspora
          </div>
          <div className="panelist mt-3 d-flex d-sm-block align-items-center">
            <h6 className="text-uppercase text-pan mb-2 pe-4 mt-2 mt-sm-0 pe-sm-0 cb-fs-18">
              panelist:
            </h6>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Christiano Ronaldo")}
              key="top"
              placement="top"
            >
              <Image className="panelist-img me-2" src={ronaldo} alt="Image" />
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Sergio Ramos")}
              key="top"
              placement="top"
            >
              <img className="panelist-img" src={ramos} />
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Selena Gomez")}
              key="top"
              placement="top"
            >
              <img className="panelist-img ms-3" src={serene} />
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
        <div className="card-body flex-column cb-border-bottom timeCol">
          <h6 className="text-uppercase event-title">
            Virtual Mixers
          <br className="d-none d-sm-block" />
          </h6>
          <br />
          <div className="text-white cb-fs-16 invisible">
            Strategies for Securing <br className="d-none d-sm-block" /> Global
            Opportunities
          </div>
          <div className="panelist mt-3 d-flex d-sm-block align-items-center">
            <h6 className="text-uppercase text-pan mb-2 pe-4 mt-2 mt-sm-0 pe-sm-0 cb-fs-18">
              panelist:
            </h6>

            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Christiano Ronaldo")}
              key="top"
              placement="top"
            >
              <Image className="panelist-img me-2" src={ronaldo} alt="Image" />
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Sergio Ramos")}
              key="top"
              placement="top"
            >
              <img className="panelist-img" src={ramos} />
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Selena Gomez")}
              key="top"
              placement="top"
            >
              <img className="panelist-img ms-3" src={serene} />
            </OverlayTrigger>
          </div>
          <div className="moderator mt-4 d-flex d-sm-block align-items-center">
            <h6 className="text-uppercase text-pan mb-2 pe-4 mt-2 mt-sm-0 pe-sm-0 cb-fs-18">
              moderator:
            </h6>
            <img className="panelist-img" src={elon} />
          </div>
        </div>
      </div>
    </div>
  );

  const day1Content = (
    <div className="col-md-12 justify-content-center hw d-sm-flex text-white-50">
      <div className="firstDiv card text-white-50 text-center d-none d-sm-block">
        <div className="card-header">Time(WAT)</div>
        <div className="card-body timeCol">
          <div className="time">12:00PM - 2:00PM</div>
        </div>
        <div className="card-body timeCol">
          <div className="time">5:00PM - 7:00PM</div>
        </div>
      </div>
      <div className="firstDiv card text-white-50 text-sm-center">
        <div className="card-header d-none d-sm-block">
          Tuesday
          <br className="d-none d-sm-block" /> 9th January 2024
        </div>
        <div className="card-body flex-column cb-border-bottom timeCol bg-dark-blue">
          <h6 className="text-uppercase event-title">
            Creating <br className="d-none d-sm-block" /> Opportunities
          </h6>
          <div className="text-white cb-fs-16">
            Awakening a mindset of <br className="d-none d-sm-block" />{" "}
            possibilities
          </div>
          <div className="panelist mt-3 d-flex d-sm-block align-items-center">
            <h6 className="text-uppercase text-white mb-2 pe-4 mt-2 mt-sm-0 pe-sm-0 cb-fs-18">
              panelist:
            </h6>

            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Christiano Ronaldo")}
              key="top"
              placement="top"
            >
              <Image className="panelist-img me-2" src={ronaldo} alt="Image" />
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Sergio Ramos")}
              key="top"
              placement="top"
            >
              <img className="panelist-img" src={ramos} />
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Selena Gomez")}
              key="top"
              placement="top"
            >
              <img className="panelist-img ms-3" src={serene} />
            </OverlayTrigger>
          </div>
          <div className="moderator mt-4 d-flex d-sm-block align-items-center">
            <h6 className="text-uppercase text-white mb-2 pe-4 mt-2 mt-sm-0 pe-sm-0 cb-fs-18">
              moderator:
            </h6>
            <img className="panelist-img" src={elon} />
          </div>
        </div>
        <div className="card-body flex-column cb-border-bottom timeCol bg-dark-blue">
          <h6 className="text-uppercase event-title">
            Creating <br className="d-none d-sm-block" /> Opportunities
          </h6>
          <div className="text-white cb-fs-16">
            Awakening a mindset of <br className="d-none d-sm-block" />{" "}
            possibilities
          </div>
          <div className="cb-datetime d-block d-sm-none mt-4">
            {" "}
            <IoCalendar /> 9th January 2024{" "}
          </div>
          <div className="cb-datetime d-block d-sm-none mt-3 mb-4">
            {" "}
            <IoMdClock /> 12:00PM - 2:00PM{" "}
          </div>
          <div className="panelist mt-3 d-flex d-sm-block align-items-center">
            <h6 className="text-uppercase text-white mb-2 pe-4 mt-2 mt-sm-0 pe-sm-0 cb-fs-18">
              panelist:
            </h6>

            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Christiano Ronaldo")}
              key="top"
              placement="top"
            >
              <Image className="panelist-img me-2" src={ronaldo} alt="Image" />
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Sergio Ramos")}
              key="top"
              placement="top"
            >
              <img className="panelist-img" src={ramos} />
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Selena Gomez")}
              key="top"
              placement="top"
            >
              <img className="panelist-img ms-3" src={serene} />
            </OverlayTrigger>
          </div>
          <div className="moderator mt-4 d-flex d-sm-block align-items-center">
            <h6 className="text-uppercase text-white mb-2 pe-4 mt-2 mt-sm-0 pe-sm-0 cb-fs-18">
              moderator:
            </h6>
            <img className="panelist-img" src={elon} />
          </div>
        </div>
      </div>
      <div className="firstDiv card text-white-50 text-sm-center d-none d-sm-block">
        <div className="card-header d-none d-sm-block">
          Wednesday
          <br className="d-none d-sm-block" /> 10th January2024
        </div>
        <div className="card-body flex-column cb-border-bottom timeCol">
          <span
            className="text-white d-flex align-items-center mx-5"
            style={{ height: "100%" }}
          >
            No event
          </span>
        </div>
        <div className="card-body flex-column cb-border-bottom timeCol">
          <span
            className="text-white d-flex align-items-center mx-5"
            style={{ height: "100%" }}
          >
            No event
          </span>
        </div>
      </div>
      <div className="firstDiv card text-white-50 text-sm-center d-none d-sm-block">
        <div className="card-header d-none d-sm-block">
          Thursday
          <br className="d-none d-sm-block" /> 11th January 2024
        </div>
        <div className="card-body flex-column cb-border-bottom timeCol bg-dark-blue">
          <span
            className="text-white d-flex align-items-center mx-5"
            style={{ height: "100%" }}
          >
            No event
          </span>
        </div>
        <div className="card-body flex-column cb-border-bottom timeCol bg-dark-blue align-items-center">
          <span
            className="text-white d-flex align-items-center mx-5"
            style={{ height: "100%" }}
          >
            No event
          </span>
        </div>
      </div>
      <div className="firstDiv card text-white-50 text-sm-center d-none d-sm-block">
        <div className="card-header d-none d-sm-block">
          Friday
          <br className="d-none d-sm-block" /> 12th January 2024
        </div>
        <div className="card-body flex-column cb-border-bottom timeCol">
          <span
            className="text-white d-flex align-items-center mx-5"
            style={{ height: "100%" }}
          >
            No event
          </span>
        </div>
        <div className="card-body flex-column cb-border-bottom timeCol">
          <span
            className="text-white d-flex align-items-center mx-5"
            style={{ height: "100%" }}
          >
            No event
          </span>
        </div>
      </div>
    </div>
  );

  const day2Content = (
    <div className="col-md-12 justify-content-center hw d-sm-flex text-white-50">
      <div className="firstDiv card text-white-50 text-center d-none d-sm-block">
        <div className="card-header">Time(WAT)</div>
        <div className="card-body timeCol">
          <div className="time">12:00PM - 2:00PM</div>
        </div>
        <div className="card-body timeCol">
          <div className="time">5:00PM - 7:00PM</div>
        </div>
      </div>
      <div className="firstDiv card text-white-50 text-sm-center d-none d-sm-block">
        <div className="card-header d-none d-sm-block">
          Tuesday
          <br className="d-none d-sm-block" /> 9th January 2024
        </div>
        <div className="card-body flex-column cb-border-bottom timeCol bg-dark-blue">
          <span
            className="text-white d-flex align-items-center mx-5"
            style={{ height: "100%" }}
          >
            No event
          </span>
        </div>
        <div className="card-body flex-column cb-border-bottom timeCol bg-dark-blue">
          <span
            className="text-white d-flex align-items-center mx-5"
            style={{ height: "100%" }}
          >
            No event
          </span>
        </div>
      </div>
      <div className="firstDiv card text-white-50 text-sm-center">
        <div className="card-header d-none d-sm-block">
          Wednesday
          <br className="d-none d-sm-block" /> 10th January2024
        </div>
        <div className="card-body flex-column cb-border-bottom timeCol">
          <h6 className="text-uppercase event-title">
            Founders Panel <br className="d-none d-sm-block" />
          </h6>
          <div className="text-white cb-fs-16">
            Perspectives from <br className="d-none d-sm-block" /> Employers of
            Labour
          </div>
          <div className="cb-datetime d-block d-sm-none mt-4">
            {" "}
            <IoCalendar /> 9th January 2024{" "}
          </div>
          <div className="cb-datetime d-block d-sm-none mt-3 mb-4">
            {" "}
            <IoMdClock /> 12:00PM - 2:00PM{" "}
          </div>
          <div className="panelist mt-3 d-flex d-sm-block align-items-center">
            <h6 className="text-uppercase text-white mb-2 pe-4 mt-2 mt-sm-0 pe-sm-0 cb-fs-18">
              panelist:
            </h6>

            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Christiano Ronaldo")}
              key="top"
              placement="top"
            >
              <Image className="panelist-img me-2" src={ronaldo} alt="Image" />
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Sergio Ramos")}
              key="top"
              placement="top"
            >
              <img className="panelist-img" src={ramos} />
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Selena Gomez")}
              key="top"
              placement="top"
            >
              <img className="panelist-img ms-3" src={serene} />
            </OverlayTrigger>
          </div>
          <div className="moderator mt-4 d-flex d-sm-block align-items-center">
            <h6 className="text-uppercase text-white mb-2 pe-4 mt-2 mt-sm-0 pe-sm-0 cb-fs-18">
              moderator:
            </h6>
            <img className="panelist-img" src={elon} />
          </div>
        </div>
        <div className="card-body flex-column cb-border-bottom timeCol">
          <h6 className="text-uppercase event-title">
            Intrapreneurship <br className="d-none d-sm-block" />
          </h6>
          <div className="text-white cb-fs-16">
            Spotlighting Noteworthy <br className="d-none d-sm-block" /> Models
          </div>
          <div className="cb-datetime d-block d-sm-none mt-4">
            {" "}
            <IoCalendar /> 9th January 2024{" "}
          </div>
          <div className="cb-datetime d-block d-sm-none mt-3 mb-4">
            {" "}
            <IoMdClock /> 12:00PM - 2:00PM{" "}
          </div>
          <div className="panelist mt-3 d-flex d-sm-block align-items-center">
            <h6 className="text-uppercase text-white mb-2 pe-4 mt-2 mt-sm-0 pe-sm-0 cb-fs-18">
              panelist:
            </h6>

            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Christiano Ronaldo")}
              key="top"
              placement="top"
            >
              <Image className="panelist-img me-2" src={ronaldo} alt="Image" />
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Sergio Ramos")}
              key="top"
              placement="top"
            >
              <img className="panelist-img" src={ramos} />
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Selena Gomez")}
              key="top"
              placement="top"
            >
              <img className="panelist-img ms-3" src={serene} />
            </OverlayTrigger>
          </div>
          <div className="moderator mt-4 d-flex d-sm-block align-items-center">
            <h6 className="text-uppercase text-white mb-2 pe-4 mt-2 mt-sm-0 pe-sm-0 cb-fs-18">
              moderator:
            </h6>
            <img className="panelist-img" src={elon} />
          </div>
        </div>
      </div>
      <div className="firstDiv card text-white-50 text-sm-center d-none d-sm-block">
        <div className="card-header d-none d-sm-block">
          Thursday
          <br className="d-none d-sm-block" /> 11th January 2024
        </div>
        <div className="card-body flex-column cb-border-bottom timeCol bg-dark-blue">
          <span
            className="text-white d-flex align-items-center mx-5"
            style={{ height: "100%" }}
          >
            No event
          </span>
        </div>
        <div className="card-body flex-column cb-border-bottom timeCol bg-dark-blue align-items-center">
          <span
            className="text-white d-flex align-items-center mx-5"
            style={{ height: "100%" }}
          >
            No event
          </span>
        </div>
      </div>
      <div className="firstDiv card text-white-50 text-sm-center d-none d-sm-block">
        <div className="card-header d-none d-sm-block">
          Friday
          <br className="d-none d-sm-block" /> 12th January 2024
        </div>
        <div className="card-body flex-column cb-border-bottom timeCol">
          <span
            className="text-white d-flex align-items-center mx-5"
            style={{ height: "100%" }}
          >
            No event
          </span>
        </div>
        <div className="card-body flex-column cb-border-bottom timeCol">
          <span
            className="text-white d-flex align-items-center mx-5"
            style={{ height: "100%" }}
          >
            No event
          </span>
        </div>
      </div>
    </div>
  );

  const day3Content = (
    <div className="col-md-12 justify-content-center hw d-sm-flex text-white-50">
      <div className="firstDiv card text-white-50 text-center d-none d-sm-block">
        <div className="card-header">Time(WAT)</div>
        <div className="card-body timeCol">
          <div className="time">12:00PM - 2:00PM</div>
        </div>
        <div className="card-body timeCol">
          <div className="time">5:00PM - 7:00PM</div>
        </div>
      </div>
      <div className="firstDiv card text-white-50 text-sm-center d-none d-sm-block">
        <div className="card-header d-none d-sm-block">
          Tuesday
          <br className="d-none d-sm-block" /> 9th January 2024
        </div>
        <div className="card-body flex-column cb-border-bottom timeCol bg-dark-blue">
          <span
            className="text-white d-flex align-items-center mx-5"
            style={{ height: "100%" }}
          >
            No event
          </span>
        </div>
        <div className="card-body flex-column cb-border-bottom timeCol bg-dark-blue">
          <span
            className="text-white d-flex align-items-center mx-5"
            style={{ height: "100%" }}
          >
            No event
          </span>
        </div>
      </div>
      <div className="firstDiv card text-white-50 text-sm-center d-none d-sm-block">
        <div className="card-header d-none d-sm-block">
          Wednesday
          <br className="d-none d-sm-block" /> 10th January2024
        </div>
        <div className="card-body flex-column timeCol">
          <span
            className="text-white d-flex align-items-center mx-5"
            style={{ height: "100%" }}
          >
            No event
          </span>
        </div>
        <div className="card-body flex-column timeCol">
          <span
            className="text-white d-flex align-items-center mx-5"
            style={{ height: "100%" }}
          >
            No event
          </span>
        </div>
      </div>
      <div className="firstDiv card text-white-50 text-sm-center">
        <div className="card-header d-none d-sm-block">
          Thursday
          <br className="d-none d-sm-block" /> 11th January 2024
        </div>
        <div className="card-body flex-column cb-border-bottom timeCol bg-dark-blue">
          <h6 className="text-uppercase event-title">
            Switching Careers <br className="d-none d-sm-block" />
          </h6>
          <div className="text-white cb-fs-16">
            Insights for A Successful <br className="d-none d-sm-block" />{" "}
            Transition
          </div>
          <div className="cb-datetime d-block d-sm-none mt-4">
            {" "}
            <IoCalendar /> 9th January 2024{" "}
          </div>
          <div className="cb-datetime d-block d-sm-none mt-3 mb-4">
            {" "}
            <IoMdClock /> 12:00PM - 2:00PM{" "}
          </div>
          <div className="panelist mt-3 d-flex d-sm-block align-items-center">
            <h6 className="text-uppercase text-white mb-2 pe-4 mt-2 mt-sm-0 pe-sm-0 cb-fs-18">
              panelist:
            </h6>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Christiano Ronaldo")}
              key="top"
              placement="top"
            >
              <Image className="panelist-img me-2" src={ronaldo} alt="Image" />
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Sergio Ramos")}
              key="top"
              placement="top"
            >
              <img className="panelist-img" src={ramos} />
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Selena Gomez")}
              key="top"
              placement="top"
            >
              <img className="panelist-img ms-3" src={serene} />
            </OverlayTrigger>
          </div>
          <div className="moderator mt-4 d-flex d-sm-block align-items-center">
            <h6 className="text-uppercase text-white mb-2 pe-4 mt-2 mt-sm-0 pe-sm-0 cb-fs-18">
              moderator:
            </h6>
            <img className="panelist-img" src={elon} />
          </div>
        </div>
        <div className="card-body flex-column cb-border-bottom timeCol bg-dark-blue d-none d-sm-block">
          <span
            className="text-white d-flex align-items-center mx-5"
            style={{ height: "100%" }}
          >
            No event
          </span>
        </div>
      </div>
      <div className="firstDiv card text-white-50 text-sm-center d-none d-sm-block">
        <div className="card-header d-none d-sm-block">
          Friday
          <br className="d-none d-sm-block" /> 12th January 2024
        </div>
        <div className="card-body flex-column timeCol">
          <span
            className="text-white d-flex align-items-center mx-5"
            style={{ height: "100%" }}
          >
            No event
          </span>
        </div>
        <div className="card-body flex-column timeCol">
          <span
            className="text-white d-flex align-items-center mx-5"
            style={{ height: "100%" }}
          >
            No event
          </span>
        </div>
      </div>
    </div>
  );

  const day4Content = (
    <div className="col-md-12 justify-content-center hw d-sm-flex text-white-50">
      <div className="firstDiv card text-white-50 text-center d-none d-sm-block">
        <div className="card-header">Time(WAT)</div>
        <div className="card-body timeCol">
          <div className="time">12:00PM - 2:00PM</div>
        </div>
        <div className="card-body timeCol">
          <div className="time">5:00PM - 7:00PM</div>
        </div>
      </div>
      <div className="firstDiv card text-white-50 text-sm-center d-none d-sm-block">
        <div className="card-header d-none d-sm-block">
          Tuesday
          <br className="d-none d-sm-block" /> 9th January 2024
        </div>
        <div className="card-body flex-column cb-border-bottom timeCol bg-dark-blue">
          <span
            className="text-white d-flex align-items-center mx-5"
            style={{ height: "100%" }}
          >
            No event
          </span>
        </div>
        <div className="card-body flex-column cb-border-bottom timeCol bg-dark-blue">
          <span
            className="text-white d-flex align-items-center mx-5"
            style={{ height: "100%" }}
          >
            No event
          </span>
        </div>
      </div>
      <div className="firstDiv card text-white-50 text-sm-center d-none d-sm-block">
        <div className="card-header d-none d-sm-block">
          Wednesday
          <br className="d-none d-sm-block" /> 10th January2024
        </div>
        <div className="card-body flex-column timeCol">
          <span
            className="text-white d-flex align-items-center mx-5"
            style={{ height: "100%" }}
          >
            No event
          </span>
        </div>
        <div className="card-body flex-column timeCol">
          <span
            className="text-white d-flex align-items-center mx-5"
            style={{ height: "100%" }}
          >
            No event
          </span>
        </div>
      </div>
      <div className="firstDiv card text-white-50 text-sm-center d-none d-sm-block">
        <div className="card-header d-none d-sm-block">
          Thursday
          <br className="d-none d-sm-block" /> 11th January 2024
        </div>
        <div className="card-body flex-column cb-border-bottom timeCol bg-dark-blue">
          <span
            className="text-white d-flex align-items-center mx-5"
            style={{ height: "100%" }}
          >
            No event
          </span>
        </div>
        <div className="card-body flex-column cb-border-bottom timeCol bg-dark-blue align-items-center">
          <span
            className="text-white d-flex align-items-center mx-5"
            style={{ height: "100%" }}
          >
            No event
          </span>
        </div>
      </div>
      <div className="firstDiv card text-white-50 text-sm-center">
        <div className="card-header d-none d-sm-block">
          Friday
          <br className="d-none d-sm-block" /> 12th January 2024
        </div>
        <div className="card-body flex-column timeCol">
          <h6 className="text-uppercase event-title">
            Thriving Abroad <br className="d-none d-sm-block" />
          </h6>
          <div className="text-white cb-fs-16">
            Strategies For Enduring <br className="d-none d-sm-block" /> Success
            in the Diaspora
          </div>
          <div className="cb-datetime d-block d-sm-none mt-4">
            {" "}
            <IoCalendar /> 9th January 2024{" "}
          </div>
          <div className="cb-datetime d-block d-sm-none mt-3 mb-4">
            {" "}
            <IoMdClock /> 12:00PM - 2:00PM{" "}
          </div>
          <div className="panelist mt-3 d-flex d-sm-block align-items-center">
            <h6 className="text-uppercase text-white mb-2 pe-4 mt-2 mt-sm-0 pe-sm-0 cb-fs-18">
              panelist:
            </h6>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Christiano Ronaldo")}
              key="top"
              placement="top"
            >
              <Image className="panelist-img me-2" src={ronaldo} alt="Image" />
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Sergio Ramos")}
              key="top"
              placement="top"
            >
              <img className="panelist-img" src={ramos} />
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Selena Gomez")}
              key="top"
              placement="top"
            >
              <img className="panelist-img ms-3" src={serene} />
            </OverlayTrigger>
          </div>
          <div className="moderator mt-4 d-flex d-sm-block align-items-center">
            <h6 className="text-uppercase text-white mb-2 pe-4 mt-2 mt-sm-0 pe-sm-0 cb-fs-18">
              moderator:
            </h6>
            <img className="panelist-img" src={elon} />
          </div>
        </div>
        <div className="card-body flex-column timeCol">
          <h6 className="text-uppercase event-title">
            Remote Work <br className="d-none d-sm-block" />
          </h6>
          <div className="text-white cb-fs-16">
            Strategies for Securing <br className="d-none d-sm-block" /> Global
            Opportunities
          </div>
          <div className="cb-datetime d-block d-sm-none mt-4">
            {" "}
            <IoCalendar /> 9th January 2024{" "}
          </div>
          <div className="cb-datetime d-block d-sm-none mt-3 mb-4">
            {" "}
            <IoMdClock /> 5:00PM - 7:00PM{" "}
          </div>
          <div className="panelist mt-3 d-flex d-sm-block align-items-center">
            <h6 className="text-uppercase text-white mb-2 pe-4 mt-2 mt-sm-0 pe-sm-0 cb-fs-18">
              panelist:
            </h6>

            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Christiano Ronaldo")}
              key="top"
              placement="top"
            >
              <Image className="panelist-img me-2" src={ronaldo} alt="Image" />
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Sergio Ramos")}
              key="top"
              placement="top"
            >
              <img className="panelist-img" src={ramos} />
            </OverlayTrigger>
            <OverlayTrigger
              trigger={["hover", "focus"]}
              overlay={popover("Selena Gomez")}
              key="top"
              placement="top"
            >
              <img className="panelist-img ms-3" src={serene} />
            </OverlayTrigger>
          </div>
          <div className="moderator mt-4 d-flex d-sm-block align-items-center">
            <h6 className="text-uppercase text-white mb-2 pe-4 mt-2 mt-sm-0 pe-sm-0 cb-fs-18">
              moderator:
            </h6>
            <img className="panelist-img" src={elon} />
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
    },
    {
      key: "day1",
      label: "Day 1",
      dayName: "Tuesday",
      date: "9th January 2024",
      events: [day1Content],
    },
    {
      key: "day2",
      label: "Day 2",
      dayName: "Wednesday",
      date: "10th January 2024",
      events: [day2Content],
    },
    {
      key: "day3",
      label: "Day 3",
      dayName: "Thursday",
      date: "11th January 2024",
      events: [day3Content],
    },
    {
      key: "day4",
      label: "Day 4",
      dayName: "Friday",
      date: "12th January 2024",
      events: [day4Content],
    },
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
        <div className="col-md-6 col-12 text-uppercase text-white days-container mt-5">
          <div className="row justify-content-sm-center">
            <div
              className={`col-4 col-sm-2 py-2 my-2 day-div text-center ${
                key === "allDays" ? "active" : ""
              }`}
              onClick={() => setKey("allDays")}
            >
              All Day
            </div>
            {/* <div
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
