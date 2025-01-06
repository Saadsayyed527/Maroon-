import React, { useState } from 'react';

const SocialMedia = () => {
    const [accordionActive, setAccordionActive] = useState(false);

    const toggleAccordion = () => {
        setAccordionActive(!accordionActive);
    };

    const services = [
        {
            icon: '📸',
            title: 'Instagram Management',
            description: 'Transform into a masterpiece—grow, engage, and inspire with Instagram strategies that work.',
        },
        {
            icon: 'in',
            title: 'LinkedIn Management',
            description: 'Build connections that count: enhance your professional presence with LinkedIn strategies that lead to growth.',
        },
        {
            icon: '▶️',
            title: 'YouTube Management',
            description: 'Lights, camera, action—watch your channel grow with optimized YouTube content and strategies.',
        },
        {
            icon: '👥',
            title: 'Facebook Management',
            description: 'Be where your audience is—dominate the conversation with smart and engaging Facebook campaigns.',
        },
        {
            icon: '📱',
            title: 'WhatsApp Management',
            description: 'Stay closer to your customers—engage, respond, and build trust with seamless WhatsApp strategies.',
        },
        {
            icon: '𝕏',
            title: 'Twitter(X) Management',
            description: 'Say it in 280 characters or less—build your audience with impactful Twitter strategies.',
        },
    ];

    return (
        <div style={styles.body}>
           

            <main style={styles.mainContent}>
              
                <h1 style={styles.title}>SOCIAL MEDIA MANAGEMENT</h1>

                <div style={styles.servicesGrid}>
                    {services.map((service, index) => (
                        <div key={index} style={styles.serviceCard}>
                            <div style={styles.serviceIcon}>
                                <span>{service.icon}</span>
                            </div>
                            <div style={styles.serviceText}>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                            <span style={styles.arrowIcon}>→</span>
                        </div>
                    ))}
                </div>

                <div style={{ ...styles.accordion, ...(accordionActive ? styles.activeAccordion : {}) }}>
                    <div style={styles.accordionHeader} onClick={toggleAccordion}>
                        Digital Marketing final
                    </div>
                    {accordionActive && (
                        <div style={styles.accordionContent}>
                            Hello World
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

const styles = {
    body: {
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },
    header: {
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #eee',
    },
    logo: {
        color: '#800000',
        fontWeight: 'bold',
        fontSize: '24px',
    },
    nav: {
        display: 'flex',
        gap: '20px',
    },
    mainContent: {
        padding: '40px',
    },
    backButton: {
        fontSize: '24px',
        textDecoration: 'none',
        color: '#333',
        marginBottom: '20px',
        display: 'inline-block',
    },
    title: {
        color: '#D4A017',
        fontSize: '32px',
        margin: '20px 0 40px 0',
    },
    servicesGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
    },
    serviceCard: {
        background: '#f5f5f5',
        padding: '20px',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        position: 'relative',
    },
    serviceIcon: {
        width: '50px',
        height: '50px',
        background: '#fff',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    serviceText: {
        h3: {
            marginBottom: '5px',
            fontSize: '16px',
        },
        p: {
            fontSize: '14px',
            color: '#666',
        },
    },
    arrowIcon: {
        position: 'absolute',
        right: '20px',
        color: '#D4A017',
    },
    accordion: {
        marginTop: '40px',
        border: '1px solid #ddd',
        borderRadius: '8px',
    },
    accordionHeader: {
        padding: '15px',
        background: '#f5f5f5',
        cursor: 'pointer',
        userSelect: 'none',
    },
    accordionContent: {
        padding: '15px',
    },
    activeAccordion: {
        borderColor: '#D4A017',
    },
};

export default SocialMedia;
