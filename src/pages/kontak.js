import React from 'react';
import Container from '../component/home/container';
import Index from '../component/home/konten';
import KontakIsi from '../component/home/konten/kontak';
import Sidebar from '../component/sidebar';

const Kontak = () => {
  return (
    <div className='d-flex'>
      <Sidebar/>
      <div className='d-flex col-9  konten-test'>
      <Container konten={<Index isi={<KontakIsi id="kontak"/>}color="bg-danger"/> } />
      </div>  
    </div>
  );
}

export default Kontak;
