import React from 'react';
import Card from '../card';
import skz from '../../../../assets/image/figma-skz.PNG'
import pethero from '../../../../assets/image/pethero.PNG'
import bpjs from '../../../../assets/image/bpjs.png'

const Figma = () => {
  return (
    <div>
        <Card img={skz} judul="Staykids" apk = "Figma" link="https://www.figma.com/file/YvmzaILcpKYUbpmr3ZK7JZ/Untitled?node-id=0%3A1&t=Pbwg46kosKmcFSwJ-1" detail="
      Duration: Two days,
      Technologies: figma, Created website design stray kids with up to date technologies"/>
        <Card link="https://www.figma.com/file/KneMfimbppl3JI7Hu4vg6d/wireframe?node-id=0%3A1&t=zwRUQirOhnFbTfa1-1" img={pethero} judul="Pet Hero Mobile" apk = "Figma" detail="
      Duration: Two days,
      Technologies: figma, Created website design heropet with up to date technologies and collaboration with 3 people"/>
        <Card img={bpjs} judul="BPJS" apk = "Figma" detail="
      Duration: One weeks,
      Technologies:Figma. Created Created website design bpjs with up to date technologies."/>

    </div>
  );
}

export default Figma;
