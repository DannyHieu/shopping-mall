import React from 'react';
import '../assets/css/categorycontainer.css';
import SlideShow from './SlideShow';

const data = [
    'https://res.cloudinary.com/sport-store/image/upload/v1665564289/shopping-app/category/men-clothes_ann8tr.png',
    'https://res.cloudinary.com/sport-store/image/upload/v1665564289/shopping-app/category/men-clothes_ann8tr.png',
    'https://res.cloudinary.com/sport-store/image/upload/v1665564289/shopping-app/category/men-clothes_ann8tr.png',
    'https://res.cloudinary.com/sport-store/image/upload/v1665564289/shopping-app/category/men-clothes_ann8tr.png'
]

function CategoryContainer(props) {
    return (
        <div className='main-container'>
            <div className='wrapper-container'>
                <div id='banner-slideshow'>
                    <SlideShow listImg={data} />
                </div>
                <div id='wrapper-brands-list'>
                    List Brand
                </div>
                <div id='wrapper-content'>
                    <div id='side-bar'>

                    </div>

                    <div id='product-list'>
                        {
                            props.productList.map(product =>
                                <div className='one-item-product'>
                                    <img alt='product-img' src={product.product_img} />
                                    <div id='content-product'>
                                        <div id='product-title'>{product.product_name}</div>
                                        <div id='product-price'>đ {product.product_price}</div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryContainer;