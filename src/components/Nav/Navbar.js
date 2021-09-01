import React from 'react';
import {
    NavWrapper,
    NavUL,
    NavLI
} from './Nav.styling';

const Navbar = () => {
    return (
        <NavWrapper>
            <NavUL className="nav-list">
                <NavLI data-nav="home" className="navlink active">home</NavLI>
                <NavLI data-nav="about" className="navlink">about</NavLI>
                <NavLI data-nav="work" className="navlink">work</NavLI>
                <NavLI data-nav="contact" className="navlink">contact</NavLI>
            </NavUL>
        </NavWrapper >
    )
}

export default Navbar
