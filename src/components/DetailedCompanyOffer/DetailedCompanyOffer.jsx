import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useProfileContext } from "../../shared/contexts/ProfileContext";
import { API } from "../../shared/services/api";
import CompanyNavbar from "../../shared/components/CompanyNavbar/CompanyNavbar";
const DetailedCompanyOffer = () => {
  const [detailedOffer, setDetailedOffer] = useState({});
  const { companyProfile } = useProfileContext();
  const { id } = useParams();
  const thisOffer = companyProfile.offers.find((offer) => offer.id === id);

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
            {thisOffer && <p>Estado: {thisOffer.state}</p>}
          </div>
        </div>
        <div className='offer-description'>
          <p>{detailedOffer.description}</p>
        </div>
        <div className='offer-candidates'>
          <h3>Candidatos</h3>
          <ul>
            {detailedOffer.candidates &&
              detailedOffer.candidates.map((candidate) => {
                return (
                  <Link to={`/candidate/${candidate._id}/${id}`}>
                    <li className='candidates-container' key={candidate._id}>
                      <div className='candidates-img-container'>
                        <img src={candidate.img} alt={candidate.name} />
                      </div>
                      <div className='candidates-text-container'>
                        <h4>{candidate.name}</h4>
                        <p>{candidate.email}</p>
                      </div>
                    </li>
                  </Link>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DetailedCompanyOffer;
