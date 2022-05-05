import React from "react";
import { Link } from "react-router-dom";

const Offer = ({ offer }) => {
  return (
    <Link to={`/detailedOffer/${offer._id}`}>
    <li className="offer-container">
      <div className="offer-img-container">
        <img src={offer.company.info.img} alt={offer.company._id} />
      </div>
      <div className="offer-text-container">
        <h4>{offer.title}</h4>
        <p>{offer.company.name}</p>
        <p>{offer.location}</p>
      </div>
    </li>
    </Link>
  );
};

export default Offer;
