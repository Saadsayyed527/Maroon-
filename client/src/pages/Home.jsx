// import React, { useState } from "react";
import AboutUs from "./AboutUs";
import Services from "./Services";
import ContactUs from "./ContactUs";

const Home = () => {
  // const [isVideoEnded, setVideoEnded] = useState(false);

  return (
    <>
      <div style={styles.container}>
        {/* {isVideoEnded ? (
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
        )} */}
        <video
          src="/videos/intro2.mp4" // Path to the video in the public folder
          autoPlay
          muted
          style={styles.video}
        />
      </div>
      <AboutUs />
      <Services />
      <ContactUs />
    </>
  );
};

const styles = {
  container: {
    width: "100%",
  },

  video: {
    borderTop: "7px solid #D8A25E",
    borderBottom: "7px solid #D8A25E",
    width: "100%",
  },

  // image: {
  //   borderTop: "7px solid #D8A25E",
  //   borderBottom: "7px solid #D8A25E",
  // },
};

export default Home;
