import { Router, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import RegisterCompanyPage from "./pages/RegisterCompany/RegisterCompanyPage";
import RegisterUserPage from "./pages/RegisterUser/RegisterUserPage";
import IsAuthCompanyProvider from "./shared/contexts/IsAuthCompanyContext";
import IsAuthUserProvider from "./shared/contexts/IsAuthUserContext";

import "./styles/main.scss";

function App() {
  return (

      <IsAuthCompanyProvider>
        <IsAuthUserProvider>
          <div className="App">
            <LandingPage/>
            <RegisterCompanyPage/>
            <RegisterUserPage/>
          </div>
        </IsAuthUserProvider>
      </IsAuthCompanyProvider>

  );
}

export default App;
