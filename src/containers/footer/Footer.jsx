import React from "react";
import "./footer.css";
import wat from "../../assets/man_wat_v1.png";
import logoValle from "../../assets/logo mejorado.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Doubts about who attends you?
        </h1>
        <img className="gpt3__footer-img" src={wat} alt="waterman" />
      </div>
      <div className="gpt3__footer-btn">
        <p>Meet Our Team</p>
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
          <ul className= "icon">
          <p><FacebookIcon style={{ fontSize: '2rem', marginRight:'10px' }}></FacebookIcon> </p>
          <p><InstagramIcon style={{ fontSize: '2rem', marginRight:'10px' }}></InstagramIcon> </p>
          <p><XIcon style={{ fontSize: '2rem', marginRight:'10px' }}></XIcon> </p>
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
