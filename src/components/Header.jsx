import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

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
        <div className={`flex flex-col text-center items-center justify-center gap-2 md:gap-5 px-10 md:px-20 py-5 mb-5 z-1 ${scrollY ? "static opacity-0" : "sticky opacity-100"}
    ${window.scrollY !== 0 && !scrollY ? "bg-white min-h-20" : "min-h-24"}
    top-0 transition-all duration-300 md:flex-row md:justify-between max-sm:mt-10`}>
            <div className="text-4xl">
                <Link to='/'>PRAYUSH BOGATI</Link>
            </div>
            <div className="flex gap-5 md:gap-10 text-2xl">
                <Link to="/projects" className='transition-all ease-in-out duration-300 block hover:scale-105 uppercase'>Projects</Link>
                <Link to="/contact" className='transition-all ease-in-out duration-300 block hover:scale-105 uppercase'>Contact</Link>
            </div>
        </div>
    )
}

export default Header
