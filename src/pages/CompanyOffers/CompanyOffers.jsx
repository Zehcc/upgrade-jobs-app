import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CompanyOffer from "../../components/CompanyOffer/CompanyOffer";
import CompanyNavbar from "../../shared/components/CompanyNavbar/CompanyNavbar";
import { useProfileContext } from "../../shared/contexts/ProfileContext";
import { API } from "../../shared/services/api";

const CompanyOffers = () => {
  const { companyProfile, setCompanyProfile } = useProfileContext();
  useEffect(() => {
    API.get(`/companies/${companyProfile.id}`)
      .then((response) => {
        setCompanyProfile({
          id: response.data._id,
          name: response.data.name,
          email: response.data.email,
          cif: response.data.cif,
          info: {
            description: response.data.info.description,
            img: response.data.info.img,
            location: response.data.info.location,
            web: response.data.info.web,
            employees: response.data.info.employees,
          },
          offers: response.data.offers,
        });
      })
      .then(
        localStorage.setItem("companyProfile", JSON.stringify(companyProfile))
      );
  }, []);

  return (
    <div className="company-offers-page">
      <CompanyNavbar />
      <Link to="/createOffer">
        <button>Nueva oferta</button>
      </Link>
      <ul className="company-offers-list">
        {companyProfile.offers.map((item) => {
          return <CompanyOffer key={item._id} offer={item} />;
        })}
      </ul>
    </div>
  );
};

export default CompanyOffers;
