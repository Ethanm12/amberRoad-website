import React from "react"; 
import MiscButton from "@/components/buttons/miscButton"

const CardSection: React.FC = () => {

    // add box grid
    const registerButtonStyles = { 
        border: 'none',
        color: 'black', 
        padding: '0',
      };
 
  return (
    <div className="card-section-container"> 

        {/* This is where we put the components */}
        {/* CARD 1 */}
        <div className="card-container">
            <div className="card-image">
                <img src="/assets/placeholders/placeholder-image.jpg" alt="card-image" />
            </div>
            <div className="card-text-container">
                <h3>Enhance your brand with personalized E-Commerce Solutions</h3>
                <p>
                    Our E-Commerce solutions are designed to elevate your brand and
                    provide a user-friendly shopping experience.
                </p>
            </div>
            <div className="card-button-container">
                <MiscButton propsClass="card-button" label={"Learn More"} style={registerButtonStyles} />
            </div>
        </div>

        {/* CARD 2 */}
        <div className="card-container card-remove-this">
            <div className="card-image">
                <img src="/assets/placeholders/placeholder-image.jpg" alt="card-image" />
            </div>
            <div className="card-text-container">
                <h3>Streamline your online store with customizable features</h3>
                <p>
                    Unlock the potential of your online store with our range
                    of customizable features designed to increase your sales.
                </p>
            </div>
            <div className="card-button-container">
                <MiscButton propsClass="card-button" label={"Sign Up"} style={registerButtonStyles} />
            </div>
        </div>

        {/* CARD 3 */}
        <div className="card-container">
            <div className="card-image">
                <img src="/assets/placeholders/placeholder-image.jpg" alt="card-image" />
            </div>
            <div className="card-text-container">
                <h3>Create a unique shopping experience for your customer</h3>
                <p>
                    Stand out from the competitionby offering a personalized shopping
                    experience to your customers.
                </p>
            </div>
            <div className="card-button-container">
                <MiscButton propsClass="card-button" label={"Get Started"} style={registerButtonStyles} />
            </div>
        </div>


    </div>
  );
};

export default CardSection;
