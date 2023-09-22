import React from 'react';
import PropTypes from 'prop-types';

const ViewPort = (props) => {
  const { children } = props;
  return (
    <div className="h-[80vh] w-screen md:h-screen md:w-screen md:max-w-full">
      {children}
    </div>
  );
};

ViewPort.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ViewPort;
