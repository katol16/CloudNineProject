import React from 'react';
import SalonItemPriceAndDuration from "./SalonItemComponents/SalonItemPriceAndDuration";
import SalonItemGoToSalonBtn from "./SalonItemComponents/SalonItemGoToSalonBtn";
import SalonRating from "./SalonItemComponents/SalonRating";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SalonItem = ({salonData, currency}) => {
  return (
    <>
      {salonData.map(({address, duration, salonId, price, rating, numberOfRating, salonName, timeAvailability}) =>
        <Link key={salonId}  to={`/CloudNineProject/salon/${salonId}`} className="salonItem__container">
          <div className="salonItem">
            <div className="salonItem-hour">
              <p>{timeAvailability}</p>
            </div>
            <div className="salonItem-details">
              <h3>{salonName}</h3>
              <SalonRating salonId={salonId} rating={rating} numberOfRating={numberOfRating}/>
              <p className="salonItem-details-address">{address}</p>
            </div>
            <SalonItemPriceAndDuration currency={currency} price={price} duration={duration} />
          </div>
          <SalonItemGoToSalonBtn/>
        </Link>
      )}
    </>
  );
};

SalonItem.propTypes = {
  salonData: PropTypes.arrayOf(PropTypes.shape({
    salonId: PropTypes.number,
    salonName: PropTypes.string,
    address: PropTypes.string,
    rating: PropTypes.arrayOf(PropTypes.bool),
    numberOfRating: PropTypes.string,
    price: PropTypes.number,
    duration: PropTypes.string,
    timeAvailability: PropTypes.string,
    website:  PropTypes.string,
    phoneNumber: PropTypes.string,
    description: PropTypes.string,
  })),
  currency: PropTypes.string,
};

export default SalonItem;