import React from 'react';
import { Link } from 'react-router-dom';

import { Ul } from "./NavBar.styles";

const RightNav = ({ open , bgOut, bgIn, textOut, textIn}) => {
  return (
    <Ul open={open} bgOut={bgOut} bgIn={bgIn} textOut={textOut} textIn={textIn}>
      <Link to='/' style={{textDecoration:"none"}}><li>HOME</li></Link>
      <Link to='/chapter' style={{textDecoration:"none"}}><li>LOCATIONS</li></Link>
      <Link to='/workshops' style={{textDecoration:"none"}}><li>WORKSHOPS</li></Link>
      <Link to='/team' style={{textDecoration:"none"}}><li>TEAM</li></Link>
      <Link to='/joinus' style={{textDecoration:"none"}}><li>JOIN</li></Link>
    </Ul>
  )
}

export default RightNav;