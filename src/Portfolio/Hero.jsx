import React from 'react'
import { useState, useEffect } from 'react'
// import "../css/hero.css"

const Hero = () => {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    }, [])
    return (
        <div id='about' className={`flex flex-col items-center justify-center text-center  md:flex-row mt-10 transition-all duration-700 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {/* hero */}
            <div className="flex flex-col items-center justify-center gap-5 max-w:1/2 md:max-w-1/3 p-5">
                <div className='w-80 m-auto'>
                    <img src="images/photo.jpg" alt="myPhoto" className='rounded-full' />
                </div>
                <div>
                    <h1 className="text-4xl max-w-full">Hi, I'm Prayush</h1>
                    <p className="text-3xl max-w-full">Web Developer</p>
                </div>
            </div>

            {/* about */}
            <div className="max-w:1/2 md:max-w-2/3 p-5">
                <h1 className='text-4xl'>About Me</h1>
                <p className='text-xl md:text-right p-5'>I'm a passionate Web Developer who loves transforming ideas into engaging, responsive, and user-friendly web experiences. I specialize in crafting modern interfaces with HTML, CSS, and JavaScript (using React), focusing on clean design, smooth interactions, and high performance. On the backend, I work with Node.js and Express.js, building efficient APIs and integrating them with MongoDB for robust data handling. I enjoy solving real-world problems through code and constantly learning new technologies to stay ahead in the ever-evolving web landscape. My goal is to build full-stack web applications that not only look great but also deliver seamless and impactful user experiences.</p>
                <br />

                {/* <p>Download resume: <a className='resume' style={{ textDecoration: "none", fontStyle: "italic" }} href="https://drive.google.com/file/d/1sNjcAjQVrSYWISu-MB6WL1zloxdlYOK_/view" target='_blank'>resume</a></p> ---- for google drive link ---- */}

                <a className='text-2xl text-blue-900 block md:text-right animate-pulse' href="/pdf/Resume.pdf" download="CVprayush.pdf">resume</a>

            </div>
        </div>
    )
}

export default Hero