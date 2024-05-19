import React from "react";
import { useSpring, animated, config } from "react-spring";
import { Carousel } from "react-bootstrap";
import "./Partners.css";
import {
  IoArrowUp,
  IoLogoAmazon,
  IoLogoMicrosoft,
  IoLogOutSharp,
} from "react-icons/io5";
import { fontSize } from "@mui/system";
import partners from "../../Assets/group_partners.svg";
import { Link } from "react-router-dom";

const Partners = () => {
  const partnerIcons = [
    <IoLogoMicrosoft key="apple" />,
    <IoLogOutSharp key="google" />,
    <IoLogoAmazon key="microsoft" />,
  ];

  const [style, set] = useSpring(() => ({
    transform: "translateY(0px)",
    config: config.molasses,
  }));

  const handleMouseEnter = () => {
    set({ transform: "translateY(-10px)" });
  };

  const handleMouseLeave = () => {
    set({ transform: "translateY(0px)" });
  };

  return (
    <>
      {/*<section className="partners py-4">
        <div className="row justify-content-center mt-3">
          <span className="text-center text-uppercase text-white partners-title">
            Partners .
          </span>
          <span
            style={{ fontSize: "14px" }}
            className="text-center w-75 fw-bold partners-title-text d-none"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </span>

          <div className="my-3 partnersImages">
            <img src={partners} loading="lazy" alt="Partners Image" />
            <img src={partners} loading="lazy" alt="Partners Image" />
          </div>

          <div className="text-center mt-3 mb-5">
            <Link to={"/partner"}>
              <button
                className="btn btn-nlo-partner py-3"
                style={{ fontSize: "16px" }}
              >
                <IoArrowUp className="rotate-90 me-1" />
                Partner with us
              </button>
            </Link>
          </div>
        </div>
      </section>*/}

      <section className="join-now py-4">
        <div className="row justify-content-center mt-3">
          <span className="text-center col-md-10 text-uppercase text-white partners-title">
            Build A Global Career. <br /> Join the African Union.
          </span>
          <div className="text-center mt-3">
            <Link to={"/register"}>
              <button
                className="btn btn-nlo-partner py-3"
                style={{ fontSize: "16px" }}
              >
                <IoArrowUp className="rotate-90 me-1" />
                Register
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
