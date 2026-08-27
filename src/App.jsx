import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import { Routes, Route } from "react-router-dom";
import DotGrid from './components/dot-grid';
import Project from "./Pages/project-page";

const App = () => {
    return (
        <div className="relative">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <DotGrid
                    dotSize={1}
                    gap={26}
                    baseColor="gray"
                    activeColor="black"
                    proximity={90}
                    speedTrigger={100}
                    shockRadius={50}
                    shockStrength={1}
                    maxSpeed={5000}
                    resistance={750}
                    returnDuration={1.5}
                />
            </div>
            {/* Content */}
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/projects/:id' element={<Project />} />

                <Route path='/contact' element={<Contact />} />
            </Routes>

            <Footer />
        </div>
    )
}
export default App;