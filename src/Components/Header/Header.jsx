import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import {Link} from 'react-scroll'
import {Link as RouterLink} from 'react-router-dom'


const Header = () => {
  const mobile=window.innerWidth<=768?true:false;
  const [menuOpened,setMenuOpened]=useState(false)
  return (
   
      <div className="header">
      <img className="logo" src={logo} alt="" />
      {(menuOpened===false&&mobile===true)?<div
      style={{backgroundColor:'var(--appColor)', padding:"0.5rem", borderRadius:'5px'}}
      onClick={()=>setMenuOpened(!menuOpened)}
      > <img
      style={{width:'1.5rem',height:'1.5rem'}}
      src={Bars} alt="" />
      </div>:(
 <ul className="header-menu">
  <li onClick={()=>setMenuOpened(false)} ><Link onClick={()=>setMenuOpened(false)}  to="hero" activeClass="active"span={true} smooth={true}>Home</Link></li>
  <li onClick={()=>setMenuOpened(false)}><Link  onClick={()=>setMenuOpened(false)}  to="Programs" span={true} smooth={true}>Programs</Link></li>
  {/* <li ><Link onClick={()=>setMenuOpened(false)}  to="reasons" span={true} smooth={true}>Why Choose Us</Link></li> */}
 <li onClick={()=>setMenuOpened(false)}><Link onClick={()=>setMenuOpened(false)}  to="Plans" span={true} smooth={true}>Plans</Link></li>
 <li onClick={()=>setMenuOpened(false)}><Link onClick={()=>setMenuOpened(false)}  to="Testimonials" span={true} smooth={true}>Testimonials</Link></li>
 <li onClick={()=>setMenuOpened(false)}><Link onClick={()=>setMenuOpened(false)}  to="Testimonials" span={true} smooth={true}>Diet Plans</Link></li>
 <li onClick={()=>setMenuOpened(false)}><RouterLink className='RouterLink' onClick={()=>setMenuOpened(false)}  to="/createDietPlan" span={true} smooth={true}>Create Diet Plan</RouterLink></li>
</ul>
      )}
      
      </div>
   
  )
}

export default Header
