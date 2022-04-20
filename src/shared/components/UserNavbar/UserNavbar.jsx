import React from "react";
import { Link } from "react-router-dom";
import { useProfileContext } from "../../contexts/ProfileContext";

const UserNavbar = () => {
  const { userProfile } = useProfileContext();
  return (
    <nav className="user-navbar">
      <Link to="/offers">
        <div className="nav-item">Ofertas</div>
      </Link>
      <Link to= {`/candidatures/${userProfile.id}`}>
      <div className="nav-item">Candidaturas</div>
      </Link>
      <Link to={`/userProfile/${userProfile.id}`}>
        <div className="nav-item">Perfil</div>
      </Link>
    </nav>
  );
};

export default UserNavbar;
