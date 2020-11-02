import React from 'react'
import Pricing from '../../Pricing'
import HeroSection from '../../HeroSection'
import {homeObjOne} from './Data'

function Services() {
    return (
        <>
           <Pricing />
           <HeroSection {...homeObjOne} />  
        </>
    )
}

export default Services
