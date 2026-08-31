import { createPortal } from "react-dom"
import { useEffect } from "react"

export default function Modal({ title, img, desc, onClose, tech }) {

    useEffect(() => {
        // disable scroll when modal opens
        document.body.style.overflow = "hidden"

        // re-enable scroll when modal closes
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [])

    return createPortal(
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-gray-500 opacity-50 z-40"
                onClick={onClose}
            />

            {/* Modal panel */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                            max-h-[90vh] w-3xl bg-gray-50 z-50 shadow-2xl rounded-2xl
                            flex flex-col overflow-y-auto">

                {/* Close button */}
                <button
                    onClick={onClose}
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
                </div>
            </div>
        </>,
        document.body
    )
}