// pages/services/DigitalMarketing.js
// import React from "react";
// import ServicesAccordion from "../ServicesAccordion";
import ServicesHeading from "../ServicesHeading";

import React, { useState } from "react";
import accordionDownIcon from "/accordionDownIcon.svg";
import accordionUpIcon from "/accordionUpIcon.svg";
import icon1 from "/service_images/Social Media Management/1.svg";
import icon2 from "/service_images/Social Media Management/2.svg";
import icon3 from "/service_images/Social Media Management/3.svg";
import icon4 from "/service_images/Social Media Management/4.svg";
import icon5 from "/service_images/Social Media Management/5.svg";
import icon6 from "/service_images/Social Media Management/6.svg";
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
            <ul className="mt-2 list-disc list list-inside font-normal text-lg leading-5">
              <li>Designing visually appealing posts, reels, and stories.</li>
              <li>Writing engaging captions with targeted hashtags.</li>
              <li>Creating carousel posts and IGTV videos.</li>
            </ul>
            <h6 className="mt-4 font-semibold text-lg leading-6">
            Account Growth:            </h6>
            <ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
              <li>Organic follower growth strategies.</li>
              <li>Collaborating with influencers and brand ambassadors.</li>
              
            </ul>
            <h6 className="mt-4 font-semibold text-lg leading-6">
            Profile Optimization:          </h6>
            <ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
              <li>Crafting an attractive bio with links and emojis.</li>
              <li>Highlight cover designs and story categorization.</li>
              
            </ul>
            <h6 className="mt-4 font-semibold text-lg leading-6">
            Engagement Management:         </h6>
            <ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
              <li>Responding to DMs and comments promptly.</li>
              <li>Hosting live sessions and Q&A events.</li>
              
            </ul>
            <h6 className="mt-4 font-semibold text-lg leading-6">
            Performance Analysis:          </h6>
            <ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
              <li>Monitoring metrics like reach, impressions, and follower growth.</li>
              <li>A/B testing for content to identify what works best.</li>
              
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
            Youtube Mangement 
          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Lights, camera, action—watch your channel grow with optimized YouTube content and strategies.
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
        Channel Setup and Optimization:
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
        <li>Crafting professional channel art and logo.</li>
        <li>Writing SEO-friendly descriptions and video titles.</li>
      </ul>

      <h6 className="mt-4 font-semibold text-lg leading-6">
        Video Production Support:
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
        <li>Scripting, editing, and adding animations.</li>
        <li>Thumbnail creation for higher click-through rates.</li>
      </ul>

      <h6 className="mt-4 font-semibold text-lg leading-6">
        Content Strategy:
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
        <li>Planning content calendars for consistent uploads.</li>
        <li>Suggesting trending topics and series ideas.</li>
      </ul>

      <h6 className="mt-4 font-semibold text-lg leading-6">
        Audience Engagement:
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
        <li>Managing comments and building a community.</li>
        <li>Running polls and engaging in YouTube Community posts.</li>
      </ul>

      <h6 className="mt-4 font-semibold text-lg leading-6">
        Monetization Support:
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
        <li>Assisting with AdSense setup and optimization.</li>
        <li>Increasing watch time and subscriber base for eligibility.</li>
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
            Whatsapp Management
          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Stay closer to your customers—engage, respond, and build trust with seamless WhatsApp strategies
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
        Business Profile Setup & Optimization:
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
        <li>Create and optimize a professional WhatsApp Business Profile with brand logo, description, catalog, and contact details.</li>
      </ul>

      <h6 className="mt-4 font-semibold text-lg leading-6">
        Automated Messaging:
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
        <li>Set up auto-replies, greeting messages, and away messages for instant customer engagement.</li>
      </ul>

      <h6 className="mt-4 font-semibold text-lg leading-6">
        Broadcast & Campaign Management:
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
        <li>Plan and execute targeted broadcast messages and campaigns for promotions, updates, or announcements.</li>
      </ul>

      <h6 className="mt-4 font-semibold text-lg leading-6">
        Customer Interaction & Support:
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
        <li>Manage real-time queries, feedback, and support to enhance customer satisfaction.</li>
      </ul>

      <h6 className="mt-4 font-semibold text-lg leading-6">
        WhatsApp Catalog Management:
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
        <li>Design and manage product/service catalogs for seamless sharing with clients and leads.</li>
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
          LinkedIn Management
          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Build connections that count: enhance your professional presence with LinkedIn strategies that lead to growth.
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
        Profile and Company Page Setup:
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
        <li>Crafting professional headlines and summaries.</li>
        <li>Designing custom banners for company pages.</li>
      </ul>

      <h6 className="mt-4 font-semibold text-lg leading-6">
        Content Strategy:
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
        <li>Writing thought leadership articles and posts.</li>
        <li>Sharing industry insights, case studies, and success stories.</li>
      </ul>

      <h6 className="mt-4 font-semibold text-lg leading-6">
        Networking and Lead Generation:
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
        <li>Sending personalized connection requests.</li>
        <li>Engaging with relevant posts and joining industry groups.</li>
      </ul>

      <h6 className="mt-4 font-semibold text-lg leading-6">
        Employee Advocacy:
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
        <li>Encouraging employees to share company updates.</li>
        <li>Highlighting employee achievements and milestones.</li>
      </ul>

      <h6 className="mt-4 font-semibold text-lg leading-6">
        Analytics and Reporting:
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
        <li>Tracking post engagement and profile visits.</li>
        <li>Monitoring campaign success and audience demographics.</li>
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
          Facebook Management
          </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Be where your audience is—dominate the conversation with smart and engaging Facebook campaigns.
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
        Page Setup and Optimization:
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
        <li>Creating a complete profile with contact details and branding.</li>
        <li>Designing cover photos and pinned posts.</li>
      </ul>

      <h6 className="mt-4 font-semibold text-lg leading-6">
        Content Creation and Posting:
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
        <li>Planning and publishing posts, stories, and videos.</li>
        <li>Highlighting customer testimonials and events.</li>
      </ul>

      <h6 className="mt-4 font-semibold text-lg leading-6">
        Community Engagement:
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
        <li>Managing comments and messages via Facebook Messenger.</li>
        <li>Organizing polls, quizzes, and giveaways.</li>
      </ul>

      <h6 className="mt-4 font-semibold text-lg leading-6">
        Ad Campaign Management:
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
        <li>Creating targeted ad campaigns (boosted posts, lead ads).</li>
        <li>Monitoring ad performance and optimizing for better ROI.</li>
      </ul>

      <h6 className="mt-4 font-semibold text-lg leading-6">
        Event Management:
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
        <li>Creating and promoting events on Facebook.</li>
        <li>Engaging attendees with pre-event and post-event content.</li>
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
          Twitter(X) Management           </h3>
          <p className="text-[1.2rem] font-normal w-[120%] leading-6">
          Say it in 280 characters or less—build your audience with impactful Twitter strategies.
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
        Account Setup and Optimization:
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
        <li>Writing a compelling bio with relevant hashtags.</li>
        <li>Pinning top-performing tweets for visibility.</li>
      </ul>

      <h6 className="mt-4 font-semibold text-lg leading-6">
        Content Strategy:
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
        <li>Posting tweets consistently at optimal times.</li>
        <li>Sharing trending hashtags and participating in relevant discussions.</li>
      </ul>

      <h6 className="mt-4 font-semibold text-lg leading-6">
        Engagement and Monitoring:
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
        <li>Responding to mentions, retweets, and DMs.</li>
        <li>Tracking trends and creating real-time content.</li>
      </ul>

      <h6 className="mt-4 font-semibold text-lg leading-6">
        Campaigns and Ads:
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
        <li>Running Twitter Ads for promoted tweets and accounts.</li>
        <li>Monitoring campaign success and audience engagement.</li>
      </ul>

      <h6 className="mt-4 font-semibold text-lg leading-6">
        Analytics:
      </h6>
      <ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
        <li>Analyzing tweet performance (impressions, clicks, and engagement rate).</li>
        <li>Refining strategies based on data insights.</li>
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





