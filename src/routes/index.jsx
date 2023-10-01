import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from '../components/Home';
import Items from '../components/Items';
import Details from '../components/Detail';
import Checkout from '../components/Checkout';

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
        element={<Items handleNav={handleNav} activeItem={null} />}
      />
      <Route path="/home/jewllary/details" element={<Details open={false} />} />
      <Route path="/checkout" element={<Checkout handleNav={handleNav} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default RouteHandler;

RouteHandler.propTypes = {
  handleNav: PropTypes.func.isRequired,
};
