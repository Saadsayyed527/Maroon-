// pages/services/DigitalMarketing.js
// import React from "react";
// import ServicesAccordion from "../ServicesAccordion";
import ServicesHeading from "../ServicesHeading";

import React, { useState } from "react";
import accordionDownIcon from "/accordionDownIcon.svg";
import accordionUpIcon from "/accordionUpIcon.svg";
// import instagramIcon from "/Instagram-Mangement-maroon-digital-rise-digital-marketing-pune-india.svg";
import icon1 from "/service_images/Digital Marketing/Google My Business-maroon-digital-rise-digital-marketing-pune-india.svg";
import icon2 from "/service_images/Digital Marketing/Website Development-maroon-digital-rise-digital-marketing-pune-india.svg";
import icon3 from "/service_images/Digital Marketing/Search Engine Optimization-maroon-digital-rise-digital-marketing-pune-india.svg";
import icon4 from "/service_images/Digital Marketing/4.svg";
import icon5 from "/service_images/Digital Marketing/5.svg";
import icon6 from "/service_images/Digital Marketing/6.svg";
import icon7 from "/service_images/Digital Marketing/7.svg";
import icon8 from "/service_images/Digital Marketing/8.svg";
import icon9 from "/service_images/Digital Marketing/9.svg";
import icon10 from "/service_images/Digital Marketing/10.svg";
import icon11 from "/service_images/Digital Marketing/11.svg";
import icon12 from "/service_images/Digital Marketing/12.svg";


