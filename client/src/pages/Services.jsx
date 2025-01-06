import React, { useState } from 'react';

const Services = () => {
    const [hoverIndex, setHoverIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoverIndex(index);
    };

    const handleMouseLeave = () => {
        setHoverIndex(null);
    };

    const services = [
        "SOCIAL MEDIA MANAGEMENT",
        "DIGITAL MARKETING",
        "LEGAL DOCUMENTATION",
        "DESIGN & EDITING",
        "BUSINESS ESSENTIALS",
        "WEBSITE DEVELOPMENT",
        "BRANDING",
        "E-COMMERCE"
    ];

    return (
        <div style={styles.body}>
            
            <div style={styles.services}>
                <h1 style={styles.servicesTitle}>Our Services</h1>
                <ul style={styles.serviceList}>
                    {services.map((service, index) => (
                        <li
                            key={index}
                            style={
                                index === hoverIndex
                                    ? { ...styles.serviceItem, ...styles.serviceItemHover }
                                    : styles.serviceItem
                            }
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {service}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const styles = {
    body: {
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: 0,
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: 'white',
        borderBottom: '2px solid #e0e0e0',
    },
    logo: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#a63a00',
    },
    logoSpan: {
        color: 'black',
    },
    nav: {
        display: 'flex',
    },
    navLink: {
        margin: '0 15px',
        textDecoration: 'none',
        color: 'black',
        fontWeight: 'bold',
    },
    services: {
        textAlign: 'center',
        padding: '50px 0',
    },
    servicesTitle: {
        fontSize: '48px',
        marginBottom: '40px',
    },
    serviceList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    serviceItem: {
        fontSize: '24px',
        padding: '20px 0',
        borderBottom: '1px solid #e0e0e0',
        transition: 'background-color 0.3s',
    },
    serviceItemHover: {
        backgroundColor: '#d89b50',
        color: 'white',
    }
};

export default Services;
