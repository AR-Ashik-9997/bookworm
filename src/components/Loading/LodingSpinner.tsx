import React from "react";

const FancyLoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-96">
      <div className="w-24 h-24 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default FancyLoadingSpinner;
