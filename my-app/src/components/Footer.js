import "./FooterStyles.css";
import React from 'react';
import { FaFacebook, FaHome,FaInstagram,FaLinkedin,FaMailBulk,FaPhone} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
            <div className="location">
                <FaHome size={20}  style={{color:"#fff",marginRight:"2rem"}}/>
                
                    <p>5,Bharathiyar Street,</p>
                    <p>Erode.</p>
                    <p>Pin-638104.</p>
    
            </div>
            <div className="phone">
                <h4><FaPhone size={20}  style={{color:"#fff",marginRight:"2rem"}}/>
                    7397041101</h4>
            </div>
            <div className="phone">
                <h4><FaMailBulk size={20}  style={{color:"#fff",marginRight:"2rem"}}/>
                    kayethridhanapal2000@gmail.com</h4>
            </div>
            </div>
            <div className="right">
                <h4>About the company</h4>
                <p>This is me Kayethri Dhanapal.
                I enjoy discussing new projects and design challenges.</p>
                <div className="social">
                <a href="https://www.facebook.com/kayethri.dhanapal"><FaFacebook size={30}  style={{color:"#fff",marginRight:"1rem"}} /></a>
                <a href="https://instagram.com/kayethridhanapal?igshid=NDc0ODY0MjQ="> <FaInstagram size={30}  style={{color:"#fff",marginRight:"1rem"}}/></a>
                <a href="https://www.linkedin.com/in/kayethri-dhanapal" ><FaLinkedin size={30}  style={{color:"#fff",marginRight:"1rem"}}/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;