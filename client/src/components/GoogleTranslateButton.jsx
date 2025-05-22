import { useEffect, useState } from "react";
import LanguageTranslateIcon from "/LanguageTranslationIcon.svg"; // Your icon path

const GoogleTranslateButton = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en" },
          "google_translate_element"
        );
      };

      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);
  
  return (
    <div className="relative">
      {/* Language Icon Button */}
      <button onClick={() => setShowDropdown(!showDropdown)}>
        <img
          src={LanguageTranslateIcon} 
          alt="no icon"
          title="Google Translate maroon digital rise digital marketing pune india"
          width={40}
        />
      </button>

      {/* Google Translate Dropdown */}
      <div
        id="google_translate_element"
        className={`absolute right-0 mt-2 bg-white border border-gray-300 rounded shadow-md p-2 z-50 min-w-[180px] ${
          showDropdown ? "block" : "hidden"
        }`}
      ></div>
    </div>
  );
};

export default GoogleTranslateButton;