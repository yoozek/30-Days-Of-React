import React from "react";

const TechnologiesPanel = ({ title, techImages }) => (
  <div className="technologies">
    <h2>{title}</h2>
    <div className="technologies-wrapper">
      {techImages.map((logo) => (
        <img src={logo} alt={logo} key={logo} />
      ))}
    </div>
  </div>
);

export default TechnologiesPanel;
