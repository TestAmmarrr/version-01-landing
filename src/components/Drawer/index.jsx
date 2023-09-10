import React from 'react';
import PropTypes from 'prop-types';
import { FaTimes, FaAngleDown } from 'react-icons/fa';

const Drawer = (props) => {
  const { isOpen, close } = props;
  return (
    <div
      className={`fixed right-0 top-0 z-20  h-screen w-[350px] max-w-[95%] overflow-hidden bg-white transition-transform duration-300 md:max-w-[400px] ${
        isOpen ? 'translate-x-0' : ' translate-x-full'
      }`}
    >
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
    </div>
  );
};
export default Drawer;

Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};
