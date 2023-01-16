import React from 'react';
import Container from '../component/home/container';
import Index from '../component/home/konten';
import About from '../component/home/konten/about';

const Aboutme = () => {
  return (
    <div >
      <Container konten={<Index isi={<About/>} />} class="about"/>
    </div>
  );
}

export default Aboutme;
