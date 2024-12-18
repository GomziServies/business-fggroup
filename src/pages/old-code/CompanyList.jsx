import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import axiosInstance, { businessListingAxiosInstance } from '../../js/api';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';


// components
import Header from '../../components/Header';
import Footer from '../../components/old-code/FooterStyle/Footer';

const CompanyList = () => {
    const [businessData, setBusinessData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const getBusinessData = async () => {
        try {
            const response = await businessListingAxiosInstance.get('/get-listing');
            const fetchedBusinessData = response.data.data;
            console.log(fetchedBusinessData)
            setBusinessData(fetchedBusinessData);
        } catch (error) {
            console.error('Error in Getting Business Data:', error);
        }
    };

    useEffect(() => {
        getBusinessData();
    }, []);

    const handleSearch = () => {
        getBusinessData();

        const filteredData = businessData.filter(
            (business) =>
                business.business_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                business.business_category.some((category) =>
                    category.toLowerCase().includes(searchQuery.toLowerCase())
                )
        );

        setBusinessData(filteredData);
    };

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const getStatusBadge = (status) => {
        let badgeColor, badgeText;

        if (status === 'APPROVED') {
            badgeColor = '#00d300';
            badgeText = status;
        } else if (status === 'REJECTED') {
            badgeColor = '#ff4343';
            badgeText = status;
        } else {
            badgeColor = 'orange';
            badgeText = status;
        }

        return (
            <>
                <div style={{ backgroundColor: badgeColor, color: '#000', padding: '5px 10px', borderRadius: '5px', textAlign: 'center' }}>
                    {status}
                </div>
            </>
        );
    };

    const handleDeleteListing = async (businessId) => {
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: 'You will not be able to recover this business!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!',
            });

            if (result.isConfirmed) {
                // User confirmed, proceed with the deletion
                const response = await businessListingAxiosInstance.delete(`/delete-listing?listing_id=${businessId}`);

                if (response.status === 200) {
                    Swal.fire('Deleted!', 'Your business has been deleted.', 'success');
                    getBusinessData();
                } else {
                    // Show error message
                    Swal.fire('Error!', 'Failed to delete the business.', 'error');
                }
            }
        } catch (error) {
            console.error('Error deleting business listing:', error);
            Swal.fire('Error!', 'An error occurred while deleting the business listing.', 'error');
        }
    };

    return (
        <>
            <Helmet>
                <title>Company Listing</title>
                <meta name="description" content="Your meta description" />
            </Helmet>
            <Header />
            <Container sx={{ textAlign: 'start', mt: 4 }}>
                <Typography variant="h4" gutterBottom sx={{ color: '#000' }}>
                    <b>My Business</b>
                </Typography>
                {/* <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                    <TextField
                        placeholder="Search by business name"
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                    />
                    <Button variant="contained" onClick={handleSearch}>
                        Search
                    </Button>
                </Stack> */}
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead sx={{ bgcolor: '#64d5ff' }}>
                            <TableRow>
                                <TableCell sx={{ textAlign: 'center' }}>Logo</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>Name</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>Category</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>Approval</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>Business Type</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>Create Date</TableCell>
                                <TableCell sx={{ textAlign: 'center' }}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {businessData.map((business) => (
                                <TableRow key={business._id}>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <img alt='' style={{ width: '60px', height: '60px', borderRadius: '50%' }} src={'https://files.fggroup.in/' + business.business_logo} />
                                    </TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>{business.business_name}</TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>{business.business_category.join(', ')}</TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>{getStatusBadge(business.approval_status.status, business.approval_status.feedback)}</TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>{business.business_type}</TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>{new Date(business.createdAt).toLocaleDateString()}</TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>
                                        <Stack direction="row" spacing={1}>
                                            <Link to={`/company-update?business_id=${business._id}`}>
                                                <Button variant='contained' sx={{ bgcolor: '#088500', ml: '8px' }} className='btn text-white'>
                                                    View Details
                                                </Button>
                                            </Link>
                                            <Link to={`/business/reviews?business_id=${business._id}`}>
                                                <Button variant='contained' sx={{ bgcolor: '#00163f', ml: '8px' }} className='text-white'>
                                                    Review
                                                </Button>
                                            </Link>
                                            <Button
                                                variant='contained'
                                                sx={{ bgcolor: '#ff0000', ml: '8px' }}
                                                className='text-white'
                                                onClick={() => handleDeleteListing(business._id)}
                                            >
                                                <DeleteIcon />
                                            </Button>
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
            <Footer />
            <ToastContainer />
        </>
    );
};

export default CompanyList;
