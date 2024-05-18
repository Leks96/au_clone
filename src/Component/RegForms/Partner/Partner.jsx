import React, { useEffect, useMemo, useState } from "react";
import styles from "./Partner.module.css";
import { TextareaAutosize } from "@mui/material";
import CustomSelect from "../../CustomComponents/Select/Custom-Select";
import countryList from "react-select-country-list";
import BackArrow from "../../SVGIcons/BackArrow/BackArrow";
import ArrowUpright from "../../SVGIcons/ArrowUpright/ArrowUpright";
import { Link } from "react-router-dom";
import successImage from "../../../Assets/successImage.gif";
import Footer from "../../Footer/Footer";
import NavbarStatic from "../../Navbar/NavbarStatic";
import PhoneInput, {
  isPossiblePhoneNumber,
  isSupportedCountry,
  parsePhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import axios from "axios";

const Partner = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    work: "",
    role: "",
    location: "",
    howDidYouHear: "",
    howToReach: "",
    summaryToPart: "",
  });

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [loading, setLoading] = useState(false);
  const [registeredName, setRegisteredName] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [summaryError, setSummaryError] = useState("");
  const [phone, setPhone] = useState("");

  const [isScrolled, setIsScrolled] = useState(window.scrollY > 0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showMenu, setShowMenu] = useState(false);

  const countries = useMemo(() => countryList().getData(), []);

  // Handling form change
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setSubmitted(false);
    setErrorText("");

    // Add real-time validation
    switch (name) {
      case "fullName":
        setNameError(value.length < 7 ? "Please enter your full name" : "");
        break;
      case "email":
        setEmailError(
          !/^\S+@\S+\.\S+$/.test(value)
            ? "Please enter a valid email address"
            : ""
        );
        break;
      case "phoneNumber":
        setPhoneError(
          !/^\+?\d+$/.test(value) || value.length < 10
            ? "Please enter a valid phone number"
            : ""
        );
        break;
      case "summaryToPart":
        setSummaryError(
          value.length < 100
            ? "Please enter a summary of 100 words minimum"
            : ""
        );
        break;
      default:
        break;
    }
  };

  const handleCustomSelectChange = (selectedValue, fieldName) => {
    setFormData((prevData) => ({ ...prevData, [fieldName]: selectedValue }));
    setSubmitted(false);
    setErrorText();
  };

  const validatePhoneNumber = (phone) => {
    const phoneNumber = parsePhoneNumber(phone);
    const country = phoneNumber?.country;
    const number = phoneNumber?.number;
    if (isSupportedCountry(country)) {
      if (!isPossiblePhoneNumber(number, country)) {
        return [false, number];
      }
    }
    return [true, number];
  };

  const handlePhoneInputChange = (phone) => {
    if (phone !== undefined) {
      setPhoneError("");
      const [isValid, number] = validatePhoneNumber(phone);
      if (!isValid) {
        setPhoneError("Invalid phone number");
      }
      setPhone(number);
    }
  };

  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(formData).some((value) => value === "")) {
      setErrorText("Please enter all the fields marked *");
      setSubmitted(false);
      return; // Exit early if any field is empty
    }

    setErrorText("");
    setLoading(true);

    // create a new formdata object
    const fd = new FormData();

    fd.append("type", "partner");
    fd.append("fullname", formData.fullName);
    fd.append("email", formData.email);
    fd.append("phone", phone);
    fd.append("where_do_you_work", formData.work);
    fd.append("what_do_you_do", formData.role);
    fd.append("preferred_contact_channel", formData.howToReach);
    fd.append("where_are_you_located", formData.location);
    fd.append("how_did_you_hear", formData.howDidYouHear);
    fd.append("summary_of_partnership", formData.summaryToPart);

    // await new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve("Continue");
    //   }, 5000);
    // });

    try {
      const url = process.env.REACT_APP_API_URL;
      const res = await axios.post(url, fd);

      console.log(res);

      // if (res.statusText === "OK" && res.data === "registration successful") {
      setRegisteredName(formData.firstName);
      setSubmitted(true);
      setErrorText("");
      setFormData((prevData) => ({
        fullName: "",
        email: "",
        work: "",
        role: "",
        location: "",
        howDidYouHear: "",
        howToReach: "",
        summaryToPart: "",
      }));
      // }
    } catch (error) {
      console.error("Error on submitting the form", error);
      setSubmitted(false);
      setErrorText(error.toString());
    } finally {
      setLoading(false);
    }
  };

  // Showing success message
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
                Hello {registeredName}, your partnership registration has been
                confirmed.
              </h1>
            </div>
            <div className="col-12 text-center">
              <p className={styles.partSuccesMess}>
                We look forward to seeing you at the event virtually. You’ll be
                notified 30 minutes before the event starts.
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
          <div className={`container p-3`}>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <div className={`pt-4 ${styles.backBtn}`}>
                <button>
                  <BackArrow />
                  Back
                </button>
              </div>
            </Link>
            <div className={`container p-4 ${styles.partCon}`}>
              <div className={styles.partTitle}>
                <h1>
                  We Can’t Wait To Partner <span>.</span>
                </h1>
                <p className="text-center d-none">
                  Lorem ipsum dolor sit amet consectetur. Sed vel.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed ipsum dolor
                  Tur adipiscing elit, sed do eiusmod sed do
                </p>
              </div>
              <form>
                <label className={`${styles.partLabel}`}>
                  <div className="d-block mt-5">
                    <p>Your email address will not be published. </p>
                    <p>Required fields are marked</p>
                    <span className="d-inline-block px-2">*</span>
                  </div>
                </label>
                <div className="container">
                  <div className="row mt-2 mb-3">
                    <div className="col-md-12 pb-3">
                      <input
                        placeholder="Your full name *"
                        className={`${styles.partInput} ${
                          nameError && styles.errorInput
                        }`}
                        type="text"
                        onChange={handleFormChange}
                        value={formData.fullName}
                        name="fullName"
                      />
                      {nameError && (
                        <p className={styles.errorText}>{nameError}</p>
                      )}
                    </div>
                    <div className="col-md-6 pb-3">
                      <input
                        placeholder="Your email *"
                        className={`${styles.partInput} ${
                          emailError && styles.errorInput
                        }`}
                        type="text"
                        onChange={handleFormChange}
                        value={formData.email}
                        name="email"
                      />
                      {emailError && (
                        <p className={styles.errorText}>{emailError}</p>
                      )}
                    </div>
                    <div className="col-md-6 pb-3">
                      <PhoneInput
                        onChange={handlePhoneInputChange}
                        value={phone}
                        name="phone"
                        placeholder="Your phone number *"
                        className={`${styles.partInput} ${
                          phoneError && styles.errorInput
                        }`}
                      />
                      {phoneError && (
                        <p className={styles.errorText}>{phoneError}</p>
                      )}
                    </div>
                    <div className="col-md-6 pb-3">
                      <input
                        placeholder="Where do you work? *"
                        className={styles.partInput}
                        type="text"
                        onChange={handleFormChange}
                        value={formData.work}
                        name="work"
                      />
                    </div>
                    <div className="col-md-6 pb-3">
                      <input
                        placeholder="What is you role *"
                        className={styles.partInput}
                        type="text"
                        onChange={handleFormChange}
                        value={formData.role}
                        name="role"
                      />
                    </div>
                    <div className="col-md-6 pb-3">
                      <CustomSelect
                        options={countries}
                        word="Where are you located? *"
                        onChange={(selectedValue) =>
                          handleCustomSelectChange(selectedValue, "location")
                        }
                        value={formData.location}
                        name="location"
                      />
                    </div>
                    <div className="col-md-6 pb-3">
                      <CustomSelect
                        options={[
                          { label: "Email", value: "email" },
                          { label: "Phone", value: "phone" },
                        ]}
                        word="How would you like us to reach you? *"
                        onChange={(selectedValue) =>
                          handleCustomSelectChange(selectedValue, "howToReach")
                        }
                        value={formData.howToReach}
                        name="howToReach"
                      />
                    </div>
                    <div className="col-md-6 pb-3">
                      <input
                        placeholder="How did you hear about this event? *"
                        className={styles.partInput}
                        type="text"
                        onChange={handleFormChange}
                        value={formData.howDidYouHear}
                        name="howDidYouHear"
                      />
                    </div>
                    <div className="col-md-12 pb-3">
                      <TextareaAutosize
                        style={{
                          color: "#161B23",
                          fontWeight: "600",
                          fontSize: 14,
                        }}
                        minRows={2}
                        placeholder="Can you share a summary of how you would like to partner?"
                        className={`${styles.partInput} ${
                          summaryError && styles.errorInput
                        }`}
                        onChange={handleFormChange}
                        value={formData.summaryToPart}
                        name="summaryToPart"
                      />
                      {summaryError && (
                        <p className={styles.errorText}>{summaryError}</p>
                      )}
                    </div>
                  </div>
                </div>
                {errorText && <p className={styles.error}>{errorText}</p>}
                {loading ? (
                  <button
                    disabled
                    type="button"
                    className={styles.partBtn}
                    id="btnLoading"
                  >
                    <div class="spinner-border spinner-border-sm" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </button>
                ) : (
                  <button onClick={handleSubmit} className={styles.partBtn}>
                    <ArrowUpright /> Submit
                  </button>
                )}
              </form>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
};

export default Partner;
