import React from 'react'
import HeroImage0 from '../images/Meditation_HERO.jpeg'
import HeroImage1 from '../images/Window_Hero.jpeg'
import "./styles.css"

export default function HeroImage() {
    return (
        <div className="hero--wrapper">
            <img className="hero--image" src={HeroImage0} />
            {/* <img className="hero--image" src={HeroImage1} /> */}
        </div>
    )
}
