import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne} from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import ImageSlider from '../components/Services/ImageSlider'
import { SliderData } from '../components/Services/SliderData'



import Sidebar from '../components/Sidebar'


const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };


    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle}/>  
          <HeroSection/>
          <InfoSection {...homeObjOne}/>
          <ImageSlider slides={SliderData} />
          
        </>
    )
}

export default Home;
