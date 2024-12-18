import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import PlaceIcon from '@mui/icons-material/Place';
import CircleIcon from '@mui/icons-material/Circle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
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
import axiosInstance, { businessListingAxiosInstance } from '../../js/api'
import EmailIcon from '@mui/icons-material/Email';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FavoriteIcon from '@mui/icons-material/Favorite';

//components
import Header from '../../components/HeaderStyle/Header';
import Footer from '../../components/FooterStyle/Footer';
import HomeAboutUs from '../../components/HomeAboutUs';

//IMG
import photo1 from '../../assets/company-img.jpeg';
import photo2 from '../../assets/company-img.jpeg';

const BusinessReview = () => {
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


    const handleAddFavoriteClick = async () => {
        try {
            const requestData = {
                business_listing_id: business_id,
            };

            const apiEndpoint = isFavorite ? '/remove-favorite' : '/add-favorite';

            const response = await businessListingAxiosInstance.post(apiEndpoint, requestData);

            toast.success('Business ' + (isFavorite ? 'removed from' : 'added to') + ' favorites successfully:', response.data);

            setIsFavorite(!isFavorite);
        } catch (error) {
            toast.error('Error ' + (isFavorite ? 'removing' : 'adding') + ' business to favorites');
            console.error('Error ' + (isFavorite ? 'removing' : 'adding') + ' business to favorites:', error);
        }
    };

    const fetchFavData = async () => {
        try {
            const response = await businessListingAxiosInstance.get('/get-favorite');
            console.log(response.data.data)
        } catch (error) {
            console.error('Error in Getting Business Data:', error);
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

            // console.log("Fetched business data:", fetchedBusinessData);

            setBusinessData(fetchedBusinessData);
            setLocationData(fetchedLocationData);
            setContactData(fetchedLocationData.contact);
            setReviewData(fetchedBusinessData.review_stats);
            setListNumber(data.pagination.total);
        } catch (error) {
            console.error('Error in Getting Business Data:', error);
        }
    };

    const fetchReviewsData = async () => {
        try {
            const response = await businessListingAxiosInstance.get(`/get-reviews?business_listing_id=${business_id}`);
            const fetchedReviewsData = response.data.data;
            setUserReviewData(fetchedReviewsData)
            // console.log("Fetched Reviews data:", fetchedReviewsData);
        } catch (error) {
            console.error('Error in Getting Reviews Data:', error);
        }
    };

    useEffect(() => {
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

            // Check if review and rating are provided
            if (!review || rating === 0) {
                // Handle error, e.g., show a message to the user
                toast.error('Please provide both review and rating.');
                return;
            }

            // Make a POST request to the "/create-review" endpoint
            const requestData = {
                business_listing_id: business_id,
                comment: review,
                rating,
            };

            const response = await businessListingAxiosInstance.post('/create-review', requestData);
            toast.success('Review submitted successfully');
            setReview('');
            setRating(0);
            fetchBusinessData();
        } catch (error) {
            // Handle errors (e.g., show an error message)
            console.error('Error submitting review:', error);
            toast.error('Error submitting review. Please try again.');
        }
    };

    return (
        <>
            <Helmet>
                <title>Business Company View</title>
                <meta name="description" content="Your meta description" />
            </Helmet>
            <Header />
            <Container sx={{ textAlign: 'start', mt: 4 }}>
                <Row className='mt-2'>
                    <Col md={12} className='mt-3'>
                        <div style={{ border: '1px solid #a1a1a1', borderRadius: '5px' }}>
                            <div className='p-3'>
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
                                                <div className=''>
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
                                            <Col md={4}>
                                                <div className='d-flex justify-content-between mt-3'>
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
                                                        value={replyInputs[index] || ''} // Ensure value is not undefined
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
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <HomeAboutUs />
            <Footer />
        </>
    );
};

export default BusinessReview;
