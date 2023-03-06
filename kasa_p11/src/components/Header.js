import React from 'react';
import LogoColor from '../assets/kasa-logo-color.svg';
import {NavLink} from 'react-router-dom';

function Header() {
    return (
        <div className="header-navigation">
            <NavLink to="/home">
                <img src={LogoColor} alt="Logo Kasa" className="header-navigation-image" />
            </NavLink>
            <div className="header-navigation-menu">
                <NavLink to="/home" className={({isActive}) => isActive ? "header-navigation-menu_active" : "header-navigation-menu_inactive"}>
                    Accueil
                </NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? "header-navigation-menu_active" : "header-navigation-menu_inactive"}>
                    A Propos
                </NavLink>
            </div>
        </div>
    )
}

export default Header;