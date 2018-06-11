import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div style={{ background: 'black', borderBottom: '2px solid black', paddingTop: '10px', paddingBottom: '10px', marginBottom: '12px' }}>
      <NavLink
        style={{ marginRight: '20px' }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={{ marginRight: '20px' }}
        to="/rituals"
      >
        Rituals
      </NavLink>
      <NavLink
        style={{ marginRight: '20px' }}
        to="/rituals/new"
      >
        Create Ritual
      </NavLink>
      <NavLink
        style={{ marginRight: '20px' }}
        to="/about"
      >
        About
      </NavLink>
    </div>
  );
}
export default NavBar;
