import React from 'react';
import { Link } from 'react-router-dom' ;
import './card.css';

function Card(props) {
  return (  
    <div className='card'>               
    <Link 
      className='profil-link' 
      to={`/fiche/${props.id}/`}
    >                 
      <img className='cover' src={props.cover} alt="cover"/>
      <h3 className='card-title'>{props.title}</h3> 
    </Link> 
    </div>
                                                   
  )
}
export default Card