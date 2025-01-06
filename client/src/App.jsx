import React from "react";
// import ServicesAccordion from "./components/ServicesAccordion";
// import servicesData from "./data/data";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/AboutUs"
import Services from "./pages/Services"
import ContactUs from "./pages/ContactUs"
import NotFound from "./components/NotFound";
import Policy from "./pages/Privacy";
import Family from "./pages/Family";
import Terms from "./pages/Terms";
import SocialMedia from "./pages/SocialMedia";
import Navbar from "./pages/Navbar";

// import Heading from "./components/Heading";

const App = () => {
  return (
   <>
   <Navbar/>
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/about" element={<About />} />
   <Route path="/services" element={<Services />} />
   <Route path="/contact" element={<ContactUs />} />
   <Route path="/policy" element={<Policy />} />
   {/* <Route path="/career" element={<Care />} /> */}
   <Route path="/family" element={<Family />} />
   <Route path="/terms" element={<Terms />} />
   <Route path="/socialmedia" element={<SocialMedia />} />

   <Route path="*" element={<NotFound />} />
   </Routes>
   </>
  );
};

export default App;
