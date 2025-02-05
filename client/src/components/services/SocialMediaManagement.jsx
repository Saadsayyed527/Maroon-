import React from "react";
import ServicesAccordion from "../ServicesAccordion";
import ServicesHeading from "../ServicesHeading";

const SocialMediaManagement = () => {
  return (
    <>
      <ServicesHeading text={"SOCIAL MEDIA MANAGEMENT"} variant="style1_1" />

      {/* Main Content */}
      <div className="flex w-[93%] mt-4">
        {/* Left Column */}
        <div className="w-1/2 mx-8">
          <ServicesAccordion />
          <ServicesAccordion />
          <ServicesAccordion />
          <ServicesAccordion />
        </div>

        {/* Right Column */}
        <div className="w-1/2">
          <ServicesAccordion />
          <ServicesAccordion />
          <ServicesAccordion />
          <ServicesAccordion />
          <ServicesAccordion />
        </div>
      </div>
    </>
  );
};

export default SocialMediaManagement;
