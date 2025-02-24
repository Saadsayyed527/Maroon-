import React from "react";
import PropTypes from "prop-types";

const Heading = ({ text, variant }) => {
  const baseClasses = "text-center"; // Common styles for all headings

  // Object map for variants
  const variantClasses = {
    style1: "text-[40px] text-[#D8A25E] font-Alexandria  font-semibold", //
    style1_1: "text-[60px] text-[#D8A25E] font-outfit  font-bold", // Orange text
    style2: "text-[100px] font-black font-red-hat combined", // Transparent text with border
    style2_1: "text-[64px] font-black font-red-hat combined",
    style3: "text-[70px] text-[#FEB600] font-outfit font-semibold  text-6xl", // Custom smaller text with different font
  };

  // Get the classes for the given variant or default to an empty string
  const classes = `${baseClasses} ${variantClasses[variant] || ""}`;

  return <h1 className={classes}>{text}</h1>;
};

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["style1", "style1_1", "style2" , "style2_1", "style3"]).isRequired,
};

export default Heading;

