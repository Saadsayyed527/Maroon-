// pages/services/DigitalMarketing.js
import ServicesHeading from "../ServicesHeading";

import React, { useState } from "react";
import accordionDownIcon from "/accordionDownIcon.svg";
import accordionUpIcon from "/accordionUpIcon.svg";
import icon1 from "/service_images/Business Essentials/1.svg";
import icon2 from "/service_images/Business Essentials/2.svg";
import icon3 from "/service_images/Business Essentials/3.svg";
import icon4 from "/service_images/Business Essentials/4.svg";
import icon5 from "/service_images/Business Essentials/5.svg";
import icon6 from "/service_images/Business Essentials/6.svg";
import icon7 from "/service_images/Business Essentials/7.svg";
import icon8 from "/service_images/Business Essentials/8.svg";
import ContactUs from "../../pages/ContactUs";
const ServicesAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`font-outfit mb-8 ${
        isOpen
          ? "rounded-[16px] border border-black shadow-accordionBody"
          : "rounded-[17px]"
      }`}
    >
      {/* Accordion Header */}
      <div
        className={`flex items-center px-3 py-1 bg-[#D9D9D9] text-black cursor-pointer ${
          isOpen ? "rounded-t-[15px]" : " rounded-[15px] shadow-accordionHead"
        }`}
        onClick={toggleAccordion}
      >
        {/* Icon on the left */}
        <span className="mr-4">
          <img src={icon1} alt="Service Icon" />
        </span>
        {/* Heading and Paragraph */}
        <div className="w-[600px]">
          <h3 className="text-[1.5rem] font-outfit font-bold">
          Brochure          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Turn every page into an opportunity – brochures that captivate, inform, and inspire action.
          </p>
        </div>

        {/* Show Down Arrow only when accordion is closed */}
        {!isOpen && (
          <span className="mt-24 ml-12 max-w-none">
            <img
              src={accordionDownIcon}
              alt="Accordion Down Arrow Icon"
              className="w-7 ml-3" // Fixed size
            />
          </span>
        )}
        {/* Show Up Arrow only when accordion is open */}
        {isOpen && (
          <span className="mt-24 ml-12 max-w-none">
            <img
              // src={accordionUpIcon}
              // alt="Accordion Up Arrow Icon"
              className="w-7 ml-3" // Fixed size
            />
          </span>
        )}
      </div>

      {/* Accordion Body */}
      {isOpen && (
        <section>
          <div className="bg-gray-100 relative rounded-b-[15px] pt-4 pl-4">
          <h6 className="font-semibold text-lg leading-6">
  Corporate Brochures:
</h6>
<ul className="mt-2 font-normal text-lg leading-5 list-disc pl-6">
  <li>Professional layouts for showcasing services and products.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Product Catalogs:
</h6>
<ul className="mt-2 font-normal text-lg leading-5 list-disc pl-6">
  <li>Detailed brochures for comprehensive product displays.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Event Brochures:
</h6>
<ul className="mt-2 font-normal text-lg leading-5 list-disc pl-6">
  <li>Custom designs for conferences, exhibitions, or special events.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Educational Brochures:
</h6>
<ul className="mt-2 font-normal text-lg leading-5 list-disc pl-6">
  <li>Informative materials for schools, universities, or workshops.</li>
</ul>


            {/* Arrow Up Icon inside the Accordion Body */}
            <span
              className=" flex justify-end pr-1 pb-1 cursor-pointer"
              onClick={toggleAccordion}
            >
              <img
                src={accordionUpIcon}
                alt="Accordion Up Arrow Icon"
                className="w-7 block "
              />
            </span>
          </div>
        </section>
      )}
    </div>
  );
};


