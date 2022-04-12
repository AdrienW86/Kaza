import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom' ;
import './notfound.css';

function Notfound() {
  return (
    <div className='not-found'>
      <Header/>
        <main>
          <p className='not-found-text'> 404</p>
          <p className='warning'> Oups! La page que vous demandez n'exsite pas.</p>
          <Link className='home-return' to="/kaza/">
             Retourner sur la page d'accueil
          </Link> 
        </main>
      <Footer/>
    </div>
  )
}
export default Notfound
