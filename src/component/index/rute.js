import React from 'react';
import { NavLink } from 'react-router-dom';

const Rute = () => {
  return (
    <div className='navIndex'>
      <NavLink to="/home" >home</NavLink>
        <a>about me</a>
        <a>Advance</a>
        <a>My Project</a>
        <a>Contact Me</a>
    </div>
  );
}

export default Rute;
