import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import ViewPort from '../../common/ViewPort';
import {
  PiHandbag,
  PiMagnifyingGlassLight,
  PiInstagramLogo,
  PiFacebookLogoFill,
} from 'react-icons/pi';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import { FiChevronDown } from 'react-icons/fi';

const oneSecond = 10000;

const Banner = (props) => {
  const { handleNav, footerComponent } = props;
  const [curImage, setCurImage] = useState(0);
  const [curAdSlider, setCurSlider] = useState(0);
  const [isFirstVisible, setIsFirstVisible] = useState(true);
  const [showList, setShowList] = useState(false);
  const [currencies] = useState([
    {
      name: 'Pakistan',
      cur: 'PKR RS',
      img: 'https://flagpedia.net/data/flags/w702/pk.webp',
    },
    {
      name: 'United States',
      cur: 'USD $',
      img: 'https://th.bing.com/th/id/OIP.SpEXTWq8AnZChYLI-jFbJgHaHa?pid=ImgDet&rs=1',
    },
  ]);
  const [activeCurrency, setCurrency] = useState({
    name: 'Pakistan',
    cur: 'PKR RS',
    img: 'https://flagpedia.net/data/flags/w702/pk.webp',
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFirstVisible(!isFirstVisible);
      setCurSlider((prev) => (prev + 1) % sliderText.length);
      setCurImage((prev) => (prev - 1 + urls.length) % urls.length);
    }, oneSecond);
    return () => clearTimeout(timer);
  }, [isFirstVisible]);

  const navigate = useNavigate();

  const urls = [
    'https://images.unsplash.com/photo-1625425727345-d8423ee9a4fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
    'https://images.unsplash.com/photo-1663079899610-2f00543940cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80',
  ];

  const sliderText = [
    { emphasis: 'Free Shipping ', normal: 'on all Orders over 100$' },
    { emphasis: 'Hassle-Free Returns ', normal: '30-day postage paid returns' },
    { emphasis: 'Free Shipping ', normal: 'on all Orders over 100$' },
    { emphasis: 'Hassle-Free Returns ', normal: '30-day postage paid returns' },
  ];

  const handleLeft = () => {
    setCurImage((prev) => (prev + 1) % urls.length);
  };

  const handleRight = () => {
    setCurImage((prev) => (prev - 1 + urls.length) % urls.length);
  };

  const handleCurrencyChange = (currency) => {
    setCurrency(currency);
    setShowList(false);
  };

  const toggleStateList = () => {
    setShowList((prev) => !prev);
  };

  const handleDrag = (e) => {
    if (e.clientX > window.innerWidth / 2) {
      handleRight();
    } else {
      handleLeft();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'ArrowRight') {
      handleRight();
    } else if (e.key === 'ArrowLeft') {
      handleLeft();
    }
  };

  return (
    <ViewPort>
      <div className="relative h-full w-full">
        <div className="relative h-full w-full overflow-hidden bg-black pb-5">
          {/**BANNER IMAGES*/}
          {urls.map((url, index) => (
            <img
              onDrag={handleDrag}
              onKeyDown={handleKeyPress}
              tabIndex="0"
              loading="lazy"
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
            />
          ))}

          {/**FREE SHIPPING ANNOUNCEMENT*/}
          <div className="relative z-10 flex items-center justify-center bg-black py-6 text-white md:py-5">
            {sliderText.map((item, index) => (
              <p
                key={index}
                className={`absolute w-full text-center text-xs transition-all duration-1000 md:w-auto ${
                  index === curAdSlider
                    ? 'translate-x-0 opacity-100'
                    : index < curAdSlider
                    ? 'translate-x-[-400%] opacity-0'
                    : 'translate-x-full opacity-0'
                }`}
              >
                <span className="block font-bold uppercase tracking-widest md:inline">
                  {item.emphasis}
                </span>
                {item.normal}
              </p>
            ))}
          </div>
          {/**LOCATION / SOCIALS / LANGUAGE*/}
          <div className="relative mx-10 hidden h-9 items-center justify-end border-b-2 border-white border-opacity-[0.3] bg-transparent text-sm text-white md:flex">
            <div className="grow text-xs font-normal">337 Street Gulshan, KHI</div>
            <div className=" flex-1" style={{ flexGrow: 15 }}>
              <ul className="flex justify-end space-x-2">
                <li className="h-5 w-5  ">
                  <PiInstagramLogo className="h-full w-full" />
                </li>
                <li className=" h-5 w-5">
                  <PiFacebookLogoFill className="h-full w-full" />
                </li>
              </ul>
            </div>
            <div className=" relative flex grow justify-end font-semibold">
              <button className="flex w-52 justify-end" onClick={() => toggleStateList()}>
                <div className=" flex h-6 w-auto items-center">
                  <img
                    loading="lazy"
                    className="h-5 w-5 rounded-[100%] object-cover"
                    src={activeCurrency.img}
                    alt=""
                  />
                  <p className="ml-2">{`${activeCurrency.name} (${activeCurrency.cur})`}</p>
                </div>
                <FiChevronDown className="h-6 w-6" />
              </button>
              <ul
                className={` absolute top-7 z-10 h-auto  w-72 bg-white pt-2 ${
                  !showList && 'hidden'
                }`}
              >
                {currencies.map((curr, index) => (
                  <li key={index} className="px-4 py-2 text-xs text-black">
                    <button
                      onClick={() => handleCurrencyChange(curr)}
                      className="flex w-52 items-center justify-start space-x-2 "
                    >
                      <div className=" h-5 w-5 ">
                        <img
                          loading="lazy"
                          className=" h-full w-full rounded-[100%] object-cover"
                          src={curr.img}
                          alt=""
                        />
                      </div>
                      <p className="relative before:absolute before:bottom-0 before:h-[0.5px] before:w-0 before:bg-black hover:before:w-full">
                        {`${curr.name} (${curr.cur})`}
                      </p>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/**BRAND / NAV / SEARCH / CART / TILES*/}
          <div className="relative mt-3 flex h-12 items-center justify-end px-5 text-white md:px-10">
            <div className="flex-1 text-3xl font-bold uppercase">SYMPH DZLS.</div>
            <div className=" flex space-x-5 text-right">
              <PiMagnifyingGlassLight className=" h-8 w-8" />
              <PiHandbag
                className=" h-8 w-8 cursor-pointer"
                onClick={() => handleNav('cart')}
              />
            </div>
          </div>
          {footerComponent ? (
            footerComponent()
          ) : (
            <>
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
                  <button
                    onClick={() => navigate('/home/jewllary')}
                    className="bg-black p-2 px-4 text-sm font-semibold uppercase tracking-widest text-white md:px-6 "
                  >
                    Shop All
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
        {/** BANNER NAVIGATION */}
        {!footerComponent && (
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
        )}
      </div>
    </ViewPort>
  );
};

export default Banner;

Banner.propTypes = {
  handleNav: PropTypes.func.isRequired,
  footerComponent: PropTypes.func,
};
