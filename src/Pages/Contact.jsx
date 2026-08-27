import Button from "../components/Button"
import ContactCard from "../components/contact-card";

import { useState, useEffect } from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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

    const cardArr = [
        {
            id: 'email',
            text: 'Email me at',
            icon: <MdEmail size={30}/>,
            desc: 'prayush498@gmail.com',
        },
        {
            id: 'linkedin',
            text: 'LinkedIn Profile',
            icon: <FaLinkedin size={30}/>,
            desc: 'Prayush Bogati',
        },
        {
            id: 'github',
            text: 'GitHub',
            icon: <FaGithub size={30}/>,
            desc: 'prayushbogati',
        },
    ]

    return (
        <div id='contact' className={`px-10 md:px-20 flex flex-col items-center justify-center transition-all duration-700 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

            <ToastContainer />

            <h2 className='text-4xl text-center mb-10'>Contact Me</h2>

            <section className="flex flex-col gap-5 justify-center items-center text-center w-full mb-10">
                {
                    cardArr.map(card => (
                        <ContactCard key={card.id} text={card.text} icon={card.icon} desc={card.desc} />
                    ))
                }
            </section>

            {/* form */}
            <section>
                <form onSubmit={handleSubmit} className='w-full max-w-xl'>
                    <div className="flex flex-col gap-5 text-xl sm:text-2xl w-full">
                        {/* name and email */}
                        <div className="flex flex-col gap-5 lg:flex-row w-full">
                            <div className="form-group lg:w-1/2">
                                <label htmlFor="name">Name</label><br />
                                <input onChange={(e) => setName(e.target.value)} value={name} type="text" name='name' id='name' className='bg-white border border-gray-500 rounded-md w-full text-xl px-2 py-1' required />
                            </div>
                            <div className="form-group lg:w-1/2">
                                <label htmlFor="email">Email</label><br />
                                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name='email' id='email' className='bg-white border border-gray-500 rounded-md w-full text-xl px-2 py-1' required />
                            </div>
                        </div>

                        {/* dropdown */}
                        <div className="reason w-full">
                            <label htmlFor="reason">Contact for</label><br />
                            <select onChange={(e) => setReason(e.target.value)} value={reason} id="reason" name='reason' className='text-xl bg-white border border-gray-500 rounded-md px-2 py-1 w-full'>
                                <option value="networking">Networking</option>
                                <option value="work">Freelance</option>
                                <option value="freelance">Collaboration</option>
                                <option value="mentorship">Mentorship</option>
                                <option value="feedback">Feedback</option>
                                <option value="others">Others</option>
                            </select>
                        </div>

                        {/* feedback */}
                        <div className="feedback w-full">
                            <label htmlFor="message">Message</label><br />
                            <textarea onChange={(e) => setMessage(e.target.value)} value={message} name="message" id="message" className='border bg-white border-gray-500 rounded-md w-full text-xl max-h-50' rows={4} cols={30}></textarea>
                        </div>
                        <Button name="Send" type="submit" />
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Contact