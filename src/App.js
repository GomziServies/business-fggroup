import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/profile';
import Login from './pages/login';
import ListingList from './pages/listing-list';
import AddListing from './pages/add-listing';
import ListingView from './pages/listing-view';

function App() {
  return (
    <div className="text-center font-bold">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/listing-list" element={<ListingList />} />
        <Route path="/add-listing" element={<AddListing />} />
        <Route path="/listing-view" element={<ListingView />} />
        {/* <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/company-listing" element={<CompanyListing />} />
        <Route path="/company-list" element={<CompanyList />} />
        <Route path="/company-update" element={<UpdateCompanyData />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/favorites" element={<UserFavorites />} />
        <Route path="/business/reviews" element={<BusinessReview />} />
        <Route path="/list/search" element={<ListingBusinessList />} />
        <Route path="/list/company-view" element={<ListingBusinessView />} /> */}
      </Routes>
    </div>
  );
}

export default App;
