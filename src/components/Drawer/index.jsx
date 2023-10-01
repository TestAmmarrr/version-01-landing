import React from 'react';
import PropTypes from 'prop-types';

const Drawer = (props) => {
  const { isOpen, content } = props;
  return (
    <div
      className={`fixed right-0 top-0 z-40  h-screen w-[350px] max-w-[95%] overflow-auto bg-white transition-transform duration-300 md:w-[450px] ${
        isOpen ? 'translate-x-0' : ' translate-x-full'
      }`}
    >
      {content}
    </div>
  );
};
export default Drawer;

Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  content: PropTypes.object.isRequired,
};
