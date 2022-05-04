import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProfileContext } from "../../shared/contexts/ProfileContext";
import { API } from "../../shared/services/api";
import { useGestionContext } from "../../shared/contexts/GestionContext";

const DetailedOffer = () => {
  const { userProfile } = useProfileContext();
  const { creationDate } = useGestionContext();
  let navigate = useNavigate();
  const [detailedOffer, setDetailedOffer] = useState({});
  const { id } = useParams();
  useEffect(() => {
    API.get(`offers/${id}`).then((response) => {
      setDetailedOffer(response.data);
    });
  }, [id]);
  const exists = userProfile.candidatures.find(
    (candidature) => candidature.id === id
  );
  const sendInscription = () => {
    const updatedCandidates = [userProfile.id, ...detailedOffer.candidates];
    const candidatesDB = {
      candidates: updatedCandidates,
    };
    const updatedCandidatures = [
      { id: detailedOffer._id, state: "Inscrito" },
      ...userProfile.candidatures,
    ];
    const candidaturesDB = {
      candidatures: updatedCandidatures,
    };
    API.patch(`/offers/${detailedOffer._id}`, candidatesDB);
    API.patch(`/users/${userProfile.id}`, candidaturesDB).then(
      navigate("/offers")
    );
  };

  return (
    <div className='detailed-container'>
      <div className='offer-header'>
        {detailedOffer.company && (
          <div className='img-container'>
            <img
              src={detailedOffer.company.info.img}
              alt={detailedOffer.company.name}
            />
          </div>
        )}
        <div className='text-container'>
          <h3>{detailedOffer.title}</h3>
          <p>{detailedOffer.location}</p>
          <p>Vacantes: {detailedOffer.vacants}</p>
          <p>{creationDate(detailedOffer.createdAt)}</p>
        </div>
      </div>
      <div className='offer-description'>
        <p>{detailedOffer.description}</p>
      </div>
      {!exists ? (
        <button className='button' onClick={sendInscription}>
          Inscribirme
        </button>
      ) : (
        <p>Ya inscrito</p>
      )}
    </div>
  );
};

export default DetailedOffer;
