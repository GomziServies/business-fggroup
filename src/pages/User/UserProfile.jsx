import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Helmet } from 'react-helmet';
import axiosInstance from '../../js/api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//components
import Header from '../../components/HeaderStyle/Header';
import Footer from '../../components/FooterStyle/Footer';

const UserProfile = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        mobile: '',
        email: '',
        address_line_1: ' ',
        address_line_2: ' ',
        city: '',
        state: '',
        pin_code: '',
        profilePhoto: null,
        profile_image: null,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handlePhotoChange = async (e) => {
        const file = e.target.files[0];

        // Create a FormData object to send the file
        const formDataForUpload = new FormData();
        formDataForUpload.append('files', file);

        try {
            // Make the API request to upload the file
            const response = await axiosInstance.post('/file-upload', formDataForUpload);
            const photoUrl = response.data.data.fileURLs[0];

            setFormData((prevData) => ({
                ...prevData,
                profilePhoto: 'https://files.fggroup.in/' + photoUrl,
                profile_image: photoUrl,
            }));

            await axiosInstance.post('/account/update-profile', { profile_image: photoUrl });

            // Show success toast
            toast.success('Profile photo uploaded successfully');
        } catch (error) {
            console.error('Error uploading photo:', error);
            // Show error toast
            toast.error('Error uploading profile photo');
        }
    };

    const handleRemovePhoto = async () => {
        // Update the state to remove the photo
        setFormData((prevData) => ({
            ...prevData,
            profilePhoto: null,
            profile_image: null,
        }));

        try {
            await axiosInstance.post('/account/update-profile', { profile_image: null });
            toast.success('Profile photo removed successfully');
        } catch (error) {
            console.error('Error removing photo:', error);
            toast.error('Error removing profile photo');
        }
    };

    const updateData = async () => {
        try {
            console.log(formData);
            const response = await axiosInstance.post('/account/update-profile', formData);
            if (response.data.data) {
                getUserData();
                // Show success toast
                toast.success('User data updated successfully');
            } else {
                console.error('Failed to update user data');
                // Show error toast
                toast.error('Error updating user data');
            }
        } catch (error) {
            console.error('Error updating user data:', error);
            // Show error toast
            toast.error('Error updating user data');
        }
    };

    const getUserData = async () => {
        try {
            const response = await axiosInstance.get('/account/profile');
            const userData = response.data.data;
            console.log(userData);
            if (userData) {
                const addressData = userData.user.address || {}; // Access the address object, use an empty object if undefined

                setFormData((prevData) => ({
                    ...prevData,
                    first_name: userData.user.first_name || '',
                    last_name: userData.user.last_name || '',
                    mobile: userData.user.mobile || '',
                    email: userData.user.email || '',
                    address_line_1: addressData.address_line_1 || 'Enter Address',
                    address_line_2: addressData.address_line_2 || '',
                    city: addressData.city || '',
                    state: addressData.state || '',
                    pin_code: addressData.pin_code || '',
                    profilePhoto: 'https://files.fggroup.in/' + (userData.user.profile_image || ''),
                }));
            }
        } catch (error) {
            console.error('Error in getUserData:', error);
            toast.error('Error in getUserData');
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Add any validation or additional logic before updating data
        await updateData();
    };

    useEffect(() => {
        getUserData();
    }, []);

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/">
            Home
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
        >
            User Option
        </Link>,
        <Typography key="3" color="text.primary">
            Profile
        </Typography>,
    ];


    return (
        <>
            <Helmet>
                <title>User Profile</title>
                <meta name="description" content="Your meta description" />
            </Helmet>
            <Header />
            <Container sx={{ textAlign: 'start', mt: 4, mb: 4 }}>
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>
                <form
                    onSubmit={handleSubmit}
                    style={{ border: '2px solid #ddd', padding: '20px', borderRadius: '10px', marginTop: '20px' }}
                >
                    <Typography variant="h4" gutterBottom sx={{ borderBottom: '1px solid #ddd', display: 'inline-block' }}>
                        User Profile
                    </Typography>
                    <div className='d-md-flex' style={{ alignItems: 'center', marginBottom: '20px' }}>
                        <Avatar
                            alt="User Photo"
                            src={formData.profilePhoto}
                            sx={{ width: 100, height: 100, marginRight: '20px' }}
                        />
                        <div>
                            <h4 style={{ fontWeight: 'bold' }}>
                                {formData.first_name} {formData.last_name}
                            </h4>
                            <input
                                accept="image/*"
                                style={{ display: 'none' }}
                                id="profile-photo-upload"
                                type="file"
                                onChange={handlePhotoChange}
                            />
                            <label htmlFor="profile-photo-upload">
                                <IconButton
                                    color="primary"
                                    aria-label="upload picture"
                                    component="span"
                                    sx={{ fontSize: { md: '16px', xs: '14px' } }}
                                    style={{
                                        color: '#fff',
                                        borderRadius: '5px',
                                        backgroundColor: '#0066ff',
                                    }}
                                >
                                    <PhotoCamera sx={{ mr: 1 }} /> Upload New Photo
                                </IconButton>
                            </label>
                            {formData.profilePhoto && (
                                <IconButton
                                    color="secondary"
                                    onClick={handleRemovePhoto}
                                    aria-label="remove picture"
                                    sx={{ ml: 1, px: 3 }}
                                    style={{
                                        color: '#0066ff',
                                        borderRadius: '5px',
                                        backgroundColor: '#fff',
                                        border: '2px solid #0066ff',
                                    }}
                                >
                                    <Typography sx={{ fontSize: { md: '16px', xs: '14px' } }}>Remove</Typography>
                                </IconButton>
                            )}
                        </div>
                    </div>
                    <div className='d-md-flex'>
                        <TextField
                            label="First Name"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Last Name"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            name="last_name"
                            sx={{ ml: { md: 2 } }}
                            value={formData.last_name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='d-md-flex'>
                        <TextField
                            label="Mobile Number"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Email"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            name="email"
                            sx={{ ml: { md: 2 } }}
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <TextField
                        label="Block No/Building No"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        name="address_line_1"
                        value={formData.address_line_1}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Street/Colony Name"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        name="address_line_2"
                        value={formData.address_line_2}
                        onChange={handleChange}
                    />
                    <div className='d-md-flex'>
                        <TextField
                            label="City"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            sx={{ mr: 1 }}
                        />
                        <TextField
                            label="State"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            sx={{ mr: 1 }}
                        />
                        <TextField
                            label="Pin Code"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            name="pin_code"
                            value={formData.pin_code}
                            onChange={handleChange}
                        />
                    </div>
                    <Button type="submit" variant="contained" sx={{ px: 3, py: 1, backgroundColor: '#0F70FF', mt: 4 }} style={{ marginRight: '10px' }}>
                        Save Changes
                    </Button>
                    <Button type="button" variant="outlined" sx={{ mt: 4 }} color="primary">
                        Cancel
                    </Button>
                </form>
            </Container>
            <Footer />
            <ToastContainer />
        </>
    );
};

export default UserProfile;
