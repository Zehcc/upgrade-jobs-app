import React from "react";
import { useGestionContext } from "../../shared/contexts/GestionContext";

const CompanyOffer = ({ offer }) => {
  const { updatedDate } = useGestionContext();
  return (
    offer && (
      <li className='offer-container'>
        <div className='offer-text-container'>
          <h4>{offer.title}</h4>
          <p>Vacantes: {offer.vacants}</p>
          <p>Candidatos: {offer.candidates.length}</p>
          {offer.gestionDate && (
            <p>Has gestionado esta oferta {updatedDate(offer.gestionDate)}</p>
          )}
        </div>
      </li>
    )
  );
};

export default CompanyOffer;
