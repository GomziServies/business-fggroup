import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// Style
import '../index.css';

const HomeAboutUs = () => {

    return (
        <Container sx={{ textAlign: 'start' }} className="margintop">
            <Typography variant="h5" sx={{ fontWeight: '500', mb: '20px' }}>
                FG Group: Your One-Stop Solution for Fitness Success
            </Typography>
            <Typography variant='h6' sx={{ fontSize: '14px', fontWeight: '500', mt: 2, color: '#5d5d5d' }}>Forget the hassle, focus on your fitness goals. FG Group simplifies your entire wellness journey with a comprehensive platform built for both individuals and businesses.</Typography>
            <Typography variant='h6' sx={{ fontSize: '14px', fontWeight: '500', mt: 2, color: '#5d5d5d' }}>Whether you're a gym owner, personal trainer, fitness instructor, dietitian, or nutritionist, we empower you to reach your full potential. Our all-in-one solution connects you with a dedicated network of professionals and clients, streamlining operations and maximizing results.</Typography>
        </Container>
    );
};

export default HomeAboutUs;
