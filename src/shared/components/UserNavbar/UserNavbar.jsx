import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonLogout from "../../../components/ButtonLogout/ButtonLogout";
import { useProfileContext } from "../../contexts/ProfileContext";

const UserNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);

  const { userProfile } = useProfileContext();
  return (
    <nav className="user-navbar">
      <Link to="/offers">
        <div className="nav-item">Ofertas</div>
      </Link>
      <Link to={`/candidatures/${userProfile.id}`}>
        <div className="nav-item">Candidaturas</div>
      </Link>
      <div className="dropdown">
        <button className="dropbtn" type="button" onClick={handleButtonClick}>Configuración</button>
        <div className={`dropdown-submenu ${isOpen ? "show" : ""}`} >
          <ul>
            <li>
              <Link to={`/userProfile/${userProfile.id}`}>
                <div className="nav-item">Perfil</div>
              </Link>
            </li>
            <li>
              <ButtonLogout className="nav-item" />
            </li>
          </ul>
        </div>

      </div>
    </nav >
  );
};

export default UserNavbar;
