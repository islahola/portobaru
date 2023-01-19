import React from 'react';
import image from '../../../assets/image/foto.png'
import iconArrow from '../../../assets/image/arraw.png'
const About = () => {
  return (
    <div className='col-10 m-auto pt-5' id='about'>
    <h1  >About  <span className='title-about'>Me</span></h1>
    <div className='isinya d-flex pt-4 align-items-center  justify-content-between '>
      <div className='col-lg-7  col-10 '>
        <h4 className='col-12 pb-3 front-end'><span>Frontend</span> Developer</h4>
        <p className='about-test'>
        I'Am - Islah, I am a current semester 7 student of State Islamic University Syarif Hidayahtullah Jakarta majoring in Computer Science. I am very interested in Web Developer especially in the field of Frontend Developer.
        </p>
        <button className='btn active'>Download CV</button>
        <div className='slider mt-5  justify-content-center d-flex'>
          <p>Swipe</p> 
          <div className='arrow'>
          <img  src={iconArrow} alt="iconArrow"/>
          </div>
          
          </div>
      </div>
      <div className='col-5 text-end foto ms-5'>
        <img src={image} alt="foto olla"/>
      </div>
    </div>
  </div>
  );
}

export default About;
