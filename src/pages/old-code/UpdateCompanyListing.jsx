import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Helmet } from 'react-helmet';
import axiosInstance, { businessListingAxiosInstance } from '../../js/api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TagInput } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { useLocation } from 'react-router-dom';


//components
import Header from '../../components/HeaderStyle/Header';
import Footer from '../../components/FooterStyle/Footer';

const CompanyListing = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const listing_id = searchParams.get('business_id');
    const [formData, setFormData] = useState({
        listing_id: listing_id,
        businessName: '',
        address_line_1: '',
        address_line_2: '',
        area: '',
        landmark: '',
        city: '',
        state: '',
        pin_code: '',
        contactNumber: '',
        direction_link: '',
        whatsappNumber: '',
        services: [],
        tags: [],
        website: '',
        email: '',
        branch: '',
        business_logo: '',
    });

    const [faqs, setFaqs] = useState([{ question: '', answer: '' }]);
    const [logoImage, setLogoImage] = useState(null);
    const [businessPhotos, setBusinessPhotos] = useState([]);
    const [businessPhotoOnlyUrl, setBusinessPhotoOnlyUrl] = useState([]);
    const [socialMediaLinks, setSocialMediaLinks] = useState([
        { platform: 'Instagram', link: '' },
        { platform: 'Facebook', link: '' },
        { platform: 'YouTube', link: '' },
    ]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedBusinessType, setSelectedBusinessType] = useState('');
    const [approvedData, setApprovedData] = useState('');
    const [businessHours, setBusinessHours] = useState([
        { day: 'Mon', open: '10:00 AM', close: '7:00 PM' },
    ]);

    const handleDayChange = (index, selectedDay) => {
        const updatedBusinessHours = [...businessHours];
        updatedBusinessHours[index].day = selectedDay;
        setBusinessHours(updatedBusinessHours);
    };

    const handleTimeChange = (index, field, value) => {
        const updatedBusinessHours = [...businessHours];
        updatedBusinessHours[index][field] = value;
        setBusinessHours(updatedBusinessHours);
    };

    const handleAddTimeSlot = () => {
        setBusinessHours([...businessHours, { day: 'Mon', open: '10:00 AM', close: '06:00 PM' }]);
    };

    const handleRemoveTimeSlot = (index) => {
        const updatedBusinessHours = [...businessHours];
        updatedBusinessHours.splice(index, 1);
        setBusinessHours(updatedBusinessHours);
    };

    const handleAddFaq = () => {
        setFaqs([...faqs, { question: '', answer: '' }]);
    };

    const handleRemoveFaq = (index) => {
        const updatedFaqs = [...faqs];
        updatedFaqs.splice(index, 1);
        setFaqs(updatedFaqs);
    };

    const handleFaqChange = (index, field, value) => {
        const updatedFaqs = [...faqs];
        updatedFaqs[index][field] = value;
        setFaqs(updatedFaqs);
    };

    const handleInputChange = (field, value) => {
        if (field === 'services' || field === 'tags') {
            setFormData(prevState => ({
                ...prevState,
                [field]: value,
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [field]: value,
            }));
        }
    };

    // Function to handle business photos change
    const handleBusinessPhotosChange = async (event) => {
        const files = event.target.files;

        if (files.length > 0) {
            // Read and set the business photos
            const newPhotos = [...businessPhotos];

            Array.from(files).forEach(async (file) => {
                const reader = new FileReader();

                reader.onloadend = async () => {
                    // Store only the image path
                    newPhotos.push(reader.result);
                    setBusinessPhotos([...newPhotos]);

                    try {
                        // Upload business photo and get the URL
                        const photoFormData = new FormData();
                        photoFormData.append('files', file);

                        const photoResponse = await axiosInstance.post('/file-upload', photoFormData);
                        const photoUrl = photoResponse.data.data.fileURLs;

                        // Remove common prefix from the image URL
                        const updatedPhotoUrl = businessPhotos.map(url => url.replace("https://files.fggroup.in/", ""));
                        // Update listing data with the new business photo URL
                        const updatedListingData = { listing_id: listing_id, business_images: [...updatedPhotoUrl, ...photoUrl] };
                        await businessListingAxiosInstance.patch(`/update-listing?listing_id=${listing_id}`, updatedListingData);

                        toast.success('Business photo updated successfully!', {
                            position: toast.POSITION.TOP_RIGHT,
                        });
                    } catch (error) {
                        console.error('Error updating business photo and listing data:', error);
                        toast.error('Error updating business photo and listing data. Please try again.', {
                            position: toast.POSITION.TOP_RIGHT,
                        });
                    }
                };

                reader.readAsDataURL(file);
            });
        }
    };

    // Function to handle removing a business photo
    const handleRemoveBusinessPhoto = async (index) => {
        const newPhotos = [...businessPhotos];
        const removedPhoto = newPhotos.splice(index, 1)[0];
        setBusinessPhotos([...newPhotos]);

        try {
            const updatedRemovedPhoto = removedPhoto.replace("https://files.fggroup.in/", "");

            // Update listing data without the removed business photo
            const updatedListingData = { listing_id: listing_id, business_images: newPhotos.map(url => url.replace("https://files.fggroup.in/", "")) };

            // Make API request to update the listing data
            await businessListingAxiosInstance.patch(`/update-listing?listing_id=${listing_id}`, updatedListingData);

            toast.success('Business photo removed successfully!', {
                position: toast.POSITION.TOP_RIGHT,
            });
        } catch (error) {
            console.error('Error removing business photo and updating listing data:', error);
            toast.error('Error removing business photo and updating listing data. Please try again.', {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    };

    // Function to handle logo file change
    const handleLogoChange = async (event) => {
        const file = event.target.files[0];

        if (file) {
            // Read the file and set the logo image
            const reader = new FileReader();

            reader.onloadend = async () => {
                setLogoImage(file);
                const updatedFormData = { ...formData, business_logo: reader.result };
                setFormData(updatedFormData);

                try {
                    // Upload logo image and update listing data
                    const logoFormData = new FormData();
                    logoFormData.append('files', file);

                    const logoResponse = await axiosInstance.post('/file-upload', logoFormData);
                    const logoUrl = logoResponse.data.data.fileURLs[0];

                    const updatedListingData = { listing_id: listing_id, business_logo: logoUrl };
                    await businessListingAxiosInstance.patch('/update-listing', updatedListingData);

                    toast.success('Logo updated successfully!', {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                } catch (error) {
                    console.error('Error updating logo and listing data:', error);
                    toast.error('Error updating logo and listing data. Please try again.', {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                }
            };

            reader.readAsDataURL(file);
        }
    };

    // Function to handle social media link change
    const handleSocialMediaLinkChange = (index, value) => {
        const newLinks = [...socialMediaLinks];
        newLinks[index].link = value;
        setSocialMediaLinks([...newLinks]);
    };

    // Function to handle removing a social media link
    const handleRemoveSocialMediaLink = (index) => {
        const newLinks = [...socialMediaLinks];
        newLinks.splice(index, 1);
        setSocialMediaLinks([...newLinks]);
    };

    const getBusinessData = async () => {
        try {
            const response = await businessListingAxiosInstance.get(`/get-listing?listing_id=${listing_id}`);
            const fetchedBusinessData = response.data.data[0];
            const address = fetchedBusinessData.locations[0];
            const social_media = fetchedBusinessData.social_media;
            const businessHours = fetchedBusinessData.timings || [];
            const approval_status = fetchedBusinessData.approval_status;
            const businessHoursData = businessHours.map(dayData => ({
                day: dayData.title || '',
                open: dayData.timings.length > 0 ? dayData.timings[0].from_time : '',
                close: dayData.timings.length > 0 ? dayData.timings[0].to_time : '',
            }));
            const faq = fetchedBusinessData.faqs;
            const faqData = faq.map(faqItem => ({
                question: faqItem.question,
                answer: faqItem.answer,
            }));
            const logoImg = 'https://files.fggroup.in/' + fetchedBusinessData.business_logo
            const businessImages = fetchedBusinessData.business_images || [];
            const businessPhotoURLs = businessImages.map(imagePath => `https://files.fggroup.in/${imagePath}`);

            setBusinessPhotoOnlyUrl(businessImages)
            setBusinessPhotos(businessPhotoURLs);
            setSocialMediaLinks(social_media)
            setApprovedData(approval_status)

            setFormData({
                businessName: fetchedBusinessData.business_name || '',
                address_line_1: address.address_line_1 || '',
                address_line_2: address.address_line_2 || '',
                area: address.area || '',
                landmark: address.landmark || '',
                city: address.city || '',
                state: address.state || '',
                pin_code: address.pin_code || '',
                direction_link: address.direction_link || '',
                contactNumber: fetchedBusinessData.contacts[0]?.value || '',
                whatsappNumber: fetchedBusinessData.contacts[1]?.value || '',
                services: fetchedBusinessData.services || [],
                tags: fetchedBusinessData.tags || [],
                website: fetchedBusinessData.contacts.find((contact) => contact.contact_type === 'website')?.value || '',
                email: fetchedBusinessData.contacts.find((contact) => contact.contact_type === 'email')?.value || '',
                branch: address.location_name || '',
            });
            setBusinessHours(businessHoursData)
            setFaqs(faqData)
            setLogoImage(logoImg)
            setSelectedCategory(fetchedBusinessData.business_category[0])
            setSelectedBusinessType(fetchedBusinessData.business_type)
        } catch (error) {
            console.error('Error in Getting Business Data:', error);
        }
    };

    useEffect(() => {
        getBusinessData();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const postData = {
                listing_id: listing_id,
                business_type: selectedBusinessType,
                business_name: formData.businessName,
                business_category: [selectedCategory],
                services: formData.services,
                tags: formData.tags,
                social_media: socialMediaLinks.map(link => ({
                    social_media_type: link.social_media_type,
                    link: link.link,
                })),
                locations: [
                    {
                        location_name: formData.branch,
                        address_line_1: formData.address_line_1,
                        address_line_2: formData.address_line_2,
                        city: formData.city,
                        state: formData.state,
                        country: 'india',
                        pin_code: formData.pin_code,
                        landmark: formData.landmark,
                        direction_link: formData.direction_link,
                        contact: {
                            contact_type: 'mobile',
                            value: formData.contactNumber,
                        },
                    },
                ],
                contacts: [
                    {
                        contact_type: 'email',
                        value: formData.email,
                    },
                    {
                        contact_type: 'website',
                        value: formData.website,
                    },
                ],
                faqs: faqs.map(faq => ({
                    question: faq.question,
                    answer: faq.answer,
                })),
                timings: businessHours.map(timeSlot => ({
                    title: timeSlot.day,
                    timings: [
                        {
                            from_time: timeSlot.open,
                            to_time: timeSlot.close,
                        },
                    ],
                })),
            };

            await businessListingAxiosInstance.patch('/update-listing', postData);

            // Show success toast
            toast.success('Business Data Updated successfully!', {
                position: toast.POSITION.TOP_RIGHT,
            });

        } catch (error) {
            console.error('Error uploading files:', error);

            // Show error toast
            toast.error('Error Updating listing. Please try again.', {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    };

    const getStatusBadge = (status, feedback) => {
        let badgeColor, badgeText;

        switch (status) {
            case 'APPROVED':
                badgeColor = '#00d300';
                badgeText = 'Approved';
                break;
            case 'PENDING':
                badgeColor = 'orange';
                badgeText = 'Pending';
                break;
            case 'REJECTED':
                badgeColor = 'red';
                badgeText = 'Rejected';
                break;
            case 'BANNED':
                badgeColor = 'red';
                badgeText = 'Banned';
                break;
            default:
                badgeColor = 'gray';
                badgeText = 'Unknown';
        }

        return (
            <div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className='mt-2' style={{ backgroundColor: badgeColor, color: '#fff', padding: '5px 10px', borderRadius: '5px', textAlign: 'center', marginRight: '10px' }}>
                        {badgeText}
                    </div>
                </div>
                {feedback && (
                    <div style={{ color: 'red' }} className='mt-3'>
                        <h6>Feedback: {feedback}</h6>
                    </div>
                )}
            </div>
        );
    };

    return (
        <>
            <Helmet>
                <title>Company Listing</title>
                <meta name="description" content="Your meta description" />
            </Helmet>
            <Header />
            <Container sx={{ textAlign: 'start', mt: 4 }}>
                <Typography variant="h4" gutterBottom>
                    <b>Update your Business</b>
                </Typography>
                <div style={{ border: '2px solid #ddd', padding: '20px', borderRadius: '10px' }} className='mb-3'>
                    <Typography variant="h6" gutterBottom>
                        Business Approval Status
                    </Typography>
                    <div style={{ marginBottom: '10px' }}>
                        <div>
                            <Typography variant="subtitle1" className='mb-1'>
                                Date: {new Date(approvedData.createdAt).toLocaleDateString()}
                            </Typography>
                        </div>
                        {getStatusBadge(approvedData.status, approvedData.feedback)}
                    </div>
                </div>
                <form onSubmit={handleSubmit}>

                    <div style={{ border: '2px solid #ddd', padding: '20px', borderRadius: '10px' }}>
                        {/* Business Hours */}
                        <Typography variant="h6" gutterBottom>
                            Business/Personal Details
                        </Typography>
                        {/* Business Details */}
                        <TextField label="Business Name" fullWidth margin="normal" required
                            value={formData.businessName}
                            onChange={(e) => handleInputChange('businessName', e.target.value)} />
                        <TextField label="Business Email" fullWidth margin="normal" required
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)} />
                        <TextField label="Branch" fullWidth margin="normal" required
                            value={formData.branch}
                            onChange={(e) => handleInputChange('branch', e.target.value)} />
                        <TextField label="Block Number / Building Name" fullWidth margin="normal" required
                            value={formData.address_line_1}
                            onChange={(e) => handleInputChange('address_line_1', e.target.value)}
                        />
                        <TextField label="Street / Colony Name" fullWidth margin="normal" required
                            value={formData.address_line_2}
                            onChange={(e) => handleInputChange('address_line_2', e.target.value)}
                        />
                        <TextField label="Landmark" fullWidth margin="normal" required
                            value={formData.landmark}
                            onChange={(e) => handleInputChange('landmark', e.target.value)}
                        />
                        <div className='d-block d-md-flex'>
                            <TextField label="City" fullWidth margin="normal" required
                                value={formData.city}
                                onChange={(e) => handleInputChange('city', e.target.value)} />
                            <TextField label="State" fullWidth margin="normal" required sx={{ ml: { md: 3 } }}
                                value={formData.state}
                                onChange={(e) => handleInputChange('state', e.target.value)} />
                            <TextField label="Pincode" fullWidth margin="normal" required sx={{ ml: { md: 3 } }}
                                value={formData.pin_code}
                                onChange={(e) => handleInputChange('pin_code', e.target.value)} />
                            <TextField label="Google Map Link" fullWidth margin="normal" required sx={{ ml: { md: 3 } }}
                                value={formData.direction_link}
                                onChange={(e) => handleInputChange('direction_link', e.target.value)} />
                        </div>
                        <div className='d-block d-md-flex'>
                            <TextField label="Contact Number" fullWidth margin="normal" required
                                value={formData.contactNumber}
                                onChange={(e) => handleInputChange('contactNumber', e.target.value)}
                            />
                            <TextField label="Whatsapp Number" fullWidth margin="normal" required sx={{ ml: { md: 3 } }}
                                value={formData.whatsappNumber}
                                onChange={(e) => handleInputChange('whatsappNumber', e.target.value)}
                            />
                        </div>
                        <div className='d-block d-md-flex'>
                            <TagInput
                                size='lg'
                                className='mt-3 mr-md-4 w-md-50'
                                placeholder="Add Services"
                                style={{ display: 'block', marginBottom: 10 }}
                                value={formData.services}  // Pass the array value
                                onChange={(value) => handleInputChange('services', value)}
                            />
                            <TagInput
                                size='lg'
                                className='mt-3 ml-md-2 w-md-50'
                                placeholder="Add Tags"
                                style={{ display: 'block', marginBottom: 10 }}
                                value={formData.tags}  // Pass the array value
                                onChange={(value) => handleInputChange('tags', value)}
                            />
                        </div>
                        <TextField label="Website" fullWidth margin="normal" required
                            value={formData.website}
                            onChange={(e) => handleInputChange('website', e.target.value)}
                        />
                    </div>

                    <div style={{ border: '2px solid #ddd', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
                        {/* Business Hours */}
                        <Typography variant="h6" gutterBottom sx={{ mt: 0 }}>
                            Business Hours
                        </Typography>
                        {businessHours.map((timeSlot, index) => (
                            <div key={index} className="d-md-flex" sx={{ mt: 2 }}>
                                <Select
                                    value={timeSlot.day}
                                    onChange={(e) => handleDayChange(index, e.target.value)}
                                    label="Select Days of the Week"
                                    fullWidth
                                    margin="normal"
                                    sx={{ mx: { md: 1 }, mt: 2 }}
                                >
                                    <MenuItem value="Mon">Mon</MenuItem>
                                    <MenuItem value="Tue">Tue</MenuItem>
                                    <MenuItem value="Wed">Wed</MenuItem>
                                    <MenuItem value="Thu">Thu</MenuItem>
                                    <MenuItem value="Fri">Fri</MenuItem>
                                    <MenuItem value="Sat">Sat</MenuItem>
                                    <MenuItem value="Sun">Sun</MenuItem>
                                </Select>
                                <Select
                                    value={timeSlot.open}
                                    onChange={(e) => handleTimeChange(index, 'open', e.target.value)}
                                    label="Opens at"
                                    fullWidth
                                    sx={{ mx: { md: 1 }, mt: 2 }}
                                    margin="normal"
                                >
                                    <MenuItem value="00:00">Closed</MenuItem>
                                    <MenuItem value="06:00 AM">06:00 AM</MenuItem>
                                    <MenuItem value="06:15 AM">06:15 AM</MenuItem>
                                    <MenuItem value="06:30 AM">06:30 AM</MenuItem>
                                    <MenuItem value="06:45 AM">06:45 AM</MenuItem>
                                    <MenuItem value="07:00 AM">07:00 AM</MenuItem>
                                    <MenuItem value="07:00 AM">07:15 AM</MenuItem>
                                    <MenuItem value="07:30 AM">07:30 AM</MenuItem>
                                    <MenuItem value="07:30 AM">07:45 AM</MenuItem>
                                    <MenuItem value="08:00 AM">08:00 AM</MenuItem>
                                    <MenuItem value="08:00 AM">08:15 AM</MenuItem>
                                    <MenuItem value="08:30 AM">08:30 AM</MenuItem>
                                    <MenuItem value="08:30 AM">08:45 AM</MenuItem>
                                    <MenuItem value="09:00 AM">09:00 AM</MenuItem>
                                    <MenuItem value="09:00 AM">09:15 AM</MenuItem>
                                    <MenuItem value="09:30 AM">09:30 AM</MenuItem>
                                    <MenuItem value="09:30 AM">09:45 AM</MenuItem>
                                    <MenuItem value="10:00 AM">10:00 AM</MenuItem>
                                    <MenuItem value="10:15 AM">10:15 AM</MenuItem>
                                    <MenuItem value="10:30 AM">10:30 AM</MenuItem>
                                    <MenuItem value="10:45 AM">10:45 AM</MenuItem>
                                    <MenuItem value="11:00 AM">11:00 AM</MenuItem>
                                    <MenuItem value="11:15 AM">11:15 AM</MenuItem>
                                    <MenuItem value="11:30 AM">11:30 AM</MenuItem>
                                    <MenuItem value="11:45 AM">11:45 AM</MenuItem>
                                    <MenuItem value="12:00 PM">12:00 PM</MenuItem>
                                    <MenuItem value="12:15 PM">12:15 PM</MenuItem>
                                    <MenuItem value="12:30 PM">12:30 PM</MenuItem>
                                    <MenuItem value="12:45 PM">12:45 PM</MenuItem>
                                    <MenuItem value="01:00 PM">01:00 PM</MenuItem>
                                    <MenuItem value="01:15 PM">01:15 PM</MenuItem>
                                    <MenuItem value="01:30 PM">01:30 PM</MenuItem>
                                    <MenuItem value="01:45 PM">01:45 PM</MenuItem>
                                    <MenuItem value="02:00 PM">02:00 PM</MenuItem>
                                    <MenuItem value="02:15 PM">02:15 PM</MenuItem>
                                    <MenuItem value="02:30 PM">02:30 PM</MenuItem>
                                    <MenuItem value="02:45 PM">02:45 PM</MenuItem>
                                    <MenuItem value="03:00 PM">03:00 PM</MenuItem>
                                    <MenuItem value="03:15 PM">03:15 PM</MenuItem>
                                    <MenuItem value="03:30 PM">03:30 PM</MenuItem>
                                    <MenuItem value="03:45 PM">03:45 PM</MenuItem>
                                    <MenuItem value="04:00 PM">04:00 PM</MenuItem>
                                    <MenuItem value="04:15 PM">04:15 PM</MenuItem>
                                    <MenuItem value="04:30 PM">04:30 PM</MenuItem>
                                    <MenuItem value="04:45 PM">04:45 PM</MenuItem>
                                    <MenuItem value="05:00 PM">05:00 PM</MenuItem>
                                    <MenuItem value="05:15 PM">05:15 PM</MenuItem>
                                    <MenuItem value="05:30 PM">05:30 PM</MenuItem>
                                    <MenuItem value="05:45 PM">05:45 PM</MenuItem>
                                    <MenuItem value="06:00 PM">06:00 PM</MenuItem>
                                    <MenuItem value="06:15 PM">06:15 PM</MenuItem>
                                    <MenuItem value="06:30 PM">06:30 PM</MenuItem>
                                    <MenuItem value="06:45 PM">06:45 PM</MenuItem>
                                    <MenuItem value="07:00 PM">07:00 PM</MenuItem>
                                    <MenuItem value="07:15 PM">07:15 PM</MenuItem>
                                    <MenuItem value="07:30 PM">07:30 PM</MenuItem>
                                    <MenuItem value="07:45 PM">07:45 PM</MenuItem>
                                    <MenuItem value="08:00 PM">08:00 PM</MenuItem>
                                    <MenuItem value="08:15 PM">08:15 PM</MenuItem>
                                    <MenuItem value="08:30 PM">08:30 PM</MenuItem>
                                    <MenuItem value="08:45 PM">08:45 PM</MenuItem>
                                    <MenuItem value="09:00 PM">09:00 PM</MenuItem>
                                    <MenuItem value="09:15 PM">09:15 PM</MenuItem>
                                    <MenuItem value="09:30 PM">09:30 PM</MenuItem>
                                    <MenuItem value="09:45 PM">09:45 PM</MenuItem>
                                    <MenuItem value="10:00 PM">10:00 PM</MenuItem>
                                    <MenuItem value="10:15 PM">10:15 PM</MenuItem>
                                    <MenuItem value="10:30 PM">10:30 PM</MenuItem>
                                    <MenuItem value="10:45 PM">10:45 PM</MenuItem>
                                    <MenuItem value="11:00 PM">11:00 PM</MenuItem>
                                    <MenuItem value="11:15 PM">11:15 PM</MenuItem>
                                    <MenuItem value="11:30 PM">11:30 PM</MenuItem>
                                    <MenuItem value="11:45 PM">11:45 PM</MenuItem>
                                    <MenuItem value="12:00 AM">12:00 PM</MenuItem>
                                    <MenuItem value="12:15 AM">12:15 PM</MenuItem>
                                    <MenuItem value="12:30 AM">12:30 PM</MenuItem>
                                    <MenuItem value="12:45 AM">12:45 PM</MenuItem>
                                    <MenuItem value="01:00 AM">01:00 AM</MenuItem>
                                    <MenuItem value="01:15 AM">01:15 AM</MenuItem>
                                    <MenuItem value="01:30 AM">01:30 AM</MenuItem>
                                    <MenuItem value="01:45 AM">01:45 AM</MenuItem>
                                    <MenuItem value="02:00 AM">02:00 AM</MenuItem>
                                    <MenuItem value="02:15 AM">02:15 AM</MenuItem>
                                    <MenuItem value="02:30 AM">02:30 AM</MenuItem>
                                    <MenuItem value="02:45 AM">02:45 AM</MenuItem>
                                    <MenuItem value="03:00 AM">03:00 AM</MenuItem>
                                    <MenuItem value="03:15 AM">03:15 AM</MenuItem>
                                    <MenuItem value="03:30 AM">03:30 AM</MenuItem>
                                    <MenuItem value="03:45 AM">03:45 AM</MenuItem>
                                    <MenuItem value="04:00 AM">04:00 AM</MenuItem>
                                    <MenuItem value="04:15 AM">04:15 AM</MenuItem>
                                    <MenuItem value="04:30 AM">04:30 AM</MenuItem>
                                    <MenuItem value="04:45 AM">04:45 AM</MenuItem>
                                    <MenuItem value="05:00 AM">05:00 AM</MenuItem>
                                    <MenuItem value="05:15 AM">05:15 AM</MenuItem>
                                    <MenuItem value="05:30 AM">05:30 AM</MenuItem>
                                    <MenuItem value="05:45 AM">05:45 AM</MenuItem>
                                </Select>
                                <Select
                                    value={timeSlot.close}
                                    onChange={(e) => handleTimeChange(index, 'close', e.target.value)}
                                    label="Closes at"
                                    fullWidth
                                    margin="normal"
                                    sx={{ mt: 2 }}
                                >
                                    <MenuItem value="00:00">Closed</MenuItem>
                                    <MenuItem value="06:00 AM">06:00 AM</MenuItem>
                                    <MenuItem value="06:15 AM">06:15 AM</MenuItem>
                                    <MenuItem value="06:30 AM">06:30 AM</MenuItem>
                                    <MenuItem value="06:45 AM">06:45 AM</MenuItem>
                                    <MenuItem value="07:00 AM">07:00 AM</MenuItem>
                                    <MenuItem value="07:00 AM">07:15 AM</MenuItem>
                                    <MenuItem value="07:30 AM">07:30 AM</MenuItem>
                                    <MenuItem value="07:30 AM">07:45 AM</MenuItem>
                                    <MenuItem value="08:00 AM">08:00 AM</MenuItem>
                                    <MenuItem value="08:00 AM">08:15 AM</MenuItem>
                                    <MenuItem value="08:30 AM">08:30 AM</MenuItem>
                                    <MenuItem value="08:30 AM">08:45 AM</MenuItem>
                                    <MenuItem value="09:00 AM">09:00 AM</MenuItem>
                                    <MenuItem value="09:00 AM">09:15 AM</MenuItem>
                                    <MenuItem value="09:30 AM">09:30 AM</MenuItem>
                                    <MenuItem value="09:30 AM">09:45 AM</MenuItem>
                                    <MenuItem value="10:00 AM">10:00 AM</MenuItem>
                                    <MenuItem value="10:15 AM">10:15 AM</MenuItem>
                                    <MenuItem value="10:30 AM">10:30 AM</MenuItem>
                                    <MenuItem value="10:45 AM">10:45 AM</MenuItem>
                                    <MenuItem value="11:00 AM">11:00 AM</MenuItem>
                                    <MenuItem value="11:15 AM">11:15 AM</MenuItem>
                                    <MenuItem value="11:30 AM">11:30 AM</MenuItem>
                                    <MenuItem value="11:45 AM">11:45 AM</MenuItem>
                                    <MenuItem value="12:00 PM">12:00 PM</MenuItem>
                                    <MenuItem value="12:15 PM">12:15 PM</MenuItem>
                                    <MenuItem value="12:30 PM">12:30 PM</MenuItem>
                                    <MenuItem value="12:45 PM">12:45 PM</MenuItem>
                                    <MenuItem value="01:00 PM">01:00 PM</MenuItem>
                                    <MenuItem value="01:15 PM">01:15 PM</MenuItem>
                                    <MenuItem value="01:30 PM">01:30 PM</MenuItem>
                                    <MenuItem value="01:45 PM">01:45 PM</MenuItem>
                                    <MenuItem value="02:00 PM">02:00 PM</MenuItem>
                                    <MenuItem value="02:15 PM">02:15 PM</MenuItem>
                                    <MenuItem value="02:30 PM">02:30 PM</MenuItem>
                                    <MenuItem value="02:45 PM">02:45 PM</MenuItem>
                                    <MenuItem value="03:00 PM">03:00 PM</MenuItem>
                                    <MenuItem value="03:15 PM">03:15 PM</MenuItem>
                                    <MenuItem value="03:30 PM">03:30 PM</MenuItem>
                                    <MenuItem value="03:45 PM">03:45 PM</MenuItem>
                                    <MenuItem value="04:00 PM">04:00 PM</MenuItem>
                                    <MenuItem value="04:15 PM">04:15 PM</MenuItem>
                                    <MenuItem value="04:30 PM">04:30 PM</MenuItem>
                                    <MenuItem value="04:45 PM">04:45 PM</MenuItem>
                                    <MenuItem value="05:00 PM">05:00 PM</MenuItem>
                                    <MenuItem value="05:15 PM">05:15 PM</MenuItem>
                                    <MenuItem value="05:30 PM">05:30 PM</MenuItem>
                                    <MenuItem value="05:45 PM">05:45 PM</MenuItem>
                                    <MenuItem value="06:00 PM">06:00 PM</MenuItem>
                                    <MenuItem value="06:15 PM">06:15 PM</MenuItem>
                                    <MenuItem value="06:30 PM">06:30 PM</MenuItem>
                                    <MenuItem value="06:45 PM">06:45 PM</MenuItem>
                                    <MenuItem value="07:00 PM">07:00 PM</MenuItem>
                                    <MenuItem value="07:15 PM">07:15 PM</MenuItem>
                                    <MenuItem value="07:30 PM">07:30 PM</MenuItem>
                                    <MenuItem value="07:45 PM">07:45 PM</MenuItem>
                                    <MenuItem value="08:00 PM">08:00 PM</MenuItem>
                                    <MenuItem value="08:15 PM">08:15 PM</MenuItem>
                                    <MenuItem value="08:30 PM">08:30 PM</MenuItem>
                                    <MenuItem value="08:45 PM">08:45 PM</MenuItem>
                                    <MenuItem value="09:00 PM">09:00 PM</MenuItem>
                                    <MenuItem value="09:15 PM">09:15 PM</MenuItem>
                                    <MenuItem value="09:30 PM">09:30 PM</MenuItem>
                                    <MenuItem value="09:45 PM">09:45 PM</MenuItem>
                                    <MenuItem value="10:00 PM">10:00 PM</MenuItem>
                                    <MenuItem value="10:15 PM">10:15 PM</MenuItem>
                                    <MenuItem value="10:30 PM">10:30 PM</MenuItem>
                                    <MenuItem value="10:45 PM">10:45 PM</MenuItem>
                                    <MenuItem value="11:00 PM">11:00 PM</MenuItem>
                                    <MenuItem value="11:15 PM">11:15 PM</MenuItem>
                                    <MenuItem value="11:30 PM">11:30 PM</MenuItem>
                                    <MenuItem value="11:45 PM">11:45 PM</MenuItem>
                                    <MenuItem value="12:00 AM">12:00 AM</MenuItem>
                                    <MenuItem value="12:15 AM">12:15 AM</MenuItem>
                                    <MenuItem value="12:30 AM">12:30 AM</MenuItem>
                                    <MenuItem value="12:45 AM">12:45 AM</MenuItem>
                                    <MenuItem value="01:00 AM">01:00 AM</MenuItem>
                                    <MenuItem value="01:15 AM">01:15 AM</MenuItem>
                                    <MenuItem value="01:30 AM">01:30 AM</MenuItem>
                                    <MenuItem value="01:45 AM">01:45 AM</MenuItem>
                                    <MenuItem value="02:00 AM">02:00 AM</MenuItem>
                                    <MenuItem value="02:15 AM">02:15 AM</MenuItem>
                                    <MenuItem value="02:30 AM">02:30 AM</MenuItem>
                                    <MenuItem value="02:45 AM">02:45 AM</MenuItem>
                                    <MenuItem value="03:00 AM">03:00 AM</MenuItem>
                                    <MenuItem value="03:15 AM">03:15 AM</MenuItem>
                                    <MenuItem value="03:30 AM">03:30 AM</MenuItem>
                                    <MenuItem value="03:45 AM">03:45 AM</MenuItem>
                                    <MenuItem value="04:00 AM">04:00 AM</MenuItem>
                                    <MenuItem value="04:15 AM">04:15 AM</MenuItem>
                                    <MenuItem value="04:30 AM">04:30 AM</MenuItem>
                                    <MenuItem value="04:45 AM">04:45 AM</MenuItem>
                                    <MenuItem value="05:00 AM">05:00 AM</MenuItem>
                                    <MenuItem value="05:15 AM">05:15 AM</MenuItem>
                                    <MenuItem value="05:30 AM">05:30 AM</MenuItem>
                                    <MenuItem value="05:45 AM">05:45 AM</MenuItem>
                                </Select>
                                <Button onClick={() => handleRemoveTimeSlot(index)} variant="contained" color="secondary" sx={{ mt: 2, ml: { md: 2 }, background: 'red' }}>
                                    <DeleteIcon />
                                </Button>
                            </div>
                        ))}
                        <Button onClick={handleAddTimeSlot} variant="contained" sx={{ mt: 2 }}>
                            + Add Another Time Slot
                        </Button>
                    </div>

                    <div style={{ border: '2px solid #ddd', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
                        {/* Business FAQs */}
                        <div>
                            <Typography variant="h6" gutterBottom sx={{ mt: 0 }} >
                                Business FAQs
                            </Typography>
                            {faqs.map((faq, index) => (
                                <div key={index} sx={{ mt: 2 }}>
                                    <TextField
                                        label="Question"
                                        fullWidth
                                        margin="normal"
                                        value={faq.question}
                                        onChange={(e) => handleFaqChange(index, 'question', e.target.value)}
                                    />
                                    <TextField
                                        label="Answer"
                                        fullWidth
                                        margin="normal"
                                        value={faq.answer}
                                        onChange={(e) => handleFaqChange(index, 'answer', e.target.value)}
                                    />
                                    <Button onClick={() => handleRemoveFaq(index)} variant="contained" color="secondary" sx={{ mt: 2, background: 'red' }}>
                                        <DeleteIcon />
                                    </Button>
                                </div>
                            ))}
                            {/* Add Another FAQ Button */}
                            <Button onClick={handleAddFaq} variant="contained" sx={{ mt: 2 }}>
                                + Add Another FAQ
                            </Button>
                        </div>
                    </div>

                    <div style={{ border: '2px solid #ddd', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
                        {/* Logo Upload */}
                        <Typography variant="h6" gutterBottom sx={{ mt: 0 }}>
                            Upload Business Logo
                        </Typography>
                        {logoImage && (
                            <div style={{ width: '140px', height: '140px' }}>
                                <img
                                    src={logoImage instanceof File ? URL.createObjectURL(logoImage) : logoImage}
                                    alt="Logo Preview"
                                    style={{ height: 'auto', marginBottom: '10px' }}
                                />
                            </div>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleLogoChange}
                            sx={{ mt: 2, mb: 2 }}
                            style={{ fontWeight: '500' }}
                        />


                        {/* Business Photos */}
                        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                            Upload Business Photos
                        </Typography>
                        <div className='d-block d-md-flex'>
                            {businessPhotos.map((photo, index) => (
                                <div key={index} style={{ position: 'relative', marginRight: '10px', marginBottom: '10px' }}>
                                    <div style={{ width: '150px', height: '150px' }}>
                                        {/* Use the image path directly */}
                                        <img src={photo} alt={`Business Photo ${index + 1}`} style={{ maxWidth: '100%', height: 'auto', marginBottom: '5px' }} />
                                        <IconButton
                                            onClick={() => handleRemoveBusinessPhoto(index)}
                                            style={{ position: 'absolute', top: 0, right: 0, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                                        >
                                            <DeleteIcon style={{ color: '#ff3838' }} />
                                        </IconButton>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleBusinessPhotosChange}
                            multiple
                            sx={{ mt: 2, mb: 2 }}
                        />
                    </div>

                    <div style={{ border: '2px solid #ddd', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
                        {/* Social Media Links */}
                        <Typography variant="h6" gutterBottom sx={{ mt: 0 }}>
                            Social Media Links
                        </Typography>
                        {socialMediaLinks.map((socialMedia, index) => (
                            <div key={index} style={{ display: 'flex', alignItems: 'center', mb: '10px' }}>
                                <TextField
                                    label={socialMedia.platform}
                                    fullWidth
                                    margin="normal"
                                    value={socialMedia.link}
                                    onChange={(e) => handleSocialMediaLinkChange(index, e.target.value)}
                                />
                                <IconButton
                                    onClick={() => handleRemoveSocialMediaLink(index)}
                                    style={{ marginLeft: '10px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </div>
                        ))}

                        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                            Business Category
                        </Typography>
                        <Select
                            value={selectedCategory}
                            label="Select Category"
                            fullWidth
                            margin="normal"
                            sx={{ mx: 1, mt: 2, color: '#000' }}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            <MenuItem value="Personal Trainer">Personal Trainer</MenuItem>
                            <MenuItem value="General Trainer">General Trainer</MenuItem>
                            <MenuItem value="Gym">Gym</MenuItem>
                            <MenuItem value="Dietitian">Dietitian</MenuItem>
                            <MenuItem value="Nutritionist">Nutritionist</MenuItem>
                        </Select>

                        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                            Business Type
                        </Typography>
                        <Select
                            value={selectedBusinessType}
                            label="Select Category"
                            fullWidth
                            margin="normal"
                            sx={{ mx: 1, mt: 2, color: '#000' }}
                            onChange={(e) => setSelectedBusinessType(e.target.value)}
                        >
                            <MenuItem value="personal">Personal</MenuItem>
                            <MenuItem value="business">Business</MenuItem>
                        </Select>

                        <div>
                            {/* Submit Button */}
                            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                                Update Listing Data
                            </Button>
                        </div>
                    </div>

                </form>
            </Container>
            <Footer />
            <ToastContainer />
        </>
    );
};

export default CompanyListing;