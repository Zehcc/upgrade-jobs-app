import React from "react";
import { Link } from "react-router-dom";
import { useProfileContext } from "../../contexts/ProfileContext";

const CompanyNavbar = () => {
  const { companyProfile } = useProfileContext();
  return (
    <nav className="company-navbar">
      <Link to="/companyOffers">
        <div className="nav-item">Mis ofertas</div>
      </Link>
      <Link to={`/companyProfile/${companyProfile.id}`}>
        <div className="nav-item">Perfil</div>
      </Link>
    </nav>
  );
};

export default CompanyNavbar;
