import React from "react";
import Hero from "./Hero/Hero";
import HandshakeWelcome from "./HandshakeWelcome/HandshakeWelcome";
import FeaturedSpeaker from "./FeaturedSpeaker/FeaturedSpeaker";
import Hashtag from "./HashTag/Hashtag";
import WhyAttend from "./WhyAttend/WhyAttend";
import Partners from "./Partner/Partners";
import Footer from "./Footer/Footer";

const RootComponent = () => {
  return (
    <div className="">
      <div className="row">
        <Hero />
        <HandshakeWelcome />
        <FeaturedSpeaker />
        <Hashtag />
        <WhyAttend />
        <Partners />
        <Footer />
      </div>
    </div>
  );
};

export default RootComponent;
