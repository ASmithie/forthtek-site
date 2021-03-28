import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu, SidebarRoute} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='AboutUs' onClick={toggle}>
                        About Us
                    </SidebarLink>
                    <SidebarLink to='PictoHunt' onClick={toggle}>
                        PictoHunt
                    </SidebarLink>
                    <SidebarLink to='OurApp' onClick={toggle}>
                        Our App
                    </SidebarLink>
                    <SidebarLink to='ContactUs' onClick={toggle}>
                        Contact us
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
