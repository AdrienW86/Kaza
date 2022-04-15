import React from 'react';
import { Link } from 'react-router-dom' ;
import './card.css';

function Card(props) {
  return (  
             
    <Link 
      className='profil-link' 
      to={`/fiche/${props.id}/`}
    >   
      <div className='card'>
        <img className='cover' src={props.cover} alt="cover"/>
        <h3 className='card-title'>{props.title}</h3> 
      </div>  
    </Link>                                                
  )
}
export default Card