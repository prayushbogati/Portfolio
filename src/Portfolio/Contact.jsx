import React from 'react'
import Button from "../components/Button"
import { useState, useEffect } from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify';

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [reason, setReason] = useState("networking")
    const [message, setMessage] = useState("")

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        toast.success('Form submitted!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });

        const response = await fetch("http://localhost:3000/post", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ name, email, reason, message })
        })

        const data = await response.json();
        console.log(data);

        setName("");
        setEmail("");
        setReason("");
        setMessage("");

    }
    return (
        <div id='contact' className={`flex flex-col items-center mt-10 transition-all duration-700 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

            <ToastContainer />

            <h2 className='text-4xl text-center mb-10'>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-5 text-2xl md:px-20">
                    {/* name and email */}
                    <div className="flex flex-col md:gap-20 md:flex-row">
                        <div className="form-group">
                            <label htmlFor="name">Name</label><br />
                            <input onChange={(e) => setName(e.target.value)} value={name} type="text" name='name' id='name' className='border border-gray-500 rounded-md w-80 text-xl px-2 py-1' required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label><br />
                            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name='email' id='email' className='border border-gray-500 rounded-md w-80 text-xl px-2 py-1' required />
                        </div>
                    </div>

                    {/* dropdown */}
                    <div className="reason">
                        <label htmlFor="reason">Contact for</label><br />
                        <select onChange={(e) => setReason(e.target.value)} value={reason} id="reason" name='reason' className='text-xl border border-gray-500 rounded-md px-2 py-1 w-80'>
                            <option value="networking">Networking</option>
                            <option value="work">Freelance</option>
                            <option value="creelance">Collaboration</option>
                            <option value="mentorship">Mentorship</option>
                            <option value="feedback">Feedback</option>
                            <option value="others">Others</option>
                        </select>
                    </div>

                    <div className="feedback">
                        {/* feedback */}
                        <label htmlFor="message">Message</label><br />
                        <textarea onChange={(e) => setMessage(e.target.value)} value={message} name="message" id="message" className='border border-gray-500 rounded-md w-80 md:w-100' rows={3} cols={30}></textarea>
                    </div>
                    <Button name="Send" type="submit" />
                </div>
            </form>
        </div>
    )
}

export default Contact