import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-text">
                <p>Made by Prayush</p>
            </div>
            <div className="footer-logos">
                <a href="https://www.facebook.com"><FacebookIcon fontSize='large'/></a>
                <a href="https://www.whatsapp.com"><WhatsAppIcon fontSize='large'/></a>
                <a href="mailto:prayushbogati0120@gmail.com"><EmailIcon fontSize='large'/></a>
            </div>
        </div>
    )
}

export default Footer