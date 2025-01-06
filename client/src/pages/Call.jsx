import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div style={styles.footer}>
            <div style={styles.links}>
                <button
                    onClick={() => handleNavigation('/about')}
                    style={styles.linkButton}
                >
                    About Us
                </button>
                <button
                    onClick={() => handleNavigation('/family')}
                    style={styles.linkButton}
                >
                    Careers
                </button>
                <button
                    onClick={() => handleNavigation('/terms')}
                    style={styles.linkButton}
                >
                    Terms of Services
                </button>
                <button
                    onClick={() => handleNavigation('/policy')}
                    style={styles.linkButton}
                >
                    Privacy Policy
                </button>
            </div>
            <div style={styles.contact}>
                <h4 style={styles.contactTitle}>Contact us</h4>
                <div style={styles.contactItem}>
                    <span style={styles.icon}>📧</span>
                    <a
                        href="mailto:maroondigitalrise@gmail.com"
                        style={styles.contactLink}
                    >
                        maroondigitalrise@gmail.com
                    </a>
                </div>
                <div style={styles.contactItem}>
                    <span style={styles.icon}>📞</span>
                    <a
                        href="tel:+919525511434"
                        style={styles.contactLink}
                    >
                        +91 95525 11434
                    </a>
                </div>
                <div style={styles.contactItem}>
                    <span style={styles.icon}>📞</span>
                    <a
                        href="tel:+917218358766"
                        style={styles.contactLink}
                    >
                        +91 72183 58766
                    </a>
                </div>
            </div>
        </div>
    );
};

const styles = {
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: '20px 40px',
        backgroundColor: '#f4f4f4',
        borderTop: '1px solid #ddd',
    },
    links: {
        flex: 1,
    },
    linkButton: {
        background: 'none',
        border: 'none',
        color: '#000',
        textDecoration: 'underline',
        margin: '10px 0',
        display: 'block',
        fontSize: '16px',
        cursor: 'pointer',
    },
    contact: {
        flex: 2,
        textAlign: 'left',
    },
    contactTitle: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    contactItem: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
    },
    icon: {
        fontSize: '20px',
        color: '#c27c0e',
        marginRight: '10px',
    },
    contactLink: {
        color: '#000',
        textDecoration: 'none',
        fontSize: '16px',
    },
};

export default Footer;
