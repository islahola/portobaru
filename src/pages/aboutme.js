import React from 'react';
import Container from '../component/home/container';
import Index from '../component/home/konten';
import About from '../component/home/konten/about';
import Sidebar from '../component/sidebar/sidebar.js';
import SidebarMobile from '../component/sidebar/sidebar-mobile';

const Aboutme = () => {
  return (
    <div className='d-flex'>
         <Sidebar/>
        <SidebarMobile/>
        <div className='d-flex col-9  konten-test'>
          <Container konten={<Index isi={<About/>} id="about"/>} />
        </div>  
    </div>
  );
}

export default Aboutme;
