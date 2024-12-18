import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NotFoundIMG from '../../assets/not-found.png'
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import PlaceIcon from '@mui/icons-material/Place';
import { Button, Col, Row } from 'react-bootstrap';
import { businessListingAxiosInstance } from '../../js/api'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

//components
import Header from '../../components/HeaderStyle/Header';
import Footer from '../../components/FooterStyle/Footer';

const UserFavorites = () => {
    const [businessData, setBusinessData] = useState([]);

    const fetchFavData = async () => {
        try {
            const response = await businessListingAxiosInstance.get('/get-favorite');
            const fetchedBusinessData = response.data.data;
            setBusinessData(fetchedBusinessData);
        } catch (error) {
            console.error('Error in Getting Favorite Data:', error);
        }
    };

    useEffect(() => {
        fetchFavData();
    }, []);

    const handleCall = (number) => {
        window.location.href = `tel:${number}`;
    };

    const handleInquiry = (business) => {
        // Implement your logic for sending an email inquiry
        const email = business.contacts.find((contact) => contact.contact_type === 'email')?.value;
        if (email) {
            window.location.href = `mailto:${email}?subject=Inquiry&body=I want to know more about your services.`;
        }
    };

    const handleChat = (number) => {
        // Implement your logic for opening WhatsApp chat
        const whatsappNumber = number;
        if (whatsappNumber) {
            const message = encodeURIComponent('I want to know about your services.');
            window.location.href = `https://wa.me/${whatsappNumber}?text=${message}`;
        }
    };

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/">
            User
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
        >
            User Option
        </Link>,
        <Typography key="3" color="text.primary">
            User Favorites
        </Typography>,
    ];

    const handleBusinessClick = (id) => {
        window.location.href = `/list/company-view?business_id=${id}`;
    };

    const handleDeleteBusiness = async (business_id) => {
        try {
            let requestData = {
                business_listing_id: business_id,
            };

            const apiEndpoint = '/remove-favorite';

            const response = await businessListingAxiosInstance({
                method: 'delete',
                url: apiEndpoint,
                data: requestData,
            });

            toast.success(`Business removed from favorites List successfully`);
            fetchFavData();
        } catch (error) {
            toast.error(`Error removing business to favorites`);
            console.error(`Error removing business to favorites:`, error);
        }
    };

    return (
        <>
            <Helmet>
                <title>User Favorites</title>
                <meta name="description" content="Your meta description" />
            </Helmet>
            <Header />
            <Container sx={{ textAlign: 'start', mt: 4, mb: 4 }}>
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>
                <Typography variant="h4" gutterBottom sx={{ mt: 3 }}>
                    My Favorites
                </Typography>
                <div>
                    {businessData && businessData.length > 0 ? (
                        businessData.map((business) => (
                            <Col md={12} className='mt-3'>
                                <div style={{ border: '1px solid #a1a1a1', borderRadius: '5px' }}>
                                    <div className='row align-items-center' key={business._id}>
                                        <div className='col-md-2'>
                                            <img alt='' src={'https://files.fggroup.in/' + business.business_images[0]} style={{ width: '100%', height: 'auto' }} />
                                        </div>
                                        <div className='col-md-8 px-0 py-2'>
                                            <Box sx={{ ml: { xs: 0, md: 1 }, px: { xs: 3, md: 1 } }}>
                                                <Typography
                                                    variant='h5'
                                                    className='mb-3'
                                                    sx={{ fontWeight: '500', cursor: 'pointer', color: '#000' }}
                                                    onClick={() => handleBusinessClick(business._id)}
                                                >
                                                    {business.business_name}
                                                </Typography>
                                                <div className='d-flex align-items-center'>
                                                    <Typography variant='p' className='px-1' sx={{ borderRadius: '2px', backgroundColor: '#2be714', fontSize: '16px' }}>
                                                        {(business.review_stats.average_rating && business.review_stats.average_rating.toFixed(1)) || '0'}
                                                    </Typography>
                                                    <div className='d-flex ml-2'>
                                                        <StarIcon sx={{ fontSize: '20px', color: '#F09000' }} />
                                                        <StarIcon sx={{ fontSize: '20px', color: '#F09000' }} />
                                                        <StarIcon sx={{ fontSize: '20px', color: '#F09000' }} />
                                                        <StarIcon sx={{ fontSize: '20px', color: '#F09000' }} />
                                                        <StarHalfIcon sx={{ fontSize: '20px', color: '#F09000' }} />
                                                    </div>
                                                    <Typography variant='p' className='px-1' sx={{ fontSize: '18px', fontWeight: '500' }}>
                                                        {business.review_stats.total_ratings} Rating
                                                    </Typography>
                                                </div>
                                                <div className='d-flex mt-md-3 mt-2'>
                                                    <PlaceIcon className='text-danger' />
                                                    <Typography variant='p' className='pl-3' sx={{ fontSize: '18px', fontWeight: '500' }}>
                                                        {business.locations[0].address_line_1}, {business.locations[0].city}, {business.locations[0].state} {business.locations[0].pin_code}
                                                    </Typography>
                                                </div>
                                                <div className='d-md-flex mt-md-3 mt-2'>
                                                    <Button className='btn ml-1 call-btn-listing' onClick={() => handleCall(business.locations[0].contact.value)}>
                                                        {business.locations[0].contact.value}
                                                    </Button>
                                                    <Button className='btn ml-1 inquiry-btn-listing' onClick={() => handleInquiry(business)}>Send Inquiry</Button>
                                                    <Button className='btn btn-primary ml-1' onClick={() => handleChat(business.locations[0].contact.value)}>Chat</Button>
                                                    <Button
                                                        className='btn ml-1 mt-md-0 mt-2'
                                                        onClick={() => handleDeleteBusiness(business._id)}
                                                    >
                                                        <DeleteIcon />
                                                    </Button>
                                                </div>
                                            </Box>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))
                    ) : (
                        <div style={{ border: '2px solid #ddd', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
                            <div className='text-center'>
                                <img alt='' src={NotFoundIMG} className='w-80 m-auto' />
                                <h4>No Favorites to show</h4>
                                <p style={{ fontWeight: '500' }}>Add items to Favorites</p>
                            </div>
                        </div>
                    )}
                </div>
            </Container>
            <Footer />
        </>
    );
};

export default UserFavorites;
