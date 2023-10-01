import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Banner from '../Banner';
import LimitedTimes from '../LimitedTimes';
import TopPicks from '../TopPicks';
import Details from '../Detail';
import { useLocation } from 'react-router';
import CartContext from '../../context/CartContext';

function Home(props) {
  const { handleNav } = props;
  const [currentItem, setCurrentItem] = useState(null);
  const cartInfo = useContext(CartContext);

  const renderBannerFooter = () => {
    return (
      <div className="absolute inset-x-0 bottom-0 w-full">
        <div className="relative mb-2 px-5">{getPath()}</div>
        <div className="h-60 w-full bg-[#181515] px-8 py-9 md:flex md:h-48 md:items-center md:justify-between xl:h-36">
          <div className="md:w-1/2 md:space-y-4 md:text-left">
            <p className="w-full py-1 text-3xl font-semibold text-white md:text-4xl md:font-bold">
              Black Friday Sale
            </p>
            <p className="w-full text-sm text-white">
              Dont wait. Get an additional 30% off your entire order when you spend 120$
              or more!
            </p>
          </div>
          <div className="flex justify-center py-5 md:mr-14 md:w-1/2 md:space-y-4 md:text-center">
            <div className=" flex min-h-[80px] w-80 min-w-[300px] items-center justify-between">
              <div className="flex w-1/4 flex-col items-center justify-between space-y-4 border-r-[1px] text-white md:space-y-1">
                <p className="text-2xl font-semibold sm:text-3xl">1</p>
                <p className="text-xs uppercase">Days</p>
              </div>
              <div className="flex w-1/4 flex-col items-center justify-between space-y-4 border-r-[1px] text-white  md:space-y-1">
                <p className="text-2xl font-semibold sm:text-3xl">19</p>
                <p className="text-xs uppercase">Hours</p>
              </div>
              <div className="flex w-1/4 flex-col items-center justify-between space-y-4 border-r-[1px] text-white  md:space-y-1">
                <p className="text-2xl font-semibold sm:text-3xl">41</p>
                <p className="text-xs uppercase">Minutes</p>
              </div>
              <div className="flex w-1/4 flex-col items-center justify-between space-y-4 text-white  md:space-y-1">
                <p className="text-2xl font-semibold sm:text-3xl">50</p>
                <p className="text-xs uppercase">Seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const getPath = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
      <p className="sm:p-8">
        {pathnames.map((value, index) => {
          // Only make the first segment a link
          if (index === 0) {
            return (
              <span
                key={value}
                onClick={() => setCurrentItem(null)}
                className="text-xs capitalize text-white sm:text-sm"
              >
                {value}
              </span>
            );
          }

          // For other segments, just display the text
          return (
            <span
              key={value}
              className="block text-4xl font-semibold text-white sm:text-5xl"
            >
              {value}
            </span>
          );
        })}
      </p>
    );
  };

  const addToCart = () => {
    const { setCartItems, cartItems } = cartInfo;
    const item = currentItem;
    const deepCopy = JSON.parse(JSON.stringify(cartItems));
    const cartStorage = JSON.parse(localStorage.getItem('cart'));
    if (deepCopy[item.itemId]) {
      deepCopy[item.itemId].count += 1;
      localStorage.setItem('cart', JSON.stringify(deepCopy));
      setCartItems(deepCopy);
    } else {
      const newItem = {
        img: item.img,
        name: 'Different Hoodie - Crown Edition',
        price: 12.5,
        count: 1,
      };
      setCartItems((prev) => ({ ...prev, [item.itemId]: newItem }));
      localStorage.setItem(
        'cart',
        JSON.stringify({ ...cartStorage, [item.itemId]: newItem }),
      );
    }
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {currentItem ? (
        <>
          <Banner handleNav={handleNav} footerComponent={renderBannerFooter} />
          <Details addToCart={addToCart} currentItem={currentItem} />
        </>
      ) : (
        <>
          <Banner handleNav={handleNav} handleScroll={scrollToSection} />
          <LimitedTimes />
          <TopPicks setActiveItem={setCurrentItem} />
        </>
      )}
    </div>
  );
}

export default Home;

Home.propTypes = {
  handleNav: PropTypes.func.isRequired,
};
