

import React from 'react'
import "../../Styles/Navbar.css"

const NavBar = () => {
  return (

    <nav>
      <ul >
        <li className='navBar'>
          <a className="nav-link" href="#">Inicio</a>
        </li>
        <li className='navBar'>
          <a className="nav-link" href="#products-home">Productos</a>
        </li>
        <li className='navBar' >
          <a className="nav-link" href="#footer-desktop">Contacto</a>
        </li>
      </ul>


    </nav>
  )
}

export default NavBar