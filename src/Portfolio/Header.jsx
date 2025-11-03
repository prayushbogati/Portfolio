import React, { useEffect, useState } from 'react'

const Header = () => {

    const [lastScrollY, set_lastScrollY] = useState(0);
    const [scrollY, set_scrollY] = useState(false);

    useEffect(() => {
        const scrollFunction = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                set_scrollY(true) //to hide the header
            }
            else {
                set_scrollY(false) // to show the header
            }

            set_lastScrollY(currentScrollY);
        }

        window.addEventListener("scroll", scrollFunction);
        return () => window.removeEventListener("scroll", scrollFunction);
    }, [lastScrollY])

    return (
        <div className="header" style={{
            position: scrollY ? 'static' : 'sticky', opacity: scrollY ? 0 : 1
        }}>
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