import React from 'react';
import '../assets/css/Footer.css'

function Footer(props) {
    return (
        <div className='footer-container'>
            <div className='footer-wrapper-content'>
                <div>
                    <div className='title-text'>ABOUT ME</div>
                    <ul className='padding-text'>
                        <li>About us</li>
                        <li>Careers</li>
                        <li>Polices</li>
                        <li>Mall</li>
                        <li>Media Contact</li>
                    </ul>
                </div>

                <div>
                    <div className='title-text'>PAYMENT</div>
                    <ul className='grid-auto-flow-row padding-text'>
                        <li>About us</li>
                        <li>Careers</li>
                        <li>Polices</li>
                        <li>Mall</li>
                        <li>Media Contact</li>
                        <li>About us</li>
                        <li>Careers</li>
                        <li>Polices</li>
                        <li>Mall</li>
                        <li>Media Contact</li>
                    </ul>

                    <div className='title-text'>LOGISTIC</div>
                    <ul className='grid-auto-flow-row padding-text'>
                        <li>About us</li>
                        <li>Careers</li>
                        <li>Polices</li>
                        <li>Mall</li>
                        <li>Media Contact</li>
                    </ul>
                </div>

                <div>
                    <div className='title-text'>FOLLOW US</div>
                    <div>
                        <ul className='padding-text'>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div className='title-text'>APP DOWNLOAD</div>
                    <ul className='padding-text'>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
            </div>

            <div><p id='copyright'>@Copyright 2022 by HieuNX.</p></div>
        </div>
    );
}

export default Footer;