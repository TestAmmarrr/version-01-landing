import React, { useState } from 'react';
import ViewPort from '../../common/ViewPort';
import { PiHandbag, PiMagnifyingGlassLight } from 'react-icons/pi';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

const Banner = () => {
  const [curImage, setCurImage] = useState(0);

  const urls = [
    'https://impulse-theme-apparel.myshopify.com/cdn/shop/files/15876107_239973393095862_789381904871718912_n.jpg?v=1614295740',
    'https://impulse-theme-apparel.myshopify.com/cdn/shop/files/65955690_126110058657394_731988299311526372_n.jpg?v=1614295740',
  ];

  const handleLeft = () => {
    setCurImage((prev) => (prev + 1) % urls.length);
  };

  const handleRight = () => {
    setCurImage((prev) => (prev - 1 + urls.length) % urls.length);
  };

  return (
    <ViewPort>
      <div className="relative h-full w-full bg-black">
        {/**BANNER IMAGES*/}
        {urls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-in-out ${
              index === curImage
                ? 'translate-x-0 opacity-100'
                : index < curImage
                ? '-translate-x-52 opacity-0'
                : '-translate-x-52 opacity-0'
            }`}
            loading="lazy"
          />
        ))}
        {/**FREE SHIPPING ADVERTISEMENT*/}
        <div className="relative z-10 flex items-center justify-center bg-black py-3 text-white">
          <p className="w-full text-center text-xs md:w-auto">
            <span className="block font-bold uppercase tracking-widest md:inline">
              Free Shipping{' '}
            </span>
            On all orders over 100$
          </p>
        </div>
        {/**LOCATION / SOCIALS / PAYMENT*/}
        <div className="relative mx-10 hidden h-9 items-center justify-end border-b-2 border-white border-opacity-[0.3] bg-transparent text-sm text-white md:flex">
          <div className="grow font-medium">337 Street Gulshan, KHI</div>
          <div className=" px-10 text-right" style={{ flexGrow: 2 }}>
            337 Street Gulshan, KHI
          </div>
          <div className="grow">337 Street Gulshan, KHI</div>
        </div>
        {/**BRAND / NAV / SEARCH / CART / TILES*/}
        <div className="relative flex h-12 items-center justify-end bg-transparent px-5 text-white md:px-10">
          <div className="flex-1 text-3xl font-bold uppercase">SYMPH DZLS.</div>
          <div className=" flex space-x-5 text-right">
            <PiMagnifyingGlassLight className=" h-8 w-8" />
            <PiHandbag className=" h-8 w-8" />
          </div>
        </div>
        {/** Actions */}
        <div className="absolute bottom-0 right-0 m-5 flex w-64 flex-col flex-wrap space-y-2 md:mx-8  md:my-12 md:h-auto md:w-auto md:space-y-10">
          <p className="text-end text-base font-semibold uppercase tracking-widest text-white md:text-lg">
            New For 2023
          </p>
          <p className="w-full p-0 text-end font-sans text-4xl font-bold leading-none text-white md:text-[80px]">
            Comfort wear
          </p>
          <div className="flex w-full justify-end space-x-1 text-left md:mt-4 md:space-x-5">
            <button className="bg-black p-2 px-4 text-sm font-semibold uppercase tracking-widest text-white md:px-6 ">
              Shop Top
            </button>
            <button className="bg-black p-2 px-4 text-sm font-semibold uppercase tracking-widest text-white md:px-6 ">
              Shop All
            </button>
          </div>
        </div>
        {/** BANNER NAVIGATION */}
        <div className="absolute -bottom-4 right-10 flex space-x-5 md:-bottom-5">
          <button
            onClick={handleLeft}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow-xl hover:scale-110 md:h-10 md:w-10"
          >
            <MdKeyboardArrowLeft className=" h-8 w-8" />
          </button>
          <button
            onClick={handleRight}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow-xl hover:scale-110 md:h-10 md:w-10"
          >
            <MdKeyboardArrowRight className="h-8 w-8" />
          </button>
        </div>
      </div>
    </ViewPort>
  );
};

export default Banner;
