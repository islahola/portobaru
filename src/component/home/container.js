import React from 'react';

const Container = (props) => {
  
  return (
    <div className= {`kontainer ${props.class}`} >
      {props.konten}
    </div>
  );
}

export default Container;
