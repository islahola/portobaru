import React from 'react';
import { NavLink } from 'react-router-dom';

const Rute = () => {
  return (
    <div className='navIndex'> 
      <NavLink to="/home" >home</NavLink>
      <NavLink to="/home/about" >about me</NavLink>
      <NavLink to="/home/skill" >Advance</NavLink>
      <NavLink to="/home" >My Project</NavLink>
      <NavLink to="/home" >Contact Me</NavLink>
    </div>
  );
}

export default Rute;
