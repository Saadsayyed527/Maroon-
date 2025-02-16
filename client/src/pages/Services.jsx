// import React, { useState } from "react";
// // import ServicesAccordion from "../components/ServicesAccordion";
// import Heading from "../components/Heading";

// const Services = () => {
//   const [hoverIndex, setHoverIndex] = useState(null);

//   const handleMouseEnter = (index) => {
//     setHoverIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setHoverIndex(null);
//   };

//   const services = [
//     "DIGITAL MARKETING",
//     "BRANDING",
//     "SOCIAL MEDIA MANAGEMENT",
//     "WEBSITE DEVELOPMENT",
//     "E-COMMERCE",
//     "DESIGN & EDITING",
//     "LEGAL DOCUMENTATION",
//     "BUSINESS ESSENTIALS",
//   ];

//   const styles = {
//     body: {
//       fontFamily: "Alaxandria, sans-serif",
//       fontWeight: 600,
//       margin: 0,
//       padding: 0,
//     },
//     services: {
//       textAlign: "center",
//       padding: "50px 0",
//     },
//     servicesTitle: {
//       fontSize: "128px",
//       marginBottom: "40px",
//     },
//     serviceList: {
//       listStyle: "none",
//       padding: 0,
//       fontSize: "80px",
//       fontWeight: "800", // Corrected to camelCase
//       margin: 0,
//       color: "#D8A25E",
//       cursor: "pointer",
//     },

//     serviceItem: {
//       fontSize: "80px",
//       padding: "10px 0 0 20px",
//       lineHeight: "80px",
//       textAlign:"left",
//       borderBottom: "1px solid #e0e0e0",
//       transition: "background-color 0.3s",
//       fontWeight: "600",
//     },
//     serviceItemHover: {
//       backgroundColor: "#d89b50",
//       color: "white",
//     },
//   };

//   return (
//     <>
//       <div style={styles.body} className="border-b-[2px] border-b-[#D8A25E]">
//         <div style={styles.services}>
//           {/* <h1 style={styles.servicesTitle}>Our Services</h1> */}

//           <div className="border-t-[2px] border-t-[#D8A25E] mb-8">
//             <Heading text="Our Services" variant="style2" />
//             <div className="w-1/3 h-[2px] bg-[#D8A25E] block mx-auto mt-4"></div>
//           </div>

//           <ul style={styles.serviceList}>
//             {services.map((service, index) => (
//               <li
//                 key={index}
//                 style={
//                   index === hoverIndex
//                     ? { ...styles.serviceItem, ...styles.serviceItemHover }
//                     : styles.serviceItem
//                 }
//                 onMouseEnter={() => handleMouseEnter(index)}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 {service}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Services;


// import React, { useState } from "react";
// import { Link, Outlet } from "react-router-dom";
// import Heading from "../components/Heading";

// const Services = () => {
//   const [hoverIndex, setHoverIndex] = useState(null);

//   const handleMouseEnter = (index) => {
//     setHoverIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setHoverIndex(null);
//   };

//   const services = [
//     { name: "DIGITAL MARKETING", path: "digital-marketing" },
//     { name: "BRANDING", path: "branding" },
//     { name: "SOCIAL MEDIA MANAGEMENT", path: "social-media-management" },
//     { name: "WEBSITE DEVELOPMENT", path: "website-development" },
//     { name: "E-COMMERCE", path: "e-commerce" },
//     { name: "DESIGN & EDITING", path: "design-editing" },
//     { name: "LEGAL DOCUMENTATION", path: "legal-documentation" },
//     { name: "BUSINESS ESSENTIALS", path: "business-essentials" },
//   ];

//   const styles = {
//     body: {
//       fontFamily: "Alaxandria, sans-serif",
//       fontWeight: 600,
//       margin: 0,
//       padding: 0,
//     },
//     services: {
//       textAlign: "center",
//       padding: "50px 0",
//     },
//     servicesTitle: {
//       fontSize: "128px",
//       marginBottom: "40px",
//     },
//     serviceList: {
//       listStyle: "none",
//       padding: 0,
//       fontSize: "80px",
//       fontWeight: "800", // Corrected to camelCase
//       margin: 0,
//       color: "#D8A25E",
//       cursor: "pointer",
//     },

//     serviceItem: {
//       fontSize: "80px",
//       padding: "10px 0 0 20px",
//       lineHeight: "80px",
//       textAlign: "left",
//       borderBottom: "1px solid #e0e0e0",
//       transition: "background-color 0.3s",
//       fontWeight: "600",
//     },
//     serviceItemHover: {
//       backgroundColor: "#d89b50",
//       color: "white",
//     },
//   };

//   return (
//     <>
//       <div style={styles.body} className="border-b-[2px] border-b-[#D8A25E]">
//         <div style={styles.services}>
//           <div className="border-t-[2px] border-t-[#D8A25E] mb-8">
//             <Heading text="Our Services" variant="style2" />
//             <div className="w-1/3 h-[2px] bg-[#D8A25E] block mx-auto mt-4"></div>
//           </div>

