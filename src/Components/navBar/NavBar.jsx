

import React from 'react'

const NavBar = () => {
  return (
   
<nav className="NavBarNueva navbar-expand-lg navbar-light bk-light">

  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Inicio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#products-home">Productos</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Como Comprar</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#footer-desktop">Contacto</a>
      </li>
    </ul>
   
  </div>
</nav>
  )
}

export default NavBar