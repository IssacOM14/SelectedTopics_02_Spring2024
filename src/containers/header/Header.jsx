import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import prod from "../../assets/product_img.png";
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <div className="gpt3__header section__padding">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Purificadora Valle Del Volcan
        </h1>
        <p style={{fontSize:'20px', color:'white', fontWeight:"700"}}>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="gpt3__header-content__input">
          <Button variant="contained" color="primary" style={{fontSize:'20px'}}>
            BUY NOW
          </Button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>More than 1600 concurrent customers per month</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={prod} alt="prod!important" />
      </div>
    </div>
  );
};

export default Header;
