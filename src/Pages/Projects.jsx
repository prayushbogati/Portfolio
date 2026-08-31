import { useState, useEffect } from 'react';
import { projects } from '../../lib/projects';
import ProjectCard from '../components/project.card';
// import { Link } from 'react-router-dom'

const Projects = () => {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    }, [])

    return (
        <div id='projects' className={`md:px-20 max-w-full transition-all duration-700 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className='text-4xl text-center mb-10'>Projects</h2>
            <div className="grid grid-cols-1 place-items-center md:place-content-center px-10 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    [...projects].reverse().map((item) => (
                        <ProjectCard key={item.id} img={item.image} name={item.name} desc={item.desc} tech={item.tech}/>
                    ))
                }
            </div>
        </div >
    )
}

export default Projects