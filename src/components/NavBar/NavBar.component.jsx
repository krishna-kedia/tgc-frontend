import React from "react";

import Burger from "./Burger";
import { Nav } from "./NavBar.styles";
// import { Image } from "react-bootstrap";
import Logo from "./../../assets/Logo.png";

const NavBar = ({ bgOut, bgIn, textOut, textIn }) => {
  return (
    <Nav bgOut={bgOut} bgIn={bgIn} textOut={textOut} textIn={textIn}>
      <a href='/'>
      <div className="logo" style={{display:"flex", flex: 0.1, justifyContent:"center", background:"transparent"}}>
        <img style={{background:"transparent"}} src={Logo} alt="Logo"/>
      </div>
      </a>
      <Burger bgOut={bgOut} bgIn={bgIn} textOut={textOut} textIn={textIn} />
    </Nav>
  );
};

export default NavBar;
