import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import { useNavigate } from "react-router-dom";

export default function Navbar() {

  const [navbar, setNavbar] = useState(false);

  const navigate = useNavigate();

  const changeBackground = () =>{
    
    if(window.scrollY > 500)
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
          <ul className='navbar-nav ms-auto'>
          <li className='nav-item'>
            <a href="#" className='nav-link'>Sobre nosotros</a>
          </li>
          <li className='nav-item'>
            <a href="#" className='nav-link'>Proyectos</a>
          </li>
          <li className='nav-item'>
            <a href="#" className='nav-link' onClick={() => {navigate('/gallery')}} >Galeria</a>
          </li>
          <li className='nav-item'>
            <a href="#" className='nav-link'>Rivel family</a>
          </li>
          <li className='nav-item'>
            <a href="#" className='nav-link'>CONTACTO</a>
          </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

