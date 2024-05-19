import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoLogoFacebook, IoLogoTwitter } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import "./Navbar.css";
const Logo = require("../../images/Handshake-Logo-White.png");
const LogoBlue = require("../../images/Handshake-Logo-Blue.png");
const MobileLogo = require("../../images/Handshake-Logo-Blue.png");
const african_union_normal = require("../../images/african_union_logo.png")
const african_union_white = require("../../images/african_union_white.png")

const NavbarStatic = ({ isScrolled, isMobile, toggleMenu, showMenu }) => {
  if (isMobile) {
    return (
      <nav
        class="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#5ac5c9" }}
      >
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <Link class="navbar-brand mr-auto" to="/" className="title">
            <img
              style={{ width: "100px" }}
              src={isMobile ? african_union_normal : isScrolled ? african_union_normal : african_union_white}
              className="img-fluid"
              alt="logo"
            />
          </Link>

          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" to="/#about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/#events">
                  Events
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/#speakers">
                  Speakers
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/#whyAttend">
                  Why Attend
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contacts">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="nav-link social">
              <img
                  style={{ width: "100px" }}
                  src={isMobile ? MobileLogo : isScrolled ? LogoBlue : Logo}
                  className="img-fluid"
                  alt="logo"
              />
            </div>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className={`"sticky-navbar navbar-sticky position-fixed"`}>
        {isMobile && (
          <button className="menu-toggle" onClick={toggleMenu}>
            <div className={`menu-icon ${showMenu ? "open" : ""}`} />
          </button>
        )}

        <Link to="/" className="title">
          <img
            style={{ width: "100px" }}
            src={african_union_normal}
            className="img-fluid"
            alt="logo"
          />
        </Link>
        <ul className="Navigator" style={{ marginTop: "15px" }}>
          <li>
            <Link to="/#about">About</Link>
          </li>
          <li>
            <Link to="/#events">Events</Link>
          </li>
          <li>
            <Link to="/#speakers">Speakers</Link>
          </li>
          <li>
            <Link to="/#whyAttend">Why Attend</Link>
          </li>
          <li>
            <Link to="/contacts">Contact</Link>
          </li>
          <div className="social">
          <img
            style={{ width: "100px" }}
            src={LogoBlue}
            className="img-fluid"
            alt="logo"
          />
          </div>
        </ul>
      </nav>
    );
  }
};

export default NavbarStatic;
