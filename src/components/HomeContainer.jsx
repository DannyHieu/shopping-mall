import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/homecontainer.css'

const HomeContainer = (props) => {
    const [dataCate, setDataCate] = useState([]);
    const [dataProduct, setDataProduct] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/category/get-all")
            .then((response) => {
                setDataCate(response.data);
            })
    }, []);

    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/product/get-all")
            .then((response) => {
                setDataProduct(response.data);
            })
    }, []);

    const goToListProductByCate = (cate) => {
        <Link to={"category"} />
    }

    const goToProductDetail = (product) => {
        alert(product.productName);
    }


    return (
        <div className='main-container'>
            <div className='wrapper-container'>

                <div id='wrapper-banner'>
                    <div id='banner-slider'>

                    </div>
                    <div id='banner'>

                    </div>
                </div>

                <div id='wrapper-category'>
                    <p style={{ color: "grey" }}>CATEGORIES</p>
                    <div id='grid-category'>
                        {
                            dataCate.map((cate) =>
                                <Link to={"category"} className='one-item-category' key={cate.cateId} onClick={() => goToListProductByCate(cate)} >
                                    <img alt='item' src={cate.cateImg} />
                                    <p>{cate.cateName}</p>
                                </Link>
                            )
                        }
                    </div>
                </div>

                <div id='wrapper-product-list'>
                    <p>DAILY DISCOVERY</p>
                    <div id='line' />
                    <div className='content-product-list'>
                        {
                            dataProduct.map(product =>
                                <div className='one-item-product' key={product.productId} onClick={() => goToProductDetail(product)}>
                                    <img alt='product-img' src={product.productImg} />
                                    <div id='content-product'>
                                        <div id='product-title'>{product.productName}</div>
                                        <div id='product-price'>đ {product.productPrice}</div>
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

export default HomeContainer;


// const productList = [
//     {
//         product_id: 1,
//         product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
//         product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
//         product_price: 25000,
//         product_sale: 50
//     },
//     {
//         product_id: 2,
//         product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
//         product_img: "https://res.cloudinary.com/sport-store/image/upload/v1661409679/hloczn5kkh9jb9hu5ncm.jpg",
//         product_price: 25000,
//         product_sale: 50
//     },
//     {
//         product_id: 3,
//         product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
//         product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
//         product_price: 25000,
//         product_sale: 50
//     },
//     {
//         product_id: 4,
//         product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
//         product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
//         product_price: 25000,
//         product_sale: 50
//     },
//     {
//         product_id: 5,
//         product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
//         product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
//         product_price: 25000,
//         product_sale: 50
//     },
//     {
//         product_id: 6,
//         product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
//         product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
//         product_price: 25000,
//         product_sale: 50
//     },
//     {
//         product_id: 7,
//         product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
//         product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
//         product_price: 25000,
//         product_sale: 50
//     },
//     {
//         product_id: 8,
//         product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
//         product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
//         product_price: 25000,
//         product_sale: 50
//     },
//     {
//         product_id: 9,
//         product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
//         product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
//         product_price: 25000,
//         product_sale: 50
//     },
//     {
//         product_id: 10,
//         product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
//         product_img: "https://res.cloudinary.com/sport-store/image/upload/v1661409679/hloczn5kkh9jb9hu5ncm.jpg",
//         product_price: 25000,
//         product_sale: 50
//     },
//     {
//         product_id: 11,
//         product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
//         product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
//         product_price: 25000,
//         product_sale: 50
//     },
//     {
//         product_id: 12,
//         product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
//         product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
//         product_price: 25000,
//         product_sale: 50
//     },
//     {
//         product_id: 13,
//         product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
//         product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
//         product_price: 25000,
//         product_sale: 50
//     },
//     {
//         product_id: 14,
//         product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
//         product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
//         product_price: 25000,
//         product_sale: 50
//     },
//     {
//         product_id: 15,
//         product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
//         product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
//         product_price: 25000,
//         product_sale: 50
//     },
//     {
//         product_id: 16,
//         product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
//         product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
//         product_price: 25000,
//         product_sale: 50
//     },
//     {
//         product_id: 17,
//         product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
//         product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
//         product_price: 25000,
//         product_sale: 50
//     },
//     {
//         product_id: 18,
//         product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
//         product_img: "https://res.cloudinary.com/sport-store/image/upload/v1661409679/hloczn5kkh9jb9hu5ncm.jpg",
//         product_price: 25000,
//         product_sale: 50
//     },
//     {
//         product_id: 19,
//         product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
//         product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
//         product_price: 25000,
//         product_sale: 50
//     },
//     {
//         product_id: 20,
//         product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
//         product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
//         product_price: 25000,
//         product_sale: 50
//     },
//     {
//         product_id: 21,
//         product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
//         product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
//         product_price: 25000,
//         product_sale: 50
//     },
//     {
//         product_id: 22,
//         product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
//         product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
//         product_price: 25000,
//         product_sale: 50
//     },
//     {
//         product_id: 23,
//         product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
//         product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
//         product_price: 25000,
//         product_sale: 50
//     },
//     {
//         product_id: 24,
//         product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
//         product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
//         product_price: 25000,
//         product_sale: 50
//     },
//     {
//         product_id: 25,
//         product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
//         product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
//         product_price: 25000,
//         product_sale: 50
//     },
//     {
//         product_id: 26,
//         product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
//         product_img: "https://res.cloudinary.com/sport-store/image/upload/v1661409679/hloczn5kkh9jb9hu5ncm.jpg",
//         product_price: 25000,
//         product_sale: 50
//     },
//     {
//         product_id: 27,
//         product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
//         product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
//         product_price: 25000,
//         product_sale: 50
//     },
//     {
//         product_id: 28,
//         product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
//         product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
//         product_price: 25000,
//         product_sale: 50
//     },
//     {
//         product_id: 29,
//         product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
//         product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
//         product_price: 25000,
//         product_sale: 50
//     },
//     {
//         product_id: 30,
//         product_name: "Áo phông tay lỡ nam nữ Unisex TS02,Áo thun Form rộng basic Oversize cổ tròn chất cotton style Hàn Quốc",
//         product_img: "https://res.cloudinary.com/sport-store/image/upload/v1660537701/t%E1%BA%A3i_xu%E1%BB%91ng10_idqdbm.jpg",
//         product_price: 25000,
//         product_sale: 50
//     },
// ];

