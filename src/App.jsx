import { Router, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginCompanyPage from "./pages/LoginCompany/LoginCompanyPage";
import RegisterCompanyPage from "./pages/RegisterCompany/RegisterCompanyPage";
import RegisterUserPage from "./pages/RegisterUser/RegisterUserPage";
import IsAuthCompanyProvider from "./shared/contexts/IsAuthCompanyContext";
import IsAuthUserProvider from "./shared/contexts/IsAuthUserContext";

import "./styles/main.scss";

function App() {
  return (
<<<<<<< HEAD
      <IsAuthCompanyProvider>
        <IsAuthUserProvider>
          <div className="App">
            <LandingPage></LandingPage>
            <LoginCompanyPage />
            <RegisterCompanyPage/>
            <RegisterUserPage/>
          </div>
        </IsAuthUserProvider>
      </IsAuthCompanyProvider>
=======
    <IsAuthCompanyProvider>
      <IsAuthUserProvider>
        <div className="App">
          <LandingPage></LandingPage>

          <LoginCompanyPage />
        </div>
      </IsAuthUserProvider>
    </IsAuthCompanyProvider>
>>>>>>> b1e6f473d8f1fc55c39a91c26a6bcb0600dd555b
  );
}

export default App;
