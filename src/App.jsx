import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import RegisterCompanyPage from './pages/RegisterCompany/RegisterCompanyPage';
import RegisterUserPage from './pages/RegisterUser/RegisterUserPage';
import LoginPage from './pages/Login/LoginPage';
import IsAuthCompanyProvider from './shared/contexts/IsAuthCompanyContext';
import IsAuthUserProvider from './shared/contexts/IsAuthUserContext';
import OffersPage from './pages/OffersPage/OffersPage';
import HomePage from './pages/HomePage/HomePage';
import './styles/main.scss';
import ProfileProvider from './shared/contexts/ProfileContext';

function App() {
  return (
    <div className='App'>
      <IsAuthCompanyProvider>
        <IsAuthUserProvider>
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
              </Routes>
            </Router>
          </ProfileProvider>
        </IsAuthUserProvider>
      </IsAuthCompanyProvider>
    </div>
  );
}

export default App;
