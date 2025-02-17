import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleNavigation = (url) => {
        navigate(url);
    };

    return (
        <div className="navbar">
            <div className="logo">
               <img src="Mlogo.png" alt="logo" width={"120px"} />
            </div>
            <div className="nav-links">
            <button onClick={() => handleNavigation('/')}>Home</button>
                <button onClick={() => handleNavigation('/about')}>About Us</button>
                <button onClick={() => handleNavigation('/services')}>Services</button>
                <button onClick={() => handleNavigation('/contact')}>Contact Us</button>
               
                <button onClick={() => handleNavigation('/family')}>Family</button>
                <button onClick={() => handleNavigation('/terms')}>Terms</button>

                <button onClick={() => handleNavigation('/policy')}>Policy</button>
               
              
                {/* <button onClick={() => handleNavigation('/socialmedia')}>SocialMedia</button> */}


            </div>
        </div>
    );
};

export default Navbar;

const styles = `
/* Navbar container */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: white;
    border-bottom: 1px solid #ddd;
}

/* Logo styling */
.logo {
    font-size: 24px;
    font-weight: bold;
    color: maroon;
}

.logo span {
    color: orange;
}

/* Navigation links */
.nav-links {
    display: flex;
    gap: 20px;
}

.nav-links button {
    background: none;
    border: none;
    text-decoration: none;
    color: black;
    font-size: 16px;
    cursor: pointer;
    transition: color 0.3s, font-weight 0.3s;
}

.nav-links button:hover {
    color: maroon;
    font-weight: bold;
    font-size:25px;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
