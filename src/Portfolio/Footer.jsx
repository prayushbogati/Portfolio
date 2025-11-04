import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-text">
                <p>Made by Prayush</p>
            </div>
            <div className="footer-logos">
                <a href="https://www.linkedin.com/in/prayush-bogati-45a440323/" target='_blank'><LinkedInIcon fontSize='large' /></a>
                <a href="https://github.com/prayushbogati" target='_blank'><GitHubIcon fontSize='large' /></a>
                <a href="mailto:prayushbogati0120@gmail.com" target='_blank'><EmailIcon fontSize='large' /></a>
            </div>
        </div>
    )
}

export default Footer