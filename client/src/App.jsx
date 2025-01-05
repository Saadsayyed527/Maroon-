import React from "react";
// import ServicesAccordion from "./components/ServicesAccordion";
// import servicesData from "./data/data";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/AboutUs"
import Services from "./pages/Services"
import ContactUs from "./pages/ContactUs"
import NotFound from "./components/NotFound";

// import Heading from "./components/Heading";

const App = () => {
  return (
   <>
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/about" element={<About />} />
   <Route path="/services" element={<Services />} />
   <Route path="/contact" element={<ContactUs />} />
   <Route path="*" element={<NotFound />} />
   </Routes>
   </>
  );
};

export default App;
