import React from "react";

import "./Hashtag.css";

const Hashtag = () => {
  return (
    <section className="hashtag py-5 py-sm-4">
      <div className="row justify-content-center">
        <div className="col-lg-12 col-sm-6 text-center mb-3">
          <span className="tag">@africanunion_official</span>
          <span className="dot text-nlco-secondary ms-2">.</span>
        </div>
        <div className="col-lg-12 col-sm-6 text-center mb-3">
          <span className="tag">#aucareerfair</span>
          <span className="dot text-nlco-secondary ms-2">.</span>
        </div>
        <div className="col-lg-12 col-sm-6 text-center mb-3">
          <span className="tag">#reimaginedecentjobs</span>
          <span className="dot text-nlco-secondary ms-2">.</span>
        </div>
      </div>
    </section>
  );
};

export default Hashtag;
