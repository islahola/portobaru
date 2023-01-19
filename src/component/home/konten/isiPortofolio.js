import React, { useState } from 'react';
import All from './porto/all';
import Figma from './porto/figma';
import Laravel from './porto/laravel';
import ReactPorto from './porto/react';
import Word from './porto/word';

const IsiPortofolio = () => {
  const [isiPorto, setIsiporto] = useState([<All/>])
  
  const handleAll =() => {
    setIsiporto(<All/>)
  }
  const handleFigma =() => {
    setIsiporto(<Figma/>)
  }
  const handleReact =() => {
    setIsiporto(<ReactPorto/>)
  }
  const handleLaravel =() => {
    setIsiporto(<Laravel/>)
  }
  const handleWord =() => {
    setIsiporto(<Word/>)
  }
  return (
    <div className='col-10 mx-auto' id="porto">
    <h1 ><span>Porto</span>folio</h1>
    <div className='isinya pt-4'>
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <button class="nav-link"onClick={handleAll}  aria-current="page" >All</button>
      </li>
      <li class="nav-item">
        <button class="nav-link" onClick={handleReact}>React.js</button>
      </li>
      <li class="nav-item">
        <button class="nav-link" onClick={handleFigma} href="#">Figma</button>
      </li>
      <li class="nav-item">
        <button class="nav-link"onClick={handleLaravel} href="#">Laravel</button>
      </li>
      <li class="nav-item">
        <button class="nav-link" onClick={handleWord} href="#">Wordpress</button>
      </li>
    </ul>
    <div className='all-porto'>
      {isiPorto}
    </div>
    </div>
  </div>
  );
}

export default IsiPortofolio;
