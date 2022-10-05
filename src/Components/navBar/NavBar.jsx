

import React from 'react'

const NavBar = () => {
  return (
   
<nav className="header flex__between">

  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="#">Inicio</a>
      </li>
      <li className="nav-item">
        <a class="nav-link" href="#">Contacto</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Nosotros</a>
      </li>
    </ul>
   
  </div>
</nav>
  )
}

export default NavBar