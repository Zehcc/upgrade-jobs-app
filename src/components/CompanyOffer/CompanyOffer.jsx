import React from "react";

const CompanyOffer = ({ offer }) => {
  return (
    offer && (
      <li className='offer-container'>
        <div className='offer-text-container'>
          <h4>{offer.title}</h4>
          <p>Vacantes: {offer.vacants}</p>
          <p>Candidatos: {offer.candidates.length}</p>
        </div>
      </li>
    )
  );
};

export default CompanyOffer;
