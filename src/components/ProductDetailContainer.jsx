import React from 'react';
import '../assets/css/productdetailcontainer.css'

function ProductDetailContainer(props) {
    return (
        <div className='main-container'>
            <div className='wrapper-container'>
                <div id='wrapper-product-detail'></div>
                <div id='wrapper-shop'></div>
                <div id='wrapper-product-specification'></div>
                <div id='wrapper-description'></div>
                <div id='wrapper-rating'></div>
            </div>
        </div>
    );
}

export default ProductDetailContainer;