import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css";
import { Link , NavLink } from 'react-router-dom';

const navbar = () => {
  return (
    <header>
      <Link to="/" className='text'>
        <h1>tienda holística</h1>
      </Link>
      <nav>
        <ul>

          <li><NavLink to="/categoria/2" className='text'>Talleres</NavLink></li>
          <li><NavLink to= "/categoria/1" className='text'>servicios</NavLink></li>
          <li><NavLink to="*"className='text' >contacto</NavLink></li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  )
}

export default navbar
