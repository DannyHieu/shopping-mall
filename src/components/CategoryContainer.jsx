import React from 'react';
import '../assets/css/categorycontainer.css';
import SlideShow from './SlideShow';

const data = [
    'https://res.cloudinary.com/sport-store/image/upload/v1665564289/shopping-app/category/men-clothes_ann8tr.png',
    'https://res.cloudinary.com/sport-store/image/upload/v1665564289/shopping-app/category/men-clothes_ann8tr.png',
    'https://res.cloudinary.com/sport-store/image/upload/v1665564289/shopping-app/category/men-clothes_ann8tr.png',
    'https://res.cloudinary.com/sport-store/image/upload/v1665564289/shopping-app/category/men-clothes_ann8tr.png'
]

const CategoryContainer = (props) => {
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
                            productList.map(product =>
                                <div className='one-item-product' key={product.product_id}>
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

const productList = [
    {
        product_id: 1,
        product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
        product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
        product_price: 25000,
        product_sale: 50
    },
    {
        product_id: 2,
        product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
        product_img: "https://res.cloudinary.com/sport-store/image/upload/v1661409679/hloczn5kkh9jb9hu5ncm.jpg",
        product_price: 25000,
        product_sale: 50
    },
    {
        product_id: 3,
        product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
        product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
        product_price: 25000,
        product_sale: 50
    },
    {
        product_id: 4,
        product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
        product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
        product_price: 25000,
        product_sale: 50
    },
    {
        product_id: 5,
        product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
        product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
        product_price: 25000,
        product_sale: 50
    },
    {
        product_id: 6,
        product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
        product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
        product_price: 25000,
        product_sale: 50
    },
    {
        product_id: 7,
        product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
        product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
        product_price: 25000,
        product_sale: 50
    },
];