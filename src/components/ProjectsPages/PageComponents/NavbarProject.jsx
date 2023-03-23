import React, { useState } from 'react'
import '../../../styles/Navbar.css'
import { useNavigate } from "react-router-dom";

export default function NavbarProject() {

  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();

  const changeBackground = () => {

    if (window.scrollY > 500)
      setNavbar(true)
    else
      setNavbar(false)

  }

  window.addEventListener('scroll', changeBackground);

  return (
    <nav className={navbar ? 'navbar navbar-default navbar-expand-md navbar fixed-top on' : 'navbar navbar-default navbar-expand-md navbar fixed-top'} id='menu'>
      <div className='container'>
        <a href="#" className='navbar-brand'>Multirivel</a>
        <button className='navbar-toggler' data-bs-toggle='collapse'
          data-bs-target='#nav' aria-controls='nav' aria-label='Expand Navigation'>
          <div className="navbar-toggler-icon"></div>
        </button>
        <div className='collapse navbar-collapse' id='nav'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <a onClick={() =>{navigate('/')}} className='nav-link'>Home</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
