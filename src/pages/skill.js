import React from 'react';
import Container from '../component/home/container';
import Index from '../component/home/konten';
import IsiSkill from '../component/home/konten/skill';
import Sidebar from '../component/sidebar';

const Skill = () => {
  return (
    <div className='d-flex'>
      <Sidebar/>
      <div className='d-flex col-9  konten-test'>
      <Container konten={<Index isi={<IsiSkill id="kontak"/>}color="bg-danger"/> } />
      </div>  
    </div>
  );
}

export default Skill;
