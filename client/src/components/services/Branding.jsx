// pages/services/DigitalMarketing.js
// import React from "react";
// import ServicesAccordion from "../ServicesAccordion";
import ServicesHeading from "../ServicesHeading";

import React, { useState } from "react";
import accordionDownIcon from "/accordionDownIcon.svg";
import accordionUpIcon from "/accordionUpIcon.svg";
import icon1 from "/service_images/Branding/1.svg";
import icon2 from "/service_images/Branding/2.svg";
import icon3 from "/service_images/Branding/3.svg";
import icon4 from "/service_images/Branding/4.svg";
import icon5 from "/service_images/Branding/5.svg";
import icon6 from "/service_images/Branding/6.svg";
import icon7 from "/service_images/Branding/7.svg";
import icon8 from "/service_images/Branding/8.svg";
import ContactUs from "../../pages/ContactUs";
const ServicesAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`font-outfit mb-8 ${isOpen
          ? "rounded-[16px] border border-black shadow-accordionBody"
          : "rounded-[17px]"
        }`}
    >
      {/* Accordion Header */}
      <div
        className={`flex items-center px-3 py-1 bg-[#D9D9D9] text-black cursor-pointer ${isOpen ? "rounded-t-[15px]" : " rounded-[15px] shadow-accordionHead"
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
            LOGO DESIGN</h3>  
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
            Your logo isn’t just a design – it’s your brand’s face, crafted to speak louder and shine with timeless appeal.
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
  Custom Logo Design:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Unique logos tailored to your brand identity and target audience.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Monogram & Iconic Logos:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Simple, clean, and memorable lettermark or symbol-based logos.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Wordmark Logos:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Text-based logos that emphasize typography and brand name.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Combination Mark:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Logos that merge symbols and text for versatility.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Mascot Logos:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Fun and creative characters representing your brand’s persona.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Logo Redesign:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Revamping existing logos to give a fresh, modern look while retaining brand essence.</li>
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
      className={`font-outfit mb-8 ${isOpen
          ? "rounded-[16px] border border-black shadow-accordionBody"
          : "rounded-[17px]"
        }`}
    >
      {/* Accordion Header */}
      <div
        className={`flex items-center px-3 py-1 bg-[#D9D9D9] text-black cursor-pointer ${isOpen ? "rounded-t-[15px]" : " rounded-[15px] shadow-accordionHead"
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
            Rebranding          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
            Transform your story with a fresh identity that renews perception, inspires growth, and drives impact.
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
  Brand Audit:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Evaluating your current brand presence, messaging, and performance.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Logo Redesign:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Modernizing or transforming your visual identity to align with new goals.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Brand Messaging Refresh:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Refining tone, tagline, and communication to stay relevant.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Visual Identity Overhaul:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Redesigning brand visuals (colors, fonts, packaging) for consistency.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Launch Strategy:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Planning and executing a seamless rebranding rollout.</li>
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
      className={`font-outfit mb-8 ${isOpen
          ? "rounded-[16px] border border-black shadow-accordionBody"
          : "rounded-[17px]"
        }`}
    >
      {/* Accordion Header */}
      <div
        className={`flex items-center px-3 py-1 bg-[#D9D9D9] text-black cursor-pointer ${isOpen ? "rounded-t-[15px]" : " rounded-[15px] shadow-accordionHead"
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
            Brand Storytelling          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
            We create compelling narratives that connect, inspire, and turn your brand’s story into a lasting legacy.
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
  Brand Narrative Development:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Creating a compelling origin and purpose-driven story.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Content Strategy:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Aligning storytelling with blogs, social media, and video marketing.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Customer-Centric Stories:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Highlighting customer testimonials and success stories.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Visual Storytelling:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Combining design and visuals to narrate your brand’s journey.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Scriptwriting for Campaigns:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Engaging storylines for ads, videos, and brand promotions.</li>
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
      className={`font-outfit mb-8 ${isOpen
          ? "rounded-[16px] border border-black shadow-accordionBody"
          : "rounded-[17px]"
        }`}
    >
      {/* Accordion Header */}
      <div
        className={`flex items-center px-3 py-1 bg-[#D9D9D9] text-black cursor-pointer ${isOpen ? "rounded-t-[15px]" : " rounded-[15px] shadow-accordionHead"
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
            Packaging Design          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
            Unbox success with packaging that steals the spotlight, makes you memorable, and drives customer choice
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
  Product Packaging:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Attractive, functional, and sustainable packaging designs.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Box & Label Design:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Custom designs for product boxes and informative labels.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Eco-Friendly Packaging:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Creative designs with biodegradable and recyclable materials.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Luxury Packaging:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Premium designs for high-end products to enhance brand value.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Mockups & Prototypes:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Visual and physical samples of packaging for approval before production.</li>
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
      className={`font-outfit mb-8 ${isOpen
          ? "rounded-[16px] border border-black shadow-accordionBody"
          : "rounded-[17px]"
        }`}
    >
      {/* Accordion Header */}
      <div
        className={`flex items-center px-3 py-1 bg-[#D9D9D9] text-black cursor-pointer ${isOpen ? "rounded-t-[15px]" : " rounded-[15px] shadow-accordionHead"
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
            Tagline and Messaging          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
            Crafting the perfect tagline and voice that connects, resonates, and sticks in hearts and minds.
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
  Tagline Creation:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Short, impactful phrases that summarize your brand promise.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Brand Voice Development:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Defining tone, language, and style of communication.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Core Messaging Framework:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Developing key messages for various platforms (social media, ads, emails).</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Slogan Development:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Crafting marketing-focused taglines for campaigns and ads.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Call-to-Action (CTA) Optimization:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Writing persuasive CTAs to drive engagement and conversions.</li>
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
      className={`font-outfit mb-8 ${isOpen
          ? "rounded-[16px] border border-black shadow-accordionBody"
          : "rounded-[17px]"
        }`}
    >
      {/* Accordion Header */}
      <div
        className={`flex items-center px-3 py-1 bg-[#D9D9D9] text-black cursor-pointer ${isOpen ? "rounded-t-[15px]" : " rounded-[15px] shadow-accordionHead"
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
            Brand Strategy           </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
            From vision to execution, we position your brand with purpose, clarity, and a foundation for lasting success.
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
  Brand Positioning:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Identifying your market niche and creating a clear position in the audience’s mind.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Competitive Analysis:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Studying competitors to highlight your unique selling points (USPs).</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Target Audience Analysis:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Understanding audience personas, needs, and behaviors for better engagement.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Brand Architecture:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Structuring and organizing sub-brands, products, or services effectively.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Go-to-Market Strategy:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Building a roadmap for launching or repositioning your brand.</li>
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
      className={`font-outfit mb-8 ${isOpen
          ? "rounded-[16px] border border-black shadow-accordionBody"
          : "rounded-[17px]"
        }`}
    >
      {/* Accordion Header */}
      <div
        className={`flex items-center px-3 py-1 bg-[#D9D9D9] text-black cursor-pointer ${isOpen ? "rounded-t-[15px]" : " rounded-[15px] shadow-accordionHead"
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
            Corporate Branding          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
            From boardrooms to breakrooms, we ensure your brand reflects professionalism, consistency, and power.
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
  Corporate Identity Creation:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Logos, stationery, presentations, and email signatures.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Business Stationery:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Letterheads, business cards, ID cards, and branded envelopes.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Office Branding:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Wall graphics, signage, and in-office branding elements.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Presentation Design:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Professional PowerPoint or pitch deck designs for meetings.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Corporate Merchandise:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Branded pens, mugs, notebooks, and other corporate giveaways.</li>
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
      className={`font-outfit mb-8 ${isOpen
          ? "rounded-[16px] border border-black shadow-accordionBody"
          : "rounded-[17px]"
        }`}
    >
      {/* Accordion Header */}
      <div
        className={`flex items-center px-3 py-1 bg-[#D9D9D9] text-black cursor-pointer ${isOpen ? "rounded-t-[15px]" : " rounded-[15px] shadow-accordionHead"
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
            Merchandise Design          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
            Turn your brand into a statement with creative merchandise that transforms fans into loyal ambassadors.
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
  Custom Apparel:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>T-shirts, hoodies, caps, and uniforms with branded designs.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Promotional Products:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Mugs, keychains, water bottles, bags, and other giveaways.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Event Merchandise:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Branded items for events, trade shows, or corporate celebrations.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Print-Ready Designs:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Ready-to-use files for seamless production.</li>
</ul>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Seasonal Collections:
</h6>
<ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
  <li>Customized merchandise aligned with holidays or trends.</li>
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







const Branding = () => {
  return (
    <>
      <ServicesHeading text={"Branding"} variant="style1_1" />

      {/* Main Content */}
      <div className="flex w-[93%] mt-4">
        {/* Left Column */}
        <div className="w-1/2 mx-8">
          <ServicesAccordion />
          <ServicesAccordion2 />
          <ServicesAccordion3 />
          <ServicesAccordion4 />

        </div>

        {/* Right Column */}
        <div className="w-1/2">
          <ServicesAccordion5 />
          <ServicesAccordion6 />
          <ServicesAccordion7 />
          <ServicesAccordion8 />

        </div>
      </div>
          <ContactUs/>
      
    </>
  );
};

export default Branding;


// DesignAndEditing
// DigitalMarketing
// Ecommerce
// LegalDocumentation
// SocialMediaManagement
// WebsiteDevelopment