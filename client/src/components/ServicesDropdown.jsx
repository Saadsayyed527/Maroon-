import React, { useState } from "react";

function ServicesDropdown() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const services = [
    "Digital Marketing",
    "Branding",
    "Social Media Management",
    "Website Development",
    "E-commerce",
    "Design & Editing",
    "Legal Documentation",
    "Business Essentials",
  ];

  const handleCheckboxChange = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="relative inline-block w-full">
      {/* Dropdown button */}
      <button
        className="w-full px-4 py-2 text-left bg-white border rounded shadow"
        onClick={toggleDropdown}
      >
        {selectedServices.length > 0
          ? selectedServices.join(", ")
          : "Select Services"}
      </button>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div className="absolute z-10 w-full bg-white border rounded-[8px] shadow border-black mt-1">
          <ul className="overflow-auto">
            {services.map((service, index) => (
              <li
                key={index}
                className="flex items-center px-4 py-2 border-b-[1px]"
              >
                <input
                  type="checkbox"
                  id={`service-${index}`}
                  checked={selectedServices.includes(service)}
                  onChange={() => handleCheckboxChange(service)}
                  className="mr-2 cursor-pointer accent-black" // Apply custom color using Tailwind's accent utility
                />
                <label
                  htmlFor={`service-${index}`}
                  className="cursor-pointer rounded-[10px]"
                >
                  {service}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ServicesDropdown;