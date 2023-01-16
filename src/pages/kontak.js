import React from 'react';
import Container from '../component/home/container';
import Index from '../component/home/konten';
import KontakIsi from '../component/home/konten/kontak';

const Kontak = () => {
  return (
    <div>
      <Container konten={<Index isi={<KontakIsi/>} />} class="kontak"/>
    </div>
  );
}

export default Kontak;
