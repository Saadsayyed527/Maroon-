import React from 'react';
import Heading from '../components/Heading';

const AboutUs = () => {
    return (
        <div style={styles.container}>
            <div style={styles.aboutSection}>
                {/* <h1 style={styles.title}>About Us</h1> */}
                <Heading text="About Us" variant="style2" />
                <div style={styles.aboutContent}>
                    <p>
                        Welcome to <strong>Maroon Digital Rise 🚀</strong>, where your brand’s story takes center stage. We believe every business is already a brand in its own right, and our mission is to make it stronger, more visible, and sustainable in today’s fast-paced digital world.
                    </p>
                    <p>
                        At <strong>Maroon</strong>, we are more than just a digital marketing company – we are your partners in growth. From crafting impactful strategies to executing innovative campaigns, we specialize in creating meaningful connections between you and your audience. Our services range from <strong>social media management, SEO, branding, content creation, and web design</strong>, to ensuring your online presence is unmatched through Google Ads, CRM integration, and online reputation management.
                    </p>
                    <p>
                        Our vibrant and dynamic team combines creativity, technology, and data-driven insights to deliver solutions that make a difference. Whether it’s designing your brand identity, boosting your digital footprint, or driving measurable results, we’re here to help your business thrive.
                    </p>
                    <p>
                        At <strong>Maroon Digital Rise</strong>, we don’t just create brands – we empower them to rise, stand out, and leave a lasting legacy.
                    </p>
                    <p>
                        Let’s make your vision a reality. Let’s <strong>rise together! 🤝</strong>
                    </p>
                </div>
            </div>
            
            <div style={styles.missionVisionContainer}>
                <div style={styles.section}>
                    {/* <h2 style={styles.missionTitle}>Mission</h2> */}
                    <Heading text="Mission" variant="style2" />

                    <p>🚀 "To craft innovative digital solutions that elevate brands, amplify their voices, and foster authentic connections in an ever-evolving world."</p>
                </div>
                <div style={styles.section}>
                    {/* <h2 style={styles.visionTitle}>Vision</h2> */}
                    <Heading text="Vision" variant="style2" />
                    <p>🌟 "To redefine the digital landscape by turning brands into iconic storytellers, empowering them to inspire, lead, and create lasting impressions."</p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        fontFamily: 'Arial, sans-serif',
        margin: '10px 0',
        padding: '20px',
    },
    aboutSection: {
        maxWidth: '900px',
        padding: '10px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0)',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: '48px',
        marginBottom: '20px',
    },
    aboutContent: {
        fontSize: '18px', 
        border :"2px solid black",
        borderRadius:'20px',
        padding:'15px',
        lineHeight: '1.8',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',

    },
    missionVisionContainer: {
        maxWidth: '450px',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        marginTop: '40px',
        
    },
    section: {
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
    },
    missionTitle: {
        fontSize: '32px',
        marginBottom: '15px',
    },
    visionTitle: {
        fontSize: '32px',
        marginBottom: '15px',
    }
};

export default AboutUs;
