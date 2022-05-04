import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGestionContext } from "../../shared/contexts/GestionContext";
import { API } from "../../shared/services/api";

const Candidature = ({ candidature }) => {
  const [offer, setOffer] = useState();
  const { updatedDate } = useGestionContext();
  useEffect(() => {
    API.get(`/offers/${candidature.id}`).then((response) => {
      setOffer(response.data);
    });
  }, []);

  return (
    <div>
      {offer && (
        <Link to={`/detailedCandidature/${offer._id}`}>
          <li className='offer-container'>
            <div className='offer-img-container'>
              <img src={offer.company.info.img} alt={offer.company._id} />
            </div>
            <div className='offer-text-container'>
              <h4>{offer.title}</h4>
              <p>{offer.company.name}</p>
              <p>{offer.company.info.location}</p>
              <p>{candidature.state}</p>
              {offer.gestionDate && (
                <p>
                  La empresa ha estado gestionando CVs
                  {updatedDate(offer.gestionDate)}
                </p>
              )}
            </div>
          </li>
        </Link>
      )}
    </div>
  );
};

export default Candidature;
