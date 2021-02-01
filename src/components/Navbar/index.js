import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements'
import {animateScroll as scroll} from 'react-scroll'

const toggleHome = () => {
    scroll.scrollToTop();
};

const Navbar = ({toggle}) => {
    return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to ='/' onClick={toggleHome}>Forthtek</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to = "Pictohunt" smooth={true} duration={500} spy={true}
                        exact='true' offset={-80}>
                            Pictohunt</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to = "AboutUs"smooth={true} duration={500} spy={true}
                        exact='true' offset={-80}>About us</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to = "ContactUs"smooth={true} duration={500} spy={true}
                        exact='true' offset={-80}>Contact us</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </>
    )
}

export default Navbar;
