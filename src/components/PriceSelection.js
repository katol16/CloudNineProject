import React, { useState } from 'react';
import PropTypes from "prop-types";

const PriceSelection = ({priceRange, setPriceRange}) => {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);

  return (
    <>
      <div className="priceSelection">
        <div className="priceSelection__priceContainer">
          <p className="priceSelection__price">Price {priceRange.find(price => price.isActive === true)?.text}</p>
        </div>
        <button onClick={() => setIsDropdownOpened(!isDropdownOpened)} className="priceSelection__arrowDown">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.99219 11.3516C8.15625 11.3516 8.30469 11.2812 8.42188 11.1562L14.3438 4.92188C14.4453 4.82031 14.5078 4.69531 14.5078 4.53906C14.5078 4.23438 14.2734 4 13.9688 4C13.8281 4 13.6797 4.05469 13.5781 4.15625L8 10.0312L2.40625 4.15625C2.3125 4.05469 2.17188 4 2.02344 4C1.71875 4 1.48438 4.23438 1.48438 4.53906C1.48438 4.69531 1.54688 4.82031 1.64844 4.92969L7.57031 11.1641C7.69531 11.2812 7.82812 11.3516 7.99219 11.3516Z" fill="#B69F58"/>
          </svg>
        </button>
      </div>
      {isDropdownOpened &&
        priceRange.map((item, index) =>
          <div key={item.text} className="priceSelection__checkboxes">
            <p className="priceSelection__price">Price {item.text}</p>
            <div className="round">
              <input checked={item.isActive} onChange={e => setPriceRange(priceRange.map((item, i) => ({ ...item, isActive: parseInt(e.target.id) === i})))} type="checkbox" id={`${index}`}/>
              <label htmlFor={`${index}`}></label>
            </div>
          </div>
        )
      }
    </>
  );
};

PriceSelection.propTypes = {
  priceRange: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    minRange: PropTypes.number,
    maxRange: PropTypes.number,
    isActive: PropTypes.bool,
  })),
  setPriceRange: PropTypes.func,
};

export default PriceSelection;