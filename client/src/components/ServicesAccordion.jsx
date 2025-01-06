import React, { useState } from "react";

function ServicesAccordion({ Icon, heading, paragraph }) {
  const [isOpen, setIsOpen] = useState(false); // Tracks the accordion state

  const toggleAccordion = () => setIsOpen(!isOpen); // Toggles the accordion state

  return (
    <section className="w-[410px] bg-[#D9D9D9] rounded-2xl overflow-hidden shadow-md">
      {/* Accordion Header */}
      <div
        className="flex items-center justify-between px-4 py-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className="flex items-center">
          {/* Icon */}
          <img src={Icon} alt="service icon" className="w-8 h-8 mr-4" />
          {/* Heading and Paragraph */}
          <div>
            <h2 className="text-lg font-bold text-gray-800">{heading}</h2>
            <p className="text-sm text-gray-600">{paragraph}</p>
          </div>
        </div>
        {/* Arrow Icon in Header */}
        {!isOpen && (
          <img src="/arrow-down.svg" alt="arrow down" className="w-6 h-6" />
        )}
      </div>

      {/* Expandable Content */}
      {isOpen && (
        <div className="px-4 py-3 bg-gray-100 relative">
          <p className="text-sm text-gray-700 mb-2">
            We Provide Digital Marketing services to grow your BUSINESS.
          </p>
          {/* Arrow Icon inside Expandable Content */}
          <img
            src="/arrow-up.svg"
            alt="arrow up"
            className="w-6 h-6 absolute top-4 right-4" // Positioning the arrow inside the expandable content
          />
        </div>
      )}
    </section>
  );
}

export default ServicesAccordion;