const ServicesAccordionb = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`font-outfit mb-8 ${
        isOpen
          ? "rounded-[16px] border border-black shadow-accordionBody"
          : "rounded-[17px]"
      }`}
    >
      {/* Accordion Header */}
      <div
        className={`flex items-center px-3 py-1 bg-[#D9D9D9] text-black cursor-pointer ${
          isOpen ? "rounded-t-[15px]" : " rounded-[15px] shadow-accordionHead"
        }`}
        onClick={toggleAccordion}
      >
        {/* Icon on the left */}
        <span className="mr-4">
          <img src={icon2} alt="Service Icon" />
        </span>
        {/* Heading and Paragraph */}
        <div className="w-[600px]">
          <h3 className="text-[1.5rem] font-outfit font-bold">
          Menu Card          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Menus that do more than list dishes – they invite, entice, and leave a lasting flavor.
          </p>
        </div>

        {/* Show Down Arrow only when accordion is closed */}
        {!isOpen && (
          <span className="mt-24 ml-12 max-w-none">
            <img
              src={accordionDownIcon}
              alt="Accordion Down Arrow Icon"
              className="w-7 ml-3" // Fixed size
            />
          </span>
        )}
        {/* Show Up Arrow only when accordion is open */}
        {isOpen && (
          <span className="mt-24 ml-12 max-w-none">
            <img
              // src={accordionUpIcon}
              // alt="Accordion Up Arrow Icon"
              className="w-7 ml-3" // Fixed size
            />
          </span>
        )}
      </div>

      {/* Accordion Body */}
      {isOpen && (
        <section>
          <div className="bg-gray-100 relative rounded-b-[15px] pt-4 pl-4">
          <h6 className="font-semibold text-lg leading-6">
  Restaurant Menus:
</h6>
<ul className="mt-2 font-normal text-lg leading-5 list-disc pl-6">
  <li>Creative and appetizing layouts for dine-in or takeaway.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Cafe Menus:
</h6>
<ul className="mt-2 font-normal text-lg leading-5 list-disc pl-6">
  <li>Trendy and artistic designs tailored to modern cafes.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Event Menus:
</h6>
<ul className="mt-2 font-normal text-lg leading-5 list-disc pl-6">
  <li>Elegant layouts for weddings, parties, or corporate events.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Digital Menus:
</h6>
<ul className="mt-2 font-normal text-lg leading-5 list-disc pl-6">
  <li>QR-enabled menus for easy access and updates.</li>
</ul>


            {/* Arrow Up Icon inside the Accordion Body */}
            <span
              className=" flex justify-end pr-1 pb-1 cursor-pointer"
              onClick={toggleAccordion}
            >
              <img
                src={accordionUpIcon}
                alt="Accordion Up Arrow Icon"
                className="w-7 block "
              />
            </span>
          </div>
        </section>
      )}
    </div>
  );
};





const ServicesAccordion3 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`font-outfit mb-8 ${
        isOpen
          ? "rounded-[16px] border border-black shadow-accordionBody"
          : "rounded-[17px]"
      }`}
    >
      {/* Accordion Header */}
      <div
        className={`flex items-center px-3 py-1 bg-[#D9D9D9] text-black cursor-pointer ${
          isOpen ? "rounded-t-[15px]" : " rounded-[15px] shadow-accordionHead"
        }`}
        onClick={toggleAccordion}
      >
        {/* Icon on the left */}
        <span className="mr-4">
          <img src={icon3} alt="Service Icon" />
        </span>
        {/* Heading and Paragraph */}
        <div className="w-[600px]">
          <h3 className="text-[1.5rem] font-outfit font-bold">
          Presentation/Slides          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Transform your ideas into impact – presentations that command attention and drive results.
          </p>
        </div>

        {/* Show Down Arrow only when accordion is closed */}
        {!isOpen && (
          <span className="mt-24 ml-12 max-w-none">
            <img
              src={accordionDownIcon}
              alt="Accordion Down Arrow Icon"
              className="w-7 ml-3" // Fixed size
            />
          </span>
        )}
        {/* Show Up Arrow only when accordion is open */}
        {isOpen && (
          <span className="mt-24 ml-12 max-w-none">
            <img
              // src={accordionUpIcon}
              // alt="Accordion Up Arrow Icon"
              className="w-7 ml-3" // Fixed size
            />
          </span>
        )}
      </div>

      {/* Accordion Body */}
      {isOpen && (
        <section>
          <div className="bg-gray-100 relative rounded-b-[15px] pt-4 pl-4">
          <h6 className="font-semibold text-lg leading-6">
  Corporate Presentations:
</h6>
<ul className="mt-2 font-normal text-lg leading-5 list-disc pl-6">
  <li>Polished slides for business meetings and pitches.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Investor Decks:
</h6>
<ul className="mt-2 font-normal text-lg leading-5 list-disc pl-6">
  <li>Compelling presentations to attract stakeholders.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Educational Slides:
</h6>
<ul className="mt-2 font-normal text-lg leading-5 list-disc pl-6">
  <li>Informative and engaging layouts for teaching or training.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Event-Specific Slides:
</h6>
<ul className="mt-2 font-normal text-lg leading-5 list-disc pl-6">
  <li>Custom themes for conferences and seminars.</li>
</ul>


            {/* Arrow Up Icon inside the Accordion Body */}
            <span
              className=" flex justify-end pr-1 pb-1 cursor-pointer"
              onClick={toggleAccordion}
            >
              <img
                src={accordionUpIcon}
                alt="Accordion Up Arrow Icon"
                className="w-7 block "
              />
            </span>
          </div>
        </section>
      )}
    </div>
  );
};





