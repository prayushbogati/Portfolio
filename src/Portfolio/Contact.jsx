import React from 'react'
import Button from "../components/Button"
import { useState, useEffect } from 'react'
// import "../css/contact.css"

const Contact = () => {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    }, [])
    return (
        <div id='contact' className={`flex flex-col items-center mt-10 transition-all duration-700 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className='text-4xl text-center mb-10'>Contact Me</h2>
            <form action="" method='POST'>
                <div className="flex flex-col gap-5 text-2xl md:px-20">
                    {/* name and email */}
                    <div className="flex flex-col md:gap-20 md:flex-row">
                        <div className="form-group">
                            <label htmlFor="name">Name</label><br />
                            <input type="text" id='name' className='border border-gray-500 rounded-md w-80 text-xl px-2 py-1' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label><br />
                            <input type="email" id='email' className='border border-gray-500 rounded-md w-80 text-xl px-2 py-1' />
                        </div>
                    </div>

                    {/* dropdown */}
                    <div className="reason">
                        <label htmlFor="reason">Contact for</label><br />
                        <select id="reason" className='text-xl border border-gray-500 rounded-md px-2 py-1 w-80'>
                            <option value="work">Networking</option>
                            <option value="work">Freelance</option>
                            <option value="work">Collaboration</option>
                            <option value="support">Mentorship</option>
                            <option value="feedback">Feedback</option>
                        </select>
                    </div>

                    <div className="feedback">
                        {/* feedback */}
                        <label htmlFor="message">Message</label><br />
                        <textarea name="" id="message" className='border border-gray-500 rounded-md w-80 md:w-100' rows={3} cols={30}></textarea>
                    </div>
                    <Button name="Send" type="button" />
                </div>
            </form>
        </div>
    )
}

export default Contact