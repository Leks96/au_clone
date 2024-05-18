import React, { useEffect, useMemo, useState } from "react";
import { TextareaAutosize } from "@mui/material";
import countryList from "react-select-country-list";
import { Link } from "react-router-dom";
import styles from "./Speaker.module.css";
import BackArrow from "../../SVGIcons/BackArrow/BackArrow";
import CustomSelect from "../../CustomComponents/Select/Custom-Select";
import ArrowUpright from "../../SVGIcons/ArrowUpright/ArrowUpright";
import successImage from "../../../Assets/successImage.gif";
import NavbarStatic from "../../Navbar/NavbarStatic";
import Footer from "../../Footer/Footer";
import PhoneInput, {
  isPossiblePhoneNumber,
  parsePhoneNumber,
  isSupportedCountry,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import axios from "axios";

const SpeakerApp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    role: "",
    linkedin: "",
    expertise: "",
    work: "",
    country: "",
    howToReach: "",
    talkTitle: "",
    coPresenter: "",
    talkDescription: "",
    howDidYouHear: "",
    bio: "",
    file: "",
  });

  const reach = [
    {
      label: "Email",
      value: "email",
    },
    {
      label: "Phone",
      value: "phone",
    },
  ];

  const countries = useMemo(() => countryList().getData(), []);

  // States for checking the errors submitted and loading
  const [submitted, setSubmitted] = useState(false);
  const [errorText, setErrorText] = useState(false);
  const [registeredName, setRegisteredName] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [talkDescriptionError, setTalkDescriptionError] = useState("");
  const [bioError, setBioError] = useState("");
  const [fileError, setFileError] = useState("");
  const [phone, setPhone] = useState("");

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

  // Handling the form change
  const handleFormChange = (event) => {
    const { name, value, files } = event.target;
    const val = name === "file" ? files[0] : value;
    setFormData((prevData) => ({ ...prevData, [name]: val }));

    setSubmitted(false);
    setErrorText("");

    //add real time validation
    switch (name) {
      case "email":
        setEmailError(
          !/^\S+@\S+\.\S+$/.test(value)
            ? "Please enter a valid email address"
            : ""
        );
        break;
      case "phone":
        setPhoneError(value.length > 9);
      case "talkDescription":
        setTalkDescriptionError(
          value.length < 100 ? "Please share a summary of your Talk." : ""
        );
        break;
      case "bio":
        setBioError(
          value.length < 100 ? "Please share a summary of your Bio." : ""
        );
        break;
      case "file":
        const maxFile = 5 * 1024 * 1024;
        const fileSize = files[0]?.size;
        setFileError(
          fileSize > maxFile ? "file size must not be more than 5MB" : ""
        );
        break;
      default:
        break;
    }
  };

  //handle select change
  const handleCustomSelectChange = (selectedValue, fieldName) => {
    setFormData((prevData) => ({ ...prevData, [fieldName]: selectedValue }));
    setSubmitted(false);
    setErrorText("");
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

  const filterKeys = (obj, condition) => {
    return Object.keys(obj).filter((key) => condition(key));
  };

  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form Data:", formData); // Add this line for debugging

    const filteredKeys = filterKeys(
      formData,
      (key) => !key.startsWith("coPresenter")
    );

    if (
      Object.values(formData)
        .filter((_, index) =>
          filteredKeys.includes(Object.keys(formData)[index])
        )
        .some((value) => value === "")
    ) {
      setErrorText("Please enter all the fields marked *");
      setSubmitted(false);
      return;
    }

    setLoading(true);

    // create a formdata object
    const fd = new FormData();

    fd.append("type", "speaker");
    fd.append("title", formData.title);
    fd.append("fullname", formData.firstName + " " + formData.lastName);
    fd.append("email", formData.email);
    fd.append("phone", phone);
    fd.append("where_do_you_work", formData.work);
    fd.append("what_do_you_do", formData.role);
    fd.append("where_are_you_located", formData.country);
    fd.append("linkedin", formData.linkedin);
    fd.append("area_of_expertise", formData.expertise);
    fd.append("how_did_you_hear", formData.howDidYouHear);
    fd.append("preferred_contact_channel", formData.howToReach);
    fd.append("potential_talk_title", formData.talkTitle);
    fd.append("talk_co_presenter", formData.coPresenter);
    fd.append("talk_desc", formData.talkDescription);
    fd.append("speaker_bio", formData.bio);
    fd.append("speaker_headshot", formData.file);

    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Continue");
      }, 5000);
    });

    console.log(fd);

    try {
      const url = process.env.REACT_APP_API_URL;
      const res = await axios.post(`${url}`, fd);
      console.log("RESPONSE:", res);

      // if (res.statusText === "OK" && res.data === "registration successful") {
      setRegisteredName(formData.firstName);
      setSubmitted(true);
      setErrorText("");
      setFormData((prevData) => ({
        firstName: "",
        lastName: "",
        title: "",
        email: "",
        role: "",
        linkedin: "",
        expertise: "",
        work: "",
        country: "",
        howToReach: "",
        talkTitle: "",
        coPresenter: "",
        talkDescription: "",
        howDidYouHear: "",
        bio: "",
        file: "",
      }));
      // } else {
      //   //
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
        <div className="container">
          <div className="row">
            <div className="col-12 text-center" id={styles.success}>
              <img
                src={successImage}
                alt="successImage"
                width={250}
                height={200}
              />
            </div>
            <div className="col-12 pt-3">
              <h1>
                Hello {registeredName}, application to be a Speaker in the event
                has been submitted successfully
              </h1>
            </div>
            <div className="col-12 pt-3">
              <p className={styles.speakSuccesMess}>
                We look forward to seeing you at the event virtually. You’ll be
                notified 30 minutes before the event starts.
              </p>
            </div>
            <div className="col-12 py-4">
              <Link to={"/"}>
                <button className={styles.speakBtnScss}>
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

  // Showing error message if error is true
  const errorMessage = () => {
    return <p className={styles.error}>{errorText}</p>;
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
          <div className="container p-3 m-auto">
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <div className={`pt-4 ${styles.backSeakBtn}`}>
                <button>
                  <BackArrow />
                  Back
                </button>
              </div>
            </Link>
            <div className={`container p-4 ${styles.speakCon}`}>
              <div className={styles.speakTitle}>
                <h1>
                  Complete Your Speaker Application <span>.</span>
                </h1>
                <p className="d-none">
                  Lorem ipsum dolor sit amet consectetur. Sed vel.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed ipsum dolor
                  Tur adipiscing elit, sed do eiusmod sed do
                </p>
              </div>
              <form>
                <div>
                  <h3>Personal Information</h3>
                </div>
                <label className={styles.speakLabel}>
                  <div className="d-flex">
                    <p>
                      Your email address will not be published. Required fields
                      are marked
                    </p>
                    <span className="d-inline-block px-2">*</span>
                  </div>
                </label>
                <div className="container">
                  <div className="row mt-2 mb-3">
                    <div className="col-md-12 pb-3">
                      <input
                        placeholder="Title *"
                        className={styles.speakIn}
                        type="text"
                        onChange={handleFormChange}
                        value={formData.title}
                        name="title"
                      />
                    </div>
                    <div className="col-md-6 pb-3">
                      <input
                        placeholder="Your firstname *"
                        className={styles.speakIn}
                        type="text"
                        onChange={handleFormChange}
                        value={formData.firstName}
                        name="firstName"
                      />
                    </div>
                    <div className="col-md-6 pb-3">
                      <input
                        placeholder="Your lastname *"
                        className={styles.speakIn}
                        type="text"
                        onChange={handleFormChange}
                        value={formData.lastName}
                        name="lastName"
                      />
                    </div>
                    <div className="col-md-6 pb-3">
                      <input
                        placeholder="Your email address *"
                        className={`${styles.speakIn} ${
                          emailError && styles.speakErrorInput
                        }`}
                        type="email"
                        onChange={handleFormChange}
                        value={formData.email}
                        name="email"
                      />
                      {emailError && (
                        <p className={styles.speakErrorText}>{emailError}</p>
                      )}
                    </div>

                    <div className="col-md-6 pb-3">
                      <PhoneInput
                        onChange={handlePhoneInputChange}
                        value={phone}
                        name="phone"
                        placeholder="Your phone number *"
                        className={`${styles.speakIn} ${
                          phoneError && styles.speakErrorInput
                        }`}
                      />
                      {phoneError && (
                        <p className={styles.speakErrorText}>{phoneError}</p>
                      )}
                    </div>

                    <div className="col-md-6 pb-3">
                      <input
                        placeholder="Where do you work? *"
                        className={styles.speakIn}
                        type="text"
                        onChange={handleFormChange}
                        value={formData.work}
                        name="work"
                      />
                    </div>
                    <div className="col-md-6 pb-3">
                      <input
                        placeholder="What is your role? *"
                        className={styles.speakIn}
                        type="text"
                        onChange={handleFormChange}
                        value={formData.role}
                        name="role"
                      />
                    </div>
                    <div className="col-md-6 pb-3">
                      <CustomSelect
                        options={countries}
                        word="Where are you based? *"
                        onChange={(selectedValue) =>
                          handleCustomSelectChange(selectedValue, "country")
                        }
                        name="country"
                        value={formData.country}
                      />
                    </div>
                    <div className="col-md-6 pb-3">
                      <input
                        placeholder="LinkedIn profile link *"
                        className={styles.speakIn}
                        type="url"
                        onChange={handleFormChange}
                        value={formData.linkedin}
                        name="linkedin"
                      />
                    </div>
                    <div className="col-md-6 pb-3">
                      <input
                        placeholder="What is your area of expertise? *"
                        className={styles.speakIn}
                        type="text"
                        onChange={handleFormChange}
                        value={formData.expertise}
                        name="expertise"
                      />
                    </div>
                    <div className="col-md-6 pb-3">
                      <input
                        placeholder="How did you hear about this event? *
									"
                        className={styles.speakIn}
                        type="text"
                        onChange={handleFormChange}
                        value={formData.howDidYouHear}
                        name="howDidYouHear"
                      />
                    </div>
                    <div className="col-md-12 pb-3">
                      <CustomSelect
                        options={reach}
                        word="How would you like us to reach you? *"
                        onChange={(selectedValue) =>
                          handleCustomSelectChange(selectedValue, "howToReach")
                        }
                        name="reach"
                        value={formData.howToReach}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h3>Talk Information</h3>
                </div>
                <div className="conatiner m-auto">
                  <div className="row mt-2 mb-3">
                    <div className="col-md-12 pb-3">
                      <input
                        placeholder="Potential talk title *"
                        className={styles.speakIn}
                        type="text"
                        onChange={handleFormChange}
                        value={formData.talkTitle}
                        name="talkTitle"
                      />
                    </div>
                    <div className="col-md-12 pb-3">
                      <input
                        placeholder="Co-presenter (If applicable) &#xf05a;"
                        className={styles.speakIn}
                        type="text"
                        onChange={handleFormChange}
                        value={formData.coPresenter}
                        name="coPresenter"
                      />
                    </div>
                    <div className="col-md-12 pb-3">
                      <TextareaAutosize
                        minRows={3}
                        placeholder="Description of your talk *"
                        className={`${styles.speakIn} ${
                          talkDescriptionError && styles.speakErrorInput
                        }`}
                        type="text"
                        onChange={handleFormChange}
                        value={formData.talkDescription}
                        name="talkDescription"
                      />
                      {talkDescriptionError && (
                        <p className={styles.speakErrorText}>
                          {talkDescriptionError}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <h3>Speaker Bio & Headshot</h3>
                </div>
                <div className="container m-auto">
                  <div className="row mt-2 mb-3">
                    <div className="col-md-12 pb-3">
                      <TextareaAutosize
                        minRows={3}
                        placeholder="Speaker bio *"
                        className={`${styles.speakIn} ${
                          bioError && styles.speakErrorInput
                        }`}
                        type="text"
                        onChange={handleFormChange}
                        value={formData.bio}
                        name="bio"
                      />
                      {bioError && (
                        <p className={styles.speakErrorText}>{bioError}</p>
                      )}
                    </div>
                    <div className={`col-md-12 pb-3 ${styles.headshot}`}>
                      <h3>Headshot</h3>
                      <p>
                        Please upload a high-res, square image that's at least
                        1024x1024px.
                      </p>
                    </div>
                    <div className="col-md-6 pb-3">
                      <input
                        type="file"
                        name="file"
                        className={styles.chsFile}
                        onChange={handleFormChange}
                        accept=".jpg, .jpeg, .png"
                      />
                    </div>
                    {fileError && (
                      <p className={styles.speakErrorText}>{fileError}</p>
                    )}
                    <div className={`col-md-12 pb-3 ${styles.headshotTag}`}>
                      <p>Max. file size: 5MB.</p>
                    </div>
                  </div>
                </div>
                {errorMessage()}
                {loading ? (
                  <button
                    disabled
                    type="button"
                    className={styles.speakBtn}
                    id="btnLoading"
                  >
                    <div class="spinner-border spinner-border-sm" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </button>
                ) : (
                  <button onClick={handleSubmit} className={styles.speakBtn}>
                    <ArrowUpright /> Submit
                  </button>
                )}
              </form>
            </div>
          </div>
        )}
        {/*<Footer />*/}
      </section>
      <Footer />
    </>
  );
};

export default SpeakerApp;
