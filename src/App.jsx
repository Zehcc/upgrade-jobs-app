import { Router, Routes } from "react-router-dom";
import IsAuthCompanyProvider from "./Shared/Contexts/IsAuthCompanyContext";
import IsAuthUserProvider from "./Shared/Contexts/IsAuthUserContext";
import "./styles/main.scss";

function App() {
  return (
    <IsAuthCompanyProvider>
    <IsAuthUserProvider>
      <div className="App">
        <Router>
          <Routes>
    
      <h1>Nuevo proyecto</h1>
   
          </Routes>
        </Router>
      </div>
    </IsAuthUserProvider>
    </IsAuthCompanyProvider>
  );
}

export default App;

