import React from 'react';
import Container from '../component/home/container';
import Index from '../component/home/konten';
import IsiSkill from '../component/home/konten/skill';

const Skill = () => {
  return (
    <div >
      <Container konten={<Index isi={<IsiSkill/>} />} class="kontak"/>
    </div>
  );
}

export default Skill;
