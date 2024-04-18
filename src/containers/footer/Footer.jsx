import React from "react";
import "./footer.css";
import gpt3Logo from "../../assets/logo.svg";
import logoValle from "../../assets/logo mejorado.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you have any questions about our products?
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Contact Our Customer Service</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={logoValle} alt="logo" />
          <p>Purificadora Valle Del Volcan, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Shop</p>
          <p>Social Media</p>
          <p>About Us</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Cam. Real a San Andrés 1230, X72810 San Andrés Cholula, Pue.</p>
          <p>(221) 530-4660</p>
          <p>support@vallevolcan.mx</p>
          <ul class= "icon">
          <p><FacebookIcon></FacebookIcon> </p>
          <p><InstagramIcon></InstagramIcon> </p>
          <p><XIcon></XIcon> </p>
          </ul>
          

        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>© 2024 Valle Del Volcan. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
