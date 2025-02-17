// pages/services/DigitalMarketing.js
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








const BusinessEssentials = () => {
  return (
    <>
    <ServicesHeading text={"BusinessEssentials"} variant="style1_1" />

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
  </>
  );
};

export default BusinessEssentials;
