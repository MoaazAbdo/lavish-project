import React from 'react'
import { Link } from 'react-router-dom'
import './HeroSection.css'
import { Button } from './Button'


function HeroSection({lightBg, topLine, lightText, lightTextDesc, headLine, description, buttonLabel, img,
alt, imgStart}) {
    return (
        <>
            <div className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}>

                <div className="container">
                    <div className="row home__hero-row" style={{display: "flex", flexDirection: imgStart ==="start" ? "row-reverse" : "row" }}>
                        
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                                
                                <div className="top-line">
                                    {topLine}
                                </div>

                                <div className={lightText ? "heading" : "heading dark"}>
                                    {headLine}
                                </div>

                                <div className={lightTextDesc ? "home__hero-subtitle" : "home__hero-subtitle dark"}>
                                    {description}
                                </div>

                                <Link to="/sign-up">
                                    <Button buttonSize="btn--wide" buttonColor="blue" >
                                        {buttonLabel}
                                    </Button>
                                </Link>

                            </div>
                        </div>

                        <div className="col">
                            <div className="home__hero-img-wrapper">
                                <img src={img} alt={alt} className="home__hero-img"/>
                            </div>
                        </div>



                    </div>
                </div>

            </div>
        </>
    )
}

export default HeroSection
