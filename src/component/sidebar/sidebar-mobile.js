import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import menubar from '../../assets/image/menu.png'
const SidebarMobile = () => {
  const [menuMobile, setmenuMobile] = useState(false);
  const menu = () =>{
    setmenuMobile(menuMobile ? false : true )
    console.log(menuMobile)
  }
  return (
    <div className='nav-mobile'>
    <di className="menubar" onClick={menu}>
        <img src={menubar} alt="menu"/>
      </di>
   {
    menuMobile ?  <div className='sidemobile d-flex justify-content-center align-items-center'>
    <div className='menunya d-flex flex-column '>
      <NavLink>Home</NavLink>
      <NavLink>About</NavLink>
      <NavLink>Portofolio</NavLink>
      <NavLink>Contact Us</NavLink>
    </div>
  </div> :
  ''
   }
    </div>
  );
}

export default SidebarMobile;
