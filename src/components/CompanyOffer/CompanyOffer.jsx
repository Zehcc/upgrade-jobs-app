import React from "react";
import { useProfileContext } from "../../shared/contexts/ProfileContext";

const CompanyOffer = ({ offer }) => {
  const { companyProfile } = useProfileContext();
  console.log(companyProfile);
  return (
    <li className="offer-container">
      <div className="offer-text-container">
        <h4>{offer.title}</h4>
        <p>Vacantes: {offer.vacants}</p>
        <p>Candidatos: {offer.candidates.length}</p>
      </div>
    </li>
  );
};

export default CompanyOffer;
