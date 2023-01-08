import "./HeroimgStyles.css";
import React from 'react';
import Introimg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return  <div className="hero">
        <div className="mask">
        <img className="intro-img" src={Introimg} alt="Introimg"/>
        </div>
        <div className="content">
        <p> I'M A FREELANCER.</p>
        <h1>React Developer</h1>
        <div>
            <Link to="/project" className="btn ">Projects</Link>
            <Link to="/about" className="btn btn-light">About</Link>
            <Link to="/contact" className="btn ">Contact</Link>
        </div>
        </div>  
    </div>
}

export default Heroimg;