const ServicesAccordion4 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`font-outfit mb-8 ${
        isOpen
          ? "rounded-[16px] border border-black shadow-accordionBody"
          : "rounded-[17px]"
      }`}
    >
      {/* Accordion Header */}
      <div
        className={`flex items-center px-3 py-1 bg-[#D9D9D9] text-black cursor-pointer ${
          isOpen ? "rounded-t-[15px]" : " rounded-[15px] shadow-accordionHead"
        }`}
        onClick={toggleAccordion}
      >
        {/* Icon on the left */}
        <span className="mr-4">
          <img src={icon4} alt="Service Icon" />
        </span>
        {/* Heading and Paragraph */}
        <div className="w-[600px]">
          <h3 className="text-[1.5rem] font-outfit font-bold">
          Envelope          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Make every delivery a brand experience – envelopes that stand out in the inbox.
          </p>
        </div>

        {/* Show Down Arrow only when accordion is closed */}
        {!isOpen && (
          <span className="mt-24 ml-12 max-w-none">
            <img
              src={accordionDownIcon}
              alt="Accordion Down Arrow Icon"
              className="w-7 ml-3" // Fixed size
            />
          </span>
        )}
        {/* Show Up Arrow only when accordion is open */}
        {isOpen && (
          <span className="mt-24 ml-12 max-w-none">
            <img
              // src={accordionUpIcon}
              // alt="Accordion Up Arrow Icon"
              className="w-7 ml-3" // Fixed size
            />
          </span>
        )}
      </div>

      {/* Accordion Body */}
      {isOpen && (
        <section>
          <div className="bg-gray-100 relative rounded-b-[15px] pt-4 pl-4">
          <h6 className="font-semibold text-lg leading-6">
  Corporate Envelopes:
</h6>
<ul className="mt-2 font-normal text-lg leading-5 list-disc pl-6">
  <li>Professional branding for official use.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Custom Envelopes:
</h6>
<ul className="mt-2 font-normal text-lg leading-5 list-disc pl-6">
  <li>Unique layouts for personalized communication.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Thematic Designs:
</h6>
<ul className="mt-2 font-normal text-lg leading-5 list-disc pl-6">
  <li>Tailored designs for events, invitations, or promotions.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Secure Envelopes:
</h6>
<ul className="mt-2 font-normal text-lg leading-5 list-disc pl-6">
  <li>Tamper-proof solutions with branding.</li>
</ul>


            {/* Arrow Up Icon inside the Accordion Body */}
            <span
              className=" flex justify-end pr-1 pb-1 cursor-pointer"
              onClick={toggleAccordion}
            >
              <img
                src={accordionUpIcon}
                alt="Accordion Up Arrow Icon"
                className="w-7 block "
              />
            </span>
          </div>
        </section>
      )}
    </div>
  );
};





