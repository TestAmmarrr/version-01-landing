import React from 'react';
import PropTypes from 'prop-types';
import { PiHandbag, PiMagnifyingGlassLight } from 'react-icons/pi';

const Navbar = (props) => {
  const { handleNav, isScrolled, cartItems } = props;
  return (
    <div
      className={`flex h-16 items-center justify-end px-5 text-white transition-all duration-500 md:px-10 ${
        isScrolled ? 'fixed inset-x-0 top-0 z-10 bg-white' : '-translate-y-full'
      }`}
    >
      <div className="flex-1 text-3xl font-bold uppercase text-black"></div>
      <div className=" flex space-x-5 text-right text-black">
        <PiMagnifyingGlassLight className=" h-8 w-8" />
        <div className="relative">
          <PiHandbag
            className="h-8 w-8 cursor-pointer"
            onClick={() => handleNav('cart')}
          />
          {Object.entries(cartItems).length > 0 && (
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-red-800"></span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
Navbar.propTypes = {
  handleNav: PropTypes.func.isRequired,
  isScrolled: PropTypes.bool.isRequired,
  cartItems: PropTypes.object.isRequired,
};
