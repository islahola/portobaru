import React,{useState} from 'react';
import bar from '../../../assets/image/menu.png'
import Sidebar from '../../sidebar';

const Index = (props) => {
 
  return (
    <div className='konten d-flex'>
        <div className='col-12 isi-konten  d-flex justify-content-center '>
          {props.isi}
        </div>
    </div>
  );
}

export default Index;
