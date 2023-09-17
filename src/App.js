import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Drawer from './components/Drawer';
import NavContent from './components/NavContent';
import CartContent from './components/CartContent';
import CartContext from './context/CartContext';
import RouteHandler from './routes';
// import Navbar from './components/Nav/Index';
import Overlay from './components/Overlay';
import { PiHandbag, PiMagnifyingGlassLight } from 'react-icons/pi';
import Footer from './components/Footer';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [overlayContent, setContent] = useState(<></>);
  const [cartItems, setCartItems] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (Object.entries(cartItems).length > 0 && !isOpen) {
      handleNav('cart');
    }
  }, [cartItems]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

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
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <BrowserRouter>
          <RouteHandler handleNav={handleNav} />
        </BrowserRouter>
        <Footer />
        <Overlay disableOverlay={() => setIsOpen(false)} overlayVisible={isOpen} />
        <Drawer isOpen={isOpen} close={() => setIsOpen(false)} content={overlayContent} />
        <div
          className={`flex h-16 items-center justify-end bg-white px-5 text-white transition-all duration-500 md:px-10 ${
            isScrolled ? 'fixed inset-x-0 top-0 z-50 bg-white' : '-translate-y-full'
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
      </CartContext.Provider>
    </div>
  );
}

export default App;
