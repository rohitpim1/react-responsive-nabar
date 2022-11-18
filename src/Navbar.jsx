import React,{useState} from 'react'
import './style.css'
import {FaBars,FaMale} from 'react-icons/fa'
const Navbar = () =>{
  const[open,setOpen] = useState(true);
  return(
   <div className="nav flexd">
     <div className="menu-btn">
       <FaBars font-size="20" onClick={()=>setOpen(!open)}/>
     </div>
     <div className="header">
       <h2>Codes</h2>
     </div>
     <div className="nav-list flexed">
       <a href="">Home</a>     
        <a href="">About</a>
        <a href="">html</a>
       <a href="">css</a>
       <a href="">js</a>
       <a href="">react</a>
       <a href="">java</a>
       <a href="">php</a>
     </div>
     {
       open && <div class="menu">
        <a href="">Home</a>     
        <a href="">About</a>
        <a href="">html</a>
       <a href="">css</a>
       <a href="">js</a>
       <a href="">react</a>
       <a href="">java</a>
       <a href="">php</a>
       </div>
     }
     <div className="icons">
       <FaMale font-size="20" className="fmale"/>
     </div>
   </div>
  )
}
export default Navbar;