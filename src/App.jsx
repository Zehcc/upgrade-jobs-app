import {Navigate, Route, BrowserRouter as Router, Routes} from 'react-router-dom';
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
import CreateOfferPage from './pages/CreateOffer/CreateOfferPage';

function App() {
  return (
    <div className='App'>
    
        <IsAuthProvider>
          <ProfileProvider>
            <Router>
              <Routes>
                <Route path='/inicio' element={<LandingPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/registerCompany' element={<RegisterCompanyPage />} />
                <Route path='/registerUser' element={<RegisterUserPage />} />
                <Route path='*' element={<Navigate to='inicio' />} />
                <Route path='/offers' element={<OffersPage />} />
                <Route path= '/userProfile/:id' element={<UserProfilePage/>}/>
                <Route path= '/companyProfile/:id' element={<CompanyProfilePage/>}/>
                <Route path= '/companyOffers' element={<CompanyOffers/>}/>
                <Route path= '/createOffer' element ={<CreateOfferPage/>}/>
              </Routes>
            </Router>
          </ProfileProvider>
        </IsAuthProvider>
     
    </div>
  );
}

export default App;
