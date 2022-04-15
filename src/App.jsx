import {Navigate, Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import RegisterCompanyPage from './pages/RegisterCompany/RegisterCompanyPage';
import RegisterUserPage from './pages/RegisterUser/RegisterUserPage';
import LoginPage from './pages/Login/LoginPage';
import IsAuthCompanyProvider from './shared/contexts/IsAuthCompanyContext';
import IsAuthUserProvider from './shared/contexts/IsAuthUserContext';
import OffersPage from './pages/OffersPage/OffersPage';

import './styles/main.scss';

function App() {
  return (
    <div className='App'>
      <IsAuthCompanyProvider>
        <IsAuthUserProvider>
          <Router>
            <Routes>
              <Route path='/inicio' element={<LandingPage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/registerCompany' element={<RegisterCompanyPage />} />
              <Route path='/registerUser' element={<RegisterUserPage />} />
              <Route path='*' element={<Navigate to='inicio' />} />
              <Route path='/offers' element={<OffersPage />} />
            </Routes>
          </Router>
        </IsAuthUserProvider>
      </IsAuthCompanyProvider>
    </div>
  );
}

export default App;
