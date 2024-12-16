import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../../assets/logo.png'
import TranslateIcon from '@mui/icons-material/Translate';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Select from '@mui/material/Select';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Logout from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddchartIcon from '@mui/icons-material/Addchart';
import axiosInstance from '../../js/api'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CommentIcon from '@mui/icons-material/Comment';

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [selectedLanguage, setSelectedLanguage] = React.useState('english');
  const [loginOpen, setLoginOpen] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState('login');
  const [otpDialogOpen, setOtpDialogOpen] = React.useState(false);
  const [termsDialogOpen, setTermsDialogOpen] = React.useState(false);
  const [termsAgreed, setTermsAgreed] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [otpCode, setOtpCode] = React.useState('');

  // State for search input values
  const [location, setLocation] = useState('');
  const [searchText, setSearchText] = useState('');


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleChange = (e) => {
    const selectedLanguage = e.target.value;
  };


  const handleLoginClick = () => {
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const handleLoginSubmit = async () => {
    try {
      const response = await axiosInstance.post('/account/authorization', {
        mobile: mobileNumber,
      });

      if (response.data && response.data.data && response.data.data.OTP) {
        setOtpDialogOpen(true);
        setCurrentStep('otp');
        // Automatically set OTP in the state
        setOtpCode(response.data.data.OTP);

        // Show success toast
        toast.success('OTP Sent! You will receive an OTP shortly.');
      } else {
        setOtpDialogOpen(true);
        setCurrentStep('otp');
        toast.success('OTP Sent! You will receive an OTP shortly.');
      }

    } catch (error) {
      toast.error('Failed to send OTP. Please try again.');
      console.error('Error in handleLoginSubmit:', error);
    }
  };

  const handleOtpSubmit = async () => {
    try {
      const response = await axiosInstance.post('/account/authorization/verify', {
        mobile: mobileNumber,
        otp: otpCode,
      });

      const auth = response.data.data.authorization

      if (response.status === 200) {
        // Save data to localStorage
        localStorage.setItem('authorization', auth);
        getUserData()
        setOtpDialogOpen(false);
        toast.success('OTP Verified!');
        const activeServices = response.data.data.active_services;
        // Check for BUSINESS-LISTING within the array
        if (activeServices.includes("BUSINESS-LISTING")) {
          toast.success('Login Successful!');
        } else {
          setTermsDialogOpen(true);
        }

      } else {
        // Handle error scenario if needed
        toast.error('Failed to verify OTP. Please try again.');
      }
    } catch (error) {
      // Handle errors here
      console.error('Error in handleOtpSubmit:', error);
    }
  };

  const handleAgreeAndConfirm = async () => {
    try {
      const response = await axiosInstance.post('/account/enable-business-listing');

      setTermsDialogOpen(false);

      toast.success('Successful!');

      window.location.href = '/';
    } catch (error) {
      console.error('Error in handleAgreeAndConfirm:', error);

      toast.error('Failed. Please try again.');
    }
  };

  const getUserData = async () => {
    try {
      const response = await axiosInstance.get('/account/profile');
      localStorage.setItem('user_info', JSON.stringify(response.data.data));
    } catch (error) {
      console.error('Error in handleAgreeAndConfirm:', error);
    }
  };

  const getProfileImage = () => {
    const userInfo = JSON.parse(localStorage.getItem('user_info'));
    return userInfo ? `https://files.fggroup.in/${userInfo.user.profile_image}` : ''; // Adjust the URL structure if needed
  };

  const handleGoBack = () => {
    setCurrentStep('login');
  };

  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    getUserData();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleFreeListingClick = () => {
    const authData = localStorage.getItem('authorization');

    // Check if "business_listing" is not available in active_services
    const activeServices = JSON.parse(localStorage.getItem('user_info'))?.active_services || [];
    const isBusinessListingAvailable = activeServices.includes('BUSINESS-LISTING');

    if (authData && isBusinessListingAvailable) {
      window.location.href = '/company-listing';
    } else {
      if (!authData) {
        handleLoginClick();
      } else {
        setTermsDialogOpen(true);
      }
    }
  };

  const handleLogout = async () => {
    try {
      localStorage.removeItem('authorization')
      localStorage.removeItem('user_info')
      toast.success('Logout Successful!');
      window.location.href = '/';
    } catch (error) {
      console.error('Error in handleAgreeAndConfirm:', error);

      toast.error('Logout Failed. Please try again.');
    }
  };

  const handleSearch = () => {
    // Build the query parameters
    const queryParams = [];
    if (searchText) queryParams.push(`search=${encodeURIComponent(searchText)}`);
    if (location) queryParams.push(`city=${encodeURIComponent(location)}`);

    // Combine query parameters and redirect to the search page
    const queryString = queryParams.join('&');

    if (queryParams.length > 0) {
      window.location.href = `/list/search?${queryString}`;
    } else {
      window.location.href = '/list/search';
    }
  };

  const handleBackdropClick = (event) => {
    // Prevent closing on backdrop click
    event.stopPropagation();
  };

  const handleEscapeKeyDown = (event) => {
    // Prevent closing on escape key press
    event.stopPropagation();
  };


  return (
    <>
      <AppBar position={scrolling ? 'fixed' : 'static'} style={{ backgroundColor: '#fff' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Mobile View */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
              <img src={Logo} alt='Logo' className='w-10' />
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                ml: 1,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                color: '#000',
                textDecoration: 'none',
              }}
            >
              FG Group
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="#000"
              >
                <MenuIcon />
              </IconButton>
              {/* Mobile Navigation Menu */}
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {/* Text Search */}
                <Paper
                  component="form"
                  size="small"
                  sx={{
                    border: '1px solid #008ABD',
                    p: '2px 4px',
                    mr: 2,
                    ml: 2,
                    display: 'flex',
                    alignItems: 'center',
                    width: 'auto',
                  }}
                >
                  <IconButton sx={{ p: '5px' }} aria-label="search">
                    <SearchIcon />
                  </IconButton>
                  <InputBase
                    sx={{ ml: 1, mr: 2, flex: 1 }}
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleSearch();
                      }
                    }}
                  />
                  <button
                    type="button"
                    style={{
                      padding: '3px 5px',
                      backgroundColor: '#F59332',
                      borderRadius: '3px',
                    }}
                    onClick={handleSearch}
                  >
                    <SearchIcon style={{ marginRight: '0px' }} />
                  </button>
                </Paper>
                <Divider />
                {localStorage.getItem('authorization') ? (
                  null
                ) : (
                  <MenuItem>
                    <Link onClick={handleLoginClick} style={{ textDecoration: 'none', color: '#000' }}>
                      Login
                    </Link>
                  </MenuItem>
                )}
                {/* <MenuItem>
                <Select
                  size='small'
                  value={selectedLanguage}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Select language' }}
                  IconComponent={ArrowDropDownIcon}
                  sx={{
                    color: '#4131FF',
                    display: 'flex',
                    alignItems: 'center',
                    my: 1,
                  }}
                >
                  <MenuItem value="" disabled>
                    <TranslateIcon sx={{ fontSize: '18px', mr: 1 }} />
                    Select Language
                  </MenuItem>
                  <MenuItem value="english"><TranslateIcon sx={{ fontSize: '18px', mr: 1 }} /> English</MenuItem>
                  <MenuItem value="hindi"><TranslateIcon sx={{ fontSize: '18px', mr: 1 }} /> Hindi</MenuItem>
                  <MenuItem value="marathi"><TranslateIcon sx={{ fontSize: '18px', mr: 1 }} /> Marathi</MenuItem>
                  <MenuItem value="gujarati"><TranslateIcon sx={{ fontSize: '18px', mr: 1 }} /> Gujarati</MenuItem>
                </Select>
              </MenuItem> */}
              </Menu>
            </Box>

            {/* Desktop View */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
              <img src={Logo} alt='Logo' className='w-10 ml-10' />
            </Box>
            {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              color: '#000',
              textDecoration: 'none',
            }}
          >
            FG Group
          </Typography> */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end', alignItems: 'center' }}>
              {/* Location Search */}
              <Paper
                component="form"
                size="small"
                sx={{
                  border: '1px solid #008ABD',
                  p: '2px 4px',
                  mr: 2,
                  ml: 2,
                  display: 'flex',
                  width: '17%',
                  alignItems: 'center',
                }}
              >
                <IconButton sx={{ p: '5px' }} aria-label="location">
                  <LocationOnIcon />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, mr: 2, flex: 1 }}
                  placeholder="Enter Location…"
                  inputProps={{ 'aria-label': 'location' }}
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </Paper>
              {/* Text Search */}
              <Paper
                component="form"
                size="small"
                sx={{
                  border: '1px solid #008ABD',
                  p: '2px 4px',
                  mr: 2,
                  ml: 2,
                  display: 'flex',
                  alignItems: 'center',
                  width: 'auto',
                }}
              >
                <IconButton sx={{ p: '5px' }} aria-label="search">
                  <SearchIcon />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, mr: 2, flex: 1 }}
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                  type="button"
                  style={{
                    padding: '3px 5px',
                    backgroundColor: '#F59332',
                    borderRadius: '3px',
                  }}
                  onClick={handleSearch}
                >
                  <SearchIcon style={{ marginRight: '0px' }} />
                </button>
              </Paper>
              <Link
                onClick={handleFreeListingClick}
                sx={{ my: 2 }}
                style={{ textDecoration: 'none', color: '#000', fontWeight: '500', fontSize: '20px' }}
              >
                <AddchartIcon sx={{ mb: '3px', fontSize: '20px', mr: '5px' }} />
                Free Listing
              </Link>
              {/* <Select
              value={i18n.language}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Select language' }}
              IconComponent={ArrowDropDownIcon}
              sx={{
                my: 2,
                color: '#4131FF',
                display: 'flex',
                alignItems: 'center',
                mx: '10px',
                border: 'none',
                '&:focus': {
                  border: 'none',
                },
                '& .MuiSelect-root': {
                  padding: 1,
                },
                '& .MuiInputBase-input': {
                  padding: 1,
                },
              }}
            >
              <MenuItem value="" disabled>
                <TranslateIcon sx={{ fontSize: '18px', mr: 1 }} />
                Select Language
              </MenuItem>
              <MenuItem value="english"><TranslateIcon sx={{ fontSize: '18px', mr: 1 }} /> English</MenuItem>
              <MenuItem value="hindi"><TranslateIcon sx={{ fontSize: '18px', mr: 1 }} /> Hindi</MenuItem>
              <MenuItem value="marathi"><TranslateIcon sx={{ fontSize: '18px', mr: 1 }} /> Marathi</MenuItem>
              <MenuItem value="gujarati"><TranslateIcon sx={{ fontSize: '18px', mr: 1 }} /> Gujarati</MenuItem>
            </Select> */}
              {localStorage.getItem('authorization') ? (
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Account settings">
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2 }}
                      aria-controls={open ? 'account-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                    >
                      <Avatar sx={{ width: 32, height: 32 }} src={getProfileImage()} />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        '&::before': {
                          content: '""',
                          display: 'block',
                          position: 'absolute',
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: 'background.paper',
                          transform: 'translateY(-50%) rotate(45deg)',
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                  >
                    <MenuItem component={Link} to="/user/profile" onClick={handleClose}>
                      <ListItemIcon>
                        <AccountCircleIcon fontSize="small" />
                      </ListItemIcon>
                      Profile
                    </MenuItem>
                    <MenuItem component={Link} to="/user/favorites" onClick={handleClose}>
                      <ListItemIcon>
                        <FavoriteIcon fontSize="small" />
                      </ListItemIcon>
                      My Favorites
                    </MenuItem>
                    <MenuItem component={Link} to="/company-list" onClick={handleClose}>
                      <ListItemIcon>
                        <DashboardIcon fontSize="small" />
                      </ListItemIcon>
                      Business Update
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleLogout}>
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>
                </Box>
              ) : (
                /* If no authorization data, show login/signup */
                <Button
                  sx={{ my: 2, mx: 1, color: '#fff', display: 'block' }}
                  className='primary-btn'
                  variant="contained"
                  onClick={handleLoginClick}
                >
                  Login/Signup
                </Button>
              )}
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'block', md: 'none' }, textAlign: 'right' }}>
              {localStorage.getItem('authorization') ? (
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Account settings">
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2 }}
                      aria-controls={open ? 'account-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                    >
                      <Avatar sx={{ width: 32, height: 32 }} src={getProfileImage()} />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        '&::before': {
                          content: '""',
                          display: 'block',
                          position: 'absolute',
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: 'background.paper',
                          transform: 'translateY(-50%) rotate(45deg)',
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                  >
                    <MenuItem component={Link} to="/user/profile" onClick={handleClose}>
                      <ListItemIcon>
                        <AccountCircleIcon fontSize="small" />
                      </ListItemIcon>
                      Profile
                    </MenuItem>
                    <MenuItem component={Link} to="/user/favorites" onClick={handleClose}>
                      <ListItemIcon>
                        <FavoriteIcon fontSize="small" />
                      </ListItemIcon>
                      My Favorites
                    </MenuItem>
                    <MenuItem component={Link} to="/company-list" onClick={handleClose}>
                      <ListItemIcon>
                        <DashboardIcon fontSize="small" />
                      </ListItemIcon>
                      Business Update
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleLogout}>
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>
                </Box>
              ) : (
                /* If no authorization data, show login/signup */
                <Button
                  sx={{ color: '#000', ml: '10px' }}
                  onClick={handleFreeListingClick}
                >
                  Free Listing
                </Button>
              )}
            </Box>
          </Toolbar>

          {/* Login Dialog */}
          <Dialog open={loginOpen && currentStep === 'login'} onClose={handleLoginClose} style={{ textAlign: 'center' }}>
            <DialogTitle>
              <img src={Logo} alt="Logo" className="w-16 mb-4 m-auto" />
              Welcome
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleLoginClose}
                aria-label="close"
                sx={{ position: 'absolute', top: 0, right: 15 }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <Typography variant="body1" paragraph>
                <b>Login for a seamless experience</b>
              </Typography>
              <TextField
                label="Mobile Number"
                fullWidth
                variant="outlined"
                margin="normal"
                onChange={(e) => setMobileNumber(e.target.value)}
              />
              <Button
                sx={{ my: 2, color: '#fff', bgcolor: '#001E3A' }}
                className='primary-btn'
                variant="contained"
                onClick={handleLoginSubmit}
              >
                Login with OTP
              </Button>
            </DialogContent>
          </Dialog>

          {/* OTP Dialog */}
          <Dialog open={otpDialogOpen && currentStep === 'otp'} onClose={() => setOtpDialogOpen(false)} style={{ textAlign: 'center' }}>
            <DialogTitle>
              <img src={Logo} alt="Logo" className="w-16 mb-4 m-auto" />
              OTP Verification
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleLoginClose}
                aria-label="close"
                sx={{ position: 'absolute', top: 0, right: 15 }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              {/* Add OTP input field and submit button here */}
              <TextField
                label="Enter Otp"
                fullWidth
                variant="outlined"
                margin="normal"
                name='otpCode'
                value={otpCode}
                onChange={(e) => setOtpCode(e.target.value)}
              />

              <Button
                sx={{ my: 1, mx: 1, color: '#fff', bgcolor: '#343a40' }}
                className='primary-btn'
                variant="contained"
                onClick={handleGoBack}
              >
                Back
              </Button>
              <Button
                sx={{ my: 1, color: '#fff', bgcolor: '#001E3A' }}
                className='primary-btn'
                variant="contained"
                onClick={handleOtpSubmit}
              >
                Submit OTP
              </Button>
            </DialogContent>
          </Dialog>

          {/* Terms Dialog */}
          <Dialog
            open={termsDialogOpen}
            onClose={() => setTermsDialogOpen(false)}
            BackdropProps={{
              onClick: handleBackdropClick,
            }}
            onKeyDown={handleEscapeKeyDown}
            style={{ textAlign: 'center' }}
          >
            <DialogTitle>
              <img src={Logo} alt="Logo" className="w-16 mb-4 m-auto" />
              Terms and Conditions
            </DialogTitle>
            <DialogContent>
              {/* Add your terms and conditions content here */}
              <Typography variant="body1" paragraph>
                <b>Terms and Conditions for Listing Business Online <br /> in FG Group Listing </b>
              </Typography>
              {/* Checkbox for agreement */}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={termsAgreed}
                    onChange={(e) => setTermsAgreed(e.target.checked)}
                    color="primary"
                  />
                }
                label="I agree to the terms and conditions"
              /> <br />
              <Typography variant="body2">
                By clicking "Agree and Confirm," you agree to our{' '}
                <Link to="/terms-and-conditions">Terms and Conditions</Link>.
              </Typography>
              <Button
                sx={{ my: 2, color: '#fff', bgcolor: '#001E3A' }}
                className='primary-btn'
                variant="contained"
                onClick={handleAgreeAndConfirm}
                disabled={!termsAgreed}
              >
                Agree and Confirm
              </Button>
            </DialogContent>
          </Dialog>
        </Container>
      </AppBar>
      <Link
        className='float'
        onClick={handleFreeListingClick}
        sx={{ my: 2 }}
        style={{ textDecoration: 'none', color: '#000', fontWeight: '500', fontSize: '16px' }}
      >
        <AddchartIcon sx={{ mb: '3px', fontSize: '20px', mr: '5px' }} />
        Free Listing
      </Link>
    </>
  );
}


export default ResponsiveAppBar;