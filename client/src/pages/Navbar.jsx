import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "/Mlogo.png";

const Navbar = () => {
  const navigate = useNavigate();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact Us" },
    { path: "/family", label: "Family" },
    { path: "/terms", label: "Terms" },
    { path: "/policy", label: "Policy" },
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
      <nav className="nav-links font-outfit font-semibold text-2xl px-3" aria-label="Main Navigation">
        <ul>
          {navLinks.map((link) => (
            <li key={link.path}>
              <button onClick={() => navigate(link.path)}>{link.label}</button>
            </li>
          ))}
        </ul>
      </nav>
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

.logo img {
    width: 120px;
}

.nav-links ul {
    display: flex;
    gap: 30px;
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav-links button {
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
    transition: color 0.3s, font-weight 0.3s;
    color: black;
}

.nav-links button:hover {
    color: maroon;
    font-weight: bold;
}
`;
