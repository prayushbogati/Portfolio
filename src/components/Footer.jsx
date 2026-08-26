import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <div className="flex justify-center max-md:mt-10 md:fixed md:bottom-0 md:left-1/2 md:-translate-x-1/2">
            <div className="footer-logos bg-white rounded-lg">
                <a className='p-2 inline-block transition-all ease-in-out duration-300 hover:scale-107' href="https://www.linkedin.com/in/prayush-bogati-45a440323/" target='_blank'><LinkedInIcon fontSize='large' color='action' /></a>
                <a className='p-2 inline-block transition-all ease-in-out duration-300 hover:scale-107' href="https://github.com/prayushbogati" target='_blank'><GitHubIcon fontSize='large' color='action' /></a>
                <a className='p-2 inline-block transition-all ease-in-out duration-300 hover:scale-107' href="mailto:prayushbogati0120@gmail.com" target='_blank'><EmailIcon fontSize='large' color='action' /></a>
            </div>
        </div>
    )
}

export default Footer