const ServicesAccordion5 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`font-outfit mb-8 ${
        isOpen
          ? "rounded-[16px] border border-black shadow-accordionBody"
          : "rounded-[17px]"
      }`}
    >
      {/* Accordion Header */}
      <div
        className={`flex items-center px-3 py-1 bg-[#D9D9D9] text-black cursor-pointer ${
          isOpen ? "rounded-t-[15px]" : " rounded-[15px] shadow-accordionHead"
        }`}
        onClick={toggleAccordion}
      >
        {/* Icon on the left */}
        <span className="mr-4">
          <img src={icon5} alt="Service Icon" />
        </span>
        {/* Heading and Paragraph */}
        <div className="w-[600px]">
          <h3 className="text-[1.5rem] font-outfit font-bold">
          Visiting Card          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Your first impression in a pocket-sized masterpiece – visiting cards that speak volumes.
          </p>
        </div>

        {/* Show Down Arrow only when accordion is closed */}
        {!isOpen && (
          <span className="mt-24 ml-12 max-w-none">
            <img
              src={accordionDownIcon}
              alt="Accordion Down Arrow Icon"
              className="w-7 ml-3" // Fixed size
            />
          </span>
        )}
        {/* Show Up Arrow only when accordion is open */}
        {isOpen && (
          <span className="mt-24 ml-12 max-w-none">
            <img
              // src={accordionUpIcon}
              // alt="Accordion Up Arrow Icon"
              className="w-7 ml-3" // Fixed size
            />
          </span>
        )}
      </div>

      {/* Accordion Body */}
      {isOpen && (
        <section>
          <div className="bg-gray-100 relative rounded-b-[15px] pt-4 pl-4">
          <h6 className="font-semibold text-lg leading-6">
  Custom Designs:
</h6>
<ul className="mt-2 font-normal text-lg leading-5 list-disc pl-6">
  <li>Tailored layouts with unique typography and graphics.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Premium Cards:
</h6>
<ul className="mt-2 font-normal text-lg leading-5 list-disc pl-6">
  <li>Laminated, embossed, or foil-stamped options for luxury appeal.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Digital Visiting Cards:
</h6>
<ul className="mt-2 font-normal text-lg leading-5 list-disc pl-6">
  <li>Interactive, eco-friendly, and shareable formats.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Minimalistic Designs:
</h6>
<ul className="mt-2 font-normal text-lg leading-5 list-disc pl-6">
  <li>Simple, elegant cards focusing on clarity and professionalism.</li>
</ul>

            {/* Arrow Up Icon inside the Accordion Body */}
            <span
              className=" flex justify-end pr-1 pb-1 cursor-pointer"
              onClick={toggleAccordion}
            >
              <img
                src={accordionUpIcon}
                alt="Accordion Up Arrow Icon"
                className="w-7 block "
              />
            </span>
          </div>
        </section>
      )}
    </div>
  );
};





