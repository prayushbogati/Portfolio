import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
// import "../css/footer.css"

const Footer = () => {
    return (
        <div className="mt-10 flex flex-col gap-5 justify-between items-center px-10 py-5 md:flex-row">
            <div className="text-2xl">
                Made by Prayush
            </div>
            <div className="footer-logos">
                <a href="https://www.linkedin.com/in/prayush-bogati-45a440323/" target='_blank'><LinkedInIcon fontSize='large' color='action' /></a>
                <a href="https://github.com/prayushbogati" target='_blank'><GitHubIcon fontSize='large' color='action' /></a>
                <a href="mailto:prayushbogati0120@gmail.com" target='_blank'><EmailIcon fontSize='large' color='action' /></a>
            </div>
        </div>
    )
}

export default Footer