import React, {useState, useEffect} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Button } from './Button'


function Navbar() {
    const [show, setShow] = useState(false)
    const [button, setButton] = useState(true)

    const handleShow = () => {
        setShow(!show)
    }

    const closeMobileMenu = () => {
        setShow(false)
    }
    
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect( () => {
        showButton()
    }, [] )
    
    window.addEventListener('resize',showButton)
    
    return (
        <>
        <IconContext.Provider value={{ color: "#fff" }}>
            <div className="navbar">
                <div className="navbar-container container">

                    <Link to="/lavish-project" className="navbar-logo" onClick={closeMobileMenu}>
                        <MdFingerprint className="navbar-icon" />
                        LAVISH
                    </Link>

                    <div className="menu-icon" onClick={handleShow}>
                        {show ? <FaTimes /> : <FaBars />}
                    </div>
                    
                    <ul className={show ? "nav-menu active" : "nav-menu"}>
                        
                        <li className="nav-item">
                            <Link to="/lavish-project" className="nav-links" onClick={closeMobileMenu}>Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>Services</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/products" className="nav-links" onClick={closeMobileMenu}>Products</Link>
                        </li>

                        <li className="nav-btn">
                            {
                                button ? (
                                <Link to="/sign-up" className="btn-link" > 
                                    <Button buttonStyle="btn--outline">SIGN UP </Button>
                                </Link>
                                ) : (
                                <Link to="/sign-up" className="btn-link" > 
                                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile" onClick={closeMobileMenu}>SIGN UP </Button>
                                </Link>
                                )
                            }
                            
                        </li>

                    </ul>
                   
                </div>
            </div>
        </IconContext.Provider>
        </>
    )
}

export default Navbar