import React, { useEffect, useState } from "react";
import Offer from "../../components/Offer/Offer";
import UserNavbar from "../../shared/components/UserNavbar/UserNavbar";
import { useProfileContext } from "../../shared/contexts/ProfileContext";

import { API } from "../../shared/services/api";

const OffersPage = () => {
  const [offers, setOffers] = useState([]);
  const { userProfile } = useProfileContext();

  useEffect(() => {
    localStorage.setItem("userProfile", JSON.stringify(userProfile));
    API.get("/offers").then((response) => {
      setOffers(response.data);
    });
  }, [userProfile]);
  return (
    <>
      <UserNavbar />
      <ul>
        {offers.map((offer) => {
          return <Offer key={offer._id} offer={offer} />;
        })}
      </ul>
    </>
  );
};

export default OffersPage;
