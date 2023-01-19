import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import close from '../../assets/image/close.png'

const Sidebar = (props) => {
  const link = useRef(null)
  const focus = (value) =>{
   const elemen = document.getElementById(`${value}`)
   elemen.scrollIntoView({behavior: 'smooth'});  
  }
  return (
<div className='sidebarHome' >
      <NavLink onClick={()=> focus('about')}>About</NavLink>
      <NavLink onClick={()=> focus('skill')}>Advance</NavLink>
      <NavLink onClick={()=> focus('porto')}>Portofolio</NavLink>
      <NavLink onClick={()=> focus('kontak')}>Contact Me</NavLink>
      <NavLink onClick={props.close}>
        <img src={close} alt="close"></img>
      </NavLink>
    </div>
  );
}

export default Sidebar;
