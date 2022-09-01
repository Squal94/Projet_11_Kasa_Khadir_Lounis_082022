import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <img
        className="footer__logo"
        src="./Logo-background.png"
        alt="Logo du site Kasa"
      />
      <div className="footer__copyright">
        <img
          className="footer__copyright--pic"
          src="./copyright.png"
          alt="Copyright"
        />
        <p className="footer__copyright--txt">2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
