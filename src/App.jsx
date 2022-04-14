import { Router, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginCompanyPage from "./pages/LoginCompany/LoginCompanyPage";
import IsAuthCompanyProvider from "./shared/contexts/IsAuthCompanyContext";
import IsAuthUserProvider from "./shared/contexts/IsAuthUserContext";
import "./styles/main.scss";

function App() {
  return (
    <div>
      <IsAuthCompanyProvider>
        <IsAuthUserProvider>
          <div className="App">
            <LandingPage></LandingPage>
            <LoginCompanyPage />
          </div>
        </IsAuthUserProvider>
      </IsAuthCompanyProvider>
    </div>
  );
}

export default App;
