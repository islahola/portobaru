import React,{useState} from 'react';
import Sidebar from '.';
import bar from '../../assets/image/menu.png'
import git from '../../assets/image/github.png'
import wa from '../../assets/image/whatsapp.png'
import linkedin from '../../assets/image/linkedin.png'
const SidebarHome = () => {
  const [sidebar, setSidebar] = useState(false);
  const side = () =>{
    setSidebar(
      sidebar ? false : true
    )
    console.log(sidebar)
  }
  return (
    <div className='d-flex col-3 side-mobile'>
            <div className={sidebar ? 'd-none info' : ' pb-3 d-flex flex-column col-3 info justify-content-between'}>
              <div className='sosmed pt-5  d-flex flex-column btn-pointer' >
                <div className='icon-kontak col-5 m-auto ' href="https://github.com/islahola" target="_blank">
                  <img src={wa}/>
                </div>
                <div className='icon-kontak col-5 mx-auto ' href="https://www.linkedin.com/in/islahola/" target="_blank">
                  <img src={git}/>
                </div>
                <div className='icon-kontak col-5 mx-auto ' href="https://api.whatsapp.com/send?phone=6285759044279"target="_blank">
                  <img src={linkedin}/>
                </div>
              </div> 
              <div className='wrap-nama'>
                <h5 className='nama '>Isolah Khofifah Nuraini</h5>
                </div>
            </div>
            <div className={
              sidebar? 'col-12 sidebar d-flex justify-content-center align-items-center' : 'col-9 sidebar d-flex justify-content-center align-items-center'
            }> 
              <div>
                {
                  sidebar ? <Sidebar close ={side} sidebar={sidebar}/> : <img src={bar} alt='menubar'  onClick={side} className="btn-pointer"/> 
                }
              </div>
            </div>
        </div>
  );
}

export default SidebarHome;
