import React from "react";
import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-content">
        <h1 className="gradient__text">
          Visit our Official Branch
        </h1>
        <p style={{fontSize:'20px', color:'white', fontWeight:"300"}}>
          Cam. Real a San Andrés 1230, Sin Nombre de Col 4, 72810 San Andrés Cholula, Pue.
        </p>
        <h1 className="gradient__text">
          Contact information
        </h1>
        <p style={{fontSize:'20px', color:'white', fontWeight:"300"}}>
          +52 (222) 153-04660
        </p>
        <p style={{fontSize:'20px', color:'white', fontWeight:"300", marginTop:"-30px"}}>
          support@vallevolcan.mx
        </p>
        <ul className= "gpt3__possibility-icon">
          <p><FacebookIcon style={{ fontSize: '2rem', marginRight:'10px', color:"white" }}></FacebookIcon> </p>
          <p><InstagramIcon style={{ fontSize: '2rem', marginRight:'10px', color:"white" }}></InstagramIcon> </p>
          <p><XIcon style={{ fontSize: '2rem', marginRight:'10px', color:"white" }}></XIcon> </p>
          <p><WhatsAppIcon style={{ fontSize: '2rem', marginRight:'10px', color:"white" }}></WhatsAppIcon> </p>
        </ul>

        <h1 className="gradient__text">
          Opening hours
        </h1>
        <p style={{fontSize:'20px', color:'white', fontWeight:"300"}}>
          Monday to Friday 9a.m. to 6p.m. 
        </p>
        <p style={{fontSize:'20px', color:'white', fontWeight:"300", marginTop:"-30px"}}>
          Saturday  9:30a.m. to 3p.m.
        </p>
        
        <h4>For business inquiries, please contact us via phone or email.</h4>
      </div>

      <div className="gpt3__possibility-image">
        <iframe width="760" height="520" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=480&amp;height=520&amp;hl=en&amp;q=Cam.%20Real%20a%20San%20Andr%C3%A9s%201230,%20Sin%20Nombre%20de%20Col%204,%2072810%20San%20Andr%C3%A9s%20Cholula,%20Pue.+(Purificadora%20Valle%20del%20Volc%C3%A1n)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>
      </div>

    </div>
  );
};

export default Possibility;
