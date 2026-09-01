import { useState, useEffect, useRef } from 'react'
import TextType from "../components/TextType"
// import gsap from 'gsap'

const Home = () => {
    const [loaded, setLoaded] = useState(false)
    const bodyRef = useRef();

    useEffect(() => {
        setLoaded(true)
        // gsap.from(bodyRef.current,
        //     {
        //         y: '-10%',
        //         opacity: 1,
        //         duration: 200,
        //         ease: 'power2.in'
        //     }
        // )
    }, [])

    //  ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
    return (
        <div ref={bodyRef} id='about' className={`container mx-auto flex flex-col items-center justify-center lg:flex-row transition-all duration-700 ease-out px-10 md:px-20  ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {/* Hero */}
            <div className="flex flex-col items-center justify-center gap-5 lg:w-1/3 pt-5">
                <div className='max-w-80 m-auto'>
                    <img src="/images/IMG_9658.JPG" alt="myPhoto" className='rounded-full' />
                </div>
                <div className='text-2xl md:text-3xl break-normal min-h-20 max-sm:mb-5 text-center'>
                    <TextType
                        text={["I'am Prayush", "Web Developer", "Full Stack Developer & Enthusiast"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor
                        cursorCharacter="_"
                        deletingSpeed={50}
                        variableSpeedEnabled={false}
                        variableSpeedMin={60}
                        variableSpeedMax={120}
                        cursorBlinkDuration={0.5}
                    />
                </div>
            </div>

            {/* about */}
            <div className="lg:max-w-2/3 lg:pl-10 max-sm:text-justify max-lg:text-center">
                <h1 className='text-3xl mb-5 max-sm:text-center'>About Me</h1>
                <div className='text-xl'>
                    <p className='mb-3'>
                        I'm a Full-Stack Web Developer focused on building scalable, performant, and user-centric web applications. I work with React and Next.js to develop modern interfaces, component-driven architectures, and optimized application experiences.
                    </p>
                    <p>
                        On the backend, I use Node.js and Express.js to build RESTful APIs and integrate MongoDB for reliable data management. I enjoy solving real-world problems through code while continuously exploring modern technologies and architectural patterns to create efficient, maintainable, and production-ready applications.
                    </p>
                </div>

                {/* <p>Download resume: <a className='resume' style={{ textDecoration: "none", fontStyle: "italic" }} href="https://drive.google.com/file/d/1sNjcAjQVrSYWISu-MB6WL1zloxdlYOK_/view" target='_blank'>resume</a></p> ---- for google drive link ---- */}

                <button className='inline-block text-lg text-white mt-5 bg-gray-700 transition-all duration-200 ease-in-out hover:bg-gray-800 px-3 py-2 rounded-xl '> <a href="/pdf/Resume.pdf" download="CVprayush.pdf">Download Resume</a></button>
            </div>
        </div>
    )
}

export default Home