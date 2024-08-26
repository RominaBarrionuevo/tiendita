import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
        <h1>Tiendita</h1>
        <nav>
        <ul>
            <li>Todos</li>
            <li>Femeninas</li>
            <li>Masculinas</li>
        </ul>
        </nav>

        <CartWidget/>

    </header>
  )
}

export default NavBar