import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Style
import '../index.css';

// Testing Img
import brand1 from '../assets/brands-post/brand-1.jpeg';
import brand2 from '../assets/brands-post/brand-2.jpeg';
import brand3 from '../assets/brands-post/brand-3.jpeg';

const HomeBrandsSlider = () => {
    // Array of brand images
    const brandImages = [brand1, brand2, brand3, brand1];

    // Slick settings
    const slickSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Container sx={{ textAlign: 'start' }} className="margintop">
            <Typography variant="h5" sx={{ fontWeight: '500', mb: '20px' }}>
                Popular Brands
            </Typography>
            <Slider {...slickSettings}>
                {brandImages.map((brandImg, index) => (
                    <div key={index} className="slick-slide px-2">
                        <img src={brandImg} alt={`Brand ${index + 1}`} />
                    </div>
                ))}
            </Slider>
        </Container>
    );
};

export default HomeBrandsSlider;
