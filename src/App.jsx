import {Navigate, Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import RegisterCompanyPage from './pages/RegisterCompany/RegisterCompanyPage';
import RegisterUserPage from './pages/RegisterUser/RegisterUserPage';
import LoginPage from './pages/Login/LoginPage';
import IsAuthCompanyProvider from './shared/contexts/IsAuthCompanyContext';
import IsAuthUserProvider from './shared/contexts/IsAuthUserContext';
import OffersPage from './pages/OffersPage/OffersPage';
import UserApplicationSent from './pages/UserApplicationSent/UserApplicationSent';

import './styles/main.scss';
import ProfileProvider from './shared/contexts/ProfileContext';
import UserProfilePage from './pages/UserProfile/UserProfilePage';
import CompanyProfilePage from './pages/CompanyProfile/CompanyProfilePage';
import CompanyOffers from './pages/CompanyOffers/CompanyOffers';
import CreaterOfferPage from './pages/CreateOffer/CreaterOfferPage';

function App() {
  return (
    <div className='App'>
      <IsAuthCompanyProvider>
        <IsAuthUserProvider>
          <ProfileProvider>
            <Router>
              <Routes>
                <Route path='/inicio' element={<LandingPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/registerCompany' element={<RegisterCompanyPage />} />
                <Route path='/registerUser' element={<RegisterUserPage />} />
                <Route path='*' element={<Navigate to='inicio' />} />
                <Route path='/offers' element={<OffersPage />} />
                <Route path='/userProfile/:id' element={<UserProfilePage />} />
                <Route path='/companyProfile/:id' element={<CompanyProfilePage />} />
                <Route path='/companyOffers' element={<CompanyOffers />} />
                <Route path='/createOffer' element={<CreaterOfferPage />} />
                <Route path='/ApplicationSent' element={<UserApplicationSent />} />
              </Routes>
            </Router>
          </ProfileProvider>
        </IsAuthUserProvider>
      </IsAuthCompanyProvider>
    </div>
  );
}

export default App;
