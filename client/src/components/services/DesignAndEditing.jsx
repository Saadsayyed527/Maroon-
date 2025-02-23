// pages/services/DigitalMarketing.js
// import React from "react";
// import ServicesAccordion from "../ServicesAccordion";
import ServicesHeading from "../ServicesHeading";

import React, { useState } from "react";
import accordionDownIcon from "/accordionDownIcon.svg";
import accordionUpIcon from "/accordionUpIcon.svg";
import instagramIcon from "/Instagram-Mangement-maroon-digital-rise-digital-marketing-pune-india.svg";

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
          <img src={instagramIcon} alt="Service Icon" />
        </span>
        {/* Heading and Paragraph */}
        <div className="w-[600px]">
          <h3 className="text-[1.5rem] font-outfit font-bold">
          Web-Design
          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Crafting stunning, responsive websites that captivate visitors and deliver seamless digital experiences.
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
  Responsive Website Design:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Mobile-friendly designs optimized for all screen sizes.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Custom Web Design:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Tailor-made designs that reflect your brand’s uniqueness.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Landing Page Design:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  High-converting single-page designs for promotions or campaigns.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  E-Commerce Web Design:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Engaging layouts for online stores to drive sales.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  CMS Integration:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Websites integrated with content management systems like WordPress.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Website Redesign:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Transforming outdated websites into modern, functional platforms.
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
          <img src={instagramIcon} alt="Service Icon" />
        </span>
        {/* Heading and Paragraph */}
        <div className="w-[600px]">
          <h3 className="text-[1.5rem] font-outfit font-bold">
          Graphic Posters          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Turn heads and make a statement with visually powerful posters designed to leave a lasting impression.
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
  Event Posters:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Creative designs tailored for promotions or announcements.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Product Launch Posters:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Bold and impactful designs for new product campaigns.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Educational Posters:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Informative designs for schools, colleges, or seminars.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Thematic Posters:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Artwork based on seasonal, festival, or custom themes.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Digital Posters:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Optimized designs for social media and online promotions.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Poster Redesigns:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Refreshing existing designs for modern appeal.
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
          <img src={instagramIcon} alt="Service Icon" />
        </span>
        {/* Heading and Paragraph */}
        <div className="w-[600px]">
          <h3 className="text-[1.5rem] font-outfit font-bold">
          Video, Reel and Animation          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Bring your ideas to life with dynamic videos and animations that entertain, inform, and inspire action.
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
  Promotional Videos:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Highlighting products or services through compelling visuals.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Social Media Animations:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Short, catchy animated posts and ads.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Logo Animations:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Giving logos a dynamic edge with motion effects.
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
          <img src={instagramIcon} alt="Service Icon" />
        </span>
        {/* Heading and Paragraph */}
        <div className="w-[600px]">
          <h3 className="text-[1.5rem] font-outfit font-bold">
          Invitation Cards          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Make every event special with custom-designed invitations that set the perfect tone.
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
  Wedding Invitations:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Elegant designs for memorable occasions.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Corporate Invitations:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Formal invites for meetings, launches, and events.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Party Invites:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Fun and vibrant designs for birthdays or gatherings.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Digital Invitations:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  E-cards for email or WhatsApp sharing.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Custom Themes:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Unique cards matching event aesthetics.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  RSVP Integration:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Easy-to-use RSVP functionality for digital invites.
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
          <img src={instagramIcon} alt="Service Icon" />
        </span>
        {/* Heading and Paragraph */}
        <div className="w-[600px]">
          <h3 className="text-[1.5rem] font-outfit font-bold">
          E-Book          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Transform your ideas into professionally designed e-books that educate, engage, and elevate your brand.
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
  Custom E-Book Covers:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Eye-catching designs to enhance appeal.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Content Formatting:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Professional layouts for easy readability.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Interactive E-Books:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Embedded links, images, and videos for an immersive experience.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Educational Manuals:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Design and layout for training or educational purposes.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Marketing E-Books:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Visually appealing PDFs for lead generation.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  E-Book Redesign:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Revamping existing content for modern engagement.
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
          <img src={instagramIcon} alt="Service Icon" />
        </span>
        {/* Heading and Paragraph */}
        <div className="w-[600px]">
          <h3 className="text-[1.5rem] font-outfit font-bold">
          UI/UX Mockups          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Visualize your digital masterpiece with intuitive and engaging mockups that prioritize user experience and creativity.
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
  Wireframe Design:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Structural layouts outlining content placement and hierarchy.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Interactive Prototypes:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Functional mockups simulating user interactions.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  User Flow Design:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Mapping intuitive navigation paths for enhanced usability.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Mobile UI Design:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Interfaces optimized for seamless mobile device interactions.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Web Application UI:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Engaging UI designs for web apps to improve user experience.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Dark & Light Themes:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Custom designs offering theme flexibility for users.
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
          <img src={instagramIcon} alt="Service Icon" />
        </span>
        {/* Heading and Paragraph */}
        <div className="w-[600px]">
          <h3 className="text-[1.5rem] font-outfit font-bold">
          Social Media Content          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Fuel your social media with scroll-stopping content that connects, engages, and drives conversations.
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
  Post Design:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Engaging visuals for daily or thematic social media posts.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Stories and Reels:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Vertical content tailored for Instagram, Facebook, and YouTube.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Carousel Posts:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Multi-image designs to narrate your brands story.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Cover Photos:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Profile-enhancing banners for all social platforms.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Interactive Polls/Quizzes:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Graphics that encourage audience participation.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Custom Templates:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Reusable designs aligned with brand guidelines.
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
        className={`flex items-center px-4 py-1 bg-[#D9D9D9] text-black cursor-pointer ${
          isOpen ? "rounded-t-[15px]" : " rounded-[15px] shadow-accordionHead"
        }`}
        onClick={toggleAccordion}
      >
        {/* Icon on the left */}
        <span className="mr-4">
          <img src={instagramIcon} alt="Service Icon" />
        </span>
        {/* Heading and Paragraph */}
        <div className="w-[600px]">
          <h3 className="text-[1.5rem] font-outfit font-bold">
          YouTube/Media Thumbnails          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Create click-worthy thumbnails that make your videos impossible to ignore.
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
  Clickbait Thumbnails:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Attention-grabbing designs to boost video views.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Custom Brand Thumbnails:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Thumbnails aligning with brand identity.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Content-Specific Designs:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Visuals tailored for tutorials, vlogs, or reviews.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Event-Based Thumbnails:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Graphics for special occasions or campaigns.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  SEO-Friendly Thumbnails:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Optimized to rank higher on YouTube search results.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  High-Quality Visuals:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Ensuring clarity across all platforms.
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
          <img src={instagramIcon} alt="Service Icon" />
        </span>
        {/* Heading and Paragraph */}
        <div className="w-[600px]">
          <h3 className="text-[1.5rem] font-outfit font-bold">
          Infographics          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Simplify complex ideas with eye-catching infographics that tell stories and captivate audiences.
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
  Data-Driven Visuals:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Turning statistics into engaging designs.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Educational Infographics:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Simplifying complex topics for easy understanding.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Process Diagrams:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Step-by-step illustrations of workflows.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Timeline Infographics:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Highlighting historical or future milestones.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Interactive Infographics:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Clickable visuals for websites or presentations.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  SEO-Optimized Graphics:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Boosting visibility with keyword-rich designs.
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
          <img src={instagramIcon} alt="Service Icon" />
        </span>
        {/* Heading and Paragraph */}
        <div className="w-[600px]">
          <h3 className="text-[1.5rem] font-outfit font-bold">
          Digital Banner          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Boost your online presence with striking digital banners that command attention and drive results.
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
  Web Banners:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Designed for website headers or promotional campaigns.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Event Banners:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Graphics to highlight events or launches.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Social Media Banners:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Customized for Facebook, LinkedIn, or Twitter.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Ad Campaign Banners:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Engaging designs for Google Ads or display networks.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Seasonal Banners:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Themed visuals for holidays or festivals.
</p>

<h6 className="mt-4 font-semibold text-lg leading-6">
  Animated Banners:
</h6>
<p className="mt-2 font-normal text-lg leading-6">
  Motion designs to grab attention instantly.
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








const DesignAndEditing = () => {
  return (
    <>
    <ServicesHeading text={"DesignAndEditing"} variant="style1_1" />

    {/* Main Content */}
    <div className="flex w-[93%] mt-4">
      {/* Left Column */}
      <div className="w-1/2 mx-8">
      <ServicesAccordion/>
      <ServicesAccordionb/>
      <ServicesAccordion3/>
      <ServicesAccordion4/> 
      <ServicesAccordion5/> 

      </div>

      {/* Right Column */}
      <div className="w-1/2">
      <ServicesAccordion6/>
      <ServicesAccordion7/>
      <ServicesAccordion8/>
      <ServicesAccordion9/>
      <ServicesAccordion10/> 

      </div>
    </div>
  </>
  );
};

export default DesignAndEditing;
