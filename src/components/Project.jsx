import React from 'react'
import '../styles/Project.css'
import { useNavigate } from "react-router-dom";

export default function Project(props) {

  const navigate = useNavigate();

  return (
    <div className="offset-md-1 offset-xs-2 offset-sm-2 col-xs-10 col-sm-10 col-md-5">
        <div className="menu-section">
          <h2 className="menu-section-title">{props.title}</h2>
          <hr />
          <div className="menu-item">
            <div className="menu-item-name">{ props.location }</div>
            <div className="menu-item-description">{ props.description }</div>
            <br />
            <div className="about-img"><img src={ props.img } loading="lazy" className={props.isDisabled ? "img-responsive isDisabled" : "img-responsive" } alt={props.title} onClick={()=>navigate(`/page`,{state: `${props.title}`} )}/></div>
          </div>
        </div>
      </div>
    )
}
