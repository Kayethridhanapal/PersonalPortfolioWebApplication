import "./NavbarStyles.css";
import React, { useState } from 'react';
import {Link} from "react-router-dom";
import { FaFacebook,FaInstagram,FaLinkedin,FaBars,FaTimes} from "react-icons/fa";

const Navbar = () => {
    const [click,setClick]=useState(false);
    const handleClick=() => setClick(!click);

    const [color,setColor]=useState(false);
    const changeColor=()=>{
        if(window.scrollY >=100){
            setColor(true);
        }else{
            setColor(false);
        }
    };
    window.addEventListener("scroll",changeColor);
  return (
    <div className={color ? "header header-bg": "header"}>
        <div><Link to="/">
            <h1>Portfolio</h1>
        </Link>
        <div>
                <a href="https://www.facebook.com/kayethri.dhanapal"><FaFacebook size={20}  style={{color:"#fff",marginRight:"1rem"}} /></a>
                <a href="https://instagram.com/kayethridhanapal?igshid=NDc0ODY0MjQ="> <FaInstagram size={20}  style={{color:"#fff",marginRight:"1rem"}}/></a>
                <a href="https://www.linkedin.com/in/kayethri-dhanapal" ><FaLinkedin size={20}  style={{color:"#fff",marginRight:"1rem"}}/></a>
                </div></div>
       
        
        <ul className={click ? "nav-menu active":"nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (
            <FaTimes size={20} style={{color:"#fff"}} />
            ):(
            <FaBars size={20} style={{color:"#fff"}} />
            )}
        </div>
    </div>
  )
} 

export default Navbar;