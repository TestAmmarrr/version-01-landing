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
    },
    {
      itemId: 2,
      img: 'https://impulse-theme-apparel.myshopify.com/cdn/shop/products/LightGrey1.jpg?v=1569266885&width=720',
    },
    {
      itemId: 3,
      img: 'https://impulse-theme-apparel.myshopify.com/cdn/shop/products/Woods2.gif?v=1569267045&width=1080',
    },
    {
      itemId: 4,
      img: 'https://impulse-theme-apparel.myshopify.com/cdn/shop/products/Grey3_b6162133-8df0-4963-ab88-86351ad88309.gif?v=1569267103&width=1080',
    },
  ];

  return (
    <div className="relative pt-80 md:pt-0">
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
          <div className=" flex flex-wrap pt-0 sm:h-auto">
            {images.map((image) => (
              <div
                className="w-1/4 cursor-pointer p-4 px-[2px]"
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
                    Camping Hoodie - Heather grey quilt
                  </p>
                  <p className="font-mono">$12.5</p>
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
