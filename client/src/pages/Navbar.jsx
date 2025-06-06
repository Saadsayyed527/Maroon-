import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "/Mlogo.png"
import GoogleTranslateButton from "../components/GoogleTranslateButton";
const Navbar = () => {
  const navLinks = [
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact Us" },
  ];

  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerHTML = styles;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/" aria-label="Navigate to Home">
          <img src={Logo} alt="Maroon Digital Rise Website Logo" width="120" />
        </Link>
      </div>
      <nav
        className="nav-links font-outfit font-semibold text-2xl px-3 ml-auto mr-10"
        aria-label="Main Navigation"
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <GoogleTranslateButton />
    </header>
  );
};

export default Navbar;

// Styles as a template string
const styles = `
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: white;
    border-bottom: 2px solid #D8A25E;
}

.logo {
    font-size: 24px;
    font-weight: bold;
    color: maroon;
}

.nav-links ul {
    display: flex;
    justify-content: center;
    gap: 30px;
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav-links a {
    text-decoration: none;
    color: black;
    font-size: 16px;
    cursor: pointer;
    transition: color 0.3s, font-weight 0.3s;
}
`;