import React from 'react';

const HeaderNav: React.FC = () => {
    return (
        <nav className='header-container'>
            <div className='header-logo-container'>
                <img src='/images/logo.svg' alt='logo' /> 
            </div>
            <div className='header-page-buttons-container'>
                <button className='header-page-button'>Home</button>
                <button className='header-page-button'>Contact</button>
                <button className='header-page-button'>Pricing</button>
                <button className='header-page-button'>Blog</button>
            </div>
            <div className='header-call-to-action-contianer'>
                <button className='header-call-to-action-button'>Sign Up</button>
                <button className='header-call-to-action-button'>Log In</button>
            </div>
        </nav>
    );
};

export default HeaderNav;