// const ServicesAccordion7 = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div
//       className={`font-outfit mb-8 ${
//         isOpen
//           ? "rounded-[16px] border border-black shadow-accordionBody"
//           : "rounded-[17px]"
//       }`}
//     >
//       {/* Accordion Header */}
//       <div
//         className={`flex items-center px-3 py-1 bg-[#D9D9D9] text-black cursor-pointer ${
//           isOpen ? "rounded-t-[15px]" : " rounded-[15px] shadow-accordionHead"
//         }`}
//         onClick={toggleAccordion}
//       >
//         {/* Icon on the left */}
//         <span className="mr-4">
//           <img src={instagramIcon} alt="Service Icon" />
//         </span>
//         {/* Heading and Paragraph */}
//         <div className="w-[600px]">
//           <h3 className="text-[1.5rem] font-outfit font-bold">
//             Instagram Management
//           </h3>
//           <p className="text-[1.2rem] font-normal w-[120%] leading-6">
//             Amplify your brand's reach with innovative product marketing
//             strategies that connect with the right audience and boost sales.
//           </p>
//         </div>

//         {/* Show Down Arrow only when accordion is closed */}
//         {!isOpen && (
//           <span className="mt-24 ml-12 max-w-none">
//             <img
//               src={accordionDownIcon}
//               alt="Accordion Down Arrow Icon"
//               className="w-7 ml-3" // Fixed size
//             />
//           </span>
//         )}
//         {/* Show Up Arrow only when accordion is open */}
//         {isOpen && (
//           <span className="mt-24 ml-12 max-w-none">
//             <img
//               // src={accordionUpIcon}
//               // alt="Accordion Up Arrow Icon"
//               className="w-7 ml-3" // Fixed size
//             />
//           </span>
//         )}
//       </div>

