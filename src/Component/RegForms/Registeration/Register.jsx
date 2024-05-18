import React, { useEffect, useMemo, useState } from "react";
import ArrowUpright from "../../SVGIcons/ArrowUpright/ArrowUpright";
import DisabledArrowUp from "../../SVGIcons/DisabledArrowUp/DisabledArrowUp";
import CustomSelect from "../../CustomComponents/Select/Custom-Select";
import CustomCheckbox from "../../CustomComponents/Checkbox/Custom-Checkbox";
import Modal from "../../CustomComponents/Card/Card";
import countryList from "react-select-country-list";
import CalendarIcon from "../../SVGIcons/CalendarIcon/CalendarIcon";
import CrossIcon from "../../SVGIcons/CrossIcon/CrossIcon";
import remImage1 from "../../../Assets/remImage1.png";
import styles from "./Register.module.css";
import Footer from "../../Footer/Footer";
import NavbarStatic from "../../Navbar/NavbarStatic";
import { Link } from "react-router-dom";
import BackArrow from "../../SVGIcons/BackArrow/BackArrow";
import successImage from "../../../Assets/successImage.gif";
import PhoneInput, {
  isPossiblePhoneNumber,
  isSupportedCountry,
  parsePhoneNumber,
} from "react-phone-number-input";
import axios from "axios";

export default function Register() {
  // States for registration
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    joiningFrom: "",
    residentCountry: "",
    gender: "",
    qualification: "",
    employmentStatus: "",
    experience: "",
    whatYouDo: "",
    role: "",
    notifyAll: true,
    //notifyOne: true,
    //notifyHandshake: false,
  });

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [errorText, setErrorText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [registeredName, setRegisteredName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const countries = useMemo(() => countryList().getData(), []);

  const [isScrolled, setIsScrolled] = useState(window.scrollY > 0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showMenu, setShowMenu] = useState(false);

  const qualifications = [
      { 
        label: "Vocational Degree (E.g. Catering, Fashion Design, Plumbing)", 
        value: "Vocational Degree (E.g. Catering, Fashion Design, Plumbing)" 
      },
      { 
        label: "Ordinary/Higher National Diploma or Bachelors degree", 
        value: "Ordinary/Higher National Diploma or Bachelors degree" 
      },
      { 
        label: "Post-Graduate Degree (PGD, Masters, PHD or equivalent)", 
        value: "Post-Graduate Degree (PGD, Masters, PHD or equivalent)" 
      }
  ]

  const employmentStatus = [
      { 
        label: "Unemployed", 
        value: "Unemployed" 
      },
      { 
        label: "Employed", 
        value: "Employed" 
      },
      { 
        label: "Freelancer", 
        value: "Freelancer" 
      },
      { 
        label: "Founder/Business Owner", 
        value: "Founder/Business Owner" 
      },
      {
        label: "Not applicable", 
        value: "Not applicable" 
      }
  ]

  const experience = [
      { 
        label: "Between  1 and 5 years", 
        value: "Between  1 and 5 years" 
      },
      { 
        label: "Between 5 and 8 years", 
        value: "Between 5 and 8 years" 
      },
      { 
        label: "Over 8 years", 
        value: "Over 8 years" 
      }
  ]

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

  //handle form change
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setSubmitted(false);
  };

  const handleCustomSelectChange = (selectedValue, fieldName) => {
    console.log(selectedValue, fieldName);
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

  const handleCheckYes = () => {
    setFormData((prevData) => ({
      ...prevData,
      notifyAll: !formData.notifyAll,
      //notifyOne: !formData.notifyOne,
    }));
  };

  const handleCheckNo = () => {
    setFormData((prevData) => ({
      ...prevData,
      //notifyOne: !formData.notifyOne,
      notifyAll: !formData.notifyAll,
    }));
  };

  const handleCheckNewsLatter = () => {
    setFormData((prevData) => ({
      ...prevData,
      notifyHandshake: !formData.notifyHandshake,
    }));
  };

  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(formData).some((value) => value === "")) {
      setErrorText("Please enter all the fields marked *");
      setSubmitted(false);
      return; // Exit early if any field is empty
    }

    console.log("Form Data:", formData);
    //console.log("Phone:", phone);

    setIsLoading(true);

    // create a fromdata object
    const fd = new FormData();

    fd.append("type", "attendee");
    fd.append("firstName", formData.firstName);
    fd.append("lastName", formData.lastName);
    fd.append("email", formData.email);
    fd.append("phone", phone);
    fd.append("joiningFrom", formData.joiningFrom);
    fd.append("residentCountry", formData.residentCountry);
    fd.append("gender", formData.gender);
    fd.append("qualification", formData.qualification);
    fd.append("employmentStatus", formData.employmentStatus);
    fd.append("experience", formData.experience);
    fd.append("whatYouDo", formData.whatYouDo);
    fd.append("role", formData.role);
    fd.append("notifyAll", formData.notifyAll);

    // await new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve("Continue");
    //   }, 5000);
    // });

    // console.log(fd);
    try {
      const url = process.env.REACT_APP_API_URL;
      const res = await axios.post(url, fd);
      console.log(res);
      // if (res.statusText === "OK" && res.data === "registration successful") {
      setSubmitted(true);
      setErrorText("");
      setRegisteredName(formData.fullName);
      setFormData((prevData) => ({
        firstName: "",
        lastName: "",
        email: "",
        joiningFrom: "",
        residentCountry: "",
        gender: "",
        qualification: "",
        employmentStatus: "",
        experience: "",
        whatYouDo: "",
        role: "",
        notifyAll: true,
      }));

      setIsLoading(false);
      // } else {
      //   setIsLoading(false);
      //   setErrorText(res.data);
      // }
    } catch (error) {
      console.error("Error on submitting the form", error);
      setSubmitted(false);
      setErrorText(error.toString());
    }
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
                Hello {registeredName}, your registration for the handshake
                event was successful.
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

  return (
    <>
      <NavbarStatic
        isMobile={isMobile}
        isScrolled={isScrolled}
        toggleMenu={toggleMenu}
        showMenu={showMenu}
      />
      {submitted ? (
        successMessage()
      ) : (
        <div>
          <div className="col-md-2 text-end">
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <div className={`pt-4 ${styles.backBtn}`}>
                <button>
                  <BackArrow />
                  Back
                </button>
              </div>
            </Link>
          </div>
          <div className={`${styles.form} mt-2 mb-2`}>
            <div>
              <h1 id={styles.reg}>
                Register Here To Attend<span>.</span>
              </h1>
              <p className="text-start d-none" id={styles.regP}>
                Lorem ipsum dolor sit amet consectetur. Sed vel.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed ipsum dolor Tur
                adipiscing elit, sed do eiusmod sed do
              </p>
            </div>

            <form className={styles.register}>
              <label htmlFor="Registeration">
                <p className={`text-start d-inline-block`} id={styles.regP}>
                  Your email address will not be published. Required fields are
                  marked <span>*</span>
                </p>
              </label>
              {/* inputs for form data */}
              <div className={`container`}>
                <div className={`row`}>
                  <div className={`col-md-6 pb-3`}>
                    <input
                      placeholder="First Name *"
                      onChange={handleFormChange}
                      id={styles.regIn}
                      value={formData.firstName}
                      name="firstName"
                      type="text"
                    />
                  </div>
                  <div className={`col-md-6 pb-3`}>
                    <input
                      placeholder="Last Name *"
                      onChange={handleFormChange}
                      id={styles.regIn}
                      value={formData.lastName}
                      name="lastName"
                      type="text"
                    />
                  </div>
                  <div className={`col-md-6 pb-3`}>
                    <input
                      placeholder="Your email *"
                      onChange={handleFormChange}
                      id={styles.regIn}
                      value={formData.email}
                      name="email"
                      type="email"
                    />
                  </div>
                  <div className={`col-md-6 pb-3`}>
                    <PhoneInput
                      onChange={handlePhoneInputChange}
                      value={phone}
                      id={styles.regIn}
                      name="phone"
                      placeholder="Your phone number *"
                      className={`${styles.partInput} ${
                        phoneError && styles.errorInput
                      }`}
                    />
                  </div>
                  <div className={`col-md-6 pb-3`}>
                    <CustomSelect
                      options={[
                        { label: "Male", value: "male" },
                        { label: "Female", value: "female" },
                        { label: "Other", value: "other" }
                      ]}
                      onChange={(val) => {
                        handleCustomSelectChange(val, "gender");
                      }}
                      value={formData.gender}
                      name="gender"
                      word="Gender *"
                    />
                  </div>
                  <div className={`col-md-6 pb-3`}>
                    <CustomSelect
                      options={countries}
                      onChange={(val) => {
                        handleCustomSelectChange(val, "joiningFrom");
                      }}
                      value={formData.joiningFrom}
                      name="joiningFrom"
                      word="What country are you from? *"
                    />
                  </div>
                  <div className={`col-md-6 pb-3`}>
                    <CustomSelect
                      options={countries}
                      onChange={(val) => {
                        handleCustomSelectChange(val, "residentCountry");
                      }}
                      value={formData.residentCountry}
                      name="residentCountry"
                      word="What country do you live in? *"
                    />
                  </div>
                  <div className={`col-md-6 pb-3`}>
                    <input
                      placeholder="Where do you work/What do you do? *"
                      onChange={handleFormChange}
                      id={styles.regIn}
                      value={formData.whatYouDo}
                      name="whatYouDo"
                      type="text"
                    />
                  </div>
                  <div className={`col-md-6 pb-3`}>
                    <input
                      placeholder="Role? *"
                      onChange={handleFormChange}
                      id={styles.regIn}
                      value={formData.role}
                      name="role"
                      type="text"
                    />
                  </div>
                  <div className={`col-md-6 pb-3`}>
                    <CustomSelect
                      options={qualifications}
                      onChange={(val) => {
                        handleCustomSelectChange(val, "qualification");
                      }}
                      value={formData.qualification}
                      name="qualification"
                      word="What is the highest post-secondary qualification you have? *"
                    />
                  </div>
                  <div className={`col-md-6 pb-3`}>
                    <CustomSelect
                      options={employmentStatus}
                      onChange={(val) => {
                        handleCustomSelectChange(val, "employmentStatus");
                      }}
                      value={formData.employmentStatus}
                      name="employmentStatus"
                      word="What is your current employment status? *"
                    />
                  </div>
                  <div className={`col-md-6 pb-3`}>
                    <CustomSelect
                      options={experience}
                      onChange={(val) => {
                        handleCustomSelectChange(val, "experience");
                      }}
                      value={formData.experience}
                      name="experience"
                      word="How many years of work experience do you have? *"
                    />
                  </div>
                </div>
              </div>

              <br />
              <br />

              {/* <label htmlFor="checkox" className={`pb-3`}>
                <p className={`text-start`} id={styles.regP}>
                  Would you like to be notified about other events?
                </p>
              </label> */}

              <div className={`check-container`}>
                <div className={`row`}>
                  <div
                    className={`mb-3 form-check col-md-12 d-inline-block pb-3`}
                    id={styles.check}
                  >
                    <CustomCheckbox
                      value={formData.notifyAll}
                      name={"yes"}
                      onchangeFunc={handleCheckYes}
                      label="Please check the box to give us permission to contact you about the African Union Careers Fair Masterclass and related activities."
                    />
                  </div>

                  {/* <div
                    className={`mb-3 form-check col-md-6 d-inline-block pb-3`}
                    id={styles.check}
                  >
                    <CustomCheckbox
                      value={formData.notifyOne}
                      name={"no"}
                      onchangeFunc={handleCheckNo}
                      label="No, I'm good with just this one."
                    />
                  </div>

                  <div
                    className={`mb-3 form-check col-md-12 d-inline-block pb-3`}
                    id={styles.check}
                  >
                    <CustomCheckbox
                      value={formData.notifyHandshake}
                      name={"hanshake_newslatter"}
                      onchangeFunc={handleCheckNewsLatter}
                      label="Yes, I agree to receiving communications about Handshake and related  activities."
                    />
                  </div> */}
                </div>
              </div>
              {errorText && <p className={styles.error}>{errorText}</p>}
              {isLoading ? (
                <button
                  disabled
                  type="button"
                  className={`float-end ${styles.regBtn}`}
                  id="btnLoading"
                >
                  <div class="spinner-border spinner-border-sm" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className={`float-end ${styles.regBtn}`}
                  type="submit"
                >
                  <ArrowUpright />
                  Register
                </button>
              )}
            </form>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
