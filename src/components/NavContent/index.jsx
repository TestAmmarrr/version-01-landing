import React from 'react';
import PropTypes from 'prop-types';
import { FaTimes, FaAngleDown } from 'react-icons/fa';

const NavContent = (props) => {
  const { close } = props;
  return (
    <div className="font-medium">
      <div className="mx-5 flex h-16 items-center justify-end border-b-[1px]">
        <FaTimes className=" h-7 w-7 cursor-pointer" onClick={() => close()} />
      </div>
      <ul>
        <li className="mx-5 flex h-14 items-center justify-between border-b-[1px]">
          <p className="text-xl">Shop</p>
          <button className="ml-auto">
            <FaAngleDown className="h-5 w-5" />
          </button>
        </li>
        <li className="mx-5 flex h-14 items-center justify-between border-b-[1px]">
          <p className="text-xl">New Arrival</p>
        </li>
        <li className="mx-5 flex h-14 items-center justify-between border-b-[1px]">
          <p className="text-xl">Best Sellers</p>
        </li>
        <li className="mx-5 flex h-14 items-center justify-between border-b-[1px]">
          <p className="text-xl">Shop by Brand</p>
          <button className="ml-auto">
            <FaAngleDown className="h-5 w-5" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavContent;

NavContent.propTypes = {
  close: PropTypes.func.isRequired,
};
