import React from 'react';
import { Link } from 'react-router-dom';
import LogoComponent from './LogoComponent/LogoComponent';
import './NabBar.css';

// Hat of website
const NavBar = () => {
    return (
        <div className='NabBar'>
            <LogoComponent />
            <div className='menu-panel'>
                {/* Menu panel */}
                <div><Link to={'/'}>Main page</Link></div>
                <div><Link to={'/resume'}>Resume</Link></div>
                <div><Link to={'/about'}>About me</Link></div>
                <div><Link to={'/technologies'}>Technologies</Link></div>
                <div><Link to={'/contacts'}>Contacts</Link></div>
            </div>
        </div>
    );
}

export default NavBar;