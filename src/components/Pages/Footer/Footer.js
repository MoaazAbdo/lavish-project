import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../Button'
import { MdFingerprint } from 'react-icons/md'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <div className="container">
                <section className='footer-subscription'>

                    <p className='footer-subscription-heading'>
                        Join our exclusive membership to receive the latest news and trends
                    </p>
                    
                    <p className='footer-subscription-text'>
                        You can unsubscribe at any time.
                    </p>
                
                    <div className='input-areas'>
                        <form>
                            <input  className='footer-input' name="email" type="email"
                            placeholder="Your Email" autoComplete="off"/>
                            <Button buttonStyle="btn--outline">Subscribe</Button>
                        </form>

                    </div>

                </section>

                <div className='footer-links'>
                    <div className='footer-link-wrapper'>

                        <div className='footer-link-items'>
                            <h2>About Us</h2>
                            <Link to='/sign-up'>How it works</Link>
                            <Link to='/services'>Testimonials</Link>
                            <Link to='/services'>Careers</Link>
                            <Link to='/services'>Investors</Link>
                            
                        </div>

                        <div className='footer-link-items'>
                            <h2>Contact Us</h2>
                            <Link to='/sign-up'>Contact</Link>
                            <Link to='/sign-up'>Support</Link>
                            <Link to='/sign-up'>Destinations</Link>
                            <Link to='/sign-up'>Sponsorships</Link>
                        </div>


                    </div>

                    <div className='footer-link-wrapper'>

                        <div className='footer-link-items'>
                            <h2>Videos</h2>
                            <Link to='/products'>Submit Video</Link>
                            <Link to='/products'>Ambassadors</Link>
                            <Link to='/products'>Agency</Link>
                            <Link to='/products'>Influencer</Link>
                        </div>

                        <div className='footer-link-items'>
                            <h2>Social Media</h2>
                            <Link to={'//www.instgram.com/'} target="_blank">Instagram</Link>
                            <Link to={'//www.facebook.com/'} target="_blank">Facebook</Link>
                            <Link to={'//www.youtube.com/'} target="_blank">Youtube</Link>
                            <Link to={'//www.twitter.com/'} target="_blank">Twitter</Link>
                        </div>

                    </div>



                </div>

                <section className='social-media'>
                    <div className='social-media-wrap'>
                        <div className='footer-logo'>
                            <Link to='/lavish-project' className='social-logo'>
                            <MdFingerprint className='navbar-icon' />
                            LAVISH
                            </Link>
                        </div>
                       
                        <div className='social-icons'>
                            <Link className='social-icon-link' to={'//www.facebook.com/'} target='_blank' aria-label='Facebook'>
                                <FaFacebook />
                            </Link>

                            <Link className='social-icon-link' to={'//www.instgram.com/'} target='_blank' aria-label='Instagram'>
                                <FaInstagram />
                            </Link>

                            <Link className='social-icon-link' to={'//www.youtube.com/'} target='_blank' aria-label='Youtube'>
                                <FaYoutube />
                            </Link>

                            <Link className='social-icon-link' to={'//www.twitter.com/'} target='_blank' aria-label='Twitter'>
                                <FaTwitter />
                            </Link>

                            <Link
                            className='social-icon-link' to={'//www.linkedin.com/'} target='_blank' aria-label='LinkedIn'>
                                <FaLinkedin />
                            </Link>

                        </div>
                    </div>
                </section>

            
            </div>
        </div>
    )
}

export default Footer
