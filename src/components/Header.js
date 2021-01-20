import React from 'react';
import logo from '../Netflix_logo.svg';

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Netflix" />
    </div>
  );
};

export default Header;
