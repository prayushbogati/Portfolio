import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className="flex justify-center max-md:mt-10 md:fixed md:bottom-0 md:left-1/2 md:-translate-x-1/2">
            <div className="footer-logos bg-white rounded-lg">
                <a className='p-2 inline-block transition-all ease-in-out duration-300 hover:scale-107' href="https://www.linkedin.com/in/prayush-bogati-45a440323/" target='_blank'><FaLinkedin size={30} className="text-gray-700" /></a>
                <a className='p-2 inline-block transition-all ease-in-out duration-300 hover:scale-107' href="https://github.com/prayushbogati" target='_blank'><FaGithub size={30} className="text-gray-700" /></a>
                <a className='p-2 inline-block transition-all ease-in-out duration-300 hover:scale-107' href="mailto:prayushbogati0120@gmail.com" target='_blank'><MdEmail size={30} className="text-gray-700" /></a>
            </div>
        </div>
    )
}

export default Footer