import React from 'react';
import Container from '../../component/home/container';
import Index from '../../component/home/konten';
import About from '../../component/home/konten/about';
import IsiPortofolio from '../../component/home/konten/isiPortofolio';
import Sidebar from '../../component/sidebar/sidebar.js';
import KontakIsi from '../../component/home/konten/kontak';
import IsiSkill from '../../component/home/konten/skill';
import SidebarMobile from '../../component/sidebar/sidebar-mobile';

const Test = () => {
return (
    <div className='d-flex'>
        <Sidebar/>
        <SidebarMobile/>
        <div className='d-flex col-12  col-lg-9 konten-test'>
          <Container konten={<Index isi={<About/>} id="about"/>} />
          <Container konten={<Index isi={<IsiSkill/>} id="skill"/>} />
          <Container konten={<Index isi={<IsiPortofolio id="porto"/>} />} />
          <Container konten={<Index isi={<KontakIsi id="kontak"/>}color="bg-danger"/> } />
        </div>  
    </div>
  );
}

export default Test;
