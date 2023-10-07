import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import CartContext from '../../context/CartContext';
import Banner from '../Banner';
import { Link, useLocation } from 'react-router-dom';
import Details from '../Detail';
import CategoryList from '../CategoryList';

const Jewllary = (props) => {
  const { handleNav, activeItem } = props;

  const [currentItem, setCurrentItem] = useState(activeItem);
  const [selectedCat, setSelectedCategory] = useState('sweatshirts');

  const detailRef = useRef(null);
  const listRef = useRef(null);

  const cartInfo = useContext(CartContext);

  useEffect(() => {
    if (currentItem) {
      detailRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (!currentItem) {
      listRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentItem]);

  const images = [
    {
      name: 'Short Sleeve Button Down',
      price: 8.5,
      status: 'In stock, ready to ship',
      itemId: 1,
      img: 'https://impulse-theme-apparel.myshopify.com/cdn/shop/products/Grey3_b6162133-8df0-4963-ab88-86351ad88309.gif?v=1569267103&width=1080',
    },
    {
      name: 'Short Sleeve Button Down',
      price: 8.5,
      status: 'In stock, ready to ship',
      itemId: 2,
      img: 'https://impulse-theme-apparel.myshopify.com/cdn/shop/products/LightGrey1.jpg?v=1569266885&width=720',
    },
    {
      name: 'Short Sleeve Button Down',
      price: 8.5,
      status: 'In stock, ready to ship',
      itemId: 3,
      img: 'https://impulse-theme-apparel.myshopify.com/cdn/shop/products/Woods2.gif?v=1569267045&width=1080',
    },
    {
      name: 'Short Sleeve Button Down',
      price: 8.5,
      status: 'In stock, ready to ship',
      itemId: 4,
      img: 'https://impulse-theme-apparel.myshopify.com/cdn/shop/products/Grey3_b6162133-8df0-4963-ab88-86351ad88309.gif?v=1569267103&width=1080',
    },
    {
      name: 'Short Sleeve Button Down',
      price: 8.5,
      status: 'In stock, ready to ship',
      itemId: 5,
      img: 'https://impulse-theme-apparel.myshopify.com/cdn/shop/products/Grey3_b6162133-8df0-4963-ab88-86351ad88309.gif?v=1569267103&width=1080',
    },
    {
      name: 'Short Sleeve Button Down',
      price: 8.5,
      status: 'In stock, ready to ship',
      itemId: 6,
      img: 'https://impulse-theme-apparel.myshopify.com/cdn/shop/products/Grey3_b6162133-8df0-4963-ab88-86351ad88309.gif?v=1569267103&width=1080',
    },
    {
      name: 'Short Sleeve Button Down',
      price: 8.5,
      status: 'In stock, ready to ship',
      itemId: 7,
      img: 'https://impulse-theme-apparel.myshopify.com/cdn/shop/products/Grey3_b6162133-8df0-4963-ab88-86351ad88309.gif?v=1569267103&width=1080',
    },
    {
      name: 'Short Sleeve Button Down',
      price: 8.5,
      status: 'In stock, ready to ship',
      itemId: 8,
      img: 'https://impulse-theme-apparel.myshopify.com/cdn/shop/products/Grey3_b6162133-8df0-4963-ab88-86351ad88309.gif?v=1569267103&width=1080',
    },
    {
      name: 'Short Sleeve Button Down',
      price: 8.5,
      status: 'In stock, ready to ship',
      itemId: 9,
      img: 'https://impulse-theme-apparel.myshopify.com/cdn/shop/products/Grey3_b6162133-8df0-4963-ab88-86351ad88309.gif?v=1569267103&width=1080',
    },
  ];

  const handleClick = (item) => {
    setCurrentItem(item);
  };

  const addToCart = () => {
    const { setCartItems, cartItems } = cartInfo;
    const item = currentItem;
    const deepCopy = JSON.parse(JSON.stringify(cartItems));
    if (deepCopy[item.itemId]) {
      deepCopy[item.itemId].count += 1;
      setCartItems(deepCopy);
    } else {
      const newItem = {
        img: item.img,
        name: 'Different Hoodie - Crown Edition',
        price: 12.5,
        count: 1,
      };
      setCartItems((prev) => ({ ...prev, [item.itemId]: newItem }));
    }
  };
  const renderBannerFooter = () => {
    return (
      <div className="absolute inset-x-0 bottom-0 w-full">
        <div className="relative mb-2 px-5">{getPath()}</div>
        <div className="h-60 w-full bg-[#000000] px-8 py-9 md:flex md:h-48 md:items-center md:justify-between xl:h-36">
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
              <span key={value} className="text-xs capitalize text-white sm:text-sm">
                <Link to={`/${value}`}>
                  {value}
                  {' / '}
                </Link>
              </span>
            );
          }

          // For other segments, just display the text
          return (
            <span
              key={value}
              className="block text-4xl font-semibold text-white sm:text-5xl"
            >
              <Link to={location.pathname} onClick={() => setCurrentItem(null)}>
                {value}
              </Link>
            </span>
          );
        })}
      </p>
    );
  };

  return (
    <div>
      <Banner handleNav={handleNav} footerComponent={renderBannerFooter} />
      {!currentItem ? (
        <div ref={listRef} className="m-auto w-auto max-w-[1500px]">
          <div className="relative h-auto">
            <CategoryList
              selectedCat={selectedCat}
              handleNewCategory={(cat) => setSelectedCategory(cat.toLowerCase())}
              categoryList={['Sweatshirts', 'T-Shirts', 'Shirts', 'Jeans', 'Hats']}
            />
            <div className="sticky top-20 z-10 flex flex-wrap items-center justify-between p-[2px] sm:p-5 md:relative md:top-0">
              <p className="hidden md:flex-1 md:text-base">{`${images.length} products`}</p>
              <div></div>
              <div className="relative w-1/2 max-w-xs sm:w-52">
                <select className="block w-full appearance-none rounded-none border border-gray-300 bg-white py-3 pl-4 pr-8 text-base font-medium leading-6 shadow-sm focus:border-black focus:outline-none sm:text-sm sm:leading-5">
                  <option>Best Selling</option>
                  <option>Alphabetically, A-Z</option>
                  <option>Option 3</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12l5-6H5l5 6z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex h-auto flex-wrap pt-0">
              {images.map((image) => (
                <div
                  className="w-1/2 cursor-pointer px-[2px]  pb-4 sm:w-1/4 sm:p-4"
                  key={image.itemId}
                  onClick={() => handleClick(image)}
                >
                  <div
                    style={{ backgroundColor: '#e5e5e5' }}
                    className="relative flex-col before:block before:w-full before:pb-[150%]"
                  >
                    <div className="">
                      <img
                        src={image.img}
                        alt=""
                        className="absolute left-0 top-0 block h-full w-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="relative space-y-2 px-2">
                    <p className="text-xs font-medium capitalize sm:text-base">
                      Camping Hoodie - Heather grey quilt
                    </p>
                    <p className="font-mono">$12.5</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div ref={detailRef}>
          <Details addToCart={() => addToCart()} currentItem={currentItem} open={false} />
        </div>
      )}
    </div>
  );
};

export default Jewllary;
Jewllary.propTypes = {
  handleNav: PropTypes.func.isRequired,
  activeItem: PropTypes.object,
};
