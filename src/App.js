import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TermsAndConditions from './pages/TermsAndConditions';
import CompanyListing from './pages/CompanyListing';
import CompanyList from './pages/CompanyList';
import UpdateCompanyData from './pages/UpdateCompanyListing';
import UserProfile from './pages/User/UserProfile';
import UserFavorites from './pages/User/UserFavorites';
import ListingBusinessList from './pages/Business/ListingBusinessList';
import ListingBusinessView from './pages/Business/BusinessCompanyView';
import BusinessReview from './pages/Business/BusinessReviewsView';

function App() {
  return (
    <div className="text-center font-bold">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/company-listing" element={<CompanyListing />} />
        <Route path="/company-list" element={<CompanyList />} />
        <Route path="/company-update" element={<UpdateCompanyData />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/favorites" element={<UserFavorites />} />
        <Route path="/business/reviews" element={<BusinessReview />} />
        <Route path="/list/search" element={<ListingBusinessList />} />
        <Route path="/list/company-view" element={<ListingBusinessView />} />
      </Routes>
    </div>
  );
}

export default App;
