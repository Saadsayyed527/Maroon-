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
              Content Creation:
            </h6>
            <ul className="mt-2 list-disc list list-inside font-normal text-lg leading-6">
              <li>Designing visually appealing posts, reels, and stories.</li>
              <li>Writing engaging captions with targeted hashtags.</li>
              <li>Creating carousel posts and IGTV videos.</li>
            </ul>
            <h6 className="mt-4 font-semibold text-lg leading-6">
              Content Creation:
            </h6>
            <ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
              <li>Designing visually appealing posts, reels, and stories.</li>
              <li>Writing engaging captions with targeted hashtags.</li>
              <li>Creating carousel posts and IGTV videos.</li>
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
          <img src={instagramIcon} alt="Service Icon" />
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
              Content Creation:
            </h6>
            <ul className="mt-2 list-disc list list-inside font-normal text-lg leading-6">
              <li>Designing visually appealing posts, reels, and stories.</li>
              <li>Writing engaging captions with targeted hashtags.</li>
              <li>Creating carousel posts and IGTV videos.</li>
            </ul>
            <h6 className="mt-4 font-semibold text-lg leading-6">
              Content Creation:
            </h6>
            <ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
              <li>Designing visually appealing posts, reels, and stories.</li>
              <li>Writing engaging captions with targeted hashtags.</li>
              <li>Creating carousel posts and IGTV videos.</li>
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
          <img src={instagramIcon} alt="Service Icon" />
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
              Content Creation:
            </h6>
            <ul className="mt-2 list-disc list list-inside font-normal text-lg leading-6">
              <li>Designing visually appealing posts, reels, and stories.</li>
              <li>Writing engaging captions with targeted hashtags.</li>
              <li>Creating carousel posts and IGTV videos.</li>
            </ul>
            <h6 className="mt-4 font-semibold text-lg leading-6">
              Content Creation:
            </h6>
            <ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
              <li>Designing visually appealing posts, reels, and stories.</li>
              <li>Writing engaging captions with targeted hashtags.</li>
              <li>Creating carousel posts and IGTV videos.</li>
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
          <img src={instagramIcon} alt="Service Icon" />
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
              Content Creation:
            </h6>
            <ul className="mt-2 list-disc list list-inside font-normal text-lg leading-6">
              <li>Designing visually appealing posts, reels, and stories.</li>
              <li>Writing engaging captions with targeted hashtags.</li>
              <li>Creating carousel posts and IGTV videos.</li>
            </ul>
            <h6 className="mt-4 font-semibold text-lg leading-6">
              Content Creation:
            </h6>
            <ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
              <li>Designing visually appealing posts, reels, and stories.</li>
              <li>Writing engaging captions with targeted hashtags.</li>
              <li>Creating carousel posts and IGTV videos.</li>
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
          <img src={instagramIcon} alt="Service Icon" />
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
              Content Creation:
            </h6>
            <ul className="mt-2 list-disc list list-inside font-normal text-lg leading-6">
              <li>Designing visually appealing posts, reels, and stories.</li>
              <li>Writing engaging captions with targeted hashtags.</li>
              <li>Creating carousel posts and IGTV videos.</li>
            </ul>
            <h6 className="mt-4 font-semibold text-lg leading-6">
              Content Creation:
            </h6>
            <ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
              <li>Designing visually appealing posts, reels, and stories.</li>
              <li>Writing engaging captions with targeted hashtags.</li>
              <li>Creating carousel posts and IGTV videos.</li>
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
          <img src={instagramIcon} alt="Service Icon" />
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
              Content Creation:
            </h6>
            <ul className="mt-2 list-disc list list-inside font-normal text-lg leading-6">
              <li>Designing visually appealing posts, reels, and stories.</li>
              <li>Writing engaging captions with targeted hashtags.</li>
              <li>Creating carousel posts and IGTV videos.</li>
            </ul>
            <h6 className="mt-4 font-semibold text-lg leading-6">
              Content Creation:
            </h6>
            <ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
              <li>Designing visually appealing posts, reels, and stories.</li>
              <li>Writing engaging captions with targeted hashtags.</li>
              <li>Creating carousel posts and IGTV videos.</li>
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
          <img src={instagramIcon} alt="Service Icon" />
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
              Content Creation:
            </h6>
            <ul className="mt-2 list-disc list list-inside font-normal text-lg leading-6">
              <li>Designing visually appealing posts, reels, and stories.</li>
              <li>Writing engaging captions with targeted hashtags.</li>
              <li>Creating carousel posts and IGTV videos.</li>
            </ul>
            <h6 className="mt-4 font-semibold text-lg leading-6">
              Content Creation:
            </h6>
            <ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
              <li>Designing visually appealing posts, reels, and stories.</li>
              <li>Writing engaging captions with targeted hashtags.</li>
              <li>Creating carousel posts and IGTV videos.</li>
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
          <img src={instagramIcon} alt="Service Icon" />
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
              Content Creation:
            </h6>
            <ul className="mt-2 list-disc list list-inside font-normal text-lg leading-6">
              <li>Designing visually appealing posts, reels, and stories.</li>
              <li>Writing engaging captions with targeted hashtags.</li>
              <li>Creating carousel posts and IGTV videos.</li>
            </ul>
            <h6 className="mt-4 font-semibold text-lg leading-6">
              Content Creation:
            </h6>
            <ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
              <li>Designing visually appealing posts, reels, and stories.</li>
              <li>Writing engaging captions with targeted hashtags.</li>
              <li>Creating carousel posts and IGTV videos.</li>
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
          <img src={instagramIcon} alt="Service Icon" />
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
              Content Creation:
            </h6>
            <ul className="mt-2 list-disc list list-inside font-normal text-lg leading-6">
              <li>Designing visually appealing posts, reels, and stories.</li>
              <li>Writing engaging captions with targeted hashtags.</li>
              <li>Creating carousel posts and IGTV videos.</li>
            </ul>
            <h6 className="mt-4 font-semibold text-lg leading-6">
              Content Creation:
            </h6>
            <ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
              <li>Designing visually appealing posts, reels, and stories.</li>
              <li>Writing engaging captions with targeted hashtags.</li>
              <li>Creating carousel posts and IGTV videos.</li>
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
          <img src={instagramIcon} alt="Service Icon" />
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
              Content Creation:
            </h6>
            <ul className="mt-2 list-disc list list-inside font-normal text-lg leading-6">
              <li>Designing visually appealing posts, reels, and stories.</li>
              <li>Writing engaging captions with targeted hashtags.</li>
              <li>Creating carousel posts and IGTV videos.</li>
            </ul>
            <h6 className="mt-4 font-semibold text-lg leading-6">
              Content Creation:
            </h6>
            <ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
              <li>Designing visually appealing posts, reels, and stories.</li>
              <li>Writing engaging captions with targeted hashtags.</li>
              <li>Creating carousel posts and IGTV videos.</li>
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
          <img src={instagramIcon} alt="Service Icon" />
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
              Content Creation:
            </h6>
            <ul className="mt-2 list-disc list list-inside font-normal text-lg leading-6">
              <li>Designing visually appealing posts, reels, and stories.</li>
              <li>Writing engaging captions with targeted hashtags.</li>
              <li>Creating carousel posts and IGTV videos.</li>
            </ul>
            <h6 className="mt-4 font-semibold text-lg leading-6">
              Content Creation:
            </h6>
            <ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
              <li>Designing visually appealing posts, reels, and stories.</li>
              <li>Writing engaging captions with targeted hashtags.</li>
              <li>Creating carousel posts and IGTV videos.</li>
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
          <img src={instagramIcon} alt="Service Icon" />
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
              Content Creation:
            </h6>
            <ul className="mt-2 list-disc list list-inside font-normal text-lg leading-6">
              <li>Designing visually appealing posts, reels, and stories.</li>
              <li>Writing engaging captions with targeted hashtags.</li>
              <li>Creating carousel posts and IGTV videos.</li>
            </ul>
            <h6 className="mt-4 font-semibold text-lg leading-6">
              Content Creation:
            </h6>
            <ul className="mt-2 list-disc list-inside font-normal text-lg leading-6">
              <li>Designing visually appealing posts, reels, and stories.</li>
              <li>Writing engaging captions with targeted hashtags.</li>
              <li>Creating carousel posts and IGTV videos.</li>
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
