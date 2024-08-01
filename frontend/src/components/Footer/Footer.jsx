import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" className="logo" />
                    <p>Experience the best in food delivery with GatBite. Enjoy the convenience of ordering from the comfort of your home, and let us deliver a unique dining experience tailored to your taste.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+639-7503-31659</li>
                        <li>contact@gatbite.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">© 2024 GatBite. All Rights Reserved.</p>
        </div>
    )
}

export default Footer