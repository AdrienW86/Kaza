import React, { useState } from 'react';
import ChevronLeft from '../../assets/chevron-left.svg'
import ChevronRight from '../../assets/chevron-right.svg'
import './lightbox.css'

function Lightbox(props) { 
    const [current, setCurrent] = useState(0)
    const [currentNumber, setCurrentNumber] = useState(1)
    const images = props.images

    let lengthImages = false
    const next = () => {
        if(current === images.length -1) {           
            setCurrent(0)
            setCurrentNumber(1)
        }else {
            setCurrent(current +1)
            setCurrentNumber(currentNumber +1)
        }
    }
    const prev = () => {
        if(current === 0) {
            setCurrent(images.length -1)
            setCurrentNumber(images.length)
        }else{
            setCurrent(current -1)
            setCurrentNumber(currentNumber -1)
        }  
    }
        if(images.length > 1) {
            lengthImages = true
        }
  return (
    <>
    <section className='lightbox-container'>
        <button
            onClick={prev} 
            className= {lengthImages ? 'prev' : 'hidden'}>
                <img className='prev-svg'
                     src={ChevronLeft} 
                     alt="previous"
                />
        </button>
        <img className='lightbox'
             src={images[current]} alt="photographie"
        />
        <button 
            onClick={next} 
            className= {lengthImages ? 'next' : 'hidden'}>
                <img className='next-svg'  
                     src={ChevronRight} 
                     alt="next">
                </img> 
        </button>                         
    </section>
    <div className='number-picture'> {currentNumber}/{images.length}</div>
    </>
  )
}
export default Lightbox