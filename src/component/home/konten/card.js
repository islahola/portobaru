import React from 'react';

const Card = (props) => {
  return (
    <div className="card mt-4">
    <div className="card-header">
      {props.judul}
    </div>
    <div className="card-body d-flex justify-content-between">
      <div className='col-lg-6'>
        <h5 className="card-title">{props.apk}</h5>
        <p className="card-text">
       {props.detail} 
        </p>
        <a href={props.link} className="btn" target="_blank">Go Detail</a>
      </div>
      <div className='col-lg-5 '>
        <img src={props.img}/>
      </div>
    </div>
  </div>
  );
}

export default Card;
