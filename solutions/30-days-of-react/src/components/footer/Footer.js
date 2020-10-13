import React from "react";

const Footer = ({ text, copyRight }) => (
  <footer>
    <div className="footer-wrapper">
      <p>
        {text} - {copyRight.getFullYear()}
      </p>
    </div>
  </footer>
);

export default Footer;
