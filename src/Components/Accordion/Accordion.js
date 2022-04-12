import React, {useState}from 'react';
import Chevron from '../../assets/chevron-down.svg';
import ChevronClose from '../../assets/chevron-up.svg';
import './accordion.css';

function Accordion(props) {
    const [toggle, setToggle] = useState(false)  
    const toogleState = () => {
        setToggle(!toggle)
    }
   
  return (   
    <div className='accordion'>
        <div className='accordion-visible' 
             onClick={toogleState}>
            <h2> {props.title} </h2>
            <img src={toggle ? `${ChevronClose}` : `${Chevron}`} alt="flèche pour ouvrir l'accordéon"></img>
        </div> 
        <div className={toggle ? ' animated' : 'accordion-toggle' }>
           <div className='accordion-toggle-text'
                aria-hidden={toggle ? "true" : "false"}>
                {props.txt}
          </div>
        </div>
    </div>
  )
}
export default Accordion