import React from 'react';
import PropTypes from 'prop-types';

const Item = (props) => {
  const { img } = props;
  return (
    <div className="h-full w-full flex-1 pb-5">
      <img src={img} alt="" className=" h-full w-full object-cover " />
    </div>
  );
};

export default Item;
Item.propTypes = {
  img: PropTypes.string.isRequired,
};
