import React from 'react';
import PropTypes from 'prop-types';

const Overlay = (props) => {
  const { overlayVisible, disableOverlay } = props;
  return (
    <div
      onClick={() => disableOverlay()}
      className={`${
        overlayVisible
          ? 'fixed inset-0 z-20 overflow-hidden bg-gray-500 opacity-50'
          : 'hidden'
      }`}
    ></div>
  );
};

export default Overlay;
Overlay.propTypes = {
  overlayVisible: PropTypes.bool.isRequired,
  disableOverlay: PropTypes.func.isRequired,
};
