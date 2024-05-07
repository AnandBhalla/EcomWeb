import React from 'react'
import './Hero.css'
import arrow_icon from'../Assets/arrow.png'
import hand_icon from '../Assets/hand_icon.png'
import hero_image from '../Assets/hero_image.png'
export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>TRADE-IN-OFFER</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>super</p>
                </div>
                <p>value deals</p>
                <p>on all products!!!</p>
            </div>
            <div className="hero-latest-button">
                <div>Latest collections</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}
