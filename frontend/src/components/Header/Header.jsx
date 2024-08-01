import React from 'react'
import './Header.css'
import headerImage from '../../assets/header_img.png' // Adjusted the path

const Header = () => {
    return (
        <div className='header' style={{ backgroundImage: `url(${headerImage})` }}>
            <div className="header-contents">
                <h2>Your Food,</h2>
                <h2>Your Way,</h2>
                <h2>Anytime</h2>
                <p>At GatBite, your dining experience is as unique as you are. Whether you need a quick bite or a full meal, our diverse menu offers healthy and mouthwatering selections. Enjoy delicious, nutritious food your way, anytime, with the ultimate convenience of having it delivered right to your door.</p>
                <button>View Menu</button>
            </div>
        </div>
    )
}

export default Header
