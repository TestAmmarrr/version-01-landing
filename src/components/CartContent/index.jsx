import React from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

const CartContent = (props) => {
  const { close } = props;
  return (
    <div className="px-8 font-medium">
      <div className="flex h-16 items-center justify-between border-b-[1px] py-3">
        <p className="text-2xl">Cart</p>
        <FaTimes className=" h-7 w-7 cursor-pointer" onClick={() => close()} />
      </div>
      <div className=" p-8">
        <p>Your cart is currently empty.</p>
      </div>
    </div>
  );
};

export default CartContent;
CartContent.propTypes = {
  close: PropTypes.func.isRequired,
};
