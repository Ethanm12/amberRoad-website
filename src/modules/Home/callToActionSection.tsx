import React from "react";
import Button from "@/components/buttons/button"

const callToActionSection: React.FC = () => {
  // add box grid
  const registerButtonStyles = {
    backgroundColor: 'black',
    color: 'white',
    marginRight: '20px', 
  };

  const learnButtonStyles = {
    backgroundColor: 'white',
    color: 'black',
  };

  return (
    <div className="cta-section-container">
      <div className="cta-heading-container">
        <h2>Discover the power</h2>
      </div>
      <div className="cta-text-container">
        <p>
          Our revolutionary E-Commerce solution that will transform your
          business.
        </p>
      </div>
      <div className="cta-button-container">
        <Button label={"Register"} style={registerButtonStyles} />
        <Button label={"Learn More"} style={learnButtonStyles} />
      </div>
    </div>
  );
};

export default callToActionSection;
