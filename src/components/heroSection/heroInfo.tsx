import React from "react";

const HeroInfo: React.FC = () => {
  return (
    <div className="hero-info-container">
        <div className="hero-info-heading">
            <h1>Discover the next big thing in E-Commerce</h1>
        </div>
        <div className="hero-info-text">
            <p>Be the first to know when our product launches. Register interest now</p>
        </div> 
        <div className="hero-info-text">
            <button>Register Interest</button>
        </div>  
    </div>
  );
};

export default HeroInfo;