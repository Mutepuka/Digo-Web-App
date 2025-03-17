import React from "react";

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center py-4">
      <div className="spinner-border text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
