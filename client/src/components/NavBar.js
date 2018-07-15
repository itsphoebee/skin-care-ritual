import React from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
const NavBar = () => {
  return (
    <div>
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <h2><a href="/">Skincare Rituals</a></h2>
        </Navbar.Header>
        <h3><NavDropdown eventKey={2} title="Rituals" id="basic-nav-dropdown">
          <MenuItem eventKey={2.1} href="/rituals">All Rituals</MenuItem>
          <MenuItem eventKey={2.2} href="/rituals/new">New Ritual</MenuItem>
        </NavDropdown></h3>
        <h3><NavItem eventKey={1} href="#">
          About
        </NavItem></h3>
      </Navbar>
    </div>
  );
}
export default NavBar;
