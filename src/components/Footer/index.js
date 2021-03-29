import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import{FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink } from './FooterElements'
import{SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIconLink, SocialIcons} from './FooterElements'
import{FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'
import {ExternalLink} from 'react-external-link'

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
                            <FooterLinkTitle>Links</FooterLinkTitle>
                                <ExternalLink href="https://github.com/ForthTek/PictoHunt/releases"><FooterLink>Download for Android</FooterLink></ExternalLink>
                                <ExternalLink href="https://github.com/ForthTek/PictoHunt/releases"><FooterLink>Download for IOS</FooterLink></ExternalLink>
                                <ExternalLink href="https://github.com/ForthTek/PictoHunt"><FooterLink>Our Github</FooterLink></ExternalLink>
                            </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to ='/' onClick={toggleHome}>
                            ForthTek
                        </SocialLogo>
                        <WebsiteRights>
                            ForthTek ©   {new Date().getFullYear() }
                            <pre></pre>All rights reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com" target='_blank'
                            aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="https://www.twitter.com" target='_blank'
                            aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com" target='_blank'
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

