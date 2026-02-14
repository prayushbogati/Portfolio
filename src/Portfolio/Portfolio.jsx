import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Hero from './Hero';
import Projects from './Projects';
import Contact from './Contact';
import { Routes, Route } from "react-router-dom";

const Portfolio = () => {
    return (
        <div className="container m-auto inset-0 z-1 w-full h-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px]">
            <Header />
            <Routes>
                <Route path='/' element={<Hero />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default Portfolio;