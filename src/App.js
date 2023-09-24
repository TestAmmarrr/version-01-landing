import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Drawer from './components/Drawer';
import NavContent from './components/NavContent';
import CartContent from './components/CartContent';
import CartContext from './context/CartContext';
import RouteHandler from './routes';
import Overlay from './components/Overlay';
import Footer from './components/Footer';

function App() {
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
      </CartContext.Provider>
    </div>
  );
}

export default App;
