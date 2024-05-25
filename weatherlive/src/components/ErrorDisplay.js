import React from "react";

const ErrorDisplay = ({ error }) => {
  if (!error) return null;

  return (
    <div id="error-display">
      <p>Error: {error}</p>
    </div>
  );
};

export default ErrorDisplay;