const ServicesAccordion6 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`font-outfit mb-8 ${
        isOpen
          ? "rounded-[16px] border border-black shadow-accordionBody"
          : "rounded-[17px]"
      }`}
    >
      {/* Accordion Header */}
      <div
        className={`flex items-center px-3 py-1 bg-[#D9D9D9] text-black cursor-pointer ${
          isOpen ? "rounded-t-[15px]" : " rounded-[15px] shadow-accordionHead"
        }`}
        onClick={toggleAccordion}
      >
        {/* Icon on the left */}
        <span className="mr-4">
          <img src={icon6} alt="Service Icon" />
        </span>
        {/* Heading and Paragraph */}
        <div className="w-[600px]">
          <h3 className="text-[1.5rem] font-outfit font-bold">
          ID Card          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          More than just identification – ID cards that blend style, security, and functionality.
          </p>
        </div>

        {/* Show Down Arrow only when accordion is closed */}
        {!isOpen && (
          <span className="mt-24 ml-12 max-w-none">
            <img
              src={accordionDownIcon}
              alt="Accordion Down Arrow Icon"
              className="w-7 ml-3" // Fixed size
            />
          </span>
        )}
        {/* Show Up Arrow only when accordion is open */}
        {isOpen && (
          <span className="mt-24 ml-12 max-w-none">
            <img
              // src={accordionUpIcon}
              // alt="Accordion Up Arrow Icon"
              className="w-7 ml-3" // Fixed size
            />
          </span>
        )}
      </div>

      {/* Accordion Body */}
      {isOpen && (
        <section>
          <div className="bg-gray-100 relative rounded-b-[15px] pt-4 pl-4">
          <h6 className="font-semibold text-lg leading-6">
  Corporate ID Cards:
</h6>
<ul className="mt-2 font-normal text-lg leading-5 list-disc pl-6">
  <li>Personalized designs with branding for employees.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Event Badges:
</h6>
<ul className="mt-2 font-normal text-lg leading-5 list-disc pl-6">
  <li>Creative designs for attendees, speakers, or VIPs.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Smart Cards:
</h6>
<ul className="mt-2 font-normal text-lg leading-5 list-disc pl-6">
  <li>Integration with barcodes or RFID technology.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Security Cards:
</h6>
<ul className="mt-2 font-normal text-lg leading-5 list-disc pl-6">
  <li>Enhanced designs with holographic elements and watermarks.</li>
</ul>


            {/* Arrow Up Icon inside the Accordion Body */}
            <span
              className=" flex justify-end pr-1 pb-1 cursor-pointer"
              onClick={toggleAccordion}
            >
              <img
                src={accordionUpIcon}
                alt="Accordion Up Arrow Icon"
                className="w-7 block "
              />
            </span>
          </div>
        </section>
      )}
    </div>
  );
};





const ServicesAccordion7 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`font-outfit mb-8 ${
        isOpen
          ? "rounded-[16px] border border-black shadow-accordionBody"
          : "rounded-[17px]"
      }`}
    >
      {/* Accordion Header */}
      <div
        className={`flex items-center px-3 py-1 bg-[#D9D9D9] text-black cursor-pointer ${
          isOpen ? "rounded-t-[15px]" : " rounded-[15px] shadow-accordionHead"
        }`}
        onClick={toggleAccordion}
      >
        {/* Icon on the left */}
        <span className="mr-4">
          <img src={icon7} alt="Service Icon" />
        </span>
        {/* Heading and Paragraph */}
        <div className="w-[600px]">
          <h3 className="text-[1.5rem] font-outfit font-bold">
          Stationery Design          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          From pens to pads, let your stationery echo your brand’s identity with elegance.
          </p>
        </div>

        {/* Show Down Arrow only when accordion is closed */}
        {!isOpen && (
          <span className="mt-24 ml-12 max-w-none">
            <img
              src={accordionDownIcon}
              alt="Accordion Down Arrow Icon"
              className="w-7 ml-3" // Fixed size
            />
          </span>
        )}
        {/* Show Up Arrow only when accordion is open */}
        {isOpen && (
          <span className="mt-24 ml-12 max-w-none">
            <img
              // src={accordionUpIcon}
              // alt="Accordion Up Arrow Icon"
              className="w-7 ml-3" // Fixed size
            />
          </span>
        )}
      </div>

      {/* Accordion Body */}
      {isOpen && (
        <section>
          <div className="bg-gray-100 relative rounded-b-[15px] pt-4 pl-4">
          <h6 className="font-semibold text-lg leading-6">
  Gift Tags and Cards:
</h6>
<ul className="mt-2 font-normal text-lg leading-5 list-disc pl-6">
  <li>Personalized tags for corporate or personal gifting.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Notepads/Diary:
</h6>
<ul className="mt-2 font-normal text-lg leading-5 list-disc pl-6">
  <li>Branded designs for internal or promotional use.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Calendars:
</h6>
<ul className="mt-2 font-normal text-lg leading-5 list-disc pl-6">
  <li>Stylish, functional calendars with custom themes for the year.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Seals and Stamps:
</h6>
<ul className="mt-2 font-normal text-lg leading-5 list-disc pl-6">
  <li>Custom rubber stamps, wax seal designs, and E-stamp for unique branding.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Pens & Accessories:
</h6>
<ul className="mt-2 font-normal text-lg leading-5 list-disc pl-6">
  <li>Stylish branding for daily essentials.</li>
</ul>


            {/* Arrow Up Icon inside the Accordion Body */}
            <span
              className=" flex justify-end pr-1 pb-1 cursor-pointer"
              onClick={toggleAccordion}
            >
              <img
                src={accordionUpIcon}
                alt="Accordion Up Arrow Icon"
                className="w-7 block "
              />
            </span>
          </div>
        </section>
      )}
    </div>
  );
};