//           <ul style={styles.serviceList}>
//             {services.map((service, index) => (
//               <li
//                 key={index}
//                 style={
//                   index === hoverIndex
//                     ? { ...styles.serviceItem, ...styles.serviceItemHover }
//                     : styles.serviceItem
//                 }
//                 onMouseEnter={() => handleMouseEnter(index)}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <Link
//                   to={service.path}
//                   style={{ textDecoration: "none", color: "inherit" }}
//                 >
//                   {service.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//           {/* Render nested routes here */}
//           <Outlet />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Services;

// import React, { useState } from "react";
// import { Link, Outlet } from "react-router-dom";
// import Heading from "../components/Heading";

// const Services = () => {
//   const [hoverIndex, setHoverIndex] = useState(null);

//   const handleMouseEnter = (index) => {
//     setHoverIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setHoverIndex(null);
//   };

//   const services = [
//     { name: "DIGITAL MARKETING", path: "digital-marketing" },
//     { name: "BRANDING", path: "branding" },
//     { name: "SOCIAL MEDIA MANAGEMENT", path: "social-media-management" },
//     { name: "WEBSITE DEVELOPMENT", path: "website-development" },
//     { name: "E-COMMERCE", path: "e-commerce" },
//     { name: "DESIGN & EDITING", path: "design-editing" },
//     { name: "LEGAL DOCUMENTATION", path: "legal-documentation" },
//     { name: "BUSINESS ESSENTIALS", path: "business-essentials" },
//   ];

//   const styles = {
//     body: {
//       fontFamily: "outfit, sans-serif",
//       fontWeight: 600,
//       margin: 0,
//       padding: 0,
//     },
//     services: {
//       textAlign: "center",
//       padding: "50px 0",
//     },
//     serviceList: {
//       listStyle: "none",
//       padding: 0,
//       fontSize: "80px",
//       fontWeight: "800",
//       margin: 0,
//       color: "#D8A25E",
//       cursor: "pointer",
//     },
//     serviceItem: {
//       fontSize: "80px",
//       padding: "0 0 0 20px",
//       lineHeight: "80px",
//       textAlign: "left",
//       borderBottom: "1px solid #e0e0e0",
//       transition: "background-color 0.3s",
//       fontWeight: "600",
//     },
//     serviceItemHover: {
//       backgroundColor: "#d89b50",
//       color: "white",
//     },
//   };

//   return (
//     <div style={styles.body} className="border-b-[2px] border-b-[#D8A25E]">
//       <div style={styles.services}>
//         <div className="border-t-[2px] border-t-[#D8A25E] mb-8">
//           <Heading text="Our Services" variant="style2" />
//           <div className="w-1/3 h-[2px] bg-[#D8A25E] block mx-auto mt-4"></div>
//         </div>

//         <ul style={styles.serviceList}>
//           {services.map((service, index) => (
//             <li
//               key={index}
//               style={
//                 index === hoverIndex
//                   ? { ...styles.serviceItem, ...styles.serviceItemHover }
//                   : styles.serviceItem
//               }
//               onMouseEnter={() => handleMouseEnter(index)}
//               onMouseLeave={handleMouseLeave}
//             >
//               <Link
//                 to={service.path}
//                 style={{ textDecoration: "none", color: "inherit" }}
//               >
//                 {service.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Services;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Heading from "../components/Heading";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
   const navigate = useNavigate();

  // const handleBackward = () => {
  //   navigate(-1);
  // };

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const services = [
    { name: "DIGITAL MARKETING", path: "digital-marketing" },
    { name: "BRANDING", path: "branding" },
    { name: "SOCIAL MEDIA MANAGEMENT", path: "social-media-management" },
    { name: "WEBSITE DEVELOPMENT", path: "website-development" },
    { name: "E-COMMERCE", path: "e-commerce" },
    { name: "DESIGN & EDITING", path: "design-editing" },
    { name: "LEGAL DOCUMENTATION", path: "legal-documentation" },
    { name: "BUSINESS ESSENTIALS", path: "business-essentials" },
  ];

  const styles = {
    body: {
      fontFamily: "outfit, sans-serif",
      fontWeight: 600,
      margin: 0,
      padding: 0,
    },
    services: {
      textAlign: "center",
      padding: "50px 0",
    },
    serviceList: {
      listStyle: "none",
      padding: 0,
      fontSize: "80px",
      fontWeight: "800",
      margin: 0,
      color: "#D8A25E",
      cursor: "pointer",
    },
    serviceItem: {
      fontSize: "80px",
      padding: "0 0 0 20px",
      lineHeight: "80px",
      textAlign: "left",
      borderBottom: "1px solid #e0e0e0",
      transition: "background-color 0.3s",
      fontWeight: "600",
    },
    serviceItemHover: {
      backgroundColor: "#d89b50",
      color: "white",
    },
  };

  return (
    <div style={styles.body} className="border-b-[2px] border-b-[#D8A25E]">
      <div style={styles.services}>
        <div className="border-t-[2px] border-t-[#D8A25E] mb-8">
          <Heading text="Our Services" variant="style2" />
          <div className="w-1/3 h-[2px] bg-[#D8A25E] block mx-auto mt-4"></div>
        </div>

        <ul style={styles.serviceList}>
          {services.map((service, index) => (
            <li
              key={index}
              style={
                index === hoverIndex
                  ? { ...styles.serviceItem, ...styles.serviceItemHover }
                  : styles.serviceItem
              }
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={`/services/${service.path}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {service.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;

