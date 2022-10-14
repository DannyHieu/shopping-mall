import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../assets/css/productdetail.css'
import ProductDetailContainer from '../components/ProductDetailContainer';

function ProductDetail(props) {
    return (
        <div className='container'>
            <Header />
            <ProductDetailContainer />
            <div id='line' />
            <Footer />
        </div>
    );
}

export default ProductDetail;