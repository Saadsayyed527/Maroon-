import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
    // List of client image filenames
    const clientImages = [
        'client1.png',
        'client2.png',
        'client3.png',
        'client4.png',
        'client5.svg',
    ];

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        contactNumber: '',
        companyName: '',
        service: '',
        projectDetails: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/submit-form', formData);
            alert(response.data.message);
            setFormData({
                fullName: '',
                email: '',
                contactNumber: '',
                companyName: '',
                service: '',
                projectDetails: '',
            });
        } catch (error) {
            console.error('Error submitting form', error);
            alert(error.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <div style={styles.body}>
            {/* Header */}
            <h1 style={styles.header}>Our Rising Clients</h1>

            {/* Clients Section */}
            <div style={styles.clientsSection}>
                {clientImages.map((imageName, index) => (
                    <div key={index} style={styles.clientCard}>
                        <img
                            src={`/clients/${imageName}`} // Dynamically generate the image path
                            alt={`Client ${index + 1}`}
                            // style={styles.clientImage}
                            width={"100px"}
                        />
                        <p style={styles.clientText}>View Project</p>
                    </div>
                ))}
            </div>

            {/* Highlight Section */}
            <h2 style={styles.highlightText}>🚀 Take Your Brand to New Heights – Let’s Start Today</h2>

            {/* Main Section */}
            <div style={styles.mainSection}>
                {/* Placeholder Image */}
                <div style={styles.imageContainer}>
                    <img
                        src="contact.png"
                        alt="Contact"
                        style={styles.placeholderImage}
                    />
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} style={styles.formContainer}>
                    <h3 style={styles.formHeader}>Kickstart Your Project</h3>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Your Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        style={styles.input}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Business Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        style={styles.input}
                    />
                    <input
                        type="text"
                        name="contactNumber"
                        placeholder="Your Contact Number"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        style={styles.input}
                    />
                    <input
                        type="text"
                        name="companyName"
                        placeholder="Your Company or Brand Name"
                        value={formData.companyName}
                        onChange={handleChange}
                        style={styles.input}
                    />
                    <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        style={styles.input}
                    >
                        <option value="">Select Service(s)</option>
                        <option value="Website Development">Website Development</option>
                        <option value="Branding">Branding</option>
                        <option value="Marketing">Marketing</option>
                    </select>
                    <textarea
                        name="projectDetails"
                        placeholder="Tell us about your project or needs in brief."
                        value={formData.projectDetails}
                        onChange={handleChange}
                        style={styles.textarea}
                    ></textarea>
                    <button type="submit" style={styles.button}>
                        SUBMIT
                    </button>
                </form>
            </div>

            {/* Footer */}
            <footer style={styles.footer}>
                <div style={styles.footerLinks}>
                    <p>About us</p>
                    <p>Careers</p>
                    <p>Terms of Services</p>
                    <p>Privacy Policy</p>
                </div>
                <div style={styles.footerContact}>
                    <p><strong>Contact us</strong></p>
                    <p>maroondigitalrise@gmail.com</p>
                    <p>+91 95255 11434</p>
                    <p>+91 72183 58766</p>
                </div>
                <div style={styles.logo}>Maroon Digital Rise</div>
                <p>Follow & Connect us on</p>
                <p>© All Rights Reserved by Maroon Digital Rise</p>
            </footer>
        </div>
    );
};

const styles = {
    body: {
        fontFamily: 'Arial, sans-serif',
    },
    header: {
        fontSize: '36px',
        margin: '20px 0',
        textAlign: 'center',
    },
    clientsSection: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '20px',
        padding: '0 20px',
        marginBottom: '40px',
    },
    clientCard: {
        textAlign: 'center',
    },
    clientImage: {
        width: '100%',
        borderRadius: '10px',
    },
    clientText: {
        marginTop: '10px',
        fontWeight: 'bold',
    },
    highlightText: {
        textAlign: 'center',
        fontSize: '24px',
        color: '#d89b50',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    mainSection: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginBottom: '40px',
    },
    imageContainer: {
        width: '400px',
        height: '400px',
    },
    placeholderImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    formContainer: {
        width: '400px',
        textAlign: 'left',
    },
    formHeader: {
        fontSize: '20px',
        marginBottom: '20px',
    },
    input: {
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxSizing: 'border-box',
    },
    textarea: {
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxSizing: 'border-box',
    },
    button: {
        width: '100%',
        padding: '15px',
        backgroundColor: '#d89b50',
        color: '#fff',
        border: 'none',
        fontSize: '16px',
        cursor: 'pointer',
        borderRadius: '5px',
    },
    footer: {
        backgroundColor: '#f4f4f4',
        padding: '20px 0',
        textAlign: 'center',
        marginTop: '20px',
    },
    footerLinks: {
        marginBottom: '10px',
    },
    footerContact: {
        marginBottom: '10px',
    },
    logo: {
        fontSize: '24px',
        color: '#a63a00',
    },
};

export default ContactUs;
