import React, { useState } from "react";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Clients from "../components/Clients";
import ContactUs from "./ContactUs";
import { object } from "prop-types";
// import ServicesAccordion from "../components/ServicesAccordion";
import Heading from "../components/Heading";
import ServicesBackward from "../components/ServicesBackward";
import HorizontalImageGallery from "../components/HorizontalImageGallery";

const Home = () => {
  const [isVideoEnded, setVideoEnded] = useState(false);

  return (
    <>
      {/* <Clients /> */}
      <div style={styles.container}>
        {isVideoEnded ? (
          <img
            src="/Maroondigitalrise-intro.png"
            alt="Maroondigitalrise-intro"
            style={{
              ...styles.image,
              opacity: isVideoEnded ? 1 : 0, // Show image when video ends
            }}
          />
        ) : (
          <video
            src="/videos/Maroondigitalrise-website-introduction.mp4"
            autoPlay
            muted
            style={styles.video}
            onEnded={() => setVideoEnded(true)}
          />
        )}
      {/* <video
          src="/videos/intro2.mp4"
          autoPlay
          muted
          className="w-full h-auto max-w-full"
          style={styles.video}
        /> */}
      </div>
      <HorizontalImageGallery></HorizontalImageGallery>
      <AboutUs />
      <Services />
      <Clients /> 
      <ContactUs /> 
      {/* { </div> */}
      <div className="w-full border-b-[2px] border-b-[#D8A25E]"></div>
      {/* <Services /> */}
    </>
  );
};

const styles = {
  container: {
    maxWidth: "100%",
    height: "70%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  video: {
    // borderTop: "2px solid #D8A25E",
    borderBottom: "2px solid #D8A25E",
    maxWidth: "84%",
    width: "100%",
    height: "559px",
    // transition: " all 0.5s ease", // Optional: Add smooth animation for height changesopacity 0.5s ease",
    // height: "80%",
    // objectFit: "contain",
    // aspectRatio: "16/9",
    //  transition: "opacity 0.5s ease",
  },

  image: {
    display: "block",
    maxWidth: "100%",
    height: "559px",
    opacity: 1,
    transition: "opacity 0.1s",
    //  objectFit: "contain",
    //  transition: "opacity 0.5s ease",
    borderBottom: "2px solid #D8A25E",
  },
};

export default Home;