// client\public\service_images\Digital Marketing\Website Development-maroon-digital-rise-digital-marketing-pune-india.svg
// C:\Users\kaush\OneDrive\Desktop\Maroon\Maroon-\client\public\service_images\Digital Marketing\Search Engine Optimization-maroon-digital-rise-digital-marketing-pune-india.svg
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
        className={`flex items-center px-4 py-1 bg-[#D9D9D9] text-black cursor-pointer ${
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
          Google My Business (GMB)          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Be the first choice when locals search – let your business shine on Google.
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
        Profile Creation & Optimization:
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
        <li>Set up or enhance your GMB profile with accurate business details, images, and descriptions to attract local customers.</li>
      </ul>

      <h6 className="mt-4 font-semibold text-lg leading-6">
        Google Posts Management:
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
        <li>Regularly publish posts featuring offers, updates, and events to engage potential customers.</li>
      </ul>

      <h6 className="mt-4 font-semibold text-lg leading-6">
        Review Management:
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
        <li>Monitor and respond to customer reviews to build trust and improve reputation.</li>
      </ul>

      <h6 className="mt-4 font-semibold text-lg leading-6">
        Insights Analysis:
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
        <li>Analyze GMB data like views, searches, and actions to optimize your presence further.</li>
      </ul>

      <h6 className="mt-4 font-semibold text-lg leading-6">
        Local SEO Integration:
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
        <li>Use targeted keywords and location-based strategies to boost visibility in local search results.</li>
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
        className={`flex items-center px-4 py-1 bg-[#D9D9D9] text-black cursor-pointer ${
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
          Website Development          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Build. Launch. Grow. Websites that work as hard as you do!,  Your online success starts with a great website.
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
        Custom Website Design:
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
        <li>Build tailored, mobile-responsive, and SEO-optimized websites aligned with your brand identity.</li>
      </ul>

      <h6 className="mt-4 font-semibold text-lg leading-6">
        E-Commerce Integration:
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
        <li>Develop platforms with secure payment gateways and user-friendly interfaces for online stores.</li>
      </ul>

      <h6 className="mt-4 font-semibold text-lg leading-6">
        Speed Optimization:
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
        <li>Ensure quick loading times to enhance user experience and reduce bounce rates.</li>
      </ul>

      <h6 className="mt-4 font-semibold text-lg leading-6">
        Maintenance & Support:
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
        <li>Provide regular updates, backups, and troubleshooting to keep your website running smoothly.</li>
      </ul>

      <h6 className="mt-4 font-semibold text-lg leading-6">
        Content Management System (CMS):
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
        <li>Implement easy-to-use systems like WordPress for ongoing website management.</li>
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
        className={`flex items-center px-4 py-1 bg-[#D9D9D9] text-black cursor-pointer ${
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
          Search Engine Optimization (SEO)          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Climb to the top, turn clicks into customers, and make your brand the answer to every search.
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
        Keyword Research & Strategy:
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
        <li>Identify and target high-impact keywords relevant to your industry.</li>
      </ul>

      <h6 className="mt-4 font-semibold text-lg leading-6">
        On-Page Optimization:
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
        <li>Optimize titles, meta descriptions, headings, and content for better rankings.</li>
      </ul>

      <h6 className="mt-4 font-semibold text-lg leading-6">
        Technical SEO:
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
        <li>Improve website speed, mobile responsiveness, and site architecture for search engine performance.</li>
      </ul>

      <h6 className="mt-4 font-semibold text-lg leading-6">
        Off-Page Optimization:
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
        <li>Build high-quality backlinks and increase domain authority.</li>
      </ul>

      <h6 className="mt-4 font-semibold text-lg leading-6">
        Analytics & Reporting:
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
        <li>Monitor progress and adjust strategies based on performance metrics.</li>
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
        className={`flex items-center px-4 py-1 bg-[#D9D9D9] text-black cursor-pointer ${
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
          Online Reputation Management (ORM)          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Protect your brand, build trust, and create a lasting impression with expert ORM solutions.
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
  Brand Monitoring:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Track mentions of your business across social media, blogs, and forums.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Review Management:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Encourage positive reviews and manage/respond to negative feedback effectively.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Crisis Management:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Handle negative PR situations with strategic communication.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Social Listening:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Use tools to understand customer sentiment and act proactively.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Content Publishing:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Distribute positive stories and testimonials to enhance brand image.</li>
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
        className={`flex items-center px-4 py-1 bg-[#D9D9D9] text-black cursor-pointer ${
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
          Customer Relationship Management (CRM) Integration          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Streamline your business, nurture relationships, and drive growth with seamless CRM integration.
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
  CRM Setup & Configuration:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Implement tools like Salesforce, HubSpot, or Zoho tailored to your business needs.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Automation Integration:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Automate tasks like email follow-ups, lead scoring, and customer segmentation.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Training & Support:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Provide training for teams to use the CRM efficiently.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Data Migration:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Safely transfer data from old systems to new platforms.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Reporting & Insights:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Generate actionable insights for sales and marketing teams.</li>
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
        className={`flex items-center px-4 py-1 bg-[#D9D9D9] text-black cursor-pointer ${
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
          Email Marketing          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Targeted, Personalized, Powerful, Emails that deliver results.
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
  Newsletter Creation:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Design engaging newsletters to keep your audience informed.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Drip Campaigns:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Automate email sequences for onboarding, nurturing, and conversions.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Personalized Emails:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Use segmentation and customer data to create tailored messages.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Template Design:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Develop mobile-friendly and visually appealing templates.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Performance Analytics:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Track open rates, click-through rates, and conversions for optimization.</li>
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
        className={`flex items-center px-4 py-1 bg-[#D9D9D9] text-black cursor-pointer ${
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
          Google Maps          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Make every route lead to your door – optimize your business on Google Maps!
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
  Location Pinning & Verification:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Add and verify your business location on Google Maps to ensure visibility.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Custom Mapping Solutions:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Highlight multiple branches or service areas for businesses with a wider reach.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Local Search Optimization:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Improve rankings for “near me” searches with strategic keyword placement.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  360-Degree Virtual Tours:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Create immersive experiences for customers with panoramic views of your business.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Map Reviews & Updates:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Regularly update hours, photos, and customer interactions to maintain relevance.</li>
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
        className={`flex items-center px-4 py-1 bg-[#D9D9D9] text-black cursor-pointer ${
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
          Search Engine Marketing (SEM)          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Boost visibility, drive traffic, and grow conversions with targeted SEM tools & campaigns.
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
  Pay-Per-Click (PPC) Campaigns:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Create targeted ad campaigns on Google Ads and other platforms.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Ad Copy Creation:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Develop compelling ad content for maximum clicks and conversions.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Bid Management:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Optimize ad spending to get the best ROI.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Landing Page Optimization:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Design high-converting landing pages to complement campaigns.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Performance Analysis:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Monitor and refine campaigns with detailed analytics.</li>
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




const ServicesAccordion9 = () => {
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
        className={`flex items-center px-4 py-1 bg-[#D9D9D9] text-black cursor-pointer ${
          isOpen ? "rounded-t-[15px]" : " rounded-[15px] shadow-accordionHead"
        }`}
        onClick={toggleAccordion}
      >
        {/* Icon on the left */}
        <span className="mr-4">
          <img src={icon9} alt="Service Icon" />
        </span>
        {/* Heading and Paragraph */}
        <div className="w-[600px]">
          <h3 className="text-[1.5rem] font-outfit font-bold">
          Conversion Rate Optimization (CRO)          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Clicks are just the start—turn browsers into buyers with optimized funnels for real results.
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
  Landing Page Optimization:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Design pages that encourage users to take specific actions.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  A/B Testing:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Test different website elements to see what drives conversions.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Call-to-Action (CTA) Design:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Create compelling CTAs that drive user engagement.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Heatmap Analysis:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Use tools to track user behavior on the website and identify areas for improvement.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Funnel Optimization:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Streamline user journeys from discovery to conversion.</li>
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






const ServicesAccordion10 = () => {
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
        className={`flex items-center px-4 py-1 bg-[#D9D9D9] text-black cursor-pointer ${
          isOpen ? "rounded-t-[15px]" : " rounded-[15px] shadow-accordionHead"
        }`}
        onClick={toggleAccordion}
      >
        {/* Icon on the left */}
        <span className="mr-4">
          <img src={icon10} alt="Service Icon" />
        </span>
        {/* Heading and Paragraph */}
        <div className="w-[600px]">
          <h3 className="text-[1.5rem] font-outfit font-bold">
          Pay-Per-Click Advertising (PPC)          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Maximize ROI with PPC campaigns that deliver the right message to the right audience, instantly.
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
  Campaign Strategy:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Develop custom strategies tailored to your business goals.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Ad Creation:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Design engaging and high-performing ads for Google, Bing, and social media platforms.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Keyword Bidding:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Manage bidding strategies to maximize ROI.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Performance Monitoring:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Track campaign performance and adjust strategies for better results.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Remarketing Campaigns:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Target previous website visitors with tailored ads to boost conversions.</li>
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





const ServicesAccordion11 = () => {
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
        className={`flex items-center px-4 py-1 bg-[#D9D9D9] text-black cursor-pointer ${
          isOpen ? "rounded-t-[15px]" : " rounded-[15px] shadow-accordionHead"
        }`}
        onClick={toggleAccordion}
      >
        {/* Icon on the left */}
        <span className="mr-4">
          <img src={icon11} alt="Service Icon" />
        </span>
        {/* Heading and Paragraph */}
        <div className="w-[600px]">
          <h3 className="text-[1.5rem] font-outfit font-bold">
          Blog Writing           </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Engage, inspire, and build trust with captivating blogs 
          that boost traffic, tell your story, and rank on Google.
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
  SEO Blogs:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Write keyword-optimized blogs that rank well on search engines.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Educational Content:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Create informative articles that provide value to readers.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Industry Insights:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Share updates and trends to position your brand as a thought leader.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Storytelling:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Craft engaging narratives that connect emotionally with your audience.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Content Calendar:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Plan and schedule posts for consistent publishing.</li>
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






const ServicesAccordion12 = () => {
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
        className={`flex items-center px-4 py-1 bg-[#D9D9D9] text-black cursor-pointer ${
          isOpen ? "rounded-t-[15px]" : " rounded-[15px] shadow-accordionHead"
        }`}
        onClick={toggleAccordion}
      >
        {/* Icon on the left */}
        <span className="mr-4">
          <img src={icon12} alt="Service Icon" />
        </span>
        {/* Heading and Paragraph */}
        <div className="w-[600px]">
          <h3 className="text-[1.5rem] font-outfit font-bold">
          Bulk Messages          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Reach thousands in seconds – your message, 
their moment.
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
  SMS Campaigns:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Send personalized bulk SMS for offers, updates, and alerts.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  WhatsApp Messaging:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Use bulk WhatsApp messages for direct and interactive communication.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Targeted Outreach:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Segment your audience for better message targeting.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Automation Tools:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Use platforms for scheduled and recurring bulk messaging.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Real-Time Tracking:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
  <li>Monitor delivery rates and engagement metrics.</li>
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







const DigitalMarketing = () => {
  return (
    <>
    <ServicesHeading text={"DigitalMarketing"} variant="style1_1" />

    {/* Main Content */}
    <div className="flex w-[93%] mt-4">
      {/* Left Column */}
      <div className="w-1/2 mx-8">
      <ServicesAccordion/>
      <ServicesAccordionb/>
      <ServicesAccordion3/>
      <ServicesAccordion4/> 
      <ServicesAccordion5/> 
      <ServicesAccordion6/> 

      </div>

      {/* Right Column */}
      <div className="w-1/2">
      <ServicesAccordion7/>
      <ServicesAccordion8/>
      <ServicesAccordion9/>
      <ServicesAccordion10/>
      <ServicesAccordion11/>
      <ServicesAccordion12/> 
      
      </div>
    </div>
  </>
  );
};

export default DigitalMarketing;
