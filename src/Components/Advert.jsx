import React from 'react';
import { useNavigate } from 'react-router-dom';  

const Advert = () => {
  const navigate = useNavigate(); 

  const handleRedirect = () => {
    navigate('/assets'); 
  };

  return (
    <div className="container py-5">
      <div className="bg-white rounded-lg shadow-lg p-4 p-md-5 position-relative">
        <button 
          className="btn btn-primary btn-lg position-absolute top-0 end-0 m-3" 
          onClick={handleRedirect}
        >
          View Assets
        </button>

        <h2 className="text-primary mb-4">Asset Management Made Easy!</h2>
        <p className="text-muted mb-4">
          Track, update, and manage your business assets in real-time with ease.
        </p>
        
        <ul className="list-unstyled mb-4">
          <li>✅ <strong>Track Your Assets in Real-Time</strong></li>
          <li>✅ <strong>Effortless Asset Updates</strong></li>
          <li>✅ <strong>Built-In Depreciation Tracking</strong></li>
          <li>✅ <strong>Comprehensive Asset Categorization</strong></li>
        </ul>

        <div className="text-center mb-4">
          <img 
            src="/images/spreadsheet.webp" 
            alt="Asset Management Illustration" 
            className="img-fluid" 
          />
        </div>
      </div>
    </div>
  );
};

export default Advert;