const ServicesAccordion8 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`font-outfit mb-8 ${
        isOpen
          ? "rounded-[16px] border border-black shadow-accordionBody"
          : "rounded-[17px]"
      }`}
    >
      {/* Accordion Header */}
      <div
        className={`flex items-center px-3 py-1 bg-[#D9D9D9] text-black cursor-pointer ${
          isOpen ? "rounded-t-[15px]" : " rounded-[15px] shadow-accordionHead"
        }`}
        onClick={toggleAccordion}
      >
        {/* Icon on the left */}
        <span className="mr-4">
          <img src={icon8} alt="Service Icon" />
        </span>
        {/* Heading and Paragraph */}
        <div className="w-[600px]">
          <h3 className="text-[1.5rem] font-outfit font-bold">
          Email Signatures          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
            End every email with finesse – custom signatures that leave a professional mark.
          </p>
        </div>

        {/* Show Down Arrow only when accordion is closed */}
        {!isOpen && (
          <span className="mt-24 ml-12 max-w-none">
            <img
              src={accordionDownIcon}
              alt="Accordion Down Arrow Icon"
              className="w-7 ml-3" // Fixed size
            />
          </span>
        )}
        {/* Show Up Arrow only when accordion is open */}
        {isOpen && (
          <span className="mt-24 ml-12 max-w-none">
            <img
              // src={accordionUpIcon}
              // alt="Accordion Up Arrow Icon"
              className="w-7 ml-3" // Fixed size
            />
          </span>
        )}
      </div>

      {/* Accordion Body */}
      {isOpen && (
        <section>
          <div className="bg-gray-100 relative rounded-b-[15px] pt-4 pl-4">
          <h6 className="font-semibold text-lg leading-6">
  Custom Signatures:
</h6>
<ul className="mt-2 font-normal text-lg leading-5 list-disc pl-6">
  <li>Personalized, branded email sign-offs.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Interactive Signatures:
</h6>
<ul className="mt-2 font-normal text-lg leading-5 list-disc pl-6">
  <li>Embedded links to social media, websites, or contact forms.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Dynamic Signatures:
</h6>
<ul className="mt-2 font-normal text-lg leading-5 list-disc pl-6">
  <li>Rotating banners or seasonal updates.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Professional Designs:
</h6>
<ul className="mt-2 font-normal text-lg leading-5 list-disc pl-6">
  <li>Consistent branding across teams or organizations.</li>
</ul>


            {/* Arrow Up Icon inside the Accordion Body */}
            <span
              className=" flex justify-end pr-1 pb-1 cursor-pointer"
              onClick={toggleAccordion}
            >
              <img
                src={accordionUpIcon}
                alt="Accordion Up Arrow Icon"
                className="w-7 block "
              />
            </span>
          </div>
        </section>
      )}
    </div>
  );
};








const BusinessEssentials = () => {
  return (
    <>
    <ServicesHeading text={"Business Essentials"} variant="style1_1" />

    {/* Main Content */}
    <div className="flex w-[93%] mt-4">
      {/* Left Column */}
      <div className="w-1/2 mx-8">
      <ServicesAccordion/>
      <ServicesAccordionb/>
      <ServicesAccordion3/>
      <ServicesAccordion4/> 

      </div>

      {/* Right Column */}
      <div className="w-1/2">
      <ServicesAccordion5/>
      <ServicesAccordion6/>
      <ServicesAccordion7/>
      <ServicesAccordion8/>
      
      </div>
    </div>
        <ContactUs/>
    
  </>
  );
};

export default BusinessEssentials;
