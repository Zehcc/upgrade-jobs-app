import React, { useEffect, useState } from "react";
import Offer from "../../components/Offer/Offer";
import UserNavbar from "../../shared/components/UserNavbar/UserNavbar";

import { API } from "../../shared/services/api";

const OffersPage = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    API.get("/offers").then((response) => {
      setOffers(response.data);
    });
  }, []);
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
