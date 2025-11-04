import React from 'react'

const About = () => {
    return (
        <div className="about">
            <h1>About Me</h1>
            <p>I'm a passionate Frontend Web Developer who loves transforming ideas into engaging, responsive, and user-friendly web experiences. I specialize in crafting modern interfaces with HTML, CSS, and JavaScript (using React), focusing on clean design, smooth interactions, and high performance. On the backend, I work with Node.js and Express.js, building efficient APIs and integrating them with MongoDB for robust data handling. I enjoy solving real-world problems through code and constantly learning new technologies to stay ahead in the ever-evolving web landscape. My goal is to build full-stack web applications that not only look great but also deliver seamless and impactful user experiences.</p>
            <br />
            <p>Find my resume here: <a className='resume' style={{ textDecoration: "none", fontStyle: "italic" }} href="https://drive.google.com/file/d/1sNjcAjQVrSYWISu-MB6WL1zloxdlYOK_/view" target='_blank'>resume</a></p>
        </div>
    )
}

export default About