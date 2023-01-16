import React from 'react';
import Avatar from '../component/index/avatar';
import Intro from '../component/index/intro';
import Navbar from '../component/index/navbar';
import Star from '../component/index/star';

const Index = () => {
  return (
    <div className='index '>
      <div className='star'>
        <Star/>
       </div>
      <div className='container d-flex'>
        <Intro/>
        <div className='d-flex   wrap-navigasi'>
          <Avatar/>
          <Navbar/>
        </div>
      </div>
    </div>
  );
}

export default Index;
