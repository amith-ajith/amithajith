import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../style/Navbar.css'
import {gsap} from 'gsap'


const Navbar = () => {

  const navbar = useRef();
  const q = gsap.utils.selector(navbar);
  const [pathname, setPathname] = useState(null);
  const  [rerender, setRerender] = useState(false);
  // useEffect(()=>{
  //   setPathname(window.location.pathname);
  //   if(pathname === "/resume"){
  //     gsap.to(q(".itemtext"),{css:{color:'black',
  //                                   }})
  //   }
  //   else{
  //     gsap.to(q(".itemtext"),{css:{color:'white'}})
  //   }   
      
  // },[rerender,pathname])


  

  return (
    <div className= "maincontainer-navbar">
        <div className="wrapper-navbar">
        <div className="listitems-navbar" ref={navbar}>
            <div className="item"><NavLink className={pathname === '/amithajith' ? "itemtext active" : "itemtext" } onClick={()=>setRerender(!rerender)}   to="/amithajith">{"Home"}</NavLink></div>
            <div className="item"><NavLink className={pathname === '/resume' ?"itemtext active" : "itemtext" } onClick={()=>setRerender(!rerender)} to="/resume">{"Resume"}</NavLink></div>
            <div className="item"><NavLink className={pathname === '/contact' ? "itemtext active" : "itemtext" } onClick={()=>setRerender(!rerender)} to="/contact">{"Contact"}</NavLink></div>
        </div>
        </div>
    </div>
  )
}

export default Navbar