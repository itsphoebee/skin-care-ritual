import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div style={{ background: 'black', borderBottom: '2px solid black', paddingTop: '10px', paddingBottom: '10px', marginBottom: '12px' }}>
      <NavLink
        style={{ marginRight: '10px' }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={{ marginRight: '10px' }}
        to="/rituals"
      >
        Rituals
      </NavLink>
    </div>
  );
}
export default NavBar;
