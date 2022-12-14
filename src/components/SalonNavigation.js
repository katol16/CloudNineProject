import React from 'react';
import SalonRating from "./SalonItemComponents/SalonRating";
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import InfoBtn from "./Buttons/InfoBtn";
import ScheduleBtn from "./Buttons/ScheduleBtn";
import HeartBtn from "./Buttons/HeartBtn";

const SalonNavigation = ({numberOfRating, rating, salonName}) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="salonNavigation">
        <button onClick={() => navigate(-1)} className="salonNavigation__arrowBtn">
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.78418 11.8916C2.78418 12.1162 2.86279 12.3071 3.03125 12.4644L12.0156 21.0107C12.1616 21.1567 12.3525 21.2354 12.5659 21.2354C13.0039 21.2354 13.3408 20.9097 13.3408 20.4604C13.3408 20.2471 13.251 20.0562 13.1274 19.9214L4.68213 11.8916L13.1274 3.86182C13.251 3.71582 13.3408 3.5249 13.3408 3.31152C13.3408 2.87354 13.0039 2.53662 12.5659 2.53662C12.3525 2.53662 12.1616 2.61523 12.0156 2.76123L3.03125 11.3188C2.86279 11.4761 2.78418 11.667 2.78418 11.8916Z" fill="white"/>
          </svg>
        </button>
        <HeartBtn/>
        <div className="salonNavigation__bottomInfo">
          <h3 className="salonNavigation__salonName">{salonName}</h3>
          <SalonRating numberOfRating={numberOfRating} rating={rating} isBig={true}/>
        </div>
      </div>
      <div className="salonNavigation__tabs">
        <InfoBtn/>
        <ScheduleBtn/>
      </div>
    </>
  );
};

SalonNavigation.propTypes = {
  numberOfRating: PropTypes.string,
  rating: PropTypes.arrayOf(PropTypes.bool),
  salonName: PropTypes.string,
};

export default SalonNavigation;