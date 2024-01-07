import React from "react";  
import Button from "@/components/buttons/button"

const HeaderNav: React.FC = () => {
  
  const registerButtonStyles = {
    backgroundColor: 'white',
    color: 'black',
    marginRight: '20px', 
  };

  const learnButtonStyles = {
    backgroundColor: 'black',
    color: 'white', 
  };

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
      <Button label={"Register"} style={registerButtonStyles} /> 
      <Button label={"Learn More"} style={learnButtonStyles} /> 
      </div>
    </nav>
  );
};

export default HeaderNav;
