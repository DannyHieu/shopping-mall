import React from 'react';
import '../assets/css/Header.css'
// import logo from '../assets/images/logo.jpg'

function Header(props) {
    return (
        <div className='header-container'>
            <div className='wrapper-header'>
                <div><img id='logo' alt='logo' src='https://res.cloudinary.com/sport-store/image/upload/v1660537700/t%E1%BA%A3i_xu%E1%BB%91ng1_ccsvrc.jpg' /></div>
                <div className='wrapper-input-search'>
                    <form>
                        <input type="text" />
                        <button />
                    </form>

                </div>
                <div>
                    <div>cart</div>
                    <div>Login | Sign Up</div>
                </div>
            </div>

        </div>
    );
}

export default Header;
