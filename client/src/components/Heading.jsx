import React from "react";
import PropTypes from "prop-types";

const Heading = ({ text, variant }) => {
  const baseClasses = "text-center"; // Common styles for all headings

  // Object map for variants
  const variantClasses = {
    style1: "text-[40px] text-[#D8A25E] font-Alexandria font-semibold", // Orange text
    style2: "text-[48px] font-black  font-red-hat combined", // Transparent text with border
    style3: "text-[40px] text-[#FEB600] font-Alexandria font-semibold  text-6xl", // Custom smaller text with different font
  };

  // Get the classes for the given variant or default to an empty string
  const classes = `${baseClasses} ${variantClasses[variant] || ""}`;

  return <h1 className={classes}>{text}</h1>;
};

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["style1", "style2", "style3"]).isRequired,
};

export default Heading;
