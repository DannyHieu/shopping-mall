import React from 'react';
import '../assets/css/header.css'

function Header(props) {
    return (
        <div className='header-container'>

            <div className='wrapper-user'>
                <div className='icon-notifi'>
                    <img alt="" src={require("../assets/images/icon-notification.png")} />
                    <div>Notifications</div>
                </div>
                <div className='icon-notifi'>
                    <div className='icon-signup'>Sign Up</div>
                    <div> | </div>
                    <div className='icon-login'>Login</div>
                </div>
            </div>

            <div className='wrapper-header'>

                <div className='logo'>
                    <img alt='visa' src={require("../assets/images/logo.png")} />
                </div>

                <div className='search-bar'>
                    <div id='form'>
                        <form>
                            <input id='input-search' type="text" placeholder='Search item...' />
                        </form>
                    </div>
                    <button id='btn-search'>
                        <img alt="icon-cart" src={require("../assets/images/icon-search.png")} />
                    </button>
                </div>

                <div className='cart-account'>
                    <div className='card'>
                        <img alt="icon-cart" src={require("../assets/images/icon-cart.png")} />
                        <div id='icon-badge'>4</div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Header;
