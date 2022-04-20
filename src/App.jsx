import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import RegisterCompanyPage from './pages/RegisterCompany/RegisterCompanyPage';
import RegisterUserPage from './pages/RegisterUser/RegisterUserPage';
import LoginPage from './pages/Login/LoginPage';
import IsAuthProvider from './shared/contexts/IsAuthContext';
import OffersPage from './pages/OffersPage/OffersPage';
import './styles/main.scss';
import ProfileProvider from './shared/contexts/ProfileContext';
import UserProfilePage from './pages/UserProfile/UserProfilePage';
import CompanyProfilePage from './pages/CompanyProfile/CompanyProfilePage';
import CompanyOffers from './pages/CompanyOffers/CompanyOffers';
import UserApplicationSent from './pages/UserApplicationSent/UserApplicationSent';
import CreateOfferPage from './pages/CreateOffer/CreateOfferPage';
import CandidaturesPage from './pages/Candidatures/CandidaturesPage';
import DetailedOfferPage from './pages/DetailedOfferPage/DetailedOfferPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className='App'>

      <IsAuthProvider>
        <ProfileProvider>
          <Router>
            <Routes>
              <Route path='/wait' element={<LandingPage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/home' element={<HomePage />} />
              <Route path='/registerCompany' element={<RegisterCompanyPage />} />
              <Route path='/registerUser' element={<RegisterUserPage />} />
              <Route path='*' element={<Navigate to='wait' />} />
              <Route path='/offers' element={<OffersPage />} />
              <Route path='/userProfile/:id' element={<UserProfilePage />} />
              <Route path='/companyProfile/:id' element={<CompanyProfilePage />} />
              <Route path='/companyOffers' element={<CompanyOffers />} />
              <Route path='/createOffer' element={<CreateOfferPage />} />
              <Route path='/ApplicationSent' element={<UserApplicationSent />} />
              <Route path='/candidatures/:id' element={<CandidaturesPage />} />
              <Route path='/detailedOffer/:id' element={<DetailedOfferPage />} />

            </Routes>
          </Router>
        </ProfileProvider>
      </IsAuthProvider>

    </div>
  );
}

export default App;
