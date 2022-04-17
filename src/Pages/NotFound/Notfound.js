import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom' ;
import './notfound.css';

function Notfound() {
  return (
    <div className='not-found'>
      <Header/>
        <main>
          <div className='not-container'>
            <p className='not-found-text'> 404</p>
            <p className='warning'> Oups! La page que <br className='jump'></br>vous demandez n'exsite pas.</p>
            <Link className='home-return' to="/kaza/">
              Retourner sur la page d'accueil
            </Link>
            </div>
        </main>
      <Footer/>
    </div>
  )
}
export default Notfound
