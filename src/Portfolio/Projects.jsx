import React from 'react'

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
            image: "images/todoSS.jpg",
            name: "Todo App",
            desc: "A todo app to set todos, create new todo types and remove them on completion"
        },
        {
            id: 3,
            image: "images/blog.jpg",
            name: "Blog App",
            desc: "Write blogs, compose new posts"
        },
        {
            id: 4,
            image: "images/emoji.jpg",
            name: "Emojis App",
            desc:"Add emojis of your choice with their actual meanings"
        }
    ];


    return (
        <div className="projects" id='projects'>
            <h2>Projects</h2>
            <div className="cardContainer">
                {
                    projectsArr.map((item) => (
                        <div className="card" key={item.id}>
                            <img src={item.image} alt="" />
                            <h2>{item.name}</h2>
                            <p>{item.desc}</p>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects