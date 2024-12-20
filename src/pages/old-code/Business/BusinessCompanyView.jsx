import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import StarIcon from '@mui/icons-material/Star';
import PlaceIcon from '@mui/icons-material/Place';
import CircleIcon from '@mui/icons-material/Circle';
import ShareIcon from '@mui/icons-material/Share';
import "yet-another-react-lightbox/styles.css";
import LanguageIcon from '@mui/icons-material/Language';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Video from 'yet-another-react-lightbox/plugins/video';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import { Button, Col, Row } from 'react-bootstrap';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Input from '@mui/material/Input';
import { Helmet } from 'react-helmet';
import { businessListingAxiosInstance } from '../../js/api'
import EmailIcon from '@mui/icons-material/Email';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import '../../assets/css/animation.css'
import { Hourglass } from 'react-loader-spinner'
import CallIcon from '@mui/icons-material/Call';
import validator from 'validator';

//components
import Header from '../../components/HeaderStyle/Header';
import Footer from '../../components/FooterStyle/Footer';
import HomeAboutUs from '../../components/HomeAboutUs';

const ListingBusiness = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const business_id = searchParams.get('business_id');
    const [businessData, setBusinessData] = useState([]);
    const [listNumber, setListNumber] = useState('');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [helpfulCount, setHelpfulCount] = useState(0);
    const [replyInputVisible, setReplyInputVisible] = useState(false);
    const [locationData, setLocationData] = useState([])
    const [contactData, setContactData] = useState([])
    const [reviewData, setReviewData] = useState([])
    const [contacts, setContacts] = useState([]);
    const [timings, setTimings] = useState([]);
    const [services, setServices] = useState([]);
    const [tags, setTags] = useState([]);
    const [faqs, setFaqs] = useState([]);
    const [businessImages, setBusinessImages] = useState([]);
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const [userReviewsData, setUserReviewData] = useState([]);
    const [replyInput, setReplyInput] = useState([]);
    const [replyInputsVisible, setReplyInputsVisible] = useState(new Array(userReviewsData.length).fill(false));
    const [replyInputs, setReplyInputs] = useState(new Array(userReviewsData.length).fill(''));
    const [isFavorite, setIsFavorite] = useState(false);
    const [favoriteList, setFavoriteList] = useState([]);
    const [userData, setUserData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const isValidWebsite = (website) => {
        return validator.isURL(website, { require_protocol: true });
    };

    const getUserData = async () => {
        const getData = JSON.parse(localStorage.getItem('user_info')) || ''
        const userData = getData.user || ''
        setUserData(userData)
    }

    const handleAddFavoriteClick = async () => {
        try {
            let requestData;

            if (isFavorite) {
                requestData = {
                    business_listing_id: business_id,
                };
            } else {
                requestData = {
                    business_listing_id: business_id,
                };
            }

            const apiEndpoint = isFavorite ? '/remove-favorite' : '/add-favorite';

            const response = await businessListingAxiosInstance({
                method: isFavorite ? 'delete' : 'post',
                url: apiEndpoint,
                data: requestData,
            });

            toast.success(`Business ${isFavorite ? 'removed from' : 'added to'} favorites successfully`);

            setIsFavorite(!isFavorite);
        } catch (error) {
            toast.error(`Error Have to login for ${isFavorite ? 'removing' : 'adding'} business to favorites`);
            console.error(`Error Have to login for ${isFavorite ? 'removing' : 'adding'} business to favorites:`, error);
        }
    };

    const fetchFavData = async () => {
        try {
            const response = await businessListingAxiosInstance.get('/get-favorite');
            setFavoriteList(response.data.data);

            const isBusinessInFavorites = response.data.data.some((favorite) => favorite._id === business_id);
            setIsFavorite(isBusinessInFavorites);
        } catch (error) {
            console.error('Error in Getting Favorite Data:', error);
        }
    };

    const settings = {
        dots: false,
        nav: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const fetchBusinessData = async () => {
        try {
            setIsLoading(true);
            const requestData = {
                listing_id: [business_id]
            };

            const response = await businessListingAxiosInstance.post('/get-businesses', requestData);
            const data = response.data.metadata;
            const fetchedBusinessData = response.data.data[0];
            const fetchedLocationData = fetchedBusinessData.locations[0];

            const contacts = fetchedBusinessData.contacts || [];
            setContacts(contacts);
            const timing = fetchedBusinessData.timings || [];
            setTimings(timing)
            const services = fetchedBusinessData.services || [];
            setServices(services)
            const tags = fetchedBusinessData.tags || [];
            setTags(tags)
            const faqs = fetchedBusinessData.faqs || [];
            setFaqs(faqs)
            const business_img = fetchedBusinessData.business_images || [];
            setBusinessImages(business_img)

            setBusinessData(fetchedBusinessData);
            setLocationData(fetchedLocationData);
            setContactData(fetchedLocationData.contact);
            setReviewData(fetchedBusinessData.review_stats);
            setListNumber(data.pagination.total);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.error('Error in Getting Business Data:', error);
        }
    };

    const fetchReviewsData = async () => {
        try {
            const response = await businessListingAxiosInstance.get(`/get-reviews?business_listing_id=${business_id}`);
            const fetchedReviewsData = response.data.data;
            setUserReviewData(fetchedReviewsData)
        } catch (error) {
            console.error('Error in Getting Reviews Data:', error);
        }
    };

    useEffect(() => {
        getUserData()
        fetchBusinessData();
        fetchReviewsData();
        fetchFavData();
    }, []);

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

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

    const slides = businessImages.map((image, index) => ({
        src: "https://files.fggroup.in/" + image,
        caption: `Image ${index + 1}`,
    }));


    const handleHelpfulClick = async (reviewId) => {
        try {
            const requestData = {
                business_listing_id: business_id,
                review_id: reviewId,
                is_helpful: true,
            };
            const response = await businessListingAxiosInstance.patch('/mark-review-helpful', requestData);

            fetchReviewsData();
            toast.success('Review marked as helpful successfully');
        } catch (error) {
            console.error('Error marking review as helpful:', error);
            toast.error('Error marking review as helpful');
        }
    };

    const handleReplyClick = (index) => {
        const updatedReplyInputsVisible = [...replyInputsVisible];
        updatedReplyInputsVisible[index] = true;
        setReplyInputsVisible(updatedReplyInputsVisible);
    };

    const handleCancelReply = (index) => {
        const updatedReplyInputsVisible = [...replyInputsVisible];
        updatedReplyInputsVisible[index] = false;
        setReplyInputsVisible(updatedReplyInputsVisible);
        setReplyInputs(new Array(userReviewsData.length).fill(''));
    };

    const handleReplySubmit = async (index, reviewId) => {
        try {
            if (!replyInputs[index].trim()) {
                console.error('Please provide a non-empty reply.');
                return;
            }

            const requestData = {
                business_listing_id: business_id,
                reply_to: reviewId || null,
                comment: replyInputs[index],
            };
            const response = await businessListingAxiosInstance.post('/create-review', requestData);
            toast.success('Reply submitted successfully');

            const updatedReplyInputsVisible = [...replyInputsVisible];
            updatedReplyInputsVisible[index] = false;
            setReplyInputsVisible(updatedReplyInputsVisible);
            setReplyInputs(new Array(userReviewsData.length).fill(''));
            fetchReviewsData();
        } catch (error) {
            console.error('Error submitting reply:', error);
            toast.error('Error submitting reply');
        }
    };

    const breadcrumbs = [
        <Link key="1" color="inherit" sx={{ textDecoration: 'none' }}>
            {locationData.city}
        </Link>,
        <Link
            key="2"
            color="inherit"
            sx={{ textDecoration: 'none' }}
        >
            {businessData.business_name}
        </Link>,
        <Typography key="3" color="text.primary">
            {listNumber} Listing
        </Typography>,
    ];

    const openLightbox = (index) => {
        setSelectedImage(index);
        setLightboxOpen(true);
    };

    const handleShare = async (locationLink) => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: 'Share Location',
                    text: 'Check out this location!',
                    url: locationLink,
                });
            } else {
                alert(`Share this location: ${locationLink}`);
            }
        } catch (error) {
            console.error('Error sharing location:', error);
        }
    };

    const handleDetailsShare = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: 'Share Details',
                    text: 'Check out This!',
                    url: window.location.href,
                });
            } else {
                alert(`Share Details: ${window.location.href}`);
            }
        } catch (error) {
            console.error('Error Sharing Details:', error);
        }
    };

    const handleSubmitReview = async () => {
        try {
            const authData = localStorage.getItem('authorization');
            if (!authData) {
                const confirmResult = await Swal.fire({
                    icon: 'info',
                    title: 'You need to log in first! click on login Button you see on top Right Side',
                    text: 'Login to submit a review.',
                    showCancelButton: true,
                });
                return;
            }

            if (!review || rating === 0) {
                toast.error('Please provide both review and rating.');
                return;
            }

            const requestData = {
                business_listing_id: business_id,
                comment: review,
                rating,
            };

            const response = await businessListingAxiosInstance.post('/create-review', requestData);
            fetchBusinessData();
            fetchReviewsData();
            toast.success('Review submitted successfully');
            setReview('');
            setRating(0);
        } catch (error) {
            console.error('Error submitting review:', error);
            toast.error('Error submitting review. Please try again.');
        }
    };
    const handleDeleteComment = async (commentId) => {
        // Show confirmation dialog
        const isConfirmed = await Swal.fire({
            title: 'Are you sure?',
            text: 'Once deleted, nobody can see your review!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        });

        // If user confirms, proceed with deletion
        if (isConfirmed.isConfirmed) {
            try {
                await businessListingAxiosInstance.delete(`/delete-review?business_listing_id=${business_id}&review_id=${commentId}`);
                toast.success('Review Deleted Successfully');
                fetchReviewsData();
                fetchBusinessData();
            } catch (error) {
                toast.error('Error deleting comment');
            }
        }
    };

    const handleDeleteReply = async (replyId) => {
        // Show confirmation dialog
        const isConfirmed = await Swal.fire({
            title: 'Are you sure?',
            text: 'Once deleted, nobody can see your reply!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        });

        // If user confirms, proceed with deletion
        if (isConfirmed.isConfirmed) {
            try {
                await businessListingAxiosInstance.delete(`/delete-review?business_listing_id=${business_id}&review_id=${replyId}`);
                toast.success('Reply Deleted Successfully');
                fetchReviewsData();
                fetchBusinessData();
            } catch (error) {
                toast.error('Error deleting Reply');
            }
        }
    };

    const generateMetaKeywords = (businessData) => {
        // Combine tags and services into a comma-separated string
        const tags = businessData?.tags?.join(', ') || '';
        const services = businessData?.services?.join(', ') || '';

        // Combine tags and services and return as keywords
        return `${tags}, ${services}`;
    };

    return (
        <>
            <Helmet>
                <title>{businessData.business_name || 'Business Company View'}</title>
                <meta name="description" content={businessData.business_name || 'Business Company View'} />
                <meta name="keywords" content={generateMetaKeywords(businessData)} />
            </Helmet>
            <Header />
            {isLoading && (
                <div style={{ position: 'fixed', top: '0%', left: '0%', background: '#fff', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '999' }}>
                    <Hourglass
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="hourglass-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        colors={['#599bff', '#ffa842']}
                    />
                </div>
            )}
            <Container sx={{ textAlign: 'start', mt: 4 }}>
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>
                <Typography variant="h5" gutterBottom sx={{ mt: 3, fontWeight: '500', color: '#000' }}>
                    {businessData.business_name}
                </Typography>
                <Row className='mt-2'>
                    <Col md={12} className='mt-3'>
                        <div style={{ border: '1px solid #a1a1a1', borderRadius: '5px' }} className='p-md-3 p-2'>
                            <div className='col-md-8'>
                                <div>
                                    <Typography variant='h5' className='mb-3' sx={{ fontWeight: '500', color: '#000' }}>{businessData.business_name}</Typography>
                                    <div className='d-flex align-items-center'>
                                        <Typography variant='p' className='px-1' sx={{ borderRadius: '2px', backgroundColor: '#2be714', fontSize: '16px' }}>{(reviewData.average_rating && reviewData.average_rating.toFixed(1)) || '0'}</Typography>
                                        <div className='d-flex align-items-center ml-2'>
                                            {[...Array(5)].map((_, index) => (
                                                <StarIcon key={index} sx={{ fontSize: '20px', color: index < reviewData.average_rating ? '#F09000' : '#ccc' }} />
                                            ))}
                                            <Typography variant='p' className='px-1' sx={{ fontSize: '18px', fontWeight: '600' }}>
                                                {reviewData.total_ratings} Rating
                                            </Typography>
                                        </div>
                                    </div>
                                    <div className='d-flex mt-3'>
                                        <PlaceIcon className='text-danger' />
                                        <Typography variant='p' className='pl-3' sx={{ fontSize: '18px', fontWeight: '600' }}>{locationData.address_line_1 || 'No.204'}, {locationData.city || 'surat'}, {locationData.state || 'Gujarat'} {locationData.pin_code || '394107'}</Typography>
                                    </div>
                                    {/* <div className='d-flex mt-3 align-items-center ml-1'>
                                        <CircleIcon className='text-success' sx={{ fontSize: '14px' }} />
                                        <Typography variant='p' className='pl-3' sx={{ fontSize: '18px', fontWeight: '600' }}>Online: 09:00 AM to 06:00 PM</Typography>
                                    </div> */}
                                    <div className='d-flex flex-wrap mt-3'>
                                        <Button className='btn ml-2 mb-2 call-btn-listing' onClick={() => handleCall(contactData.value || '123456789')}>
                                            <CallIcon sx={{ fontSize: '20px' }} /> {contactData.value || '123456798'}
                                        </Button>
                                        <Button className='btn ml-2 mb-2 inquiry-btn-listing' onClick={() => handleInquiry(businessData)}>Send Inquiry</Button>
                                        <Button className='btn ml-2 mb-2 inquiry-btn-listing' onClick={() => handleChat(contactData.value || '1234567891')}>Chat</Button>
                                        <Button className='btn ml-2 mb-2 inquiry-btn-listing'   ><ShareIcon /> Share</Button>
                                        <div className='ml-2' id='fav-div'>
                                            <input
                                                type="checkbox"
                                                id="favorite"
                                                name="favorite-checkbox"
                                                value="favorite-button"
                                                checked={isFavorite}
                                                onChange={handleAddFavoriteClick}
                                                style={{ display: 'none' }}
                                            />
                                            <label htmlFor="favorite" className="container ">
                                                <FavoriteIcon
                                                    sx={{
                                                        color: isFavorite ? 'red' : 'currentColor',
                                                        transform: isFavorite ? 'scale(1.1)' : 'scale(1)',
                                                        animation: isFavorite ? 'heartButton 1s' : 'none',
                                                    }}
                                                />
                                                <div className="action">
                                                    <span className="option-1" style={{ opacity: isFavorite ? 0 : 1 }}>
                                                        Add to Favorites
                                                    </span>
                                                    <span className="option-2" style={{ opacity: isFavorite ? 1 : 0 }}>
                                                        Added to Favorites
                                                    </span>
                                                </div>
                                            </label>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={8} className='mt-3'>
                        <div style={{ border: '1px solid #a1a1a1', borderRadius: '5px' }}>
                            <div className='px-3 pt-3'><Typography variant='h5' className='mb-3' sx={{ fontWeight: '600', color: '#000' }}>Photos</Typography></div>
                            <div className='px-4 pb-3 mx-2'>
                                <Slider {...settings}>
                                    {slides.map((slide, index) => (
                                        <div key={index} onClick={() => openLightbox(index)} style={{ cursor: 'pointer' }}>
                                            <div className='mx-2'>
                                                <img src={slide.src} alt={slide.caption} style={{ width: '100%', borderRadius: '5px' }} />
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                                <Lightbox
                                    open={lightboxOpen}
                                    close={() => setLightboxOpen(false)}
                                    slides={slides}
                                    currentIndex={selectedImage}
                                    plugins={[Captions, Fullscreen, Slideshow, Video, Zoom]}
                                />
                            </div>
                            {timings.length > 0 && (
                                <div>
                                    <div style={{ border: '1px solid #B8B8B8' }}></div>
                                    <div className='p-3'>
                                        <Typography variant='h5' className='mb-2' sx={{ fontWeight: '600', color: '#000' }}>Timings</Typography>
                                        <Row>
                                            <Col md={2} xs={4}>
                                                {timings.map((day, index) => (
                                                    <Typography key={index} variant='p' className='mb-2 d-block' sx={{ fontWeight: '500', fontSize: '18px' }}>{day.title}</Typography>
                                                ))}
                                            </Col>
                                            <Col md={8} xs={8}>
                                                {timings.map((day, index) => (
                                                    <Typography key={index} variant='p' className='mb-2 d-block' sx={{ fontWeight: '500', fontSize: '18px' }}>
                                                        {day.timings.length > 0
                                                            ? (day.timings[0].from_time !== '00:00' && day.timings[0].to_time !== '00:00')
                                                                ? `${day.timings[0].from_time} to ${day.timings[0].to_time}`
                                                                : 'Closed'
                                                            : 'Closed'
                                                        }
                                                    </Typography>
                                                ))}
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            )}
                            {services.length > 0 && (
                                <div>
                                    <div style={{ border: '1px solid #B8B8B8' }}></div>
                                    <div className='p-3'>
                                        <Typography variant='h5' className='mb-2' sx={{ fontWeight: '600', color: '#000' }}>Services</Typography>
                                        <ul className='p-0'>
                                            {services.map((service, index) => (
                                                <li key={index} className='mb-2 d-block' style={{ fontWeight: '500', fontSize: '18px' }}>
                                                    <CircleIcon sx={{ fontSize: '10px', color: '#656565' }} /> {service}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                            <div style={{ border: '1px solid #B8B8B8' }}></div>
                            <div className='p-3' id='review'>
                                <Typography variant='h5' className='mb-3' sx={{ fontWeight: '600', color: '#000' }}>Reviews & Ratings</Typography>
                                <div className='d-flex align-items-center'>
                                    <Typography
                                        variant='p'
                                        className='px-2'
                                        sx={{
                                            borderRadius: '5px',
                                            backgroundColor: '#2be714',
                                            fontSize: '56px',
                                            color: '#000'
                                        }}
                                    >
                                        {(reviewData.average_rating && reviewData.average_rating.toFixed(1)) || '0'}
                                    </Typography>
                                    <div>
                                        <Typography variant='p' className='px-1' sx={{ fontSize: '28px', fontWeight: '600', ml: 2, color: '#232323', display: 'block' }}>{reviewData.total_ratings} Rating</Typography>
                                        <Typography variant='p' className='px-1' sx={{ fontSize: '18px', fontWeight: '500', ml: 2, display: 'block', color: '#000' }}>FG Group rating index based on {reviewData.total_ratings} ratings across the web</Typography>
                                    </div>
                                </div>
                                <Typography variant='h6' className='mb-1 mt-4' sx={{ fontWeight: '500' }}>User Reviews</Typography>
                                {/* <div className='row' style={{ marginLeft: '0px' }}>
                                    <Typography className='btn w-auto m-1' style={{ backgroundColor: '#cfe2ff', color: '#000', border: '1.5px solid #1070FF', borderRadius: '5px' }}>Relevant</Typography>
                                    <Typography className='btn w-auto m-1' style={{ backgroundColor: '#fff', color: '#000', border: '1.5px solid #1070FF', borderRadius: '5px' }}>Latest</Typography>
                                </div> */}
                                {userReviewsData.map((review, index) => (
                                    <div className='review-box mt-3 border-bottom pb-2'>
                                        <div key={index} className=''>
                                            <div className='d-flex align-items-center mt-3'>
                                                <img
                                                    alt=''
                                                    src={"https://files.fggroup.in/" + review.createdBy_user.profile_image}
                                                    style={{ height: '70px', width: '70px', borderRadius: '100%' }}
                                                />
                                                <div>
                                                    <Typography
                                                        variant='p'
                                                        className='px-1'
                                                        sx={{ fontSize: '20px', fontWeight: '500', ml: 2, display: 'block' }}
                                                    >
                                                        {review.createdBy_user.user_name}
                                                    </Typography>
                                                    <Typography
                                                        variant='p'
                                                        className='px-1'
                                                        sx={{ fontSize: '16px', fontWeight: '500', ml: 2, display: 'block' }}
                                                    >
                                                        {review.helpful_count} {review.helpful_count === 1 ? 'Review' : 'Reviews'}
                                                    </Typography>
                                                </div>
                                            </div>
                                            <div className='d-flex ml-2 mt-3'>
                                                {/* Render stars based on the review rating */}
                                                {Array.from({ length: review.rating }).map((_, starIndex) => (
                                                    <StarIcon key={starIndex} sx={{ fontSize: '30px', color: '#FFAE11' }} />
                                                ))}
                                                {/* Render empty stars for the remaining */}
                                                {Array.from({ length: 5 - review.rating }).map((_, starIndex) => (
                                                    <StarIcon key={starIndex} sx={{ fontSize: '30px', color: '#000' }} />
                                                ))}
                                            </div>
                                            <Typography
                                                variant='p'
                                                className='px-1'
                                                sx={{ fontSize: '18px', fontWeight: '500', mt: 1, display: 'block' }}
                                            >
                                                {review.comment}
                                            </Typography>
                                            <Col md={5}>
                                                <div className='d-flex justify-content-between mt-2'>
                                                    <button
                                                        className=''
                                                        style={{
                                                            fontSize: '20px',
                                                            fontWeight: '500',
                                                            color: review.helpful_count > 0 ? 'green' : 'black',
                                                        }}
                                                        onClick={() => handleHelpfulClick(review._id)}
                                                    >
                                                        <ThumbUpOffAltIcon className='mb-1 mr-1' />
                                                        Helpful {review.helpful_count > 0 && `(${review.helpful_count})`}
                                                    </button>
                                                    <button
                                                        className=''
                                                        style={{ fontSize: '20px', fontWeight: '500' }}
                                                        onClick={() => handleReplyClick(index)}
                                                    >
                                                        <ChatBubbleOutlineIcon className='mb-0' sx={{ fontSize: '20px' }} /> Reply
                                                    </button>
                                                    {review.createdBy_user._id === userData._id && (
                                                        <button
                                                            className=''
                                                            style={{ fontSize: '20px', fontWeight: '500' }}
                                                            onClick={() => handleDeleteComment(review._id)}
                                                        >
                                                            <DeleteIcon className='mb-0' sx={{ fontSize: '20px' }} /> Delete
                                                        </button>
                                                    )}
                                                </div>
                                            </Col>
                                            {review.replies && review.replies.length > 0 && (
                                                <div className='mb-3 mt-2'>
                                                    <Typography variant='h6' sx={{ fontWeight: '500', fontSize: '16px' }}>Replies:</Typography>
                                                    {review.replies.map((reply, replyIndex) => (
                                                        <div key={replyIndex} className='mt-2'>
                                                            <div className='d-flex align-items-center'>
                                                                <img
                                                                    alt=''
                                                                    src={"https://files.fggroup.in/" + reply.createdBy_user.profile_image}
                                                                    style={{ height: '40px', width: '40px', borderRadius: '50%' }}
                                                                />
                                                                <Typography
                                                                    variant='p'
                                                                    className='px-1'
                                                                    sx={{ fontSize: '14px', fontWeight: '500', ml: 2, display: 'block' }}
                                                                >
                                                                    {reply.createdBy_user.user_name}
                                                                </Typography>
                                                            </div>
                                                            <Typography
                                                                variant='body2'
                                                                className='px-1'
                                                                sx={{ fontSize: '14px', fontWeight: '400', mt: 1, display: 'block' }}
                                                            >
                                                                {reply.comment}
                                                            </Typography>
                                                            {reply.createdBy_user._id === userData._id && (
                                                                <button
                                                                    className='mt-2'
                                                                    style={{ fontSize: '16px', fontWeight: '500' }}
                                                                    onClick={() => handleDeleteReply(reply._id)}
                                                                >
                                                                    <DeleteIcon className='mb-0' sx={{ fontSize: '18px' }} /> Delete Reply
                                                                </button>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                            {replyInputsVisible[index] && (
                                                <div className='mt-2'>
                                                    <Input
                                                        placeholder='Your reply...'
                                                        className='form-control'
                                                        onChange={(e) => {
                                                            const updatedReplyInputs = [...replyInputs];
                                                            updatedReplyInputs[index] = e.target.value;
                                                            setReplyInputs(updatedReplyInputs);
                                                        }}
                                                        value={replyInputs[index] || ''}
                                                    />
                                                    <Button
                                                        variant='contained'
                                                        className='btn-primary mt-2 mr-2'
                                                        onClick={() => handleReplySubmit(index, review._id)}
                                                    >Submit</Button>
                                                    <Button
                                                        variant='contained'
                                                        className='btn-secondary mt-2'
                                                        onClick={() => handleCancelReply(index)}
                                                    >Cancel</Button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                                <div className='review-box mt-3 pb-2'>
                                    <div className=''>
                                        <Typography variant='h5' className='px-1' sx={{ fontWeight: '500', display: 'block', color: '#000' }}>
                                            Write Review
                                        </Typography>
                                        <textarea
                                            className='form-control mt-2'
                                            placeholder='Add Review For Service...'
                                            value={review}
                                            onChange={(e) => setReview(e.target.value)}
                                        ></textarea>
                                        <div className='d-flex mt-2'>
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <StarIcon
                                                    key={star}
                                                    sx={{ fontSize: '30px', color: rating >= star ? '#FFAE11' : '#000' }}
                                                    onClick={() => handleRatingChange(star)}
                                                />
                                            ))}
                                        </div>
                                        <div className='mt-2'>
                                            <Button variant='contained' className='btn-submit-review mt-2 mr-2' onClick={handleSubmitReview}>
                                                Submit
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {faqs.length > 0 && (
                                <div>
                                    <div style={{ border: '1px solid #B8B8B8' }}></div>
                                    <div className='p-3'>
                                        <Typography variant='h5' className='mb-3' sx={{ fontWeight: '500', color: '#000' }}>Frequently Asked Questions</Typography>
                                        {faqs.map((faq, index) => (
                                            <Col md={10} key={index}>
                                                <Typography variant='p' className='mb-2 d-block' sx={{ fontWeight: '600', fontSize: '18px', color: '#000' }}>{index + 1}. {faq.question}</Typography>
                                                <Typography variant='p' className='mb-2 d-block' sx={{ fontWeight: '500', fontSize: '18px' }}>{faq.answer}</Typography>
                                            </Col>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </Col>
                    <Col md={4} className='mt-3'>
                        <div style={{ border: '1px solid #a1a1a1', borderRadius: '5px' }} className='p-3'>
                            <div>
                                <Typography variant='h5' className='mb-0' sx={{ fontWeight: '600', color: '#000' }}>Address</Typography>
                                <div className='d-flex mt-2'>
                                    <Typography variant='p' sx={{ fontSize: '18px', fontWeight: '500' }}>{locationData.address_line_1}, {locationData.address_line_2}, {locationData.landmark}, {locationData.city}, {locationData.state} - {locationData.pin_code}</Typography>
                                </div>
                                <Button
                                    className='btn mt-3'
                                    style={{
                                        display: locationData.direction_link ? 'block' : 'none',
                                        backgroundColor: '#E3EEFF',
                                        color: '#000',
                                        border: '1px solid #1070FF',
                                    }}
                                    onClick={() => handleShare(locationData.direction_link)}
                                >
                                    <ShareIcon sx={{ fontSize: '16px' }} /> Share Location
                                </Button>
                                <div className='d-flex mt-3 align-items-center'>
                                    {contacts.map((contact, index) => (
                                        contact.contact_type === 'email' && (
                                            <Typography key={index} variant='p' sx={{ fontSize: '18px', fontWeight: '500' }}>
                                                <EmailIcon sx={{ fontSize: '20px', color: '#3284FF', mb: '3px' }} /> {contact.value}
                                            </Typography>
                                        )
                                    ))}
                                </div>
                                {contacts.map((contact, index) => (
                                    contact.contact_type === 'website' && isValidWebsite(contact.value) && (
                                        <div className='d-flex mt-3 align-items-center'>
                                            <Link key={index} href={contact.value} target="_blank" rel="noopener noreferrer" underline="none" sx={{ cursor: 'pointer' }}>
                                                <Typography variant='p' sx={{ fontSize: '18px', fontWeight: '500' }}>
                                                    <LanguageIcon sx={{ fontSize: '20px', color: '#3284FF', mb: '3px' }} /> {contact.value}
                                                </Typography>
                                            </Link>
                                        </div>
                                    )
                                ))}
                                <div className='d-flex mt-3 align-items-center'>
                                    <Button
                                        className='btn'
                                        style={{
                                            padding: 0,
                                            fontSize: '18px',
                                            background: '#fff',
                                            border: 'none',
                                            color: '#000',
                                        }}
                                        onClick={() => handleDetailsShare()}><ShareIcon sx={{ fontSize: '20px', color: '#3284FF', mb: '3px' }} /> Share Details</Button>
                                </div>
                                <div className='d-flex mt-3 align-items-center'>
                                    <Typography variant='p' sx={{ fontSize: '18px', fontWeight: '500' }}><StarIcon sx={{ fontSize: '20px', color: '#3284FF', mb: '3px' }} /> <a href='#review'>Tap to Review</a></Typography>
                                </div>
                            </div>
                        </div>
                        {tags.length > 0 && (
                            <div style={{ border: '1px solid #a1a1a1', borderRadius: '5px' }} className='p-3 mt-4'>
                                <div>
                                    <Typography variant='h5' className='mb-0' sx={{ fontWeight: '600', color: '#000' }}>Tags</Typography>
                                    <div className='row mt-2'>
                                        {tags.map((tag, index) => (
                                            <Typography key={index} className='btn w-auto m-1' style={{ backgroundColor: '#fff', color: '#000', border: '1.5px solid #1070FF', borderRadius: '5px' }}>
                                                {tag}
                                            </Typography>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
            <HomeAboutUs />
            <Footer />
        </>
    );
};

export default ListingBusiness;
