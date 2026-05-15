import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <div className="mt-10 text-center py-5">
            <div className="footer-logos">
                <a className='p-2 inline-block transition-all ease-in-out duration-300 hover:scale-107' href="https://www.linkedin.com/in/prayush-bogati-45a440323/" target='_blank'><LinkedInIcon fontSize='large' color='action' /></a>
                <a className='p-2 inline-block transition-all ease-in-out duration-300 hover:scale-107' href="https://github.com/prayushbogati" target='_blank'><GitHubIcon fontSize='large' color='action' /></a>
                <a className='p-2 inline-block transition-all ease-in-out duration-300 hover:scale-107' href="mailto:prayushbogati0120@gmail.com" target='_blank'><EmailIcon fontSize='large' color='action' /></a>
            </div>
        </div>
    )
}

export default Footer