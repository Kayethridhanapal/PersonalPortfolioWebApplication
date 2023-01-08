import "./AboutcontentStyles.css";
import React from 'react';
import pro1 from "../assets/about1.jpg";
import pro2 from "../assets/about2.png";

const Aboutcontent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Hi, I'am Kayethri dhanapal. I'm a react frond-end developer. I create responsive secure websites for my clients.</p> 
        </div>
          
        <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={pro1} className="img" alt="true"/>
            </div>
            <div className="img-stack bottom">
                <img src={pro2} className="img" alt="true"/>
            </div>
        </div>
        </div>  
    </div>
  )
}

export default Aboutcontent;
