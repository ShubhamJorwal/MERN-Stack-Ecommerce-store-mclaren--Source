// import React from 'react'
import React, { useState, useEffect } from "react";
import './navbar.scss'
import { Link } from "react-router-dom"
import { VscAccount } from "react-icons/vsc"
import { FiSearch } from "react-icons/fi"
import { AiOutlineShoppingCart } from "react-icons/ai"

import logo from "../../assets/logo.png"
import { useSelector } from "react-redux";
import UserOptions from '../speeddial/UserOption'

function addClassList() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const shouldAddClass = scrollPosition > 0;

  return shouldAddClass ? 'scrollbn' : '';
}




const Navbar = () => {
  
  const { isAuthenticated, user } = useSelector((state) => state.user);

  
  return (
    <>
      <div id="announcementbar"></div>
      <div className={`${addClassList()}`} id="nav">

        <div  id="sec01">
          <div  id="currency"><Link to="/">Language : EN </Link></div>
          <div id="logo"><Link to="/"><img src={logo} alt="" /></Link></div>
          <div id="secaracc">
          <ul>
            <li className="OrderAdmin">{user && user.role === "admin" ? <Link to="/admin/dashboard">Admin</Link>  : "" }</li>
            <li className="OrderAdmin"><Link to="/orders">Orders</Link></li>        
            <li><Link to="/search"><FiSearch  size={"1.4vw"}/></Link></li>
            <li><Link to="/cart"><AiOutlineShoppingCart  size={"1.4vw"}/></Link></li>
          <li>{isAuthenticated ? <UserOptions user={user} /> :
           <Link to="/login"><VscAccount  size={"1.4vw"}/></Link>
          }</li>
          </ul>
            </div>
        </div>

      <div id="megamenu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/collection">collections</Link></li>
          <li><Link to="/mclaren-720s">Mclaren 720s</Link></li>
          <li><Link to="/mclaren-570s">Mclaren 570s</Link></li>
          <li><Link to="/mclaren-12c">Mclaren 12c</Link></li>
          <li><Link to="/mclaren-600lt">McLaren 600LT</Link></li>
          <li><Link to="/mclaren-speed-tail">McLaren Speedtail</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
        </ul>
      </div>

      </div>
    </>
  )
}

export default Navbar
