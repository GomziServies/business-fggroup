import React from 'react';
import Container from '@mui/material/Container';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Style
import '../index.css';

//Img Import
import Banner1 from '../assets/banner-1.jpg'
import Banner2 from '../assets/banner-2.jpg'


const SearchOptionAndBannerSection = () => {

    // Array of brand images
    const brandImages = [Banner1, Banner2];

    // Slick settings
    const slickSettings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    speed: 100,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    };

    return (
        <Container sx={{ textAlign: 'start', mt: 4, mb: 4, }}>
            <Row className='mt-4'>
                <Slider {...slickSettings}>
                    {brandImages.map((brandImg, index) => (
                        <div key={index} className="slick-slide px-2">
                            <img src={brandImg} alt={`Brand ${index + 1}`} />
                        </div>
                    ))}
                </Slider>
            </Row>
        </Container>
    );
};

export default SearchOptionAndBannerSection;
