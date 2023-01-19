import React from 'react';
import Container from '../component/home/container';
import Index from '../component/home/konten';
import IsiPortofolio from '../component/home/konten/isiPortofolio';
import Sidebar from '../component/sidebar';

const Portofolio = () => {
  return (
    <div>
    <div className='d-flex'>
        <Sidebar/>
        <div className='d-flex col-9  konten-test'>
        <Container konten={<Index isi={<IsiPortofolio id="kontak"/>}color="bg-danger"/> } />
        </div>  
    </div>
    </div>
  );
}

export default Portofolio;
