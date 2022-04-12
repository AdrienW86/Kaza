import React from 'react';
import BigText from '../../../assets/big-text.png'
import Text from '../../../assets/text.png'
import './banner.css'

function Banner() {
  return (
    <>
      <section className= "banner-home" >   
        
          <img className='home-text' 
               src= {BigText}
                      alt='text ' /> 
          <img className="banner-text"
               src= {Text}
               alt="description" />
      
      </section>
    </>
  )
}
export default Banner