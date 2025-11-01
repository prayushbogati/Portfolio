import React, { useEffect, useState } from 'react'

const Header = () => {

    const [isScrolled, set_isScrolled] = useState(false);

    useEffect(() => {
        const scrollFunction = () => {
            set_isScrolled(window.scrollY > 120);
        }

        window.addEventListener("scroll", scrollFunction);
        return () => window.removeEventListener("scroll", scrollFunction);
    }, [])

    return (
        <div className="header" style={{opacity: isScrolled? 0.7: 1}}>
            <div className="logo">
                <a href="#portfolioBody">Prayush Bogati</a>
            </div>
            <div className="navbar">
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    )
}

export default Header