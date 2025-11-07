import React from "react";
import "./ThankYou.css";

const ThankYou = () => {
  // Generate random reference number
  const referenceNumber = `#2024-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
  
  const handleHomeClick = () => {
    // Add your navigation logic here
    window.location.href = "/";
  };

  return (
    <div className="thankyou-container">
      <div className="thankyou-card">
        {/* Success Icon */}
        <div className="icon-wrapper">
          <div className="success-icon">
            <svg 
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        </div>
        
        {/* Main Content */}
        <h1 className="thankyou-title">Thank You!</h1>
        
        <p className="main-message">
          Your complaint has been submitted successfully.
        </p>
        
        <p className="sub-message">
          Respective caretaker will look into it soon and get back to you within 24-48 hours.
        </p>
        
        {/* Decorative Divider */}
        <div className="divider"></div>
        
        {/* Reference Number */}
        <div className="reference-section">
          <p className="reference-label">Your Reference Number</p>
          <p className="reference-number">{referenceNumber}</p>
          <p className="reference-note">Please save this for future reference</p>
        </div>
        
        {/* Action Buttons */}
        <div className="button-group">
          <button className="btn-primary" onClick={handleHomeClick}>
            Return to Home
          </button>
          
        </div>
        
        {/* Additional Info */}
        <div className="additional-info">
          <p>Need immediate assistance?</p>
          <a href="hostel@nitp.ac.in" className="contact-link">
            Contact Support 
          </a>
        </div>
      </div>
      
      {/* Background Decoration */}
      <div className="bg-decoration">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
    </div>
  );
};

export default ThankYou;