import React from "react";
import Logo from '../../assets/logo.png'
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const linkStyles = {
    mr: 2,
    mt: 1,
    display: { md: 'flex' },
    fontWeight: 500,
    color: '#fff',
    textDecoration: 'none',
    textAlign: 'start',
    transition: 'color 0.3s', // Adding transition for smooth color change
    '&:hover': {
      color: '#FF6914', // Color change on hover
    },
  };
  return (
    <footer className="bg-black mt-5">
      <div className="container py-md-5 py-4">
        <div className="row">
          <div className="flex flex-col col-md-4 lg:items-start">
            <div className="flex items-center">
              <img alt="" src={Logo} className="w-10" />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  ml: 2,
                  display: { md: 'flex' },
                  fontWeight: 700,
                  color: '#fff',
                  textDecoration: 'none',
                }}
              >
                FG Group
              </Typography>
            </div>
            <div className="text-white lg:text-left text-start mt-2" style={{ fontWeight: '500' }}>
              From Diet And Exercise Plans To Provide Digital Marketing Knowledge, We Give You The Best Knowledge Overall.
            </div>
            <Typography
              variant="h6"
              sx={{
                mr: { md: '2' },
                mt: 2,
                display: { md: 'flex' },
                fontWeight: 700,
                color: '#fff',
                textDecoration: 'none',
                textAlign: 'start'
              }}
            >
              Location
            </Typography>
            <Typography
              variant="p"
              component="a"
              href="https://maps.app.goo.gl/kGyiSGaV2QhaaUxX6"
              sx={{
                mr: 2,
                mt: 0,
                fontWeight: 400,
                color: '#fff',
                textAlign: 'start',
                textDecoration: 'none',
              }}
            >A- 301, Ambrosia Business Hub, VIP Road, beside SMC Garden, Vesu, Surat, Gujarat 395007
            </Typography>
          </div>
          {/* <div className="flex flex-col col-md-2 lg:items-start mt-3 mt-md-0">
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { md: 'flex' },
                fontWeight: 700,
                color: '#fff',
                textDecoration: 'none',
                textAlign: 'start'
              }}
            >
              Quick Links
            </Typography>
            <Typography
              variant="p"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={linkStyles}
            >
              Home
            </Typography>
            <Typography
              variant="p"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={linkStyles}
            >
              Listing Service
            </Typography>
            <Typography
              variant="p"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={linkStyles}
            >
              Find Service
            </Typography>
            <Typography
              variant="p"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={linkStyles}
            >
              Login/Sign-up
            </Typography>
          </div> */}
          <div className="flex flex-col col-md-2 lg:items-start">
            <Typography
              variant="h5"
              noWrap
              component="p"
              sx={{
                mr: 2,
                mt: { xs: '20px', md: 0 },
                display: { md: 'flex' },
                fontWeight: 700,
                color: '#fff',
                textAlign: 'start',
                textDecoration: 'none',
              }}
            >
              Main Links
            </Typography>
            <Typography
              variant="p"
              noWrap
              component="a"
              href="/"
              sx={linkStyles}
            >
              Home
            </Typography>
            <Typography
              variant="p"
              noWrap
              component="a"
              target="_blank"
              href="https://fggroup.in/fgiit/courses.html"
              sx={linkStyles}
            >
              FGIIT
            </Typography>
            <Typography
              variant="p"
              noWrap
              component="a"
              target="_blank"
              href="https://fggroup.in/fitnesswithgomzi/weight-loss-programs.html"
              sx={linkStyles}
            >
              FWG
            </Typography>
            <Typography
              variant="p"
              noWrap
              component="a"
              target="_blank"
              href="https://fggroup.in/recipe/free-weight-loss-recipe-videos.html"
              sx={linkStyles}
            >
              FG Meals
            </Typography>
          </div>
          <div className="flex flex-col col-md-4 lg:items-start">
            <Typography
              variant="h5"
              noWrap
              component="span"
              sx={{
                mr: 2,
                mt: { xs: 2, md: 0 },
                display: { md: 'flex' },
                fontWeight: 700,
                color: '#fff',
                textAlign: 'start'
              }}
            >
              Follow Us
            </Typography>
            <Typography
              variant="p"
              noWrap
              component="a"
              href="https://www.facebook.com/fitnesswithgomzi/"
              target="_blank"
              rel="noopener noreferrer"
              sx={linkStyles}
            >
              <ListItemIcon sx={{ minWidth: '36px' }}>
                <FacebookIcon sx={{ color: '#618aff' }} />
              </ListItemIcon>
              facebook.com/fitnesswithgomzi/
            </Typography>
            <Typography
              variant="p"
              noWrap
              component="a"
              href="https://www.youtube.com/@GautamJaniOffcial/featured"
              target="_blank"
              rel="noopener noreferrer"
              sx={linkStyles}
            >
              <ListItemIcon sx={{ minWidth: '36px' }}>
                <YouTubeIcon sx={{ color: '#ff6363' }} />
              </ListItemIcon>
              www.youtube.com/@GautamJaniOffcial
            </Typography>
            <Typography
              variant="p"
              noWrap
              component="a"
              href="https://www.instagram.com/fitnesswithgomzi/"
              target="_blank"
              rel="noopener noreferrer"
              sx={linkStyles}
            >
              <ListItemIcon sx={{ minWidth: '36px' }}>
                <InstagramIcon sx={{ color: '#db6eff' }} />
              </ListItemIcon>
              www.instagram.com/fitnesswithgomzi/
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
