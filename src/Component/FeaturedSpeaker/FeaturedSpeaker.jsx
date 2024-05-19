import React, { useEffect, useState } from "react";
import "./FeaturedSpeaker.css";

// ========== Featured Speakers 1.0 =============== //

import monique from '../../images/speakers1/Dr-Monique.jpg'
import fathallah from '../../images/speakers1/Fathallah.jpg'
import nadege from '../../images/speakers1/Ms-Nadege.jpg'
//import rico from '../../images/speakers1'
import botho from '../../images/speakers1/Ms-Botho.jpg'
import sandile from '../../images/speakers1/Mr-Sandile.jpg'
//import hamza from '../../images/speakers1'
//import leslye from '../../images/speakers1/'
import victor from '../../images/speakers1/Mr-Victor.jpg'
import nissem from '../../images/speakers1/Ms-Nissem.jpg'
import aude from '../../images/speakers1/Ms-Aude.jpg'
//import daudi from '../../images/speakers1/'
import simone from '../../images/speakers1/Ms-Simone.jpg'
import william from '../../images/speakers1/Mr-William.jpg'
import netsanet from '../../images/speakers1/Ms-Netsanet.jpg'
import naomi from '../../images/speakers1/MrsNaomi.jpg'
//import mayowa from '../../images/speakers1/'
import manuella from '../../images/speakers1/Ms-Manuella.jpg'
import christopher from '../../images/speakers1/Mr-Christopher.jpg'
import zinga from '../../images/speakers1/Ms-Zinga.jpg'

import anayor_anuoha from "../../images/fs/1.0/anayor_onuoha.jpg";
import chisom_nwokwu from "../../images/fs/1.0/chisom_nwokwu.jpg";
import elsa_bankole from "../../images/fs/1.0/elsa_bankole.jpg";
import gloria_ngozi_alado from "../../images/fs/1.0/gloria_ngozi_alado.jpg";
import harry_anaholo from "../../images/fs/1.0/harry_anaholo.jpg";
import ibukun_amosu from "../../images/fs/1.0/ibukun_amosu.jpg";
import jerry_uke from "../../images/fs/1.0/jerry_uke.jpg";
import olumide_gbadebo from "../../images/fs/1.0/olumide_gbadebo.jpg";
import pelu_awofeso from "../../images/fs/1.0/pelu_awofeso.jpg";
import raquel_kashim from "../../images/fs/1.0/raquel_kashim_daniel.jpg";
import riman_ebarere from "../../images/fs/1.0/riman_ebarere.jpg";
import temidayo_salako from "../../images/fs/1.0/temidayo_salako.jpg";
import obi_ike from "../../images/fs/1.0/obi_ike.jpg";
import obinna_igwebuike from "../../images/fs/1.0/obinna_igwebuike.jpg";
import joshua_oyekanmi from "../../images/fs/1.0/joshua_oyekanmi.jpg";
import toyyib_adedodun from "../../images/fs/1.0/toyyib_adelodun.jpg";
import kelechukwu_n_nwokamilke from "../../images/fs/1.0/kelechukwu_n_nwokamike.jpg";
import raliya_adamu from "../../images/fs/1.0/raliya_adamu.jpg";
import marry_esther_anele from "../../images/fs/1.0/mary_esther_anele.jpg";


// ========== modal for speakers ============= //

import IconButton from "@mui/material/IconButton";

import {
  IoArrowUp,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";
import { Col, Container, Image, Modal, Row } from "react-bootstrap";


const FeaturedSpeaker = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [selectedHS, setSelectedHS] = useState("1.0");
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const featuredSpeakers = [
    {
      name: "His Excellency, Dr. Monique Nsanzabaganwa",
      title: "Deputy Chairperson (DCP), African Union Commission",
      image: monique,
      batch: "1.0",
      //desc: "Elsa Bankole is the founder of ElsaLagos, a fashion brand that caters to lovers of jewellery. With a carefully curated and extensive range of unique and affordable jewellery, Elsa is putting a spin on conventional jewellery retailing. Using her phone, with Instagram and whatsapp as her main tech tools, Elsa has created a business model that is noteworthy.",
      //id: 1,
      //instagram: "Elsalagos.ng",
      //linkedIn: "",
      //facebook: "",
      //twitter: "",
    },
    {
      name: "His Excellency, Fathallah Sijilmassi",
      title: "Director-General, African Union Commision",
      image: fathallah,
      batch: "1.0",
      desc: "Pelu Awofeso, founder and CEO of Travel Next Door, is one of the leading names in Nigeria's domestic tourism space. His contributions to, and influence in, the industry cuts across journalism, publishing, cultural consultancy. ",
      id: 2,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Ms. Nadege Thandu",
      title: "Director, Human Resources Management Directorate (HRMD), African Union Commision",
      image: nadege,
      batch: "1.0",
      desc: "Raquel Kasham Daniel is a driven social entrepreneur and development practitioner with a decade of experience in Nigeria's development sector. She is the co-founder of Bambini Africa.",
      id: 3,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Ms. Botho Kebabonye Bayendi",
      title: "Director, Strategic Planning and Delivery Directorate (SPDD), AUC",
      image: botho,
      batch: "1.0",
      desc: "Jerry is a Senior Program Manager with 6+ years experience building sustainable impact, business, and learning & development programs in the Venture Capital/ Startup Ecosystems, Educational Technology, and Community spaces.",
      id: 5,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Mr. Victor Paa Kwesi Mensah",
      title: "Human Resources Projects Manager, HRMD",
      image: victor,
      batch: "1.0",
      desc: "Anayor is a competent and assured individual, demonstrating the qualities of a self-starter with the unwavering commitment and drive required to excel in a fast-paced HR department. ",
      id: 9,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Ms. Aude Lucie Ayo-Adibet",
      title: "Head, Talent Acquisition Unit, HRMD, African Union Commision",
      image: aude,
      batch: "1.0",
      desc: "Riman is a seasoned technical recruiter with almost a decade of expertise in specialised recruiting, spanning technical and non-technical roles.",
      id: 11,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Mr. William Carew",
      title: "Head of AU ECOSOCC Secretariat, Zambia",
      image: william,
      batch: "1.0",
      desc: "Joshua Oyekanmi is a seasoned professional with a rich background in program management and consultancy. I currently serve as a Program Manager at Etiwa Tech in Lekki, Lagos State, where I have been instrumental in driving positive change.",
      id: 14,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Mr. Sandile Peace Gumedze",
      title: "Head, Human Resources Planning & Organization Development (HRPOD) Division, HRMD",
      image: sandile,
      batch: "1.0",
      desc: "Harry is a management expert with over eight years of managerial experience in tech cutting across operations, product, growth and talent development in sectors like Fintech, SaaS and EdTech.",
      id: 6,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Ms. Simone Yankey-Ouattara",
      title: "Ag. Head, AU-CIEFFA, Burkina Faso",
      image: simone,
      batch: "1.0",
      desc: "Obinna has sixteen years’ experience in management & development consulting and fintech product development. He is currently Consulting Team Lead, at Sawubona Advisory Services, a management consulting practice and a Supervisory Director in charge of Policy Design and Development at AT & Harvey Consulting, a development consultancy. Both businesses are based in Lagos, Nigeria.",
      id: 13,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Ms. Netsanet Getachew",
      title: "Human Resources Officer, AU PCRD, Egypt",
      image: netsanet,
      batch: "1.0",
      desc: "Toyyib Adelodun is a seasoned Civil Engineer with an impressive track record spanning over a decade, having worked with renowned companies such as Costain, Skanska, and Balfour Beatty.",
      id: 15,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Naomi Lucas",
      title: "Founder, Graduatepro",
      image: naomi,
      batch: "1.0",
      desc: "Dr. Kelechukwu N. ONWUKAMIKE (PhD)(Dr.rer.nat) is published author of “Till We All Win” book and currently a Research Scientist working for Procter & Gamble Germany.",
      id: 16,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Ms. Manuella Diaha",
      title: "Senior HR Efficiency and Systems Coherence Officer, HRMD, AUC.",
      image: manuella,
      batch: "1.0",
      desc: "My name is Raliyah Adamu Manu, a trainer at Cybarik GRC Academy and a GRC Analyst at Digital Jewels Africa where I focus on planning and implementing policies, procedures, standards, and controls to govern the protection of corporate information systems.",
      id: 18,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    //{
    //  name: "Mr. Rico Bien Aime",
    //  title: "Director, Operations Support Services Directorate (OSSD), African Union Commission",
    //  //image: rico,
    //  batch: "1.0",
    //  desc: "Beauty products entrepreneur Olumide Gbadebo is the founder of Adunni Organics, one of the first indigenous beauty e-commerce brands in Nigeria.",
    //  id: 4,
    //  instagram: "",
    //  linkedIn: "",
    //  facebook: "",
    //  twitter: "",
    //},
    //{
    //  name: "Mr. Hamza Sahl",
    //  title: "Head, Human Resources Shared Services (HRSS) Division, HRMD",
    //  //image: hamza,
    //  batch: "1.0",
    //  desc: "Chisom Nwokwu (fondly called TechQueen) is a renowned Software Engineer based in Lagos, Nigeria working with the Sustainability Team at Microsoft, she joined Microsoft as a new graduate shortly after rounding up an internship with the Bank of America, where she worked as a Technology analyst.",
    //  id: 7,
    //  instagram: "",
    //  linkedIn: "",
    //  facebook: "",
    //  twitter: "",
    //},
    //{
    //  name: "Mr. Leslye Melinda Koumba",
    //  title: "Head, Payroll Unit, AHRMD, AfCFTA",
    //  //image: leslye,
    //  batch: "1.0",
    //  desc: "Temidayo Salako is a catalyst and a systems builder with experience in business operations, strategic startup management, project management, human resource management, training, and consulting within the tech industry.",
    //  id: 8,
    //  instagram: "",
    //  linkedIn: "",
    //  facebook: "",
    //  twitter: "",
    //},
    {
      name: "Ms. Nissem Bezzaouia",
      title: "Head, Administration and Human Resources Management Division (AHRMD), AfCFTA.",
      image: nissem,
      batch: "1.0",
      desc: "Gloria Ngozi Alado is an accomplished Recruiter and Corporate Communications specialist developing in her career since 2020.",
      id: 10,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    //{
    //  name: "Mr. Daudi Mkoma",
    //  title: "Head, Administration and Human Resources Division, AUCDC",
    //  //image: daudi,
    //  batch: "1.0",
    //  desc: "Ibukun (IBK) has carved a remarkable niche for himself as a Tech Talent Partner for global corporations and startups, while also being the visionary Founder of The Intern Place (TiP), a dynamic internship talent community.",
    //  id: 12,
    //  instagram: "",
    //  linkedIn: "",
    //  facebook: "",
    //  twitter: "",
    //},
    //{
    //  name: "Mayowa Adegoke",
    //  title: "International Journalist and Speaker",
    //  //image: mayowa,
    //  batch: "1.0",
    //  desc: "Ike Obi has over 10yrs of professional technology startup experience spanning different roles and stages - from software development to business development, sales and growth.",
    //  id: 17,
    //  instagram: "",
    //  linkedIn: "",
    //  facebook: "",
    //  twitter: "",
    //},
    {
      name: "Mr. Christopher Orilogbon",
      title: "Human Resources Information Systems (HRIS) Administrator, HRMD, AUC.",
      image: christopher,
      batch: "1.0",
      desc: "Mary-Esther Anele is the Founder of Inclusivelyremote, a remote job board and resource site established to foster inclusive and equal remote opportunities for everyone anywhere as well as promote inclusive remote startups.",
      id: 19,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Ms. Zinga Clara Suama",
      title: "Recruitment Officer, Talent Acquisition Unit, HRMD, AUC",
      image: zinga,
      batch: "1.0",
      desc: "Elsa Bankole is the founder of ElsaLagos, a fashion brand that caters to lovers of jewellery. With a carefully curated and extensive range of unique and affordable jewellery, Elsa is putting a spin on conventional jewellery retailing.",
      id: 20,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    }
  ];

  const handleSpeakerClick = (e, speaker) => {
    e.preventDefault();

    setSelectedSpeaker(speaker);
  };

  const handleCloseModal = () => {
    setSelectedSpeaker(null);
  };

  useEffect(() => {
    const cards = document.querySelectorAll(".featured-speaker-card");

    const handleImageLoad = () => {
      const loadedImages = document.querySelectorAll(
        ".featured-speaker-card img"
      );
      if (loadedImages.length === cards.length) {
        setImagesLoaded(true);
      }
      loadedImages.forEach((image) => {
        // console.log("Image height:", image.offsetHeight);
        // console.log("Image naturalHeight:", image.naturalHeight);
      });
    };

    cards.forEach((card) => {
      const image = card.querySelector("img");
      image.addEventListener("load", handleImageLoad);
      // console.log("EL ADDED:", image);
    });

    handleImageLoad();

    // Cleanup
    return () => {
      cards.forEach((card) => {
        card.querySelector("img").removeEventListener("load", handleImageLoad);
      });
    };
  }, []);

  useEffect(() => {
    if (imagesLoaded) {
      const cards = document.querySelectorAll(".featured-speaker-card");

      cards.forEach((card) => {
        const image = card.querySelector("img");
        if (image.complete) {
          const imageHeight = image.offsetHeight;
          const overlayDiv = card.querySelector(".featured-speaker-overlay");
          // console.log("OTHER DATA", card, imageHeight, overlayDiv);
          overlayDiv.style.height = `${imageHeight}px`;
        } else {
          setImagesLoaded(false);
        }
      });
    }
  }, [imagesLoaded]);

  useEffect(() => {
    const cardCarousel = document.querySelector(".cards-carousel");
    const dotIndicator = document.querySelector(".dot-indicator");

    // Clear existing dot indicators
    dotIndicator.innerHTML = "";

    for (let i = 0; i < cardCarousel.children.length; i++) {
      const dot = document.createElement("li");
      dot.setAttribute("data-index", i);
      dotIndicator.appendChild(dot);
    }

    const handleScroll = () => {
      const cardWidth = cardCarousel.offsetWidth;
      const scrollLeft = cardCarousel.scrollLeft;
      const activeIndex = Math.round(scrollLeft / cardWidth);
      const dots = dotIndicator.querySelectorAll("li");

      dots.forEach((dot) => dot.classList.remove("active"));
      dots[activeIndex].classList.add("active");
    };

    cardCarousel.addEventListener("scroll", handleScroll);

    return () => {
      cardCarousel.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getHeight = () => {
    return "226px";
  };

  //const handleHSButtonClick = (hs) => {
  //  setSelectedHS(hs);
  //};

  return (
    <section className="featured-speaker" id="speakers">
      <div className="row justify-content-center bg-white p-5">
        <h2 className="text-uppercase text-center text-nlco-primary">
          Featured speakers
        </h2>
        <div className="lead text-center d-none">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
      </div>
      {/*<div className="row justify-content-center">
        <div className="col-md-8 col-12 d-flex text-center hs-cohorts">
          <button
            onClick={() => handleHSButtonClick("3.0")}
            className={`btn col mx-1 ${selectedHS === "3.0" ? "active" : ""}`}
          >
            Handshake 3.0
          </button>
          <button
            onClick={() => handleHSButtonClick("2.0")}
            className={`btn col mx-1 ${selectedHS === "2.0" ? "active" : ""}`}
          >
            Handshake 2.0
          </button>

          <button
            onClick={() => handleHSButtonClick("1.0")}
            className={`btn col mx-1 ${selectedHS === "1.0" ? "active" : ""}`}
          >
            Handshake 1.0
          </button>
        </div>
      </div>*/}
      <div className="row justify-content-center bg-white p-5">
        <div
          className="col-md-12 d-md-flex cards-carousel"
          style={{ cursor: "pointer" }}
        >
          {featuredSpeakers.map(
            (fs) =>
              fs.batch === selectedHS && (
                <div
                  class="card col-md-2 mx-4 featured-speaker-card"
                  key={fs.id}
                  onClick={(e) => handleSpeakerClick(e, fs)}
                >
                  <img
                    src={fs.image}
                    class="card-img-top"
                    alt="..."
                    height={"226px"}
                  />
                  <div
                    className="featured-speaker-overlay invisible"
                    style={{ height: getHeight() }}
                  >
                    <div className="pt-3 px-4 desc">
                      {fs.desc}
                      <div className="d-flex w-75 justify-content-between mt-2 pb-2">
                        <a href="#">
                          <span className="fs-social-icons">
                            <IoLogoTwitter />
                          </span>
                        </a>
                        <a href="#">
                          <span className="fs-social-icons">
                            <IoLogoFacebook />
                          </span>
                        </a>
                        <a href="#">
                          <span className="fs-social-icons">
                            <IoLogoLinkedin />{" "}
                          </span>
                        </a>
                        <a
                          target="blank"
                          href={`https://instagram.com/${fs.instagram}`}
                        >
                          <span className="fs-social-icons">
                            <IoLogoInstagram />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title text-uppercase text-muted mt-3 nlco-fct">
                      {fs.title}
                    </h5>
                    <div className="d-flex mt-3 justify-content-between card-subtitle">
                      <h5 class="text-capitalize">{fs.name}</h5>
                      {/*<IoArrowUp className="rotate-90 text-end" />*/}
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
        <ul class="dot-indicator d-flex d-sm-none"></ul>
      </div>

      {/*{selectedSpeaker && (
        <Modal
          show={selectedSpeaker != null}
          onHide={handleCloseModal}
          backdrop="false"
          keyboard={false}
          size="lg"
          centered
        >
          <Modal.Dialog data-bs-config={{ backdrop: true }}>
            <Modal.Header closeButton>
              <Modal.Title>Handshake {selectedHS} Speaker</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container>
                <Row>
                  <Col xs={12} md={4}>
                    <Image
                      src={selectedSpeaker.image}
                      className="img-fluid"
                      rounded
                    />
                  </Col>
                  <Col xs={12} md={8} className="mt-3 mt-sm-0">
                    <h6 className="text-muted text-capitalize">
                      {selectedSpeaker.title}
                    </h6>
                    <h2>{selectedSpeaker.name}</h2>
                    <p className="text-muted">{selectedSpeaker.desc}</p>

                    <a
                      target="blank"
                      href={`https://facebook.com/${selectedSpeaker.facebook}`}
                    >
                      <IconButton>
                        <IoLogoFacebook sx={{ height: 30, width: 30 }} />
                      </IconButton>
                    </a>

                    <a
                      target="blank"
                      href={`https://instagram.com/${selectedSpeaker.instagram}`}
                    >
                      <IconButton>
                        <IoLogoInstagram sx={{ height: 30, width: 30 }} />
                      </IconButton>
                    </a>
                    <a
                      target="blank"
                      href={`https://linkedin.com/${selectedSpeaker.linkedIn}`}
                    >
                      <IconButton>
                        <IoLogoLinkedin sx={{ height: 30, width: 30 }} />
                      </IconButton>
                    </a>
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
          </Modal.Dialog>
        </Modal>
      )}*/}
    </section>
  );
};

export default FeaturedSpeaker;
