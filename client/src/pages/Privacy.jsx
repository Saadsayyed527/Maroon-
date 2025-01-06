import React from 'react';
import Heading from '../components/Heading';
import ContactUs from './ContactUs';

const Policy = () => {
    return (
        <div style={styles.body}>
            <div style={styles.container}>
               
                {/* <div style={styles.title}>Privacy Policy</div> */}
                <Heading text="Privacy Policy" variant="style2" />
                <p style={styles.updatedDate}><strong>Last Updated:</strong> 1 January 2024</p>

                <p><strong>Introduction</strong></p>
                <p>Maroon Digital Rise ("Company", "Agency", "We", "Us", or "Our") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or otherwise engage with us.</p>
                <p>By using our services or accessing our website, you agree to the collection and use of information in accordance with this Privacy Policy.</p>

                <div style={styles.sectionTitle}>Information We Collect</div>
                <ul>
                    <li><strong>Personal Information:</strong> Name, email address, phone number, billing information, and any other details you voluntarily provide.</li>
                    <li><strong>Non-Personal Information:</strong> Browser type, operating system, IP address, device information, and browsing behavior on our website.</li>
                    <li><strong>Usage Data:</strong> Information about how you use our services, including activity logs, preferences, and interactions with our website or applications.</li>
                </ul>

                <div style={styles.sectionTitle}>How We Use Your Information</div>
                <ul>
                    <li>To provide, operate, and maintain our services.</li>
                    <li>To process transactions and manage billing.</li>
                    <li>To improve our website, services, and customer support.</li>
                    <li>To send notifications, updates, and promotional communications (with your consent).</li>
                    <li>To comply with legal obligations and prevent fraudulent activities.</li>
                </ul>

                <div style={styles.sectionTitle}>Sharing and Disclosure</div>
                <p>We do not sell, rent, or trade your personal information to third parties. However, we may share information in the following circumstances:</p>
                <ul>
                    <li><strong>Service Providers:</strong> With third-party vendors who assist in providing our services, such as payment processing and IT support.</li>
                    <li><strong>Legal Requirements:</strong> If required by law, to comply with legal processes, or to protect our rights, property, and safety.</li>
                    <li><strong>Business Transfers:</strong> In case of a merger, acquisition, or sale of assets, your information may be transferred as part of the business.</li>
                </ul>

                <div style={styles.sectionTitle}>Data Security</div>
                <p>We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.</p>

                <div style={styles.sectionTitle}>Your Rights</div>
                <ul>
                    <li><strong>Access and Portability:</strong> You have the right to request access to the personal information we hold about you.</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
                    <li><strong>Deletion:</strong> Request deletion of your data, subject to applicable legal requirements.</li>
                    <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications by using the "unsubscribe" link in emails or contacting us directly.</li>
                </ul>

                <div style={styles.sectionTitle}>Third-Party Links</div>
                <p>Our services may contain links to third-party websites. We are not responsible for the privacy practices of those websites. We encourage you to review the privacy policies of any third-party sites you visit.</p>

                <div style={styles.sectionTitle}>Updates to This Privacy Policy</div>
                <p>We reserve the right to update or change this Privacy Policy at any time. Any changes will be effective immediately upon posting the revised policy. We encourage you to review this page periodically for updates.</p>

                <div style={styles.sectionTitle}>Contact Us</div>
                <p>If you have any questions about these Terms and Conditions, You can contact us via email or phone as listed on our official website.</p>

                <div style={styles.sectionTitle}>Acknowledgment</div>
                <p>By using our services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.</p>
            </div>
            <ContactUs />
        </div>
    );
};

const styles = {
    body: {
        fontFamily: `'Poppins', sans-serif`,
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        // backgroundColor: '#f4f4f4',
    },
    container: {
        width: '80%',
        margin: '40px auto',
        backgroundColor: '#fff',
        padding: '30px',
        border:'1px solid black',
        borderRadius: '10px',
        // boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    },
    title: {
        textAlign: 'center',
        fontSize: '32px',
        fontWeight: 600,
    },
    updatedDate: {
        marginTop: '20px',
        fontWeight: 500,
    },
    sectionTitle: {
        marginTop: '30px',
        fontSize: '20px',
        fontWeight: 600,
    },
    backBtn: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
        cursor: 'pointer',
    },
};

export default Policy;
