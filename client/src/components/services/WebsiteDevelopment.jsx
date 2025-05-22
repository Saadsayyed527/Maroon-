// pages/services/DigitalMarketing.js
// import React from "react";
// import ServicesAccordion from "../ServicesAccordion";
import ServicesHeading from "../ServicesHeading";

import React, { useState } from "react";
import accordionDownIcon from "/accordionDownIcon.svg";
import accordionUpIcon from "/accordionUpIcon.svg";
import icon1 from "/service_images/Website Development/1.svg";
import icon2 from "/service_images/Website Development/2.svg";
import icon3 from "/service_images/Website Development/3.svg";
import icon4 from "/service_images/Website Development/4.svg";
import icon5 from "/service_images/Website Development/5.svg";
import icon6 from "/service_images/Website Development/6.svg";
import icon7 from "/service_images/Website Development/7.svg";
import icon8 from "/service_images/Website Development/8.svg";
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
          Website Design & Development         </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Build a digital masterpiece – modern, responsive, and crafted to captivate your audience.
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
  Modern Aesthetics:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Visually appealing and brand-aligned designs.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Responsive Design:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Optimized for seamless use on all devices.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  SEO-Friendly Structure:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Improved search rankings with clean architecture.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Multimedia Integration:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Support for videos, animations, and other elements.</li>
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


const ServicesAccordion2 = () => {
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
          Web Applications          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Revolutionize your processes with custom-built, scalable, and interactive web applications.
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
  User-Friendly Interfaces:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Intuitive designs for a smooth experience.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Scalable Solutions:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Technologies that grow with your business.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Industry-Specific Tools:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Custom applications for healthcare, finance, etc.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Cloud Integration:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Enhanced accessibility and performance through cloud services.</li>
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
          Custom Features & Functionality        </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Transform your website into a powerhouse with bespoke features and enhanced usability.
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
  Advanced Search:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Filters and recommendation engines for better UX.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Interactive Tools:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Booking systems, chat features, and feedback forms.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Payment Systems:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Secure and diverse payment gateway integration.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Immersive Tech:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>AR/VR integrations for enhanced engagement.</li>
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
          Web Security Solutions        </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          
Stay secure with robust, encrypted solutions that protect your website and user data.
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
  SSL Encryption:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Secure data transfer with SSL certification.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Threat Protection:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Firewalls and malware defenses.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Vulnerability Testing:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Regular assessments to identify security gaps.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Backup Solutions:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Data recovery and backup services for peace of mind.</li>
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
          Landing Pages        </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          High-converting landing pages designed to grab attention and drive action seamlessly.
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
  Conversion Optimization:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Designs that focus on turning visitors into leads.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Clear CTAs:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Strategically placed call-to-action buttons.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Performance Enhancement:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Fast loading times and SEO optimization.</li>
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
          Custom Web Development</h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Tailor-made websites that perfectly align with your unique vision and business needs.
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
  Tailored Solutions:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Websites built from scratch to meet specific needs.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  High-Performance Standards:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Reliable, fast, and efficient coding.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Global Reach:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Multi-language support for an international audience.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Scalability:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Designed to adapt as your business grows.</li>
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
          Third-Party Integrations         </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Streamline your workflow by connecting tools like CRMs, APIs, and payment gateways seamlessly.
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
  CRM Integration:
</h6>
<p className="mt-2 font-normal text-lg leading-5">
  Sync with tools like Salesforce, HubSpot, or Zoho.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Payment Gateways:
</h6>
<p className="mt-2 font-normal text-lg leading-5">
  Integrate PayPal, Stripe, Razorpay, and more.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Social Media APIs:
</h6>
<p className="mt-2 font-normal text-lg leading-5">
  Seamless connectivity with Facebook, Instagram, etc.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Analytics Tools:
</h6>
<p className="mt-2 font-normal text-lg leading-5">
  Integration of Google Analytics for actionable insights.
</p>


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
          Maintenance & Support        </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Keep your site running smoothly with our reliable updates, bug fixes, and regular backups.
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
  Ongoing Updates:
</h6>
<p className="mt-2 font-normal text-lg leading-5">
  Ensures compatibility with new technologies.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Tracking & Monitoring:
</h6>
<p className="mt-2 font-normal text-lg leading-5">
  Proactive support for uptime and security.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Bug Fixes:
</h6>
<p className="mt-2 font-normal text-lg leading-5">
  Quick resolution of technical issues.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Content Management:
</h6>
<p className="mt-2 font-normal text-lg leading-5">
  Updates to keep your site fresh and relevant.
</p>


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









const WebsiteDevelopment = () => {
  return (
    <>
    <ServicesHeading text={"Website Development"} variant="style1_1" />

    {/* Main Content */}
    <div className="flex w-[93%] mt-4">
      {/* Left Column */}
      <div className="w-1/2 mx-8">
      <ServicesAccordion/>
      <ServicesAccordion2/>
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

export default WebsiteDevelopment;
