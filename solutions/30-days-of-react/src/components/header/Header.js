import React from "react";

const Header = ({ welcome, title }) => {
  return (
    <header>
      <div className="header-wrapper">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
      </div>
    </header>
  );
};

export default Header