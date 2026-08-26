import React from 'react'
import { useState, useEffect } from 'react';
// import "../css/projects.css"

const Projects = () => {
    const projectsArr = [
        {
            id: 1,
            image: "images/keeper.jpg",
            name: "Keeper App",
            desc: "Keep your notes and remove them accordingly"
        },
        {
            id: 2,
            image: "images/passMan.jpg",
            name: "Password Manager App",
            desc: "Save passwords and with edit and delete functionality"
        },
        {
            id: 3,
            image: "images/todoSS.jpg",
            name: "Todo App",
            desc: "A todo app to set todos, create new todo types and remove them on completion"
        },
        {
            id: 4,
            image: "images/blog.jpg",
            name: "Blog App",
            desc: "Write blogs, compose new posts"
        },
        {
            id: 5,
            image: "images/blog1.jpg",
            name: "VAXOCARE",
            desc: "A Child Vaccination Management System"
        },
    ];

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    }, [])

    return (
        <div id='projects' className={`md:px-20 max-w-full transition-all duration-700 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className='text-4xl text-center mb-10'>Projects</h2>
            <div className="grid grid-cols-1 place-items-center md:place-content-center px-10 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    projectsArr.reverse().map((item) => (
                        <div className="max-w-80 flex flex-col items-center transition-all duration-300 ease-in-out hover:scale-101" key={item.id}>
                            <img src={item.image} alt="" className='size-80 rounded-lg' />
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