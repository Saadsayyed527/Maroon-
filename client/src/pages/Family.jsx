import React from 'react';
import Heading from '../components/Heading';
// import Footer from './Footer';

const Family = () => {
    return (
        <div style={styles.body}>
            
            {/* <div style={styles.title}>Join the Maroon Family</div> */}
            <Heading text="Join the Maroon Family" variant="style2" />
            <div style={styles.container} className='flex gap-32'>
                <div style={styles.left}>
                   
                    
                    <p>Looking for an exciting opportunity to grow and make an impact in the digital world? We’re always on the lookout for passionate individuals who are ready to innovate, create, and rise with us! 🚀</p>
                    <p>📸 <strong><a href="#">Follow Us on LinkedIn</a></strong></p>
                    <p>Stay updated with our latest career opportunities, industry insights, and team highlights. Your next big break could be just a click away!</p>
                    <p>📩 <strong><a href="#">Connect with Us</a></strong></p>
                    <p>Have the talent we’re looking for? Send us your resume and portfolio at <a href="mailto:maroondigitalrise@gmail.com">maroondigitalrise@gmail.com</a>.</p>
                    <p>Let’s create something extraordinary together! ✨ <a href="#">Your Rise Begins Here!</a></p>
                </div>
                <div style={styles.right}>
                   <img src="Hiring-careers.png" alt="Maroon Family Illustration"  width="400px" />
                </div>
            </div> 
            {/* <Footer/> */}
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
    header: {
        backgroundColor: '#fff',
        padding: '20px 50px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #ddd',
    },
    logo: {
        fontSize: '24px',
        fontWeight: 600,
        color: '#c1272d',
    },
    logoSmall: {
        fontSize: '16px',
    },
    nav: {
        display: 'flex',
        gap: '20px',
    },
    container: {
        display: 'flex',
        width: '90%',
        margin: '40px auto',
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '10px',
        // boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        alignItems: 'center',
    },
    left: {
        width:'50%',
        border:'1px solid black',
        borderRadius:'10px',
        padding:'10px'
    },
    right: {
        // flex: 1,
        // width:'500px',
        padding:'15px',
        textAlign: 'center',
    },
    title: {
        fontSize: '40px',
        fontWeight: 600,
        textAlign: 'center', // Optional, ensures the text is centered within the title

    },
    backBtn: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
        cursor: 'pointer',
    },
    link: {
        color: '#2a69ac',
        textDecoration: 'underline',
    },
};

export default Family;