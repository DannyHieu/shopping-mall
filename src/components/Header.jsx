import React from 'react';
import '../assets/css/Header.css'
// import logo from '../assets/images/logo.jpg'

function Header(props) {
    return (
        <div className='header-container'>
            <div>Logo</div>
            <div className='wrapper-input-search'>
                <form>
                    <input type="text" />
                </form>
                <button />
            </div>
            <div>
                <div>cart</div>
                <div>Login | Sign Up</div>
            </div>
        </div>
    );
}

export default Header;
