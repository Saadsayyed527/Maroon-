import React, { useState } from "react";
import AboutUs from "./AboutUs";
import Services from "./Services";
import ContactUs from "./ContactUs";

const Home = () => {
  const [isVideoEnded, setVideoEnded] = useState(false);

  return (
    <>
      <div style={styles.container}>
        {isVideoEnded ? (
          <img
            src="/intro.png" // Path to the image in the public folder
            alt="Intro"
            style={styles.image}
          />
        ) : (
          <video
            src="/videos/intro2.mp4" // Path to the video in the public folder
            autoPlay
            muted
            style={styles.video}
            onEnded={() => setVideoEnded(true)} // Handle video end
          />
        )}

      </div>
      <AboutUs />
      <Services />
      <ContactUs />
    </>
  );
};

const navbarHeight = 60; // Replace this with your actual navbar height in pixels

const styles = {
  container: {
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: `calc(100vh - ${navbarHeight}px)`, // Subtract navbar height
    overflow: "hidden",
    backgroundColor: "#D8A25E",
  },
  video: {
    width: "100vw",
    height: `100vh`, // Adjust video height
    objectFit: "cover",
  },
  image: {
    width: "100vw",
    height: `calc(100vh - 78px)`, // Adjust image height
    objectFit: "cover",
  },
};

export default Home;
