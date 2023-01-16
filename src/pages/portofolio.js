import React from 'react';
import Container from '../component/home/container';
import Index from '../component/home/konten';
import IsiPortofolio from '../component/home/konten/isiPortofolio';

const Portofolio = () => {
  return (
    <div>
      <Container  konten={<Index isi={<IsiPortofolio/>}/>} class="Portofolio"/>
    </div>
  );
}

export default Portofolio;
