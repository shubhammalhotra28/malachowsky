import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/chowstatus' activeStyle>
            Chow Status
          </NavLink>
          <NavLink to='/chowlocation' activeStyle>
            Chow Location
          </NavLink>
          <NavLink to='/chowmap' activeStyle>
            Chow Map
          </NavLink>
          <NavLink to='/chowclasses' activeStyle>
            Rate Chow Classes
          </NavLink>
          </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;
