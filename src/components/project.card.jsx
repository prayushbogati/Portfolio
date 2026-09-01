import Modal from "./modal"
import { useState } from "react"

export default function ProjectCard({ img, name, desc, tech, link }) {
    const [showModal, setShowModal] = useState(false)

    return (
        <div>
            {/* modal */}
            {showModal && (
                <Modal
                    title={name}
                    img={img}
                    desc={desc}
                    onClose={() => setShowModal(false)}
                    tech={tech}
                    link={link}
                />
            )}


            <div className="items-center transition-all duration-300 ease-in-out hover:scale-101 hover:border-b border-gray-500 pb-5">
                <div className='h-90 w-full max-w-xl rounded-lg' onClick={() => setShowModal(true)}>
                    <img src={img} alt={`${name} image`} className='inset-0 h-full w-full object-fill rounded-lg' />
                </div>

                <h2 className='text-center text-2xl my-5'>{name}</h2>
                <p className='text-center text-lg line-clamp-2'>{desc}</p>
            </div>
        </div>
    )
}