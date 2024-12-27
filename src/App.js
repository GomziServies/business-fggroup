import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/profile';
import Login from './pages/login';
import ListingList from './pages/listing-list';
import AddListing from './pages/add-listing';
import ListingView from './pages/listing-view';
import UpdateListing from './pages/update-listing';
import AffordableList from './pages/affordable-list';
import StandardList from './pages/standard-list';
import PremiumList from './pages/premium-list';
import AllListingList from './pages/all-listing-list';
import FirstBlog from './pages/revolutionizing-gyms';
import TwoBlog from './pages/strategies-for-modern-gyms';
import ThreeBlog from './pages/scalable-gym';
import FourBlog from './pages/member-engagement';
import MemberEngagement from './pages/member-engagement';
import RevolutionizingGyms from './pages/revolutionizing-gyms';
import StrategiesforModernGyms from './pages/strategies-for-modern-gyms';
import ScalableGym from './pages/scalable-gym';
import ScrollRestoration from './components/ScrollRestoration';

function App() {
  return (
    <div className="text-center font-bold">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/all-listing" element={<AllListingList />} />
        <Route path="/listing-list" element={<ListingList />} />
        <Route path="/add-listing" element={<AddListing />} />
        <Route path="/listing-view" element={<ListingView />} />
        <Route path="/update-listing" element={<UpdateListing />} />
        <Route path="/affordable-list" element={<AffordableList />} />
        <Route path="/standard-list" element={<StandardList />} />
        <Route path="/premium-list" element={<PremiumList />} />
        <Route path="/revolutionizing-gyms" element={<RevolutionizingGyms />} />
        <Route path="/strategies-for-modern-gyms" element={<StrategiesforModernGyms />} />
        <Route path="/scalable-gym" element={<ScalableGym />} />
        <Route path="/member-engagement" element={<MemberEngagement />} />
      </Routes>
      <ScrollRestoration />
    </div>
  );
}

export default App;
