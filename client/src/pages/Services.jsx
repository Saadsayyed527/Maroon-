import React, { useState } from 'react';
import ServicesAccordion from "../components/ServicesAccordion";
import Heading from '../components/Heading';

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

    const styles = {
        body: {
            fontFamily: 'Arial, sans-serif',
            margin: 0,
            padding: 0,
        },
        services: {
            textAlign: 'center',
            padding: '50px 0',
        },
        servicesTitle: {
            fontSize: '128px',
            marginBottom: '40px',
        },
        serviceList: {
            listStyle: 'none',
            padding: 0,
            fontSize: '80px',
            fontWeight: '800', // Corrected to camelCase
            margin: 0,
            color:'#D8A25E'
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

    return (
        <>
            <div style={styles.body}>
                <div style={styles.services}>
                    {/* <h1 style={styles.servicesTitle}>Our Services</h1> */}
                    <Heading text="Our Services" variant="style2" />
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
            <div>
                <ServicesAccordion />
            </div>
        </>
    );
};

export default Services;
