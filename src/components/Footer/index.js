import React from "react";
import "./style.css";

const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <div className="Footer">
      <p className="Footer__text">Osée Ralantoarison portfolio © {getYear} </p>
    </div>
  );
};

export default Footer;
