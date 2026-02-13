import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Hero from './Hero';
import Projects from './Projects';
import Contact from './Contact';

// import "../css/header.css"

const Header = () => {

    const [lastScrollY, set_lastScrollY] = useState(window.scrollY);
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
        <BrowserRouter>
            <div className={`flex flex-col text-center items-center justify-center gap-5 px-10 py-5 z-1 ${scrollY ? "static opacity-0" : "sticky opacity-100"}
    ${window.scrollY !== 0 && !scrollY ? "bg-white h-20" : "h-24"}
    top-0 transition-all duration-300 md:flex-row md:justify-between max-sm:mt-10`}>
                <div className="text-4xl sm:text-5xl">
                    <Link to='/' className=''>PRAYUSH BOGATI</Link>
                </div>
                <div className="flex gap-10 text-3xl">
                    <Link to="/projects" className='transition-all ease-in-out duration-300 block hover:scale-105'>Projects</Link>
                    <Link to="/contact" className='transition-all ease-in-out duration-300 block hover:scale-105'>Contact</Link>
                </div>
            </div>

            <Routes>
                <Route path='/' element={<Hero />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Header
