import React from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne } from '../components/InfoSection/Data'
import ImageSlider from '../components/Services/ImageSlider'
import { SliderData } from '../components/Services/SliderData'


const Home = () => {


    return (
        <>
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <ImageSlider slides={SliderData} />

        </>
    )
}

export default Home;
