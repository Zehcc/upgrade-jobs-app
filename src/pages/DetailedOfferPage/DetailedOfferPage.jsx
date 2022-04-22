import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailedOffer from "../../components/DetailedOffer/DetailedOffer";
import { API } from "../../shared/services/api";

const DetailedOfferPage = () => {
  const [detailedOffer, setDetailedOffer] = useState({});
  const { id } = useParams();

  useEffect(() => {
    API.get(`offers/${id}`).then((response) => {
      console.log(response);
      setDetailedOffer(response.data);
    });

  }, [id]);
  return (
    <div>
      <DetailedOffer detailedOffer={detailedOffer} />
    </div>
  );
};

export default DetailedOfferPage;
