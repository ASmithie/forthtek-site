import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import{FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink } from './FooterElements'
import{SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIconLink, SocialIcons} from './FooterElements'
import{FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'

const toggleHome = () => {
    scroll.scrollToTop();
};

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to='home'>Investors</FooterLink>
                                <FooterLink to='home'>Terms of Service</FooterLink>
                                <FooterLink to='home'>Our Clients</FooterLink>
                            <FooterLinkTitle>Our Products</FooterLinkTitle>
                                <FooterLink to='home'>Customer Service</FooterLink>
                                <FooterLink to='home'>Product Support</FooterLink>
                                <FooterLink to='home'>FAQs</FooterLink>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to='home'>Instagram</FooterLink>
                                <FooterLink to='home'>Twitter</FooterLink>
                                <FooterLink to='home'>Facebook</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to ='/' onClick={toggleHome}>
                            Forthtek
                        </SocialLogo>
                        <WebsiteRights>
                            Forthtek ©   {new Date().getFullYear() }
                            <pre></pre>All rights reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target='_blank'
                            aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target='_blank'
                            aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target='_blank'
                            aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer

