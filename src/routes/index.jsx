import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../components/Home';
import Checkout from '../components/Checkout';
import Jewllary from '../components/Jewllary';

const RouteHandler = (props) => {
  const { handleNav } = props;
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // triggered on route change

  return (
    <Routes>
      <Route path="/" element={<Home handleNav={handleNav} />} />
      <Route path="/home" element={<Home handleNav={handleNav} />} />
      <Route
        path="/home/jewllary"
        element={<Jewllary handleNav={handleNav} activeItem={null} />}
      />
      <Route
        path="/home/sweatshirts"
        element={<Jewllary handleNav={handleNav} activeItem={null} />}
      />
      <Route
        path="/home/t-shirts"
        element={<Jewllary handleNav={handleNav} activeItem={null} />}
      />
      <Route
        path="/home/shirts"
        element={<Jewllary handleNav={handleNav} activeItem={null} />}
      />
      <Route
        path="/home/jeans"
        element={<Jewllary handleNav={handleNav} activeItem={null} />}
      />
      <Route
        path="/home/hats"
        element={<Jewllary handleNav={handleNav} activeItem={null} />}
      />
      <Route path="/checkout" element={<Checkout handleNav={handleNav} />} />
    </Routes>
  );
};

export default RouteHandler;

RouteHandler.propTypes = {
  handleNav: PropTypes.func.isRequired,
};
