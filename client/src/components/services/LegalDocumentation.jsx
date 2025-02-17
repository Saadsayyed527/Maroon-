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
          Invoice/Billing         </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Simplify your transactions with stylish, branded invoices that leave a lasting impression.
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
          Certificates
          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Honor excellence with custom certificate designs that make moments memorable.
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
          Contract          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Seal trust with contracts designed for
          clarity, style, and confidence.
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
          Letterhead          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Turn every letter into a statement: elevate your brand with professionally designed letterheads
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
          Reports
          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Present your data with clarity and style: professionally designed reports that stand out.
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
          Agreement
          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Streamline agreements with professional designs that ensure every detail is in place
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
            Instagram Management
          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
            Amplify your brand's reach with innovative product marketing
            strategies that connect with the right audience and boost sales.
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
            Instagram Management
          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
            Amplify your brand's reach with innovative product marketing
            strategies that connect with the right audience and boost sales.
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









const LegalDocumentation = () => {
  return (
    <>
    <ServicesHeading text={"LegalDocumentation"} variant="style1_1" />

    {/* Main Content */}
    <div className="flex w-[93%] mt-4">
      {/* Left Column */}
      <div className="w-1/2 mx-8">
      <ServicesAccordion/>
      <ServicesAccordion2/>
      <ServicesAccordion3/>
      {/* <ServicesAccordion4/>  */}

      </div>

      {/* Right Column */}
      <div className="w-1/2">
      <ServicesAccordion4/>
      <ServicesAccordion5/>
      <ServicesAccordion6/>
      {/* <ServicesAccordion8/> */}
      
      </div>
    </div>
  </>
  );
};

export default LegalDocumentation;
