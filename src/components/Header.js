import React from 'react';
import propTypes from 'prop-types';



const Header = ( {handleMessage}) =>{
  return (
    <h2 className = "Header text-center">
      {handleMessage}
    </h2>
  );
};

Header.propTypes = {
  handleMessage : propTypes.string
};

export default Header;
