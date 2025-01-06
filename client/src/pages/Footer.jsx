import React from 'react';
import maroonLogo from '/Mlogo.png';
import whatsappIcon from '../../public/whatsapp.jpeg'; // Add appropriate paths
import instagramIcon from '../../public/instagram.jpeg';
import facebookIcon from '../../public/facebook.jpeg';
import twitterIcon from '../../public/twitter.jpeg';
import linkedinIcon from '../../public/linkedin.jpeg';
import youtubeIcon from '../../public/youtube.jpeg';

const Footer = () => {
    const socialMediaLinks = [
        { icon: whatsappIcon, url: 'https://wa.me/' },
        { icon: instagramIcon, url: 'https://www.instagram.com/' },
        { icon: facebookIcon, url: 'https://www.facebook.com/' },
        { icon: twitterIcon, url: 'https://twitter.com/' },
        { icon: linkedinIcon, url: 'https://www.linkedin.com/' },
        { icon: youtubeIcon, url: 'https://www.youtube.com/' },
    ];

    const styles = {
        footer: {
            textAlign: 'center',
            padding: '40px 20px',
            backgroundColor: '#f4f4f4',
            borderTop: '1px solid #ddd',
        },
        logo: {
            height: '80px',
            marginBottom: '20px',
        },
        socialLinks: {
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '20px',
        },
        socialIcon: {
            height: '40px',
            cursor: 'pointer',
        },
        copyright: {
            fontSize: '14px',
            color: '#555',
        },
    };

    return (
        <footer style={styles.footer}>
            <img src={maroonLogo} alt="Maroon Digital Rise" style={styles.logo} />
            <p>Follow & Connect us on</p>
            <div style={styles.socialLinks}>
                {socialMediaLinks.map((link, index) => (
                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                        <img src={link.icon} alt="Social Icon" style={styles.socialIcon} />
                    </a>
                ))}
            </div>
            <p style={styles.copyright}>
                © All Rights Reserved by Maroon: Digital Rise
            </p>
        </footer>
    );
};

export default Footer;
