import React from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../shared/services/api";

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
    API.patch(`users/${candidate._id}`, updatedCandidatures).then(
      navigate(`/detailedCompanyOffer/${offer._id}`)
    );
  };

  return (
    <div className='candidate-container'>
      <img src={candidate.img} alt={candidate.id} />
      <h2>{candidate.name}</h2>
      <a href={candidate.cv} target='_blank' rel='noopener noreferrer'>
        Ver cv candidato
      </a>
      <button onClick={() => changeState("Sigues en el proceso")}>
        Sigues en el proceso
      </button>
      <button onClick={() => changeState("CV no preseleccionado")}>
        CV no preseleccionado
      </button>
      <button onClick={() => changeState("Descartado")}>Descartado</button>
    </div>
  );
};

export default Candidate;
