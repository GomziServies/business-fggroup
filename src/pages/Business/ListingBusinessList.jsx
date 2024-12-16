import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import { Helmet } from 'react-helmet';
import { businessListingAxiosInstance } from '../../js/api'
import NotFoundIMG from '../../assets/not-found.png'


//components
import Header from '../../components/HeaderStyle/Header';
import Footer from '../../components/FooterStyle/Footer';
import HomeBlogs from '../../components/HomeBlogs';
import HomeAboutUs from '../../components/HomeAboutUs';
import { Button, Col, Row } from 'react-bootstrap';

//IMG
import activity1 from '../../assets/company-img.jpeg'
import { Box } from '@mui/material';

const ListingBusiness = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const search = searchParams.get('search');
    const city = searchParams.get('city');
    const [businessData, setBusinessData] = useState([]);
    const [listNumber, setListNumber] = useState('');
    const [selectedRating, setSelectedRating] = useState('');
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    const fetchBusinessData = async (pageNumber) => {
        try {
            const requestData = {
                search: search,
                filter: {
                    business_type: ['personal', 'business'],
                    city: city || '',
                    // rating: selectedRating,
                    tags: [search],
                    services: [search],
                },
                sort: {
                    business_name: 'asc',
                    rating: 'desc',
                },
                page: 1,
                limit: 100,
            };

            const response = await businessListingAxiosInstance.post('/get-businesses', requestData);
            const data = response.data.metadata;
            const fetchedBusinessData = response.data.data;

            setBusinessData(fetchedBusinessData);

            setListNumber(data.pagination.total);
            setLoading(false);
        } catch (error) {
            console.error('Error in Getting Business Data:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        setLoading(true);
        fetchBusinessData(page);
    }, [page, selectedRating, search, city]);

    const [shortBy, setShortBy] = React.useState('');

    const handleChange = (event) => {
        const selectedRating = event.target.value;
        setSelectedRating(selectedRating);
        setBusinessData([]);
    };

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        ) {
            // User has scrolled to the bottom, load more data
            setPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Ensure that the effect runs only once


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

    const handleBusinessClick = (id) => {
        window.location.href = `/list/company-view?business_id=${id}`;
    };

    const breadcrumbs = [
        <Link key="1" color="inherit" sx={{ textDecoration: 'none' }}>
            {city || 'All India'}
        </Link>,
        <Link
            key="2"
            color="inherit"
            sx={{ textDecoration: 'none' }}
        >
            {search}
        </Link>,
        <Typography key="3" color="text.primary">
            {listNumber} Listing
        </Typography>,
    ];

    return (
        <>
            <Helmet>
                <title>Listing Search</title>
                <meta name="description" content="Your meta description" />
            </Helmet>
            <Header />
            <Container sx={{ textAlign: 'start', mt: 4, mb: 4 }}>
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>
                <Typography variant="h5" gutterBottom sx={{ mt: 3, fontWeight: '500', textTransform: 'capitalize', color: '#000' }}>
                    {search}
                </Typography>
                <div className='mt-3 d-flex'>
                    <div className='ml-2'>
                        <FormControl sx={{ m: 0, minWidth: 120 }} size="small">
                            <InputLabel id="demo-select-small-label">Rating</InputLabel>
                            <Select
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={shortBy}
                                label="Short By"
                                onChange={handleChange}
                            >
                                <MenuItem value={'3'}>3.5 +</MenuItem>
                                <MenuItem value={'4'}>4.0 +</MenuItem>
                                <MenuItem value={'4.5'}>4.5 +</MenuItem> {/* Corrected value */}
                                <MenuItem value={'5'}>5.0</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <Row className='mt-2'>
                    {businessData && businessData.length > 0 ? (
                        businessData.map((business) => (
                            <Col md={6} className='mt-3'>
                                <div style={{ border: '1px solid #a1a1a1', borderRadius: '5px' }}>
                                    <div className='row' key={business._id}>
                                        <div className='col-md-8 px-3 py-2 order-2 order-md-1'>
                                            <Box sx={{ ml: { xs: 0, md: 1 } }}>
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
                                                <div className='d-flex mt-3'>
                                                    <PlaceIcon className='text-danger' />
                                                    <Typography variant='p' className='pl-3' sx={{ fontSize: '18px', fontWeight: '500' }}>
                                                        {business.locations[0].address_line_1}, {business.locations[0].city}, {business.locations[0].state} {business.locations[0].pin_code}
                                                    </Typography>
                                                </div>
                                                <div className='d-flex mt-3'>
                                                    <Button className='btn ml-1 call-btn-listing border-0' onClick={() => handleCall(business.locations[0].contact.value)}>
                                                        {business.locations[0].contact.value}
                                                    </Button>
                                                    <Button className='btn ml-1 inquiry-btn-listing' onClick={() => handleInquiry(business)}>Send Inquiry</Button>
                                                    <Button className='btn inquiry-btn-listing ml-1' onClick={() => handleChat(business.locations[0].contact.value)}>Chat</Button>
                                                </div>
                                            </Box>
                                        </div>
                                        <div className='col-md-4 order-1 order-md-2'>
                                            <img alt='' src={'https://files.fggroup.in/' + business.business_images[0]} style={{ width: '100%', height: 'auto' }} />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))
                    ) : (
                        <div style={{ padding: '20px', borderRadius: '10px', }}>
                            <div className='text-center'>
                                <img alt='' src={NotFoundIMG} className='w-80 m-auto' />
                                <h4>Business Not Found</h4>
                            </div>
                        </div>
                    )}
                </Row>
                {loading && <p>Loading...</p>}
            </Container>
            <HomeBlogs />
            <HomeAboutUs />
            <Footer />
        </>
    );
};

export default ListingBusiness;
