import React from 'react'
import "../css/hero.css"

const Hero = () => {
    return (
        <div className="hero">
            <div className="photo">
                <img src="images/photo.jpg" alt="" />
            </div>
            <div className="info">
                <h1>Hi, I'm Prayush</h1>
                <p>Web Developer</p>

            </div>
        </div>
    )
}

export default Hero