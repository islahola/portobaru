import React from 'react';
import avatar from '../../assets/image/avatar.png'
const Avatar = () => {
  return (
    <div className='avatar'>
      <div className='wrap-avatar'>
        <img src={avatar} alt='avatar'/>
      </div>
    </div>
  );
}

export default Avatar;
