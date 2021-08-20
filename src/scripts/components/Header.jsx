import React from 'react';
import logo from '../../images/Instagram_logo.svg'

const Header = () => {
  return (
    <div className="header">
      <div className='padding'>
        <img src={logo} alt="insta logo" />

        <input type="text" placeholder='search' />

        <div className="buttons">
          <button>Log In</button>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
