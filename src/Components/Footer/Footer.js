import React from 'react';
import Logo from '../../assets/logo-white.svg';
import './footer.css'

function Footer() {
  return (
    <>
      <footer>
        <img className='img-footer' src={Logo} alt="logo"/> 
          <p className='footer-text'> © 2020 Kasa. All rights reserved </p>
      </footer>
    </>
  )
}
export default Footer