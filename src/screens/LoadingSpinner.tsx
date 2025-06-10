import React from "react";
import "./../css/Spinner.css"; // Create this file or use inline styles

const LoadingSpinner: React.FC = () => {
  return (
    <div className="spinner-container">
      <div className="loading-spinner" />
    </div>
  );
};

export default LoadingSpinner;
