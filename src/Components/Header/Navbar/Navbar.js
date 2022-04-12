import React from 'react'
import { NavLink } from 'react-router-dom' ;
import Logo from '../../../assets/logo.svg';
import './navbar.css'

function Navbar() {
  return (
    <>
    <nav className='nav'>
        <img className='logo'
             src={Logo} 
             alt='logo'/>
        <ul  className='nav-link'>
            <NavLink 
                to="/"
                className={({isActive}) => isActive ? "activeLink" : "link"}> Accueil                   
            </NavLink>            
            <NavLink 
                to="/a-propos"
                className={({isActive}) => isActive ? "activeLink" : "link"}> A propos 
            </NavLink>
        </ul>
    </nav>
    </>
  )
}
console.log()
export default Navbar
