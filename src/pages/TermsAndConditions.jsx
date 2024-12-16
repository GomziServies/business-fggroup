// TermsAndConditions.jsx

import React from 'react';
//components
import Header from '../components/HeaderStyle/Header';
import Footer from '../components/FooterStyle/Footer';
import { Helmet } from 'react-helmet';

const TermsAndConditions = () => {
    return (
        <>
            <Helmet>
                <title>Term and Conditions </title>
                <meta name="description" content="Your meta description" />
            </Helmet>
            <Header />
            <div style={{ textAlign: 'start', padding: '30px' }}>
                <h2>Terms and Conditions</h2>

                <h4 className='mt-4'>1. Introduction</h4>
                <p style={{ fontWeight: '500' }}>
                    Welcome to FG Group Listing! These terms and conditions govern your use of our online business listing platform. By listing your business on our platform, you agree to comply with and be bound by these terms.
                </p>

                <h4 className='mt-4'>2. Listing Eligibility</h4>
                <p style={{ fontWeight: '500' }}>
                    To list your business on FG Group Listing, you must be a legally recognized entity and comply with all applicable laws and regulations. We reserve the right to refuse or remove a listing at our discretion.
                </p>

                <h4 className='mt-4'>3. Listing Information</h4>
                <p style={{ fontWeight: '500' }}>
                    You are responsible for providing accurate and up-to-date information about your business. This includes business name, contact details, services, and any other relevant details. FG Group Listing is not responsible for inaccuracies in the information provided.
                </p>

                <h4 className='mt-4'>4. User Account</h4>
                <p style={{ fontWeight: '500' }}>
                    To list your business, you may need to create a user account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
                </p>

                <h4 className='mt-4'>5. Listing Approval and Removal</h4>
                <p style={{ fontWeight: '500' }}>
                    We reserve the right to approve, reject, or remove any business listing at our sole discretion. Listings that violate these terms or are deemed inappropriate will be removed without notice.
                </p>

                <h4 className='mt-4'>6. Fees and Payments</h4>
                <p style={{ fontWeight: '500' }}>
                    While basic listings may be free, certain features or premium listings may require payment. By using these paid services, you agree to pay the specified fees. Fees are subject to change, and you will be notified of any changes in advance.
                </p>

                <h4 className='mt-4'>7. Content Ownership</h4>
                <p style={{ fontWeight: '500' }}>
                    You retain ownership of the content you submit for your business listing. By providing content, you grant FG Group Listing a non-exclusive, royalty-free, worldwide license to use, display, and promote your business on our platform.
                </p>

                <h4 className='mt-4'>8. Compliance with Laws</h4>
                <p style={{ fontWeight: '500' }}>
                    You agree to comply with all applicable laws and regulations in your jurisdiction and the jurisdictions where your business operates.
                </p>

                <h4 className='mt-4'>9. Termination</h4>
                <p style={{ fontWeight: '500' }}>
                    Either party may terminate the listing agreement at any time. Upon termination, your business listing will be removed from the platform.
                </p>

                <h4 className='mt-4'>10. Limitation of Liability</h4>
                <p style={{ fontWeight: '500' }}>
                    FG Group Listing is not liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with your use of the platform.
                </p>

                <h4 className='mt-4'>11. Changes to Terms and Conditions</h4>
                <p style={{ fontWeight: '500' }}>
                    We reserve the right to modify these terms and conditions at any time. Changes will be effective upon posting on the platform. Continued use of the platform after changes constitutes acceptance of the modified terms.
                </p>

                <p style={{ fontWeight: '500' }}>
                    By listing your business on FG Group Listing, you acknowledge that you have read,
                    understood, and agreed to these terms and conditions. If you have any questions or
                    concerns, please contact us at <a href="mailto:contact@email.com">contact@email.com</a>.
                </p>
            </div>
            <Footer />
        </>
    );
};

export default TermsAndConditions;
