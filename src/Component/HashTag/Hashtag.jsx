import React from "react";

import "./Hashtag.css";

const Hashtag = () => {
  return (
    <section className="hashtag py-5 py-sm-4">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-sm-6 text-center mb-3 text-sm-end">
          <span className="tag text-white">@africanunion_official</span>
          <span className="dot text-nlco-secondary ms-2">.</span>
        </div>
        <div className="col-lg-4 col-sm-6 text-center mb-3">
          <span className="tag text-white">@graduatepro</span>
          <span className="dot text-nlco-secondary ms-2">.</span>
        </div>
        <div className="col-lg-4 col-sm-6 text-center mb-3 text-sm-start">
          <span className="tag text-white">#aucareersFair</span>
          <span className="dot text-nlco-secondary ms-2">.</span>
        </div>
        <div className="col-lg-4 col-sm-6 text-center mb-3 text-sm-start">
          <span className="tag text-white">#reimaginedecentjobs</span>
          <span className="dot text-nlco-secondary ms-2">.</span>
        </div>
      </div>
    </section>
  );
};

export default Hashtag;
