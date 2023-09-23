import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import { TfiEmail } from 'react-icons/tfi';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

function ShopSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full md:w-1/2 lg:w-1/6">
      <p className="hidden md:block md:py-7 md:text-xs md:font-bold md:uppercase md:tracking-widest">
        Shop
      </p>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? 'border-b-0' : 'border-b-2'
        } flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-widest duration-[10ms] md:hidden`}
      >
        Shop
        <span
          className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}
        >
          {isOpen ? <MdExpandLess /> : <MdExpandMore />}
        </span>
      </button>

      <ul
        className={`space-y-2 overflow-hidden transition-all duration-500 ease-in-out md:text-[12.75px]${
          isOpen
            ? 'translate-y-0 border-b-2 pb-5 opacity-100'
            : '-translate-y-5 border-b-0 opacity-0'
        }`}
      >
        <li>Apparel</li>
        <li>Outwear</li>
        <li>Accessories</li>
        <li>Homegoods</li>
      </ul>
    </div>
  );
}

const Footer = () => {
  return (
    <div className="mt-10 flex h-auto w-full max-w-[1500px] flex-wrap border-t-2 bg-white p-5 md:p-10">
      <p className="w-full text-2xl font-bold md:w-1/2 lg:w-1/6">SYMPH DZLS.</p>
      <ShopSection />
      <ShopSection />
      <ShopSection />
      <div className="w-full md:w-1/2 lg:w-1/6">
        <p className="w-full py-5 text-left text-xs font-bold uppercase tracking-widest">
          Subscribe & Save
        </p>
        <p className="md:text-[12.75px]">
          Be the first to know about our biggest and best sales. Well never send more than
          one email a month.
        </p>
        <div className="relative max-w-xs">
          <input
            id="email"
            className="mt-1 w-full border-b-[2px] border-black py-2 pr-8 placeholder:text-black focus:outline-none md:text-[12.75px]"
            type="email"
            placeholder="Enter your email"
            aria-label="Email"
          />
          <div className="absolute right-0 top-1/2 h-5 w-6 -translate-y-1/2 text-black">
            <TfiEmail className="h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
