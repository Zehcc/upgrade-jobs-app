import React, { useEffect, useState } from "react";
import FilteredOffers from "../../components/FilteredOffers/FilteredOffers";
import Offer from "../../components/Offer/Offer";
import OffersFilter from "../../components/OffersFilter/OffersFilter";
import UserNavbar from "../../shared/components/UserNavbar/UserNavbar";
import { useProfileContext } from "../../shared/contexts/ProfileContext";
import { API } from "../../shared/services/api";

const OffersPage = () => {
  const [offers, setOffers] = useState([]);
  const [filteredOffers, setFilteredOffers] = useState([]);
  const { userProfile, setUserProfile } = useProfileContext();

  useEffect(() => {
    API.get("/offers").then((response) => {
      setOffers(response.data);
    });
    API.get(`users/${userProfile.id}`)
      .then((response) => {
        console.log(response, "respuestaDB");
        setUserProfile({
          id: response.data._id,
          name: response.data.name,
          email: response.data.email,
          img: response.data.img,
          cv: response.data.cv,
          candidatures: response.data.candidatures,
        });
      })
      .then(localStorage.setItem("userProfile", JSON.stringify(userProfile)));
  }, []);
  return (
    <>
      <UserNavbar />
      <div className='main-offersPage'>
        <OffersFilter offers={offers} setFilteredOffers={setFilteredOffers} />
        <ul>
          {filteredOffers.length
            ? filteredOffers.map((offer) => {
                return <FilteredOffers key={offer._id} offer={offer} />;
              })
            : offers.map((offer) => {
                return <Offer key={offer._id} offer={offer} />;
              })}
        </ul>
      </div>
    </>
  );
};

export default OffersPage;
