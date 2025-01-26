// import React, { useState } from "react";
// import accordionDownIcon from "/accordionDownIcon.svg";
// import accordionUpIcon from "/accordionUpIcon.svg";
// import instagramIcon from "/Instagram-Mangement-maroon-digital-rise-digital-marketing-pune-india.svg";

// const ServicesAccordion = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div
//       className={`font-outfit mb-4 ${
//         isOpen
//           ? "rounded-[16px] border-black shadow-accordion"
//           : "rounded-[17px]"
//       }`}
//     >
//       {/* Accordion Header */}
//       <div
//         className={`flex items-center p-4 bg-[#D9D9D9] text-black cursor-pointer ${
//           isOpen ? "rounded-t-[15px]" : "rounded-[15px]"
//         }`}
//         onClick={toggleAccordion}
//       >
//         {/* Icon on the left */}
//         <span className="mr-4">
//           <img src={instagramIcon} alt="Service Icon" />
//         </span>
//         {/* Heading and Paragraph */}
//         <div className=" w-[380px] border-black">
//           <h3 className="text-[1.5rem] font-outfit font-bold">
//             Instagram Management
//           </h3>
//           <p className="text-[1.2rem] font-normal">
//             Transform into a masterpiece—grow, engage, and inspire with
//             Instagram strategies that work.
//           </p>
//         </div>
//         {/* Show Down Arrow only when accordion is closed */}
//         {!isOpen && (
//           <span className="mt-28 ml-28 max-w-none">
//             <img src={accordionDownIcon} alt="accordion Down Arrow Icon" />
//           </span>
//         )}
//       </div>

//       {/* Accordion Body */}
//       {isOpen && (
//         <div className="p-4 bg-gray-100 relative rounded-b-[15px]">
//           <p className="text-gray-700">
//             This is the content of the accordion. You can add paragraphs, lists,
//             or any content here.
//           </p>
//           <ul className="mt-2 list-disc list-inside">
//             <li>List Item 1</li>
//             <li>List Item 2</li>
//           </ul>
//           <button
//             onClick={toggleAccordion}
//             className="absolute bottom-4 right-4"
//           >
//             <img src={accordionUpIcon} alt="accordion Up Arrow Icon" />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ServicesAccordion;


// import React, { useState } from "react";
// import accordionDownIcon from "/accordionDownIcon.svg";
// import accordionUpIcon from "/accordionUpIcon.svg";
// import instagramIcon from "/Instagram-Mangement-maroon-digital-rise-digital-marketing-pune-india.svg";

// const ServicesAccordion = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div
//       className={`font-outfit rounded-[16px] `}
      
//     >
//       {/* Accordion Header */}
//       <div
//         className={`flex items-center p-4 bg-[#D9D9D9] text-black cursor-pointer shadow-accordionHead ${
//           isOpen ? "rounded-t-[15px]" : "rounded-[15px]"
//         }`}
//         onClick={toggleAccordion}
//       >
//         {/* Icon on the left */}
//         <span className="mr-4">
//           <img src={instagramIcon} alt="Service Icon" />
//         </span>
//         {/* Heading and Paragraph */}
//         <div className="w-[380px] border-black">
//           <h3 className="text-[1.5rem] font-outfit font-bold">
//             Instagram Management
//           </h3>
//           <p className="text-[1.2rem] font-normal">
//             Transform into a masterpiece—grow, engage, and inspire with
//             Instagram strategies that work.
//           </p>
//         </div>
//         {/* Show Down Arrow only when accordion is closed */}
//         {!isOpen && (
//           <span className="ml-auto">
//             <img src={accordionDownIcon} alt="accordion Down Arrow Icon" />
//           </span>
//         )}
//       </div>

//       {/* Accordion Body */}
//       <div
//         className={`p-4 bg-gray-100 rounded-b-[15px] overflow-hidden relative`}
//         style={{
//           height: isOpen ? "auto" : "0px",
//           opacity: isOpen ? 1 : 0,
//           visibility: isOpen ? "visible" : "hidden",
//         }}
//       >
//         <p className="text-gray-700">
//           This is the content of the accordion. You can add paragraphs, lists,
//           or any content here.
//         </p>
//         <ul className="mt-2 list-disc list-inside">
//           <li>List Item 1</li>
//           <li>List Item 2</li>
//         </ul>
//         {/* Button with correct positioning */}
//         <button onClick={toggleAccordion} className="absolute bottom-4 right-4">
//           <img src={accordionUpIcon} alt="accordion Up Arrow Icon" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ServicesAccordion;




// import React, { useState } from "react";
// import accordionDownIcon from "/accordionDownIcon.svg";
// import accordionUpIcon from "/accordionUpIcon.svg";
// import instagramIcon from "/Instagram-Mangement-maroon-digital-rise-digital-marketing-pune-india.svg";

// const ServicesAccordion = () => {
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
//         className={`flex items-center px-4 py-1 bg-[#D9D9D9] text-black cursor-pointer  ${
//           isOpen ? "rounded-t-[15px]" : "rounded-[15px] shadow-accordionHead"
//         }`}
//         onClick={toggleAccordion}
//       >
//         {/* Icon on the left */}
//         <span className="mr-4">
//           <img src={instagramIcon} alt="Service Icon" />
//         </span>
//         {/* Heading and Paragraph */}
//         <div className="w-[600px] ">
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
//               alt="accordion Down Arrow Icon"
//               className="w-7 ml-3" // Fixed size
//             />
//           </span>
//         )}
//         {/* Show Up Arrow only when accordion is open */}
//         {isOpen && (
//           <span className="mt-24 ml-12 max-w-none">
//             <img
//               src={accordionUpIcon}
//               alt="accordion Up Arrow Icon"
//               className="w-7 ml-2" // Fixed size
//             />
//           </span>
//         )}
//       </div>

//       {/* Accordion Body */}
//       {isOpen && (
//         <section>
//           <div className="p-4 bg-gray-100 relative rounded-b-[15px]">
//             <h6 className="font-semibold text-lg leading-6">
//               Content Creation:
//             </h6>
//             {/* <p className="text-gray-700">
           
//           </p> */}
//             <ul className="mt-2 list-disc list list-inside font-normal  text-lg leading-6">
//               <li>Designing visually appealing posts, reels, and stories.</li>
//               <li>Writing engaging captions with targeted hashtags.</li>
//               <li>Creating carousel posts and IGTV videos.</li>
//             </ul>
//             <h6 className=" mt-4 font-semibold text-xl leading-6">
//               Content Creation:
//             </h6>
//             {/* <p className="text-gray-700">
           
//           </p> */}
//             <ul className=" mt-2 list-disc list-inside font-normal  text-xl leading-6">
//               <li>Designing visually appealing posts, reels, and stories.</li>
//               <li>Writing engaging captions with targeted hashtags.</li>
//               <li>Creating carousel posts and IGTV videos.</li>
//             </ul>

//           </div>
//         </section>
//       )}
//     </div>
//   );
// };

// export default ServicesAccordion;


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

export default ServicesAccordion;
