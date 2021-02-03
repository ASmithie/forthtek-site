import React from 'react'
import Video from '../Video/Video.mp4' 
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, ArrowForward, ArrowRight} from './HeroElements'

const HeroSection = () => {
    return (
        <HeroContainer id='Forthtek'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='Video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>ForthTek</HeroH1>
                <HeroP>where ideas and innovation meet</HeroP>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
