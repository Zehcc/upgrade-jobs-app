import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {API} from '../../shared/services/api';
import CompanyNavbar from '../../shared/components/CompanyNavbar/CompanyNavbar';
import {useGestionContext} from '../../shared/contexts/GestionContext';

const DetailedCompanyOffer = () => {
  const [detailedOffer, setDetailedOffer] = useState({});
  const {creationDate} = useGestionContext();
  const {id} = useParams();
  useEffect(() => {
    API.get(`offers/${id}`).then((response) => {
      setDetailedOffer(response.data);
    });
  }, [id]);

  return (
    <>
      <CompanyNavbar />
      <div className='detailed-container'>
        <div className='offer-header'>
          {detailedOffer.company && (
            <div className='img-container'>
              <img src={detailedOffer.company.info.img} alt={detailedOffer.company.name} />
            </div>
          )}
          <div className='text-container'>
            <h3>{detailedOffer.title}</h3>
            <p>{detailedOffer.location}</p>
            <p>Vacantes: {detailedOffer.vacants}</p>
            <p className='created-timestamp'>{creationDate(detailedOffer.createdAt)}</p>
          </div>
        </div>
        <div className='offer-description'>
          <p className='textarea'>{detailedOffer.description}</p>
        </div>
        <div className='offer-candidates'>
          <h3>Candidatos</h3>
          {detailedOffer.candidates && detailedOffer.candidates.length > 0 ? (
            detailedOffer.candidates.map((candidate) => {
              return (
                <ul className='candidates-ul'>
                  <Link
                    className='candidates-container'
                    key={candidate._id}
                    to={`/candidate/${candidate._id}/${id}`}
                  >
                    <div className='candidates-img-container'>
                      <img src={candidate.img} alt={candidate.name} />
                    </div>
                    <div className='candidates-text-container'>
                      <h4>{candidate.name}</h4>
                      <p>{candidate.email}</p>
                      <p
                        className={candidate.candidatures
                          .find((item) => item.id === detailedOffer._id)
                          .state.substr(0, 2)
                          .toLowerCase()}
                      >
                        {candidate.candidatures
                          .find((item) => item.id === detailedOffer._id)
                          .state.replace('Sigues', 'Sigue')}
                      </p>
                    </div>
                  </Link>
                </ul>
              );
            })
          ) : (
            <p className='empty-candidates'>Aún no existen candidatos</p>
          )}
        </div>
      </div>
    </>
  );
};

export default DetailedCompanyOffer;
