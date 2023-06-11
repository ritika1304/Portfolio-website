//import "./HeroImageStyle.css";
import React from 'react'
import IntroImg from "../assets/image1.jpg"
import { Link } from 'react-router-dom'

const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
          <img className='into-img' src={IntroImg} alt='IntroImg'/>
            
        </div>
        <div className='content'>
          <p>HI,I'M Er. Ritika Yadav.</p>
          <h1>React Developer.</h1>
          <div>
            <Link to="/project" className='btn'>PROJECTS</Link>
            <Link to="/contact" className='btn'>CONTACT</Link>
          </div>
        </div>
    </div>
  )
}

export default HeroImage