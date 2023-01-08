import "./WorkcardStyles.css";
import React from 'react';


const Workcard = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc}  alt="imge"/>
    <h2 className="project-title">{props.title}</h2>
    <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
            <button type="button" className="btn"><a href={props.view}>View</a></button>
            <button type="button" className="btn"><a href={props.source}>Source</a></button>
         </div>
    </div>
</div>
  )
}

export default Workcard;