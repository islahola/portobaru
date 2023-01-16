import React,{useState} from 'react';
import star from '../../assets/image/start.png'



const Star = () => {
  
const [maxident,setMaxident] = useState([''])

const test = () =>{
  for (let index = 0; index < 83; index++) {
    let size = Math.random() *  60;
    let totalSize = size+'px'
    let durasi = Math.random() *  60+'s'
    let img = <img src={star} alt="star" style={{animationDuration : durasi}}  width={totalSize} height={totalSize}/>
    maxident.push(img)
    
  }
}
  return (
    <div  className="startWrap">
      {maxident}
      {test()}
    </div>
  );
}

export default Star;
