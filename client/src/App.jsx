// import React from "react";
// // import ServicesAccordion from "./components/ServicesAccordion";
// // import servicesData from "./data/data";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home"
// import About from "./pages/AboutUs"
// import Services from "./pages/Services"
// import ContactUs from "./pages/ContactUs"
// import NotFound from "./components/NotFound";
// import Policy from "./pages/Privacy";
// import Family from "./pages/Family";
// import Terms from "./pages/Terms";
// import SocialMedia from "./pages/SocialMedia";
// import Navbar from "./pages/Navbar";
// import CircularCursor from "./components/CircularCursor";

// // import Heading from "./components/Heading";

// const App = () => {
//   return (
//    <>
//    <CircularCursor/>
//    <Navbar/>
//    <Routes>
//    <Route path="/" element={<Home />} />
//    <Route path="/about" element={<About />} />
//    <Route path="/services" element={<Services />} />
//    <Route path="/contact" element={<ContactUs />} />
//    <Route path="/policy" element={<Policy />} />
//    {/* <Route path="/career" element={<Care />} /> */}
//    <Route path="/family" element={<Family />} />
//    <Route path="/terms" element={<Terms />} />
//    <Route path="/socialmedia" element={<SocialMedia />} />

//    <Route path="*" element={<NotFound />} />
//    </Routes>
//    </>
//   );
// };

// export default App;


import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import NotFound from "./components/NotFound";
import Policy from "./pages/Privacy";
import Family from "./pages/Family";
import Terms from "./pages/Terms";
import SocialMedia from "./pages/SocialMedia";
import Navbar from "./pages/Navbar";
// import CircularCursor from "./components/CircularCursor";
import DigitalMarketing from "./components/services/DigitalMarketing";
import Branding from "./components/services/Branding";
import SocialMediaManagement from "./components/services/SocialMediaManagement";
import WebsiteDevelopment from "./components/services/WebsiteDevelopment";
import Ecommerce from "./components/services/Ecommerce";
import DesignEditing from "./components/services/DesignAndEditing";
import LegalDocumentation from "./components/services/LegalDocumentation";
import BusinessEssentials from "./components/services/BusinessEssentials";

const App = () => {
  return (
    <>
      {/* <CircularCursor /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/branding" element={<Branding />} />
          <Route
            path="/services/social-media-management"
            element={<SocialMediaManagement />}
          />
          <Route path="/services/website-development" element={<WebsiteDevelopment />} />
          <Route path="/services/e-commerce" element={<Ecommerce />} />
          <Route path="/services/design-editing" element={<DesignEditing />} />
          <Route path="/services/legal-documentation" element={<LegalDocumentation />} />
          <Route path="/services/business-essentials" element={<BusinessEssentials />} />
        
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/family" element={<Family />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/socialmedia" element={<SocialMedia />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
