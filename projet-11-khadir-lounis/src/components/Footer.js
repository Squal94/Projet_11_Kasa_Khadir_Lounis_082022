import React from "react";
import copyright from "./../assets/img/copyright.png";
import logoFooter from "./../assets/img/Logo-background.png";

const Footer = () => {
  return (
    <div className="footer">
      <img className="footer__logo" src={logoFooter} alt="Logo du site Kasa" />
      <div className="footer__copyright">
        <img
          className="footer__copyright--pic"
          src={copyright}
          alt="Copyright"
        />
        <p className="footer__copyright--txt">2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
