import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useProfileContext } from "../../contexts/ProfileContext";
import ButtonLogout from "../../../components/ButtonLogout/ButtonLogout";

const CompanyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };
  const { companyProfile } = useProfileContext();
  return (
    <nav className="company-navbar">
      <Link to="/companyOffers">
        <div className="nav-item">Mis ofertas</div>
      </Link>
      <div className="dropdown">
        <button className="dropbtn" type="button" onClick={handleButtonClick}>Configuración</button>
        <div className={`dropdown-submenu ${isOpen ? "show" : ""}`} >
          <ul>
            <li>
              <Link to={`/companyProfile/${companyProfile.id}`}>
                <div className="nav-item">Perfil</div>
              </Link>
            </li>
            <li>
              <ButtonLogout className="nav-item" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CompanyNavbar;
