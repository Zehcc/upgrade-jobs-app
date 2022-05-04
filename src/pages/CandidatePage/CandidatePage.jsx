import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Candidate from "../../components/Candidate/Candidate";
import { API } from "../../shared/services/api";
import CompanyNavbar from "../../shared/components/CompanyNavbar/CompanyNavbar";
const CandidatePage = () => {
  const { userID, offerID } = useParams();

  const [candidate, setCandidate] = useState({});
  const [offer, setOffer] = useState({});

  useEffect(() => {
    API.get(`users/${userID}`).then((response) => {
      setCandidate(response.data);
    });
    API.get(`offers/${offerID}`).then((response) => {
      setOffer(response.data);
    });
  }, []);

  return (
    <>
      <CompanyNavbar />
      <div>
        <Candidate candidate={candidate} offer={offer} />
      </div>
    </>
  );

};

export default CandidatePage;
