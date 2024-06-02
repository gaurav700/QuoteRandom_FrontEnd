import React from 'react';

const Loader = () => {
  return (
    <div className="container" style={{ height: "81.7vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="three-body">
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
      </div>
    </div>
  );
};

export default Loader;
