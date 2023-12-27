import React from "react";  

const HeaderNav: React.FC = () => {
  return (
    <nav className="header-container">
      <div className="header-logo-container">  
        <img src="/assets/placeholders/placeholder-logo.svg" alt="Logo" />
      </div>
      <div className="header-page-buttons-container">
        <ul>
          <li className="header-page-button">Home</li>
          <li className="header-page-button">Pricing</li>
          <li className="header-page-button">Blog</li>
          <li className="header-page-button">Contact</li>
        </ul>
      </div>
      <div className="header-call-to-action-contianer">
        <button className="header-call-to-action-button">Sign Up</button>
        <button className="header-call-to-action-button">Log In</button>
      </div>
    </nav>
  );
};

export default HeaderNav;
