import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import { Button, Col, Row } from 'react-bootstrap';
import { Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { businessListingAxiosInstance } from '../../js/api'
import Link from '@mui/material/Link';
import PlaceIcon from '@mui/icons-material/Place';
import { Box } from '@mui/material';
import Dummy_img from '../assets/dummy-image-square.jpg'


// import { Link } from 'react-router-dom';


//Style 
import '../index.css'

//Testing Img
import activity1 from '../assets/activity-img-1.jpeg'

const HomeRecentActivity = () => {
    const [businessData, setBusinessData] = useState([]);

    const fetchBusinessData = async () => {
        try {
            const requestData = {
                filter: {
                    business_type: ['personal', 'business'],
                },
                sort: {
                    business_name: 'asc',
                    rating: 'desc',
                },
                page: 1,
                limit: 10,
            };

            const response = await businessListingAxiosInstance.post('/get-businesses', requestData);
            const fetchedBusinessData = response.data.data;
            setBusinessData(fetchedBusinessData);
        } catch (error) {
            console.error('Error in Getting Business Data:', error);
        }
    };

    useEffect(() => {
        fetchBusinessData();
    }, []);


    const handleCall = (number) => {
        window.location.href = `tel:${number}`;
    };

    const handleChat = (number) => {
        const whatsappNumber = number;
        if (whatsappNumber) {
            const message = encodeURIComponent('I want to know about your services.');
            window.location.href = `https://wa.me/${whatsappNumber}?text=${message}`;
        }
    };

    const handleBusinessClick = (id) => {
        window.location.href = `/list/company-view?business_id=${id}`;
    };

    return (
        <Container sx={{ textAlign: 'start' }} className='margintop'>
            <Typography variant="h5" sx={{ fontWeight: '500', mb: '0px' }}>Most Popular Business</Typography>
            <Row>
                {businessData.map((business) => (
                    <Col md={4} className='mt-1'>
                        <div style={{ border: '2px solid #01AFEE', padding: '10px', borderRadius: '5px', marginTop: '20px' }}>
                            <div className='row' key={business._id}>
                                <div className='col-md-5'>
                                    <img
                                        alt=''
                                        src={'https://files.fggroup.in/' + business.business_images[0]}
                                        style={{ width: '100%', height: 'auto' }}
                                        onError={(e) => {
                                            e.target.src = Dummy_img;
                                        }}
                                    />
                                </div>
                                <div className='col-md-7  p-md-0'>
                                    <Box>
                                        <Typography
                                            variant='h6'
                                            className='mb-2'
                                            sx={{ fontWeight: '500', cursor: 'pointer', color: '#000' }}
                                            onClick={() => handleBusinessClick(business._id)}
                                        >
                                            {business.business_name}
                                        </Typography>
                                        <div className='d-flex align-items-center'>
                                            <Typography variant='p' className='px-1' sx={{ borderRadius: '2px', backgroundColor: '#2be714', fontSize: '14px' }}>
                                                {(business.review_stats.average_rating && business.review_stats.average_rating.toFixed(1)) || '0'}
                                            </Typography>
                                            <div className='d-flex align-items-center'>
                                                {[...Array(5)].map((_, index) => (
                                                    <StarIcon key={index} sx={{ fontSize: '19px', color: index < business.review_stats.average_rating ? '#F09000' : '#ccc' }} />
                                                ))}
                                                <Typography variant='p' className='px-1' sx={{ fontSize: '14px', fontWeight: '500' }}>
                                                    {business.review_stats.total_ratings} Rating
                                                </Typography>
                                            </div>
                                        </div>
                                        <div className='d-flex mt-2'>
                                            <WhatsAppIcon className='text-success' />
                                            <Typography variant='p' className='pl-3' sx={{ fontSize: '16px', fontWeight: '500' }}>{business.locations[0].contact.value}</Typography>
                                        </div>
                                        <div className='d-flex mt-2'>
                                            <Button className='btn call-btn-listing border-0' onClick={() => handleCall(business.locations[0].contact.value)}>
                                                {business.locations[0].contact.value}
                                            </Button>
                                            <Button className='btn inquiry-btn-listing px-3 py-1 rounded-1 ml-2' onClick={() => handleChat(business.locations[0].contact.value)}>Chat</Button>
                                        </div>
                                    </Box>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default HomeRecentActivity;
