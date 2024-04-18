import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import Hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import {motion} from 'framer-motion'

const transition={type:"spring",duration:3}
const mobile=window.innerWidth<=768?true:false;
const Hero = () => {
  return (
    <div className="hero" id='hero'>
      <div className='blur heroblur'></div>
        <div className="left-hero">
            <Header/>
          {/* the best add */}
            <div className="the-best-ad">
              <motion.div
              initial={{left:mobile?"165px":'238px'}}
              whileInView={{left:'8px'}}
              transition={{...transition,type:'tween'}}
              ></motion.div>
              <span>the best fintness club in the town</span>
            </div>
            {/* the hero add */}
            <div className="hero-text">
              <div>
                <span className="stroke-text">Shape</span>
                <span>Your</span>
                </div>
                <div>
                  <span>Ideal Body</span>
                </div>
                <div>
                  <span>
                  in  here we will help you to 
                  shape and buid your ideal 
                  and live up your life
              to fullest
              </span>
                </div>
            </div>
            {/* figures */}
            <div className="figures">
             <div>
             <span>+150</span>
              <span>expert coshes</span>
             </div>
             <div>
             <span>+980</span>
              <span>members joined</span>
             </div>
             <div>
             <span>
              +50
             </span>
              <span>fitness programs</span>
             </div>
            </div>
            {/* hero buttons */}
            <div className="hero-button">
              <buttons className="btn">Get Started</buttons>
              <buttons className="btn">Learn More</buttons>
            </div>
        </div>
        <div className="right-hero">
        <button className="btn">
          Join Now
        </button>
        <motion.div className="heart-rate"
        initial={{right:"-1rem"}}
        whileInView={{right:"4rem"}}
        transition={transition}
        >
          <img src={Heart} alt="haert" />
          <span>
            Heart Rate
            </span>
            <span>bpm 116</span>
        </motion.div>
        <img src={hero_image}  className="hero-image" alt="hero_image" />
        <motion.img
        initial={{right:'11rem'}}
        whileInView={{right:'20rem'}}
        transition={transition}
        src={Hero_image_back} className="hero-image-back" alt="Hero_image_back" />
        {/* calories */}
        <div className="calories">
          <img src={Calories} alt="" />
         <div>
          <span>Calories Burned</span>
          <span>200 Calories</span>
          </div>
        </div>
        </div>
      
    </div>
  )
}

export default Hero
