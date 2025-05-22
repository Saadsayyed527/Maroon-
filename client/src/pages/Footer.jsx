import React from "react";
import maroonLogo from "/Mlogo.png";
import whatsappIcon from "/whatsapp.svg";
import instagramIcon from "/instagram.svg";
import facebookIcon from "/facebook.svg";
import twitterIcon from "/twitter-alt.svg";
import linkedinIcon from "/linkedin.svg";
import youtubeIcon from "/youtube.svg";

const Footer = () => {
  const socialMediaLinks = [
    {
      icon: whatsappIcon,
      url: `https://wa.me/9552511434?text=Hello,%0ATeam%20MAROON,%0AI'm%20interested%20in%20your%20Marketing%20Services...



`,
    },
    {
      icon: instagramIcon,
      url: "https://www.instagram.com/maroondigitalrise/profilecard/",
    },
    {
      icon: facebookIcon,
      url: "https://www.facebook.com/people/Maroon-Digital-Rise/61571253219557/?mibextid=ZbWKwL",
    },
    { icon: twitterIcon, url: "https://x.com/maroon_digital?s=09" },
    {
      icon: linkedinIcon,
      url: "https://www.linkedin.com/company/maroon-digital-rise/",
    },
    { icon: youtubeIcon, url: "https://www.youtube.com/@Maroondigitalrise" },
  ];

  const styles = {
    footer: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      margin: "25px",
      padding: "10px 0px",
      backgroundColor: "#f4f4f4",
    },
    logo: {
      width: "200px",
      // marginBottom: "20px",
      margin: "2px auto",
    },
    socialLinks: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      marginBottom: "20px",
    },
    socialIcon: {
      width: "30px",
      cursor: "pointer",
    },
    copyright: {
      fontSize: "14px",
      color: "#555",
    },
  };

  return (
    <footer style={styles.footer}>
      <div>
        <img src={maroonLogo} alt="Maroon Digital Rise" style={styles.logo} />
      </div>
      <p className="pb-3">Follow & Connect us on</p>
      <div style={styles.socialLinks}>
        {socialMediaLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={link.icon} alt="Social Icon" style={styles.socialIcon} />
          </a>
        ))}
      </div>
      <p style={styles.copyright}>
        © All Rights Reserved by Maroon: Digital Rise
      </p>
    </footer>
  );
};

export default Footer;