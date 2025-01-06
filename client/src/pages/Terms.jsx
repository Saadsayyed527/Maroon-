import React from 'react';
import Heading from '../components/Heading';

const Terms = () => {
    return (
        <div style={styles.body}>
            <div style={styles.container}>
                
                {/* <div style={styles.title}>Terms and Conditions</div> */}
                <Heading text="Terms Of Service" variant="style2" />
                <p style={styles.updatedDate}><strong>Last Updated:</strong> 1 January 2024</p>

                <p><strong>Interpretation and Definitions</strong></p>
                <p><strong>Interpretation</strong><br />
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>

                <p><strong>Definitions</strong><br />
                For the purposes of these Terms and Conditions:</p>
                <ul>
                    <li><strong>Country</strong> refers to: India.</li>
                    <li><strong>Company</strong> (referred to as either "the Company", "the Agency", "We", "Us" or "Our" in this Agreement) refers to Maroon: Digital Rise.</li>
                    <li><strong>Device</strong> means any device that can access the Service, such as a computer, a phone, or a digital tablet.</li>
                    <li><strong>Service</strong> refers to the digital marketing, design, and other related services provided by the Company.</li>
                    <li><strong>Terms and Conditions</strong> (also referred to as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.</li>
                    <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable; as "Customer", or "Client".</li>
                </ul>

                <p><strong>Acknowledgment</strong><br />
                These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms set out the rights and obligations of all users regarding the use of the Service.</p>

                <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service. By accessing or using the Service, You agree to be bound by these Terms. If You disagree with any part of these Terms, then You may not access the Service.</p>

                <p>Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your personal information when You use the Service and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.</p>

                <p><strong>Links to Other Websites</strong><br />
                Our Service may contain links to third-party websites or services that are not owned or controlled by the Company.</p>

                <p>The Company has no control over and assumes no responsibility for the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.</p>

                <p>We strongly advise You to read the terms and conditions and privacy policies of any third-party websites or services that You visit.</p>

                <p><strong>Termination</strong><br />
                We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms.</p>

                <p>Upon termination, Your right to use the Service will cease immediately.</p>

                <p><strong>Refund Policy</strong><br />
                Payments are non-refundable once the invoice has been delivered and payment has been made. No refunds shall be provided for completed services or partially completed services after invoice issuance. Revisions or modifications may be provided at the Company's discretion to ensure customer satisfaction. Exceptions, if any, will be handled on a case-by-case basis, but refunds will not be guaranteed under any circumstance.</p>

                <p><strong>Limitation of Liability</strong><br />
                To the maximum extent permitted by applicable law, in no event shall the Company or its service providers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data, or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software, and/or third-party hardware used with the Service, or otherwise in connection with any provision of these Terms), even if the Company or any service provider has been advised of the possibility of such damages.</p>

                <p><strong>"AS IS" and "AS AVAILABLE" Disclaimer</strong><br />
                The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company expressly disclaims all warranties, whether express, implied, statutory, or otherwise, with respect to the Service.</p>

                <p><strong>Governing Law</strong><br />
                The laws of the Country, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service.</p>

                <p><strong>Disputes Resolution</strong><br />
                If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.</p>

                <p><strong>Changes to These Terms</strong><br />
                We reserve the right to modify or replace these Terms at any time. If a revision is material, We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.</p>

                <p><strong>Contact Us</strong><br />
                If you have any questions about these Terms and Conditions, You can contact us via email or phone as listed on our official website.</p>
            </div>
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
    backBtn: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
        cursor: 'pointer',
    },
};

export default Terms;
