import React, {useState} from 'react'
import { HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg, ArrowForward, ArrowRight } from './HeroElements';
import Video from '../../videos/video.mp4';
import {Button }from "../ButtonElements";
import { Link } from 'react-router-dom';



const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
       <HeroContainer id="home">

        <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Search Your Soulmate
            <HeroP>
            We will help you find the love of your life❤️
            </HeroP>
            </HeroH1>
            
        </HeroContent>
       </HeroContainer>
    )
}

export default HeroSection;
