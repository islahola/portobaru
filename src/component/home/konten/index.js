import React from 'react';
import bar from '../../../assets/image/menu.png'

const Index = (props) => {
  return (
    <div className='konten d-flex'>
        <div className='col-1 '>
          <div className='mx-auto mt-5'>
            <p>sosmed</p>
          </div>
          <div className='h1'>
            <h2>
              Islah Khofifah Nuraini
            </h2>
          </div>
        </div>
        <div className='col-1 sidebar d-flex justify-content-center align-items-center '> 
          <div>
            <img src={bar} alt='menubar'/>
          </div>
        </div>
       
        <div className='col-10 isi-konten  d-flex justify-content-center '>
          {props.isi}
        </div>
    </div>
  );
}

export default Index;
