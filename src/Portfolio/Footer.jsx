import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-text">
                <p>Made by Prayush</p>
            </div>
            <div className="footer-logos">
                <a href="https://www.facebook.com/prayush.bogati.9" target='_blank'><FacebookIcon fontSize='large' /></a>
                <a href="https://www.linkedin.com/in/prayush-bogati-45a440323/" target='_blank'><LinkedInIcon fontSize='large' /></a>
                <a href="mailto:prayushbogati0120@gmail.com" target='_blank'><EmailIcon fontSize='large' /></a>
            </div>
        </div>
    )
}

export default Footer