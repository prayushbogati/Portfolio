import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import "./PortfolioStyle.css";

const Portfolio = () => {
    return (
        <div id="portfolioBody">
            <Header />
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default Portfolio;