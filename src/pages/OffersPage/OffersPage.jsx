import React, { useEffect, useState } from "react";
import Offer from "../../components/Offer/Offer";
import UserNavbar from "../../shared/components/UserNavbar/UserNavbar";
import { useProfileContext } from "../../shared/contexts/ProfileContext";
import { API } from "../../shared/services/api";

const OffersPage = () => {
  const [offers, setOffers] = useState([]);
  const { userProfile, setUserProfile } = useProfileContext();
  useEffect(() => {
    API.get("/offers").then((response) => {
      setOffers(response.data);
    });
    API.get(`users/${userProfile.id}`)
      .then((response) => {
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
      <ul>
        {offers.map((offer) => {
          return <Offer key={offer._id} offer={offer} />;
        })}
      </ul>
    </>
  );
};

export default OffersPage;
