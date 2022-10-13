import React from 'react';
import '../assets/css/footer.css'

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
                        <li><img alt='visa' src='https://res.cloudinary.com/sport-store/image/upload/v1665557291/shopping-app/payment-logistic/payment-visa_u4rcci.png' /></li>
                        <li><img alt='mastercard' src='https://res.cloudinary.com/sport-store/image/upload/v1665557291/shopping-app/payment-logistic/payment-mtc_hsoowc.png' /></li>
                        <li><img alt='jcbpay' src='https://res.cloudinary.com/sport-store/image/upload/v1665557291/shopping-app/payment-logistic/payment-jcb_zeq8us.png' /></li>
                        <li><img alt='shpeepay' src='https://res.cloudinary.com/sport-store/image/upload/v1665557291/shopping-app/payment-logistic/payment-spp_wobh0m.png' /></li>
                        <li><img alt='zalopay' src='https://res.cloudinary.com/sport-store/image/upload/v1665557291/shopping-app/payment-logistic/payment-zlp_xakdgl.png' /></li>
                    </ul>

                    <div className='title-text'>LOGISTIC</div>
                    <ul className='grid-auto-flow-row padding-text'>
                        <li><img alt='visa' src='https://res.cloudinary.com/sport-store/image/upload/v1665556963/shopping-app/payment-logistic/logistic-shopee_tmkacy.png' /></li>
                        <li><img alt='visa' src='https://res.cloudinary.com/sport-store/image/upload/v1665556962/shopping-app/payment-logistic/logistic-vtp_meczhb.png' /></li>
                        <li><img alt='visa' src='https://res.cloudinary.com/sport-store/image/upload/v1665556962/shopping-app/payment-logistic/logistic-ghn_acwnp5.png' /></li>
                        <li><img alt='visa' src='https://res.cloudinary.com/sport-store/image/upload/v1665556962/shopping-app/payment-logistic/logistic-vnp_oc9ybs.png' /></li>
                        <li><img alt='visa' src='https://res.cloudinary.com/sport-store/image/upload/v1665556962/shopping-app/payment-logistic/logistic-grap_ti4ae3.png' /></li>
                        <li><img alt='visa' src='https://res.cloudinary.com/sport-store/image/upload/v1665556962/shopping-app/payment-logistic/logistic-ghtk_exbahm.png' /></li>
                        <li><img alt='visa' src='https://res.cloudinary.com/sport-store/image/upload/v1665556962/shopping-app/payment-logistic/logistic-jt_jrm0bb.png' /></li>
                    </ul>
                </div>

                <div>
                    <div className='title-text'>FOLLOW US</div>
                    <div>
                        <ul className='padding-text'>
                            <li><div><img className='media' alt='visa' src='https://res.cloudinary.com/sport-store/image/upload/v1665559475/shopping-app/payment-logistic/media-fb_zoxp3m.png' />Facebook</div></li>
                            <li><div><img className='media' alt='visa' src='https://res.cloudinary.com/sport-store/image/upload/v1665559475/shopping-app/payment-logistic/media-istg_atld8l.png' />Instagram</div></li>
                            <li><div><img className='media' alt='visa' src='https://res.cloudinary.com/sport-store/image/upload/v1665559475/shopping-app/payment-logistic/media-in_objm8j.png' />LinkedIn</div></li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div className='title-text'>APP DOWNLOAD</div>
                    <ul className='padding-text'>
                        <li><div><img className='download' alt='visa' src='https://res.cloudinary.com/sport-store/image/upload/v1665560471/shopping-app/payment-logistic/download-appstore_uwv0rv.png' /></div></li>
                        <li><div><img className='download' alt='visa' src='https://res.cloudinary.com/sport-store/image/upload/v1665560098/shopping-app/payment-logistic/download-chplay_bays7z.png' /></div></li>
                    </ul>
                </div>
            </div>

            <div><p id='copyright'>@Copyright 2022 by HieuNX.</p></div>
        </div>
    );
}

export default Footer;