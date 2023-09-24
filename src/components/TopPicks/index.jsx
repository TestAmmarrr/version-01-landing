import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

const TopPicks = (props) => {
  const { setActiveItem } = props;
  const navigate = useNavigate();

  const images = [
    {
      itemId: 1,
      img: 'https://impulse-theme-apparel.myshopify.com/cdn/shop/products/Grey3_b6162133-8df0-4963-ab88-86351ad88309.gif?v=1569267103&width=1080',
      name: 'Mutt Ringer Tee -Grey',
      price: 5,
      status: 'In stock, ready to ship',
    },
    {
      name: 'Mutt Scruff - Grey',
      price: 20.5,
      itemId: 2,
      img: 'https://impulse-theme-apparel.myshopify.com/cdn/shop/products/LightGrey1.jpg?v=1569266885&width=720',
      status: 'In stock, ready to ship',
    },
    {
      name: 'Short Sleeve Button Down',
      price: 10.5,
      itemId: 3,
      img: 'https://impulse-theme-apparel.myshopify.com/cdn/shop/products/Woods2.gif?v=1569267045&width=1080',
      status: 'In stock, ready to ship',
    },
    {
      name: 'Short Sleeve Button Down',
      price: 8.5,
      status: 'In stock, ready to ship',
      itemId: 4,
      img: 'https://impulse-theme-apparel.myshopify.com/cdn/shop/products/Grey3_b6162133-8df0-4963-ab88-86351ad88309.gif?v=1569267103&width=1080',
    },
  ];

  return (
    <div className="relative pt-4 md:pt-0" id="top-picks">
      <div className="flex justify-between px-5 py-4 sm:px-10">
        <p className="text-xl font-bold sm:text-3xl">Top Picks</p>
        <button
          onClick={() => navigate('/home/jewllary')}
          className="border bg-white px-3 py-1 text-sm uppercase tracking-widest sm:px-5 sm:py-2"
        >
          View All
        </button>
      </div>
      <div className="m-auto w-auto max-w-[1500px]">
        <div className="relative">
          <div className="flex overflow-x-auto pt-0 sm:h-auto md:flex-wrap md:px-10">
            {images.map((image) => (
              <div
                className="w-[39vw] shrink-0 grow-0 cursor-pointer p-4 px-[2px] md:w-1/4 md:flex-auto"
                key={image.itemId}
                onClick={() => setActiveItem(image)}
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
                    {image.name}
                  </p>
                  <p className="font-mono">${image.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPicks;

TopPicks.propTypes = {
  setActiveItem: PropTypes.func.isRequired,
};
