import React, { useState } from 'react';
import ChevronLeft from '../../assets/chevron-left.svg'
import ChevronRight from '../../assets/chevron-right.svg'
import './lightbox.css'

function Lightbox(props) { 
    const [current, setCurrent] = useState(0)
    const images = props.images
   
    const next = () => {
        if(current === images.length -1) {           
            setCurrent(0)
        }else {
            setCurrent(current +1)
        }
    }
    const prev = () => {
        if(current === 0) {
            setCurrent(images.length -1)
        }else{
            setCurrent(current -1)
        }  
    }
    
  return (
    <>
    <section className='lightbox'>
        <button onClick={prev} className='prev'>
            <img className='prev-svg'
                 src={ChevronLeft} 
                 alt="previous"
            />
        </button>
            <img className='photo-lightbox'                        
                 src={images[current]}               
                 alt='lightbox'
            />  
        <button onClick={next} className='next' >
            <img className='next-svg'  
                 src={ChevronRight} 
                 alt="next">
            </img> 
        </button>                      
    </section>
    </>
  )
}
export default Lightbox