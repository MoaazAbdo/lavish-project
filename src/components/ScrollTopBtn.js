import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa';
import "./ScrollTopBtn.css";

function ScrollTopBtn() {

    const [is_visible, setVisibility] = useState(false);

    useEffect( () => {
        document.addEventListener("scroll", toggleVisibility);
    }, []);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setVisibility(true);
            
        } else {
            setVisibility(false)
        }
    }

    const scrollTop = () => {
        window.scrollTo({
           top: 0,
           behavior: "smooth" 
        });
    }

    return (
        <>
            {
                is_visible && <i className="goTop" onClick={scrollTop}><FaArrowUp /> </i>
            }  
        </>
    )
}

export default ScrollTopBtn
