import { useState, useEffect } from 'react';
import { projects } from '../../lib/projects';

const Projects = () => {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    }, [])

    return (
        <div id='projects' className={`md:px-20 max-w-full transition-all duration-700 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className='text-4xl text-center mb-10'>Projects</h2>
            <div className="grid grid-cols-1 place-items-center md:place-content-center px-10 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    [...projects].reverse().map((item) => (
                        <div className="max-w-80 flex flex-col items-center transition-all duration-300 ease-in-out hover:scale-101" key={item.id}>
                            <img src={item.image} alt={`${item.name} image`} className='size-80 rounded-lg' />
                            <h2 className='text-center text-2xl mt-5'>{item.name}</h2>
                            <p className='text-center text-xl min-h-30'>{item.desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects