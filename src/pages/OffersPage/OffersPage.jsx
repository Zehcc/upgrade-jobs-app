import React, { useEffect, useState } from "react";
import FilteredOffers from "../../components/FilteredOffers/FilteredOffers";
import Offer from "../../components/Offer/Offer";
import OffersFilter from "../../components/OffersFilter/OffersFilter";
import UserNavbar from "../../shared/components/UserNavbar/UserNavbar";
import { useProfileContext } from "../../shared/contexts/ProfileContext";
import { API } from "../../shared/services/api";

const OffersPage = () => {
  const [offers, setOffers] = useState([]);
  const { userProfile } = useProfileContext();
  const [filteredOffers, setFilteredOffers] = useState([]);

  useEffect(() => {
    localStorage.setItem("userProfile", JSON.stringify(userProfile));
    API.get("/offers").then((response) => {
      setOffers(response.data);
    });
  }, [userProfile]);
  return (
    <>
      <UserNavbar />
      <div className="main-offersPage">
        <OffersFilter offers={offers} setFilteredOffers={setFilteredOffers} />
        <ul>
          {filteredOffers.length ?
            filteredOffers.map((offer) => {
              return <FilteredOffers key={offer._id} offer={offer} />;
            }) :
            offers.map((offer) => {
              return <Offer key={offer._id} offer={offer} />;
            })}
        </ul>
      </div>
    </>
  );
};

export default OffersPage;
