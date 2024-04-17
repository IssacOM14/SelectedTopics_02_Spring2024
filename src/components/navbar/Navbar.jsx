import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo mejorado.png";
import "./navbar.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//import HomeIcon from '@mui/icons-material/Home';

// BEM --> Block Element Modifier

const Menu = () => (
  <>
    <p>
      <a className="link-text-color" href="#home">Home</a>
    </p>
    <p>
      <a className="link-text-color" href="#features">Shop</a>
    </p>
    <p>
      <a className="link-text-color" href="#possibility">About</a>
    </p>
    <p>
      <a className="link-text-color" href="#blog">Contact</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const scrollTop = () => window['scrollTo']({ top: 0, behavior: 'smooth'});

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo" onClick={scrollTop}>
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p style={{ color: '#449bff'}}>Sign in</p>
        <ShoppingCartIcon style={{ color: '#449bff'}}/>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#449bff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#449bff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <ShoppingCartIcon style={{ color: '#449bff'}}/>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