//       {/* Accordion Body */}
//       {isOpen && (
//         <section>
//           <div className="bg-gray-100 relative rounded-b-[15px] pt-4 pl-4">
//             <h6 className="font-semibold text-lg leading-6">
//               Content Creation:
//             </h6>
//             <ul className="mt-2 list-disc list list-inside font-normal text-lg leading-5">
//               <li>Designing visually appealing posts, reels, and stories.</li>
//               <li>Writing engaging captions with targeted hashtags.</li>
//               <li>Creating carousel posts and IGTV videos.</li>
//             </ul>
//             <h6 className="mt-4 font-semibold text-lg leading-6">
//               Content Creation:
//             </h6>
//             <ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
//               <li>Designing visually appealing posts, reels, and stories.</li>
//               <li>Writing engaging captions with targeted hashtags.</li>
//               <li>Creating carousel posts and IGTV videos.</li>
//             </ul>

//             {/* Arrow Up Icon inside the Accordion Body */}
//             <span
//               className=" flex justify-end pr-1 pb-1 cursor-pointer"
//               onClick={toggleAccordion}
//             >
//               <img
//                 src={accordionUpIcon}
//                 alt="Accordion Up Arrow Icon"
//                 className="w-7 block "
//               />
//             </span>
//           </div>
//         </section>
//       )}
//     </div>
//   );
// };





// const ServicesAccordion8 = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div
//       className={`font-outfit mb-8 ${
//         isOpen
//           ? "rounded-[16px] border border-black shadow-accordionBody"
//           : "rounded-[17px]"
//       }`}
//     >
//       {/* Accordion Header */}
//       <div
//         className={`flex items-center px-3 py-1 bg-[#D9D9D9] text-black cursor-pointer ${
//           isOpen ? "rounded-t-[15px]" : " rounded-[15px] shadow-accordionHead"
//         }`}
//         onClick={toggleAccordion}
//       >
//         {/* Icon on the left */}
//         <span className="mr-4">
//           <img src={instagramIcon} alt="Service Icon" />
//         </span>
//         {/* Heading and Paragraph */}
//         <div className="w-[600px]">
//           <h3 className="text-[1.5rem] font-outfit font-bold">
//             Instagram Management
//           </h3>
//           <p className="text-[1.2rem] font-normal w-[120%] leading-6">
//             Amplify your brand's reach with innovative product marketing
//             strategies that connect with the right audience and boost sales.
//           </p>
//         </div>

//         {/* Show Down Arrow only when accordion is closed */}
//         {!isOpen && (
//           <span className="mt-24 ml-12 max-w-none">
//             <img
//               src={accordionDownIcon}
//               alt="Accordion Down Arrow Icon"
//               className="w-7 ml-3" // Fixed size
//             />
//           </span>
//         )}
//         {/* Show Up Arrow only when accordion is open */}
//         {isOpen && (
//           <span className="mt-24 ml-12 max-w-none">
//             <img
//               // src={accordionUpIcon}
//               // alt="Accordion Up Arrow Icon"
//               className="w-7 ml-3" // Fixed size
//             />
//           </span>
//         )}
//       </div>

//       {/* Accordion Body */}
//       {isOpen && (
//         <section>
//           <div className="bg-gray-100 relative rounded-b-[15px] pt-4 pl-4">
//             <h6 className="font-semibold text-lg leading-6">
//               Content Creation:
//             </h6>
//             <ul className="mt-2 list-disc list list-inside font-normal text-lg leading-5">
//               <li>Designing visually appealing posts, reels, and stories.</li>
//               <li>Writing engaging captions with targeted hashtags.</li>
//               <li>Creating carousel posts and IGTV videos.</li>
//             </ul>
//             <h6 className="mt-4 font-semibold text-lg leading-6">
//               Content Creation:
//             </h6>
//             <ul className="mt-2 list-disc list-inside font-normal text-lg leading-5">
//               <li>Designing visually appealing posts, reels, and stories.</li>
//               <li>Writing engaging captions with targeted hashtags.</li>
//               <li>Creating carousel posts and IGTV videos.</li>
//             </ul>

//             {/* Arrow Up Icon inside the Accordion Body */}
//             <span
//               className=" flex justify-end pr-1 pb-1 cursor-pointer"
//               onClick={toggleAccordion}
//             >
//               <img
//                 src={accordionUpIcon}
//                 alt="Accordion Up Arrow Icon"
//                 className="w-7 block "
//               />
//             </span>
//           </div>
//         </section>
//       )}
//     </div>
//   );
// };









const SocialMediaManagement = () => {
  return (
    <>
    <ServicesHeading text={"Social Media Management"} variant="style1_1" />

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
        <ContactUs/>
    
  </>
  );
};

export default SocialMediaManagement;
