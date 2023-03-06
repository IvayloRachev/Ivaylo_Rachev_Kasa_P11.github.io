import React from 'react';
import LogoWhite from '../assets/kasa-logo-white.svg';
import {NavLink} from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <NavLink>
                <img src={LogoWhite} alt="Logo Kasa" className="footer-image" />
            </NavLink>
            <p className="footer-copyright">© 2020 Kasa. All rights reserved.</p>
        </div>
    )
}

export default Footer;