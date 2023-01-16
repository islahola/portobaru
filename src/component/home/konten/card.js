import React from 'react';

const Card = (props) => {
  return (
    <div className="card mt-4">
    <div className="card-header">
      {props.judul}
    </div>
    <div className="card-body">
      <h5 className="card-title">{props.apk}</h5>
      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href={props.link} className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  );
}

export default Card;
