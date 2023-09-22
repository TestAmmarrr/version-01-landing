import React from 'react';
import PropTypes from 'prop-types';

const Item = (props) => {
  const { img, buttonText, primary, secondary } = props;
  return (
    <div className="relative h-full w-full flex-1">
      <img src={img} alt="" className=" h-full w-full object-cover " loading="lazy" />
      <div className="absolute bottom-5 left-5 px-2 py-5">
        <p className="text-sm font-semibold uppercase tracking-widest text-white">
          {secondary}
        </p>
        <p className="py-2 text-3xl font-bold text-white">{primary}</p>
        <buttons className="mt-2 border-0 bg-black px-5 py-2 text-xs font-bold uppercase tracking-widest text-white">
          {buttonText}
        </buttons>
      </div>
    </div>
  );
};

export default Item;
Item.propTypes = {
  img: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string.isRequired,
};
