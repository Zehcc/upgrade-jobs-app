import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../../shared/services/api";

const Candidature = ({ candidature }) => {
  const [offer, setOffer] = useState();
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
            </div>
          </li>
        </Link>
      )}
    </div>
  );
};

export default Candidature;
