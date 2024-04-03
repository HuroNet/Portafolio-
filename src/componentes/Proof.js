import React from 'react'
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter, faTiktok,faYoutube, faGithub, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'


export const Footer = () => {
    return(
        <div className='footer'>
            <div className='sb_footer-links'>
                <div className='sb__footer-links-div'>
                <h4>FriendStream</h4>
                    <a href="/mexico">
                        <p>Mexico</p>
                    </a>
                    <a href="/ecuador">
                        <p>Ecuador</p>
                    </a>
                </div>
            </div>
        </div>

    )
}