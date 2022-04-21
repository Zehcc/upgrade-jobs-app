import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../shared/services/api";

const DetailedCandidature = () => {
  const [detailedCandidature, setDetailedCandidature] = useState({});
  const { id } = useParams();
  useEffect(() => {
    API.get(`offers/${id}`).then((response) => {
      setDetailedCandidature(response.data);
    });
  }, [id]);
  return (
    <div className='detailed-container'>
      <div className='offer-header'>
        {detailedCandidature.company && (
          <div className='img-container'>
            <img
              src={detailedCandidature.company.info.img}
              alt={detailedCandidature.company.name}
            />
          </div>
        )}
        <div className='text-container'>
          <h3>{detailedCandidature.title}</h3>
          <p>{detailedCandidature.location}</p>
          <p>Vacantes: {detailedCandidature.vacants}</p>
        </div>
      </div>
      <div className='offer-description'>
        <p>{detailedCandidature.description}</p>
      </div>
    </div>
  );
};

export default DetailedCandidature;
