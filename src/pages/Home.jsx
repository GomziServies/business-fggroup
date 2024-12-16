import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Header from '../components/HeaderStyle/Header';
import Footer from '../components/FooterStyle/Footer';
import SectionFirst from '../components/HomeSectionFirst';
import HomeRecentActivity from '../components/HomeRecentActivity';
import HomeBrandsSlider from '../components/HomeBrandsSlider';
import HomeBlogs from '../components/HomeBlogs';
import HomeAboutUs from '../components/HomeAboutUs';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>FG Group Business Listing</title>
        <meta name="description" content="Your meta description" />
      </Helmet>
      <Header />
      <SectionFirst />
      <HomeRecentActivity />
      {/* <HomeBrandsSlider /> */}
      <HomeBlogs />
      <HomeAboutUs />
      <Footer />
    </div>
  )
}

export default Home