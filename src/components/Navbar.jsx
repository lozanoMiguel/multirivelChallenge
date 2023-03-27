import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import { useNavigate } from "react-router-dom";
import { useInView } from 'react-intersection-observer';


export default function Navbar(props) {

  const [navbar, setNavbar] = useState(false);
  const [selected, setSelected] = useState("about us")
  const navigate = useNavigate();

  let jsx = null;
  let heightNav = null;
  
  if(props.isHome){
    heightNav = 500;
    jsx = <ul className='navbar-nav ms-auto'>
            <li className={selected === "about us" ? "nav-item active" : "nav-item"}>
              <a href="#header" className='nav-link' onClick={()=>setSelected("about us")}>Sobre nosotros</a>
            </li>
            <li className={selected === "projects" ? "nav-item active" : "nav-item"}>
              <a href="#proyect-menu" className='nav-link' onClick={()=>setSelected("projects")}>Proyectos</a>
            </li>
            <li className='nav-item'>
              <a href="#" className='nav-link' onClick={() => {navigate('/gallery')}} >Galeria</a>
            </li>
            <li className={selected === "rivel" ? "nav-item active" : "nav-item"}>
              <a href="#team" className='nav-link' onClick={()=>setSelected("rivel")}>Rivel family</a>
            </li>
            <li className={selected === "contact" ? "nav-item active" : "nav-item"}>
              <a href="#contact" className='nav-link' onClick={()=>setSelected("contact")}>CONTACTO</a>
            </li>
          </ul>
  }else{
    heightNav = 250;
    jsx = <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <a onClick={() =>{navigate('/')}} className='nav-link'>Home</a>
            </li>
          </ul>
  }

  const changeBackground = () =>{
    if(window.scrollY > heightNav)
      setNavbar(true)
    else
      setNavbar(false)
  }

  window.addEventListener('scroll', changeBackground);
  
  return (
    <nav className= { navbar ? 'navbar navbar-default navbar-expand-md navbar fixed-top on' : 'navbar navbar-default navbar-expand-md navbar fixed-top' } id='menu'>
      <div className='container'>
        <a href="#" className='navbar-brand'>Multirivel</a>
        <button className='navbar-toggler' data-bs-toggle='collapse'
        data-bs-target='#nav' aria-controls='nav' aria-label='Expand Navigation'>
          <div className="navbar-toggler-icon"></div>
        </button>
        <div className='collapse navbar-collapse' id='nav'>
          {jsx}
        </div>
      </div>
    </nav>
  )
}

