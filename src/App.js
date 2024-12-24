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
      </Routes>
    </div>
  );
}

export default App;
