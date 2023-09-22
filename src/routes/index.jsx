import React from 'react';
import PropTypes from 'prop-types';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../components/Home';
import Items from '../components/Items';
import Details from '../components/Detail';

const RouteHandler = (props) => {
  const { handleNav } = props;
  return (
    <Routes>
      <Route path="/" element={<Home handleNav={handleNav} />} />
      <Route path="/home" element={<Home handleNav={handleNav} />} />
      <Route
        path="/home/jewllary"
        element={<Items handleNav={handleNav} activeItem={null} />}
      />
      <Route path="/home/jewllary/details" element={<Details open={false} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default RouteHandler;

RouteHandler.propTypes = {
  handleNav: PropTypes.func.isRequired,
};
