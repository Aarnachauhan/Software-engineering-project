import React from 'react'
import hostel from '../../assets/hostel.jpg'
import './Hero.css'
//import{FaHome} from  'react-icons/fa'

const Hero = () => {
  return (
    <div>
      <div className='hero'>
        <div className='hero_top'>
            <div className='hero_left'>
            <h2>
            Where every concern finds a solution!
            </h2>
            <h1>
           
             When communication becomes effortless, resolution becomes faster
            </h1>
            </div>
           <div className='hero_right'>
           <img src={hostel} alt="hostel-image" className='hero-img' />
           </div>
        </div>
        
      </div>
    </div>
  )
}

export default Hero



