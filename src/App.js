import React, { useEffect, useState } from 'react';
import Banner from './components/Banner';
import TopPicks from './components/TopPicks';
import LimitedTimes from './components/LimitedTimes';
import './index.css';
import Drawer from './components/Drawer';
import NavContent from './components/NavContent';
import CartContent from './components/CartContent';
import { PiHandbag, PiMagnifyingGlassLight } from 'react-icons/pi';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [overlayContent, setContent] = useState(<></>);
  const [isOpen, setIsOpen] = useState(false);

  const contents = {
    cart: <CartContent close={() => setIsOpen(false)} />,
    nav: <NavContent close={() => setIsOpen(false)} />,
  };

  const checkScroll = () => {
    setIsScrolled(window.scrollY > 150);
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  const handleNav = (item) => {
    setContent(contents[item]);
    setIsOpen(true);
  };

  return (
    <div className="overflow-y-hidden">
      <Banner handleNav={handleNav} />
      <LimitedTimes />
      <TopPicks />
      {/**DRAWER */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-10 overflow-hidden bg-white opacity-50"
        ></div>
      )}
      <Drawer isOpen={isOpen} close={() => setIsOpen(false)} content={overlayContent} />
      <div
        className={`flex h-16 items-center justify-end px-5 text-white transition-all duration-500 md:px-10 ${
          isScrolled ? 'fixed inset-x-0 top-0 z-10 bg-white' : '-translate-y-full'
        }`}
      >
        <div className="flex-1 text-3xl font-bold uppercase text-black"></div>
        <div className=" flex space-x-5 text-right text-black">
          <PiMagnifyingGlassLight className=" h-8 w-8" />
          <PiHandbag
            className=" h-8 w-8 cursor-pointer "
            onClick={() => handleNav('cart')}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
