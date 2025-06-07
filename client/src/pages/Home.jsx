import React, { useState } from "react";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Clients from "../components/Clients";
import ContactUs from "./ContactUs";
import { object } from "prop-types";
// import ServicesAccordion from "../components/ServicesAccordion";
import Heading from "../components/Heading";
import ServicesBackward from "../components/ServicesBackward";

const Home = () => {
  const [isVideoEnded, setVideoEnded] = useState(false);

  return (
    <>
      {/* <Clients /> */}
      {/* <div style={styles.container}>
        <div className="flex">
          <div className="w-[25px] bg-[#FFB800] h-[557px] mr-5"></div>
          <div className="w-[25px] bg-[#FFB800] h-[557px]"></div>
        </div>
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
        <div className="flex">
          <div className="w-[25px] bg-[#FFB800] h-[557px] mr-5"></div>
          <div className="w-[25px] bg-[#FFB800] h-[557px]"></div>
        </div>
        {/* <video
          src="/videos/intro2.mp4"
          autoPlay
          muted
          className="w-full h-auto max-w-full"
          style={styles.video}
        /> */}

      <div style={styles.container} className="relative">
        <div className="flex gap-1">
          <div className="w-[25px] bg-[#FFB800] h-[557px] ml-5"></div>
          <div className="w-[25px] bg-[#FFB800] h-[557px] ml-5"></div>
        </div>

        <div className="relative w-[84%] h-[557px]">
          {/* Video and image overlayed */}
          <video
            src="/videos/Maroondigitalrise-website-introduction.mp4"
            autoPlay
            muted
            className="absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-500"
            style={{ opacity: isVideoEnded ? 0 : 1 }}
            onEnded={() => setVideoEnded(true)}
          />
          <img
            src="/Maroondigitalrise-intro.png"
            alt="Maroondigitalrise-intro"
            className="absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-500"
            style={{ opacity: isVideoEnded ? 1 : 0 }}
          />
        </div>

        <div className="flex gap-1">
          <div className="w-[25px] bg-[#FFB800] h-[557px] mr-5"></div>
          <div className="w-[25px] bg-[#FFB800] h-[557px] mr-5"></div>
        </div>
      </div>
      {/* </div> */}
      <AboutUs />
      <Services />
      <Clients />
      <ContactUs />
      {/* { </div> */}
      {/* <div className="w-full border-b-[2px] border-b-[#96846e]"></div> */}
      {/* <Services /> */}
    </>
  );
};

const styles = {
  // container: {
  //   maxWidth: "100%",
  //   height: "70%",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },

  container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderBottom: "2px solid #D8A25E",
  },

  // video: {
  // borderBottom: "2px solid #D8A25E",
  // maxWidth: "84%",
  // width: "100%",
  // height: "559px",
  // height: "auto",

  // transition: " all 0.5s ease", // Optional: Add smooth animation for height changesopacity 0.5s ease",
  // // height: "70%",
  // // objectFit: "contain",
  // // aspectRatio: "16/9",
  //  transition: "opacity 0.5s ease",
  // },

  video: {
    maxWidth: "84%",
    width: "100%",
    maxHeight: "557px", // or whatever max height you prefer
    display: "block",
    margin: 0,
    padding: 0,
    objectFit: "contain", // preserves aspect ratio
  },
  image: {
    display: "block",
    maxWidth: "100%",
    height: "557px",
    opacity: 1,
    transition: "opacity 0.1s",
  },
};

export default Home;