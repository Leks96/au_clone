import React from "react";
import { IoBulb, IoCloud, IoGitNetwork } from "react-icons/io5";
import "./WhyAttend.css";

const WhyAttend = () => {
  return (
    <section className="why-attend py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <span
              className="text-center text-uppercase text-nlco-secondary d-none"
              style={{ fontSize: "14px" }}
            >
              Join the event
            </span>
            <br />
            <span className="text-center text-uppercase text-nlco-secondary">
              Why Attend?
            </span>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 col-sm-12 mb-4">
            <div className="card bg-white why-attend-card2 h-100">
              <div className="card-body text-center">
                <h5 className="card-title2 card-title-icon">
                  <IoBulb />
                </h5>
                <h5 className="card-title card-title-text2 text-uppercase">
                  Learn
                </h5>
                <p className="card-text">
                Get first hand information on what the African Union's mandate is....<br />
                and what it is set up to achieve. Listen to key focal persons explain the inner workings of the institution.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 mb-4">
            <div className="card bg-white why-attend-card h-100">
              <div className="card-body text-center">
                <h5 className="card-title card-title-icon">
                  <IoCloud />
                </h5>
                <h5 className="card-title card-title-text text-uppercase">
                  Engage
                </h5>
                <p className="card-text">
                  Take on a more active role as the African Union works towards the actualisation of Agenda 2063: The Africa We Want.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 mb-4">
            <div className="card bg-white why-attend-card1 h-100">
              <div className="card-body text-center">
                <h5 className="card-title card-title-icon">
                  <IoGitNetwork />
                </h5>
                <h5 className="card-title card-title-text text-uppercase">
                  Network
                </h5>
                <p className="card-text">
                  Meet like minds from all over the world. Expand your network. Learn from your peers. Build professional relationships across timezones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;
