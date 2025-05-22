import React, { useState, useRef } from "react";
import axios from "axios";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import Heading from "../components/Heading";
// import ClientCard from "../components/ClientCard.jsx";
import ServicesDropdown from "../components/ServicesDropdown.jsx";
import FormLeftFooter from "../components/FormLeftFooter.jsx";

const ContactUs = () => {
  const navigate = useNavigate();

  const servicesDropdownRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default form submission behavior

      if (!formData.companyName.trim()) {
        alert("Please enter your Business Name before proceeding.");
        return;
      }

      // Move focus to the services dropdown only if the field is filled
      servicesDropdownRef.current?.focus();
    }
  };


  const handleNavigation = (url) => {
    navigate(url);
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    companyName: "",
    service: "",
    projectDetails: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "9096726383"; // Replace with your WhatsApp number (91 for India)

    // Formatting the message
    const message = `Hello,
Team MAROON,
I'm interested in your Marketing Services...

CLIENT DETAILS : 
  Name:  ${formData.fullName}
  Email:  ${formData.email}
  Phone:  ${formData.contactNumber}
  Business Name:  ${formData.companyName}
  Select Services:  ${formData.service}
  Project Details:  ${formData.projectDetails}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // Open WhatsApp chat
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );

    // Reset form fields
    setFormData({
      fullName: "",
      email: "",
      contactNumber: "",
      companyName: "",
      SelectServices: "",
      projectDetails: "",
    });
  };


  return (
    <div style={styles.body}>
      <div className="m-20 text-balance">
        <Heading
          text={`🚀 Take Your Brand to New Heights -`}
          variant="style3"
        />
        <Heading text="Let's Start Today" variant="style3" />
      </div>

      {/* Main Section */}
      <div style={styles.mainSection}>
        {/* Placeholder Image */}
        <div style={styles.imageContainer}>
          <div className="w-[70%] block bg-center mx-auto">
            <img
              src="contact.png"
              alt="Maroon Digital Rise contact us illustration"
              className="leading-[0px]"
            />
          </div>
          <div>
            <FormLeftFooter />
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          style={styles.formContainer}
          aria-labelledby="form-title"
        >
          <h3 id="form-title" style={styles.formHeader}>
            Kickstart Your Project
          </h3>

          <div className="bg-[#D9D9D961] px-5 py-6 ">
            {/* Name Field */}
            <div className="mb-1">
              <label htmlFor="fullName">
                Name <span className="text-[#FF0000] font-bold">*</span>
              </label>
            </div>
            <div>
              <input
                type="text"
                id="fullName"
                name="fullName"
                title="Please enter your full name."
                placeholder="Your Full Name"
                autoComplete="off"
                value={formData.fullName}
                onChange={handleChange}
                required
                aria-required="true"
                aria-describedby="nameError"
                style={styles.input}
                className="placeholder-[#888888]"
              />
              <span id="nameError" className="sr-only">
                Full name is required.
              </span>
            </div>

            {/* Email Field */}
            <div className="mb-1">
              <label htmlFor="email">
                Email <span className="text-[#FF0000] font-bold">*</span>
              </label>
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Business Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
                aria-describedby="emailError"
                style={styles.input}
                className="placeholder-[#888888]"
              />
              <span id="emailError" className="sr-only">
                Please enter a valid email address.
              </span>
            </div>

            {/* Phone Number Field */}
            <div className="mb-1">
              <label htmlFor="contactNumber">
                Phone Number <span className="text-[#FF0000] font-bold">*</span>
              </label>
            </div>
            <div>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                inputMode="numeric"
                pattern="[0-9]{10}"
                title="Please enter a 10-digit phone number."
                placeholder="Your Contact Number"
                value={formData.contactNumber}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                  handleChange({ target: { name: "contactNumber", value } });
                }}
                required
                aria-required="true"
                aria-describedby="phoneError"
                style={styles.input}
                className="placeholder-[#888888]"
              />
              <span id="phoneError" className="sr-only">
                Please enter a 10-digit phone number.
              </span>
            </div>

            {/* Business Name Field */}
            <div className="mb-1">
              <label htmlFor="companyName">
                Business Name{" "}
                <span className="text-[#FF0000] font-bold">*</span>
              </label>
            </div>
            <div>
              <input
                type="text"
                id="companyName"
                name="companyName"
                placeholder="Your Company or Brand Name"
                value={formData.companyName}
                onChange={handleChange}
                required
                onKeyDown={handleKeyDown}
                style={styles.input}
                className="placeholder-[#888888]"
              />
            </div>

            {/* Services Dropdown */}
            <div className="mb-1">
              <label htmlFor="services" className="block">
                Select Service(s){" "}
                <span className="text-[#FF0000] font-bold">*</span>
              </label>
            </div>
            <ServicesDropdown buttonRef={servicesDropdownRef} />

            {/* Project Details */}
            <div className="mt-2 mb-1">
              <label htmlFor="projectDetails" className="block">
                Project Details or Requirements{" "}
                <span className="text-[#FF0000] font-bold">*</span>
              </label>
            </div>
            <textarea
              id="projectDetails"
              name="projectDetails"
              rows="4"
              cols="50"
              placeholder="Tell us about your project or needs in brief."
              value={formData.projectDetails}
              onChange={handleChange}
              required
              aria-required="true"
              aria-describedby="detailsError"
              style={styles.textarea}
              className="placeholder-[#888888]"
            ></textarea>
            <span id="detailsError" className="sr-only">
              Project details are required.
            </span>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                style={styles.button}
                aria-label="Submit the form"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

const styles = {
  body: {
    fontFamily: "'Outfit', sans-serif",
    boxSizing: "border-box",
  },
  header: {
    fontSize: "36px",
    margin: "20px 0",
    textAlign: "center",
  },

  highlightText: {
    textAlign: "center",
    fontSize: "24px",
    color: "#d89b50",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  mainSection: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    // marginBottom: "50px",
    width: "100%",
  },
  imageContainer: {
    // width: "40%",
    // padding: "20px",
  },
  placeholderImage: {
    // width: "100%",
    // height: "50%",
  },
  formContainer: {
    width: "660px",
    textAlign: "left",
  },
  formHeader: {
    fontSize: "20px",
    marginBottom: "10px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #000",
    borderRadius: "5px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #000",
    borderRadius: "5px",
  },
  button: {
    width: "35%",
    padding: "15px",
    backgroundColor: "#D8A25E",
    color: "#fff",
    border: "none",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    borderRadius: "10px",
  },
  footer: {
    backgroundColor: "#f4f4f4",
    padding: "20px 0",
    textAlign: "center",
    marginTop: "20px",
  },
  footerLinks: {
    marginBottom: "10px",
  },
  footerContact: {
    marginBottom: "10px",
  },
  logo: {
    fontSize: "24px",
    color: "#a63a00",
  },
};

export default ContactUs;


// import emailIcon from "../../public/service_images/SVG icon/gmail.svg";
// import callIcon from "../../public/service_images/SVG icon/call.svg";