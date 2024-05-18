import React, { useEffect, useState } from "react";
import "./FeaturedSpeaker.css";

// ========== Featured Speakers 1.0 =============== //

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

// ========== Featured Speakers 2.0 =============== //

import chales_odii from "../../images/fs/2.0/charles_odii.jpg";
import chidubem_onyegbulu from "../../images/fs/2.0/chidubem_onyegbulu.jpg";
import chisom_ejim from "../../images/fs/2.0/chisom_ejim.jpg";
import debo_adejana from "../../images/fs/2.0/debo_adejana.jpg";
import el_newman_samuel_gompil from "../../images/fs/2.0/newman.jpg";
import elsa_bankole2 from "../../images/fs/2.0/elsa_bankole.jpg";
import ibukun_amosun from "../../images/fs/2.0/ibukun_amosun.jpg";
import maraim_adeyemi from "../../images/fs/2.0/mariam_adeyemi.jpg";
import mohammed_mijindadi from "../../images/fs/2.0/mohammed_mijindadi.jpg";
import molade_adeniyi from "../../images/fs/2.0/molade_adeniyi.jpg";
import nkiru_olumide_ojo from "../../images/fs/2.0/nkiru_olumide_ojo.jpg";
import progress_okuk from "../../images/fs/2.0/progress_okuk.jpg";
import victor_mensah from "../../images/fs/2.0/victor_mensah.jpg";
import victoria_ohaeri from "../../images/fs/2.0/victoria_ohaeri.jpg";
import wamide_animashaun from "../../images/fs/2.0/wamide_animashaun.jpg";

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
      name: "Elsa Bankole",
      title: "Founder, ElsaLagos",
      image: elsa_bankole,
      batch: "1.0",
      desc: "Elsa Bankole is the founder of ElsaLagos, a fashion brand that caters to lovers of jewellery. With a carefully curated and extensive range of unique and affordable jewellery, Elsa is putting a spin on conventional jewellery retailing. Using her phone, with Instagram and whatsapp as her main tech tools, Elsa has created a business model that is noteworthy.",
      id: 1,
      instagram: "Elsalagos.ng",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Pelu Awofeso",
      title: "CEO, Travel Next Door",
      image: pelu_awofeso,
      batch: "1.0",
      desc: "Pelu Awofeso, founder and CEO of Travel Next Door, is one of the leading names in Nigeria's domestic tourism space. His contributions to, and influence in, the industry cuts across journalism, publishing, cultural consultancy. ",
      id: 2,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Raquel Kashim Daniel",
      title: "Co-founder, Bambini Africa",
      image: raquel_kashim,
      batch: "1.0",
      desc: "Raquel Kasham Daniel is a driven social entrepreneur and development practitioner with a decade of experience in Nigeria's development sector. She is the co-founder of Bambini Africa.",
      id: 3,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Olumide Gbadebo",
      title: "CEO, Adunni Organics",
      image: olumide_gbadebo,
      batch: "1.0",
      desc: "Beauty products entrepreneur Olumide Gbadebo is the founder of Adunni Organics, one of the first indigenous beauty e-commerce brands in Nigeria.",
      id: 4,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Jerry Uke",
      title: "Senior Program Manager, Alt School Africa",
      image: jerry_uke,
      batch: "1.0",
      desc: "Jerry is a Senior Program Manager with 6+ years experience building sustainable impact, business, and learning & development programs in the Venture Capital/ Startup Ecosystems, Educational Technology, and Community spaces.",
      id: 5,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Harry Enaholo",
      title: "Founder, Treford Tech Africa",
      image: harry_anaholo,
      batch: "1.0",
      desc: "Harry is a management expert with over eight years of managerial experience in tech cutting across operations, product, growth and talent development in sectors like Fintech, SaaS and EdTech.",
      id: 6,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Chisom Nwokwu",
      title: "Software Engineer, Microsoft",
      image: chisom_nwokwu,
      batch: "1.0",
      desc: "Chisom Nwokwu (fondly called TechQueen) is a renowned Software Engineer based in Lagos, Nigeria working with the Sustainability Team at Microsoft, she joined Microsoft as a new graduate shortly after rounding up an internship with the Bank of America, where she worked as a Technology analyst.",
      id: 7,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Temidayo Salako",
      title: "Business Unit Lead, Tunga",
      image: temidayo_salako,
      batch: "1.0",
      desc: "Temidayo Salako is a catalyst and a systems builder with experience in business operations, strategic startup management, project management, human resource management, training, and consulting within the tech industry.",
      id: 8,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Anayor Onuoha",
      title: "Technical Recruiter, Alerzo",
      image: anayor_anuoha,
      batch: "1.0",
      desc: "Anayor is a competent and assured individual, demonstrating the qualities of a self-starter with the unwavering commitment and drive required to excel in a fast-paced HR department. ",
      id: 9,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Gloria Ngozi Alado",
      title: "Talent Acquisition Lead, Recruitment Den",
      image: gloria_ngozi_alado,
      batch: "1.0",
      desc: "Gloria Ngozi Alado is an accomplished Recruiter and Corporate Communications specialist developing in her career since 2020.",
      id: 10,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Riman Ebarere",
      title: "Senior Technical recruiter, Amazon Web Services",
      image: riman_ebarere,
      batch: "1.0",
      desc: "Riman is a seasoned technical recruiter with almost a decade of expertise in specialised recruiting, spanning technical and non-technical roles.",
      id: 11,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Ibukun Amosu",
      title: "Tech Talent Partner, Remote Giggs",
      image: ibukun_amosu,
      batch: "1.0",
      desc: "Ibukun (IBK) has carved a remarkable niche for himself as a Tech Talent Partner for global corporations and startups, while also being the visionary Founder of The Intern Place (TiP), a dynamic internship talent community.",
      id: 12,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Obinna Igwebuike",
      title: "Consulting Team Lead, Sawubona Advisory Services",
      image: obinna_igwebuike,
      batch: "1.0",
      desc: "Obinna has sixteen years’ experience in management & development consulting and fintech product development. He is currently Consulting Team Lead, at Sawubona Advisory Services, a management consulting practice and a Supervisory Director in charge of Policy Design and Development at AT & Harvey Consulting, a development consultancy. Both businesses are based in Lagos, Nigeria.",
      id: 13,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Joshua Oyekanmi",
      title: "Program Manager, Etiwatech",
      image: joshua_oyekanmi,
      batch: "1.0",
      desc: "Joshua Oyekanmi is a seasoned professional with a rich background in program management and consultancy. I currently serve as a Program Manager at Etiwa Tech in Lekki, Lagos State, where I have been instrumental in driving positive change.",
      id: 14,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Toyyib Adelodun",
      title: "Chief Service Officer, Toyibb Adelodun International",
      image: toyyib_adedodun,
      batch: "1.0",
      desc: "Toyyib Adelodun is a seasoned Civil Engineer with an impressive track record spanning over a decade, having worked with renowned companies such as Costain, Skanska, and Balfour Beatty.",
      id: 15,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Dr. Kelechukwu N. Onwukamike",
      title: "Founder, DEKEMP",
      image: kelechukwu_n_nwokamilke,
      batch: "1.0",
      desc: "Dr. Kelechukwu N. ONWUKAMIKE (PhD)(Dr.rer.nat) is published author of “Till We All Win” book and currently a Research Scientist working for Procter & Gamble Germany.",
      id: 16,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Obi Ike",
      title: "CEO, Alvative",
      image: obi_ike,
      batch: "1.0",
      desc: "Ike Obi has over 10yrs of professional technology startup experience spanning different roles and stages - from software development to business development, sales and growth.",
      id: 17,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Raliyah Adamu",
      title: "Trainer, Cybarik GRC Academy",
      image: raliya_adamu,
      batch: "1.0",
      desc: "My name is Raliyah Adamu Manu, a trainer at Cybarik GRC Academy and a GRC Analyst at Digital Jewels Africa where I focus on planning and implementing policies, procedures, standards, and controls to govern the protection of corporate information systems.",
      id: 18,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Mary-Esther Anele",
      title: "Founder, Inclusivelyremote",
      image: marry_esther_anele,
      batch: "1.0",
      desc: "Mary-Esther Anele is the Founder of Inclusivelyremote, a remote job board and resource site established to foster inclusive and equal remote opportunities for everyone anywhere as well as promote inclusive remote startups.",
      id: 19,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Elsa Bankole",
      title: "Founder, ElsaLagos",
      image: elsa_bankole2,
      batch: "2.0",
      desc: "Elsa Bankole is the founder of ElsaLagos, a fashion brand that caters to lovers of jewellery. With a carefully curated and extensive range of unique and affordable jewellery, Elsa is putting a spin on conventional jewellery retailing.",
      id: 20,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Victoria Ohaeri",
      title:
        "Founder & Director of Research and Policy at Spaces for Change [S4C]",
      image: victoria_ohaeri,
      batch: "2.0",
      desc: "Victoria, the visionary founder and director of research and policy at Spaces for Change [S4C], has dedicated her 15-year legal career to advancing social and economic rights globally.",
      id: 21,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Mariam Adeyemi",
      title: "Tech Entrepreneur",
      image: maraim_adeyemi,
      batch: "2.0",
      desc: "Mariam Adeyemi is a seasoned senior analyst, the visionary founder of TechaVilly, a tech training company. With an impressive educational background, Mariam holds a master's degree in Business Analytics from Texas A&M University, augmenting her extensive corporate experience spanning over a decade.",
      id: 22,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Chidubem Onyegbule",
      title: "Product Manager, Interswitch ",
      image: chidubem_onyegbulu,
      batch: "2.0",
      desc: "Chidubem is a seasoned Product Manager, currently working with Interswitch Group. He is deeply committed to building products that provide solutions to everyday human challenges and help people maximise their potential.",
      id: 23,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Victor Mensah",
      title: "Specialist on Management & Organisation Development Consulting",
      image: victor_mensah,
      batch: "2.0",
      desc: "Victor Mensah specialises in Management and Organisation Development Consulting, Strategic Management, Ideation Management, Curriculum Development, Training and Capacity Development, online training platforms, Sustainable ICT Platforms for enterprises.",
      id: 24,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Chisom Ejim",
      title: "Development Operations Engineer",
      image: chisom_ejim,
      batch: "2.0",
      desc: "Chisom is a Development Operations Engineer with experience optimising software development and deployment processes through automation, CI/CD, and infrastructure as code.",
      id: 25,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Nkiru Olumide-Ojo",
      title: "author",
      image: nkiru_olumide_ojo,
      batch: "2.0",
      desc: "Nkiru Olumide-Ojo is a Nigerian female author, columnist, development speaker and technocrat, with a career history in financial services, aviation, telecommunication and petroleum sectors.",
      id: 26,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Debo Adejana",
      title: "Real estate entrepreneur",
      image: debo_adejana,
      batch: "2.0",
      desc: "Debo Adejana is an astute real estate entrepreneur who heads one of Nigeria's leading Mass Housing Development Company: Realty Point Limited since 2005",
      id: 27,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Mohammed Mijindadi",
      title:
        "President of GE Nigeria & Managing Director of GE Gas Power Systems (GPS)",
      image: mohammed_mijindadi,
      batch: "2.0",
      desc: "Mohammed N. Mijindadi is the President of GE Nigeria & Managing Director of GE Gas Power Systems (GPS) for Nigeria & Anglo West Africa, responsible for executive oversight and strengthening GE’s impact in the region while building strong stakeholder relationships across GE’s Power, Healthcare and Renewable energy sectors.",
      id: 28,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Charles Odii",
      title: "Founder & Executive Director, SME100Africa",
      image: chales_odii,
      batch: "2.0",
      desc: "Charles Odii is the founder and executive director of SME100Africa, an organisation that inspires, empowers and equips young entrepreneurs and Small and Medium Scale Enterprises in Africa by providing: access to finance, access to markets, access to inspiring networks, capacity development, and access to information.",
      id: 29,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Progress Okuk",
      title: "Team Manager, KASFAB CONCEPTS",
      image: progress_okuk,
      batch: "2.0",
      desc: "Progress is sharp as a tack. She is a non conformist who incorporates business abilities with street astuteness. She is not given to the grandiose of status quo nor the limitations of traditional propriety. She understands the priority of PEOPLE, MONEY and TIME and encourages humour to make for a healthy work environment.",
      id: 30,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Wamide Animashaun",
      title: "founder, CAWSTEM (Connecting African Women in STEM)",
      image: wamide_animashaun,
      batch: "2.0",
      desc: "Wamide Animashaun currently leads Ecosystem & Partnerships at Propel, driving product growth while nurturing a network of over 150 tech communities across Africa.",
      id: 31,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Molade Adeniyi",
      title: "CEO, WAVE (West Africa Vocational Education)",
      image: molade_adeniyi,
      batch: "2.0",
      desc: "Molade Adeniyi, CEO of WAVE (West Africa Vocational Education), is a visionary leader dedicated to empowering the youth of West Africa with the skills and opportunities they need to realise their full potential.",
      id: 32,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "El-Newman Samuel Gompil",
      title: "Producer",
      image: el_newman_samuel_gompil,
      batch: "2.0",
      desc: "El- Newman Samuel Gompil has enjoyed a chequered career of over 15 years in the media and communications space as a producer, and, in film, radio and television production management.",
      id: 33,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
    {
      name: "Ibukun Amosu",
      title: "Tech Talent Partner, Remote Giggs",
      image: ibukun_amosun,
      batch: "2.0",
      desc: "Ibukun (IBK) has carved a remarkable niche for himself as a Tech Talent Partner for global corporations and startups, while also being the visionary Founder of The Intern Place (TiP), a dynamic internship talent community.",
      id: 34,
      instagram: "",
      linkedIn: "",
      facebook: "",
      twitter: "",
    },
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
