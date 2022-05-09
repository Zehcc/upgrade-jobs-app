import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Candidate from '../../components/Candidate/Candidate';
import { API } from '../../shared/services/api';
import CompanyNavbar from '../../shared/components/CompanyNavbar/CompanyNavbar';
import Chat from '../../components/Chat/Chat';
import { useProfileContext } from '../../shared/contexts/ProfileContext';
import { io } from 'socket.io-client';

const ioHeaders = {
  'Access-Control-Allow-Origin': '*',
};
const socket = io.connect('http://localhost:3001', ioHeaders);
/* const socket = io.connect({
  baseURL: 'https://upgradejobs-back.vercel.app/',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
}); */

const CandidatePage = () => {
  const { userID, offerID } = useParams();
  const { companyProfile } = useProfileContext();
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
      <div className='candidate-page'>
        <Candidate candidate={candidate} offer={offer} />
        {candidate._id && (
          <Chat
            user={companyProfile.email}
            room={offerID + candidate._id}
            socket={socket}
          />
        )}
      </div>
    </>
  );
};

export default CandidatePage;
