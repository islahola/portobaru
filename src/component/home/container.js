import React from 'react';

const Container = (props) => {
  
  return (
    // <div className= {`kontainer ${props.class}`} >
    //   {props.konten}
    // </div>
    <div className= {`kontainer + ${props.color}`}  id={props.id} >
      {props.konten}
    </div>
  );
}

export default Container;
