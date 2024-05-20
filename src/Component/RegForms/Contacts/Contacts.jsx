import React, { useEffect, useState } from "react";
import Cat from "../../../Assets/contactImage1.jpg";
import { TextareaAutosize } from "@mui/material";
import ArrowUpright from "../../SVGIcons/ArrowUpright/ArrowUpright";
import styles from "./Contacts.module.css";
import axios from "axios";

import successImage from "../../../Assets/successImage.gif";
import { Link } from "react-router-dom";
import NavbarStatic from "../../Navbar/NavbarStatic";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [isScrolled, setIsScrolled] = useState(window.scrollY > 0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showMenu, setShowMenu] = useState(false);

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

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setSubmitted(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    setErrorText("");

    if (Object.values(formData).some((value) => value === "")) {
      setErrorText("Please enter all the fields marked *");
      setSubmitted(false);
      return; // Exit early if any field is empty
    }

    setIsLoading(true);

    // new formdata obj
    const fd = new FormData();

    fd.append("name", formData.name);
    fd.append("email", formData.email);
    fd.append("message", formData.message);

    try {
      const baseUrl = process.env.REACT_APP_BASE_URL;
      const endpoint = "save-contact";
      const res = await axios.post(baseUrl + endpoint, fd);

      console.log(res);

      if (res.statusText === "OK" && res.data === "success") {
        setSubmitted(true);
      }
    } catch (error) {
      setErrorText(error.toString());
    } finally {
      setIsLoading(false);
    }

    console.log(formData);
  };

  const successMessage = () => {
    if (submitted) {
      return (
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 text-center" id={styles.success}>
              <img
                src={successImage}
                alt="successImage"
                width={250}
                height={200}
              />
            </div>
            <div className="col-12">
              <h1>
                Hello {formData.name}, your message has been sent successfully.
                We will be in touch
              </h1>
            </div>
            <div className="col-12 text-center d-none">
              <p className={styles.partSuccesMess}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus eos velit, quidem iure rem quam expedita ea fugiat
                non qui eius iste omnis, aliquam magni officiis cumque,
                voluptates est doloribus.
              </p>
            </div>
            <div className="col-12">
              <Link to={"/"}>
                <button className={styles.partBtnScss}>
                  <ArrowUpright />
                  Back to events
                </button>
              </Link>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <NavbarStatic
        isMobile={isMobile}
        isScrolled={isScrolled}
        toggleMenu={toggleMenu}
        showMenu={showMenu}
      />
      <section>
        {submitted ? (
          successMessage()
        ) : (
          <div className={styles.contacts}>
            <div className={styles.hero}>
              <div
                className={styles.heroImage}
                style={{ backgroundImage: `url(${Cat})` }}
              >
                <div className={styles.heroText}>
                  <h1>Contacts</h1>
                </div>
              </div>
            </div>
            <div className={`container`}>
              <div className={styles.column}>
                <div className={styles.title}>
                  <h1>
                    GET IN TOUCH WITH US <span>.</span>
                  </h1>
                  <p className="d-none">
                    Integer suscipit mollis mi dictum dapibus. Donec a mattis
                    nisi. Suspendisse vitae tortor libero. Sed consequat nunc a
                    bibendum tempor. Duis iaculis nibh auctor maximus pharetra
                  </p>
                </div>
              </div>
              <div className={`container ${styles.px2rem}`} id={styles.cont}>
                <div className={`row mb-3`}>
                  <div className="col-md-6 mb-5">
                    <form>
                      <label>
                        <p className={`text-start d-inline-block`}>
                          Your email address will not be published. Required
                          fields are marked <span>*</span>
                        </p>
                      </label>
                      <div className="container">
                        <div className={`row mb-3 g-2`}>
                          <div className={`col-md-6 pb-3 g-2`}>
                            <input
                              placeholder="Your name *"
                              className={styles.conInput}
                              onChange={handleFormChange}
                              value={formData.name}
                              type="text"
                              name="name"
                            />
                          </div>
                          <div className={`col-md-6 pb-3 g-2`}>
                            <input
                              placeholder="Your email *"
                              className={styles.conInput}
                              onChange={handleFormChange}
                              value={formData.email}
                              type="email"
                              name="email"
                            />
                          </div>
                          <div className={`col-md-12 pb-3 g-2`}>
                            <TextareaAutosize
                              style={{ color: "#fff" }}
                              minRows={2}
                              placeholder="Your message *"
                              className={styles.conInput}
                              onChange={handleFormChange}
                              value={formData.message}
                              type="text"
                              name="message"
                            />
                          </div>
                        </div>
                      </div>
                      {errorText && (
                        <p className={styles.errorText}>{errorText}</p>
                      )}
                      {isLoading ? (
                        <button disabled type="button" id={styles.regBtn}>
                          <div
                            class="spinner-border spinner-border-sm"
                            role="status"
                          >
                            <span class="visually-hidden">Loading...</span>
                          </div>
                        </button>
                      ) : (
                        <button onClick={handleFormSubmit} id={styles.regBtn}>
                          <ArrowUpright />
                          Get In Touch
                        </button>
                      )}
                    </form>
                  </div>
                  <div className={`col-md-6 ${styles.conInfo}`}>
                    <div className={`${styles.info} p-6`}>
                      <h1 className="mb-2">Location</h1>
                      <p className={`text-start p-0 mb-2`}>
                        Lagos, Nigeria.
                      </p>
                      <h1 className="mb-2">Contacts</h1>
                      <p className={`text-start p-0`}>ask@naomilucas.xyz</p>
                      {/*<p className={`text-start p-0`}>
                       au.graduatepro.naomilucas.xyz
                      </p>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Contacts;
