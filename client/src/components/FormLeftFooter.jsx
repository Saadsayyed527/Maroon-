import React from "react";
import { useNavigate } from "react-router-dom";
import emailIcon from "/email-icon.svg";
import callIcon from "/Call-icon.svg";

function FormLeftFooter() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      <div style={styles.footer}>
        <div style={styles.links}>
          <button
            onClick={() => handleNavigation("/about")}
            style={styles.linkButton}
          >
            About Us
          </button>
          <button
            onClick={() => handleNavigation("/family")}
            style={styles.linkButton}
          >
            Careers
          </button>
          <button
            onClick={() => handleNavigation("/terms")}
            style={styles.linkButton}
          >
            Terms of Services
          </button>
          <button
            onClick={() => handleNavigation("/policy")}
            style={styles.linkButton}
          >
            Privacy Policy
          </button>
        </div>

        <div style={styles.contact}>
          <h4 style={styles.contactTitle}>Contact us</h4>

          {/* Email */}
          <div style={styles.contactItem}>
            <img src={emailIcon} alt="Email" style={styles.icon} />
            <a
              href="mailto:maroondigitalrise@gmail.com"
              style={styles.contactLink}
            >
              maroondigitalrise@gmail.com
            </a>
          </div>

          {/* Phone Numbers with One Icon */}
          <div style={styles.contactItemPhone}>
            <img src={callIcon} alt="Call" style={styles.icon} />
            <div style={styles.phoneNumbers}>
              <a href="tel:+919525511434" style={styles.contactLink}>
                +91 95525 11434
              </a>
              <a href="tel:+917218358766" style={styles.contactLink}>
                +91 72183 58766
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "20px 40px",
    backgroundColor: "#D9D9D961",
    marginTop: "20px",
    width: "103%",
    gap: "20px",
  },
  links: {
    flex: 1, 
    minWidth: "150px",
  },
  linkButton: {
    background: "none",
    border: "none",
    color: "#000",
    margin: "10px 0",
    display: "block",
    fontSize: "16px",
    cursor: "pointer",
  },
  contact: {
    flex: 1, 
    textAlign: "left",
  },
  contactTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "10px 0px",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "8px",
  },
  contactItemPhone: {
    display: "flex",
    alignItems: "right",
    lineHeight: "1",
  },
  phoneNumbers: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "10px",
  },
  icon: {
    width: "25px",
    display: "inline-block",
  },
  contactLink: {
    color: "#000",
    textDecoration: "none",
    fontSize: "16px",
    marginBottom: "5px",
  },
};

export default FormLeftFooter;