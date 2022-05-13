import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

const FooterBanner = () => {
    return (
        <div className="footer-container">
            <p> 2022 Steelseries All right reserverd</p>
            <p className="icons">
                <AiFillInstagram />
                <AiOutlineTwitter />
            </p>
        </div>
    )
}

export default FooterBanner