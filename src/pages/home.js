import React from 'react';
import Aboutme from './aboutme';
import Kontak from './kontak';
import Portofolio from './portofolio';
import Skill from './skill';

const Home = () => {
  return (
    <div className='home'>
      <Aboutme/>
      <Skill/>
      <Portofolio/>
      <Kontak/>
    </div>
  );
}

export default Home;
