import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import prod from "../../assets/product_img.png";
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <div className="gpt3__header section__padding">
      <div className="gpt3__header-content">
        <h1 className="gradient__text-head">
          Purificadora Valle Del Volcan
        </h1>
        <p style={{fontSize:'20px', color:'white', fontWeight:"700"}}>
          Pouring purity into every drop: Join Valle Del Volcan in unlocking the true essence of clean, revitalizing water!
        </p>
        <div className="gpt3__header-content__input">
          <Button disableRipple variant="contained" color="primary" style={{fontSize:'20px', position:'static'}}>
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
