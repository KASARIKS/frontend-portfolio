import React from 'react';
import './LogoComponent.css';
import logo from '../../../images/logo.png';

// Logo
const LogoComponent = () => {
  return (
    <div className='logo-email'>
        <img src={logo} className='logo' alt='logo'></img>
        <span>golovko085@gmail.com</span>
    </div>
  );
}

export default LogoComponent;