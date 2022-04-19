import React from "react";

const Offer = ({ offer }) => {
  console.log(offer);
  return (
    <li className="offer-container">
      <div className="offer-img-container">
        <img src={offer.company.info.img} alt={offer.company._id} />
      </div>
      <div className="offer-text-container">
        <h4>{offer.title}</h4>
        <p>{offer.company.name}</p>
        <p>{offer.company.info.location}</p>
      </div>
    </li>
  );
};

export default Offer;
