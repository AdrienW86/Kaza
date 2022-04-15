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
    <section className={props.class} //'accordion'
    >
        <div className={props.custom} //'accordion-visible'
             onClick={toogleState}>
            <h2> {props.title} </h2>
            <img src={toggle ? `${ChevronClose}` : `${Chevron}`} alt="flèche pour ouvrir l'accordéon"></img>
        </div> 
        <div className={toggle ?  props.animated : props.toggle }>
           <div className='accordion-toggle-text'
                aria-hidden={toggle ? "true" : "false"}>
                 <p className='accordion-txt'>{props.txt}  </p>             
          </div>
        </div>
    </section>
  )
}
export default Accordion