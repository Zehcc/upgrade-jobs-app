import React from "react";
import { API } from "../../shared/services/api";

const Candidate = ({ candidate, offer }) => {
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
      (response) => {
        console.log(response.data);
      }
    );
  };

  return (
    <div className='candidate-container'>
      <img src={candidate.img} alt={candidate.id} />
      <h2>{candidate.name}</h2>
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
