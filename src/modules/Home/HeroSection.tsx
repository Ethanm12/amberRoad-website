import React from "react";
import Button from "@/components/buttons/button"

const HeroSection: React.FC = () => {

  //Focus on building this better. The styles need to be more unified to maintain the code better
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
    <div className="hero-section-container">
      <div className="hero-section-text">
        <div className="hero-section-heading">
          <h1>Discover the Next Big Thing in E-Commerce</h1>
          <p>
            Be the first to know when our revolutionary product launches. Sign
            up now!
          </p>
          <div className="hero-section-buttons">
          <Button label={"Register"} style={registerButtonStyles} /> 
          <Button label={"Learn More"} style={learnButtonStyles} /> 
          </div>
        </div>
      </div>

      <div className="hero-section-image">
        <img src="/assets/placeholders/placeholder-image.jpg
        " alt="Hero" />
      </div>
    </div>
  );
};

export default HeroSection;
