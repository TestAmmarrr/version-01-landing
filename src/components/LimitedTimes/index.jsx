import React from 'react';
import ViewPort from '../../common/ViewPort';
import Item from './components/item';

const LimitedTimes = () => {
  const items = [
    {
      img: 'https://impulse-theme-apparel.myshopify.com/cdn/shop/files/SUperKasuri2_1944x_dc63d8ff-86fc-42c7-9109-c7663f50cd38.gif?v=1614295705',
      buttonText: 'shop now',
      primary: 'The Origional',
      secondary: 'limited time',
    },
    {
      img: 'https://images.unsplash.com/photo-1583937443351-f2f669fbe2cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      buttonText: 'shop N & F',
      primary: 'Now stocking N&F',
    },
    {
      img: 'https://impulse-theme-apparel.myshopify.com/cdn/shop/files/1597883_339232376216052_27817601_n.jpg?v=1614295740',
      buttonText: 'shop N & F',
      primary: 'Now stocking N&F',
    },
  ];
  return (
    <ViewPort>
      <div className="m-auto mt-10 h-auto space-y-2 p-2 md:flex md:h-[400px] md:justify-center md:space-x-5 md:space-y-0 md:p-5 lg:h-[530px] lg:max-w-[1500px]">
        {items.map((item, index) => (
          <Item
            key={index}
            img={item.img}
            buttonText={item.buttonText}
            primary={item.primary}
            secondary={item.secondary}
          />
        ))}
      </div>
    </ViewPort>
  );
};

export default LimitedTimes;
