export default function ContactCard({ text, icon, desc }) {
    return (
        <div className="bg-gray-100 border border-gray-400 rounded-xl w-full sm:w-1/2 max-w-2xl py-5 px-10 transition-all duration-200 ease-in-out hover:scale-101">
            <h2 className="text-xl wrap-break-word">{text}:</h2>
            <p className="flex flex-col md:flex-row md:gap-2 items-center justify-center text-lg">{icon}<span>{desc}</span></p>
        </div>
    )
}