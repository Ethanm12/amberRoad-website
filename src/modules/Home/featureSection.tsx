import React from "react";
import Button from "@/components/buttons/button"

const FeatureSection: React.FC = () => {

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
    <div className="feature-section-container">
      <div className="feature-section-text">
        <div className="feature-section-heading">
          <h2>Power of Your E-Commerce Solution</h2>
          <p>
            With our innovative E-Commerce solution, you can easily create and 
            manage your online store. Boost your sales and reach new customers
            with our user-friendly platform.
          </p>
          <div className="feature-section-perks">
          <div className="feature-section-item">
                <h3>Easy Setup</h3>
                <p>
                Get your online store up and running in no time with our intuitive
                setup process
                </p>
           </div>
           <div className="feature-section-item">
                <h3>Secure Payments</h3>
                <p>
                Rest easy knowing that your customers&apos; payments are safe
                and protected
                </p>
           </div>
          </div>
        </div>
      </div>

      <div className="feature-section-image">
        <img src="/assets/placeholders/placeholder-image.jpg
        " alt="Hero" />
      </div>
    </div>
  );
};

export default FeatureSection;
