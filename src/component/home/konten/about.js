import React from 'react';
import image from '../../../assets/image/foto.jpg'
const About = () => {
  return (
    <div className='col-10 m-auto'>
    <h1 >About Me</h1>
    <div className='isinya d-flex pt-4 align-items-center '>
      <p className='col-7 px-2 '>
      I'Am - Islah, I am a current semester 7 student of State Islamic University Syarif Hidayahtullag Jakarta majoring in Computer Science. I am very interested in Web Developer especially in the field of Frontend Developer.
       </p>
      <div className='col-4 text-end foto ms-5 mt-2'>
        <img src={image} alt="foto olla"/>
      </div>
    </div>
  </div>
  );
}

export default About;
