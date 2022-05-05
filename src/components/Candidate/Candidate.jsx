import React from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../shared/services/api';

const Candidate = ({ candidate, offer }) => {
  let navigate = useNavigate();
  const changeState = (state) => {
    let candidature = candidate.candidatures.find(
      (candidature) => candidature.id === offer._id
    );
    candidature = {
      id: candidature.id,
      state: state,
    };
    let oldCandidatures = candidate.candidatures.filter(
      (oldCandidature) => candidature.id !== oldCandidature.id
    );
    const updatedCandidatures = {
      candidatures: [candidature, ...oldCandidatures],
    };

    const updatedTime = {
      gestionDate: new Date().getTime(),
      candidates: offer.candidates,
    };
    API.patch(`users/${candidate._id}`, updatedCandidatures)
      .then(API.patch(`offers/${offer._id}`, updatedTime))
      .then(navigate(`/detailedCompanyOffer/${offer._id}`));
  };

  return (
    <div className='candidate-container'>
      <div className='candidate-img'>
        <img src={candidate.img} alt={candidate.id} />
      </div>
      <div className='candidate-info'>
        <h2>{candidate.name}</h2>
        <a href={candidate.cv} target='_blank' rel='noopener noreferrer'>
          Ver el CV del candidato
        </a>
      </div>
      <div className='candidate-buttons'>
        <button
          className='candidate-button'
          onClick={() => changeState('Sigues en el proceso')}
        >
          Sigue en el proceso
        </button>
        <button
          className='candidate-button'
          onClick={() => changeState('CV no preseleccionado')}
        >
          No preseleccionar curriculum
        </button>
        <button
          className='candidate-button'
          onClick={() => changeState('Descartado')}
        >
          Descartar candidato
        </button>
      </div>
    </div>
  );
};

export default Candidate;
