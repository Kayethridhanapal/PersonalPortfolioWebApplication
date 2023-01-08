import "./FormStyles.css";
import React from 'react';

const Form = () => {
  return (
    <div className="form">
        <form>
            <label><h2 style={{color:" rgb(248,217,15)"}}>For further enquiries, please fill the form below</h2></label>
            <label>Your Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here"/>
            <button className="btn">Submit</button>
        </form>
        
    </div>
  )
}

export default Form