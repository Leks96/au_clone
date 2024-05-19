import React from "react";
import "./Footer.css";
import LogoBlue from "../../images/Handshake-Logo-Blue.png";
import african_union from '../../images/african_union_logo.png'
import graduatepro from '../../images/gradpro_black.png'

import {
  IoArrowUp,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTiktok,
  IoLogoTwitter,
} from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-5 pb-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 col-12 text-sm-center mb-4">
            <div className="row">
              <div className="col-md-12 pb-4">
                <Link to="#" className="title">
                  <img
                    style={{ maxWidth: "150px" }}
                    src={african_union}
                    className="img-fluid"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="col-md-12 col-12 text-sm-center mx-2">
                <Link to={"https://twitter.com/_AfricanUnion"}>
                  <span className="footer-social-links">
                    <FaXTwitter className="footer-social-icon" />
                  </span>
                </Link>
                <Link to={"https://www.facebook.com/AfricanUnionCommission"}>
                  <span className="footer-social-links">
                    <IoLogoFacebook className="footer-social-icon" />
                  </span>
                </Link>
                <Link to={"https://au.int/#"}>
                  <span className="footer-social-links">
                    <IoLogoLinkedin className="footer-social-icon" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-12 text-start">
            <h6 className="fw-bolder fs-4">Useful Links</h6>
            <ul className="footer-ul">
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li className="mt-3">
                <span> &copy; 2024 Naomi Lucas </span>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-12 text-sm-center mb-4">
            <div className="row">
              <div className="col-md-12 pb-4 footer-grad">
                <Link to="#" className="title">
                  <img
                    style={{ maxWidth: "150px" }}
                    src={graduatepro}
                    className="img-fluid"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="col-md-12 col-12 text-sm-center mx-2 social-grad">
              <Link to={"https://x.com/GraduatePro"}>
                  <span className="footer-social-links">
                    <FaXTwitter className="footer-social-icon" />
                  </span>
                </Link>
                <Link to={"https://www.facebook.com/GraduatePro"}>
                  <span className="footer-social-links">
                    <IoLogoFacebook className="footer-social-icon" />
                  </span>
                </Link>
                <Link to={"https://www.linkedin.com/company/naomi-lucas"}>
                  <span className="footer-social-links">
                    <IoLogoLinkedin className="footer-social-icon" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-md-4 col-12 text-center d-flex align-items-center flex-column">
            <span className="back-to-top-icon mb-3">
              <IoArrowUp />
            </span>
            <span className="back-to-top-text">Back to top</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
