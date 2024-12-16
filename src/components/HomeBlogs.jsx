import React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Col, Row } from 'react-bootstrap';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Style
import '../index.css';

// Testing Img
import blogImg from '../assets/blogs.jpeg';

const HomeBlogs = () => {

    return (
        <Container sx={{ textAlign: 'start' }} className="margintop">
            <Typography variant="h5" sx={{ fontWeight: '500', mb: '20px' }}>
                Our Blogs
            </Typography>
            <Row>
                <Col md={4}>
                    <Card sx={{ mt: { xs: 3, md: 0 } }}>
                        <CardMedia
                            sx={{ height: 190 }}
                            image="https://fggroup.in/images/blog/Dietitian-Plan.webp"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Online Dietitian Plan Vs In-Person Consultation
                            </Typography>
                            <div className='d-flex'>
                                <Typography variant='p' sx={{ fontWeight: '500' }}><FiberManualRecordIcon sx={{ fontSize: '10px', color: '#797979' }} /> 2 Min Read</Typography>
                                <Typography variant='p' sx={{ ml: 1, fontWeight: '500' }}><FiberManualRecordIcon sx={{ fontSize: '10px', color: '#797979' }} /> Dec 26 2023</Typography>
                                <Typography variant='p' sx={{ ml: 1, fontWeight: '500' }}><FiberManualRecordIcon sx={{ fontSize: '10px', color: '#797979' }} /> 10k Views</Typography>
                            </div>
                        </CardContent>
                        <CardActions className='pt-0 pb-3'>
                            <Button href='https://fggroup.in/blogs/online-dietitian-plan-vs-In-person-consultation.html' target='_blank' sx={{ borderBottom: '1px solid #000', borderRadius: '0px', color: '#000', p: 0, fontSize: '16px', ml: 1 }}>Read More <ArrowForwardIcon sx={{ fontSize: '16px', ml: 1 }} /></Button>
                        </CardActions>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card sx={{ mt: { xs: 3, md: 0 } }}>
                        <CardMedia
                            sx={{ height: 190 }}
                            image="https://fggroup.in/images/blog/hate-gym.webp"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                10 Undeniable Reasons People Hate Gym
                            </Typography>
                            <div className='d-flex'>
                                <Typography variant='p' sx={{ fontWeight: '500' }}><FiberManualRecordIcon sx={{ fontSize: '10px', color: '#797979' }} /> 5 Min Read</Typography>
                                <Typography variant='p' sx={{ ml: 1, fontWeight: '500' }}><FiberManualRecordIcon sx={{ fontSize: '10px', color: '#797979' }} /> Dec 26 2023</Typography>
                                <Typography variant='p' sx={{ ml: 1, fontWeight: '500' }}><FiberManualRecordIcon sx={{ fontSize: '10px', color: '#797979' }} /> 15k Views</Typography>
                            </div>
                        </CardContent>
                        <CardActions className='pt-0 pb-3'>
                            <Button href='https://fggroup.in/blogs/why-people-hate-gym.html' target='_blank' sx={{ borderBottom: '1px solid #000', borderRadius: '0px', color: '#000', p: 0, fontSize: '16px', ml: 1 }}>Read More <ArrowForwardIcon sx={{ fontSize: '16px', ml: 1 }} /></Button>
                        </CardActions>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card sx={{ mt: { xs: 3, md: 0 } }}>
                        <CardMedia
                            sx={{ height: 190 }}
                            image="https://fggroup.in/images/img/not-like-food.webp"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Healthy Eating Habits For Kids - It's Challenging For Parents.
                            </Typography>
                            <div className='d-flex'>
                                <Typography variant='p' sx={{ fontWeight: '500' }}><FiberManualRecordIcon sx={{ fontSize: '10px', color: '#797979' }} /> 3 Min Read</Typography>
                                <Typography variant='p' sx={{ ml: 1, fontWeight: '500' }}><FiberManualRecordIcon sx={{ fontSize: '10px', color: '#797979' }} /> Dec 20 2023</Typography>
                                <Typography variant='p' sx={{ ml: 1, fontWeight: '500' }}><FiberManualRecordIcon sx={{ fontSize: '10px', color: '#797979' }} /> 20k Views</Typography>
                            </div>
                        </CardContent>
                        <CardActions className='pt-0 pb-3'>
                            <Button href='https://fggroup.in/blogs/Healthy-Eating-Habits-For-your-Kids.html' target='_blank' sx={{ borderBottom: '1px solid #000', borderRadius: '0px', color: '#000', p: 0, fontSize: '16px', ml: 1 }}>Read More <ArrowForwardIcon sx={{ fontSize: '16px', ml: 1 }} /></Button>
                        </CardActions>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default HomeBlogs;
