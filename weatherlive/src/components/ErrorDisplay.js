import React from "react";

const ErrorDisplay = ({ error }) => {
  //If there is no error, nothing is displayed
  if (!error) return null;

  // Check if the error is due to an invalid or missing API key
  const isUnauthorizedError = error === "API key is invalid or missing";

  return (
    <div
      id="error-display"
      className="flex items-center justify-center mt-4 p-4 border border-red-500 rounded-lg bg-red-100 text-red-700 max-w-md mx-auto shadow-lg"
    >
      <svg
        className="w-6 h-6 mr-2 text-red-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M18.364 5.636a9 9 0 11-12.728 0M12 9v2m0 4h.01"
        ></path>
      </svg>
      <p className="text-center">
        <strong>{isUnauthorizedError ? "Unauthorized:" : "Error:"}</strong>{" "}
        {error}
      </p>
    </div>
  );
};

export default ErrorDisplay;
