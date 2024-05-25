import React from "react";

const ErrorDisplay = ({ error }) => {
  if (!error) return null;

  return (
    <div id="error-display" className="text-red-500 text-center mt-4">
      <p>⚠️ Error: {error}</p>
    </div>
  );
};

export default ErrorDisplay;
