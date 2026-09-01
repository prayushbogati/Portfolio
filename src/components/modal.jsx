import { createPortal } from "react-dom"
import { useEffect, useRef } from "react"
import { Link } from "react-router-dom";
import gsap from 'gsap'
import { FaGithub } from "react-icons/fa";

export default function Modal({ title, img, desc, onClose, tech, link }) {
    const overlayRef = useRef();
    const modalRef = useRef();

    function closeModal() {
        gsap.to(overlayRef.current,
            {
                opacity: 0,
                duration: 0.25
            }
        )

        gsap.to(modalRef.current,
            {
                opacity: 0,
                scale: 0,
                duration: 0.25,
                ease: 'power2.in',
                onComplete: onClose
            }
        )
    }

    useEffect(() => {
        // disable scroll when modal opens
        document.body.style.overflow = "hidden"

        gsap.fromTo(overlayRef.current,
            { opacity: 0 },
            { opacity: 0.5, duration: 0.2 }
        )
        gsap.fromTo(modalRef.current,
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 0.25, ease: "power2.out" }
        )
        // re-enable scroll when modal closes
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [])

    return createPortal(
        <>
            {/* Backdrop */}
            <div ref={overlayRef}
                className="fixed inset-0 bg-gray-500 opacity-50 z-40"
                onClick={closeModal}
            />

            {/* modal */}
            <div ref={modalRef} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                            max-h-[90vh] w-full max-w-3xl bg-gray-50 z-50 shadow-2xl rounded-2xl
                            flex flex-col overflow-y-auto">

                <button
                    onClick={closeModal}
                    className="sticky top-4 self-end mr-4 mt-4 w-8 h-8 rounded-full bg-gray-100
                               flex items-center justify-center hover:bg-gray-200
                               transition-colors duration-200 text-gray-600 z-10 shrink-0"
                >
                    ✕
                </button>

                {/* Image */}
                <img
                    src={img}
                    alt={title}
                    className="w-2/3 h-100 object-cover mx-auto p-5"
                />

                {/* Content */}
                <div className="flex flex-col gap-2 p-6">
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <p className="text-justify wrap-break-word hyphens-auto">{desc}</p>
                    <h3 className="font-semibold">Technologies used:</h3>
                    <ul>
                        {
                            [...tech].map(item => (
                                <li key={item}>{item}</li>
                            ))
                        }
                    </ul>
                    <a href={link} target="_blank" className="flex gap-2 items-center bg-gray-700 text-white max-w-fit rounded-md p-2 mx-auto transition-colors duration-200 ease-in-out hover:bg-gray-800"><FaGithub size={20} /><span className="text-sm">Source Code</span></a>
                </div>
            </div>
        </>,
        document.body
    )
}