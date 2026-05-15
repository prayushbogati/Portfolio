import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import { Routes, Route } from "react-router-dom";
import DotField from './components/DotField';
import Cursor from './components/Cursor'

const App = () => {
    return (
        <div className="relative min-h-screen font-firacode">
            {/* Background */}
            <div className="fixed inset-0 -z-10">
                <DotField
                    dotRadius={1.5}
                    dotSpacing={26}
                    bulgeStrength={67}
                    glowRadius={50}
                    sparkle={false}
                    waveAmplitude={0}
                    cursorRadius={300}
                    cursorForce={0.17}
                    bulgeOnly
                    gradientFrom="#2a292d"
                    gradientTo="#555159"
                    glowColor="white"
                />
            </div>

            {/* Content */}
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>

            <Footer />
        </div>
    )
}
export